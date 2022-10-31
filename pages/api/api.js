/* eslint-disable import/prefer-default-export */
import React from 'react'
import getConfig from 'next/config';
import { list } from 'postcss';

const request = require('request');
const fs = require('fs');
const fastCsv = require('fast-csv');
var listings = [];

const { publicRuntimeConfig } = getConfig();
const { AV_API_KEY } = publicRuntimeConfig;

const fastCsvOptions = {
  objectMode: true,
  delimiter: ';',
  quote: null,
  headers: true,
  renameHeaders: false,
}

const RequestType = {
  GLOBAL_QUOTE: 'GLOBAL_QUOTE',
  TIME_SERIES_DAILY: 'TIME_SERIES_DAILY',
  TIME_SERIES_INTRADAY: 'TIME_SERIES_INTRADAY'
};

const {
  BATCH_STOCK_QUOTES,
  GLOBAL_QUOTE,
  TIME_SERIES_DAILY,
} = RequestType;

const BASE_URL = 'https://www.alphavantage.co';

const AlphaVantageUrl = `${BASE_URL}/query?function=`;

/**
 * Global Quote - for dow jones
 * @param {string} symbol - single stock ticker string
 */
export const globalQuote = symbol =>
  `${AlphaVantageUrl}${GLOBAL_QUOTE}&symbol=${symbol}&apikey=${AV_API_KEY}`;


/**
 * Time Series - Daily
 * 
  @param {string} ticker
 */
export const fetchTimeSeriesDaily = symbol =>
  `${AlphaVantageUrl}${TIME_SERIES_DAILY}&symbol=${symbol}&apikey=${AV_API_KEY}`;


/**
 * Time Series - Daily
 * 
  @param {string} ticker
 */
export const getTodays1min = symbol =>
  `${AlphaVantageUrl}${RequestType.TIME_SERIES_INTRADAY}&symbol=${symbol}&interval=1min&apikey=${AV_API_KEY}`;

export const getLastTwoDays = symbol =>
  `${AlphaVantageUrl}${RequestType.TIME_SERIES_DAILY}&symbol=${symbol}&outputsize=2&apikey=${AV_API_KEY}`;

//
export default function handler(req, res) {
  initListings();
  const symbols = ["IBM", "MSFT", "APPL"];
};

function initListings() {
  listings = [];
  fs.createReadStream("assets/data/listings.csv")
    .pipe(fastCsv.parse(fastCsvOptions))
    .on("error", (error) => {
      console.log(error);
    })
    .on("data", (row) => {
      listings.push(row['symbol,name,exchange,assetType,ipoDate,delistingDate,status'].split(','));
    })
    .on("end", (rowCount) => {
      console.log(listings.length);
    });
}

function todaysLatest(symbol) {

  return new Promise((resolve, reject) => {
    var stockurl = getTodays1min(symbol);
    request.get({
      url: stockurl,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
      if (err) {
        reject(err);
      } else if (res.statusCode !== 200) {
        reject(res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        var stockname = '';

        var result = {
          "Name": "",
          "Symbol": "",
          "Price": [],
        };
        var stockprices = data['Time Series (1min)'];
        var stocki = Object.keys(stockprices)[0];
        //console.log(stockprices[stocki]);
        var k = 0;
        var i;
        for (i in listings) {
          if (listings[i][0] == symbol) {
            result['Name'] = listings[i][1];
            break;
          }
        }
        result['Symbol'] = symbol;
        result['Price'] = stockprices[stocki]['1. open'];
        resolve(result);
      }
    });
  })
}

function yesterdaysClosing(symbol) {

  return new Promise((resolve, reject) => {
    var stockurl = getLastTwoDays(symbol);
    request.get({
      url: stockurl,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
      if (err) {
        reject(err);
      } else if (res.statusCode !== 200) {
        reject(res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        var stockname = '';

        var result = {
          "Name": "",
          "Symbol": "",
          "Price": [],
        };
        var stockprices = [];
        var j = data['Time Series (Daily)'];
        var k = 0;
        for (var i in j) {
          if (k == 1) {
            stockprices.push(j[i]['4. close']);
            break;
          }
          k = k + 1;
        }
        for (i in listings) {
          if (listings[i][0] == symbol) {
            result['Name'] = listings[i][1];
            break;
          }
        }
        result['Symbol'] = symbol;
        result['Price'] = stockprices;
        resolve(result);
      }
    });
  })
}

async function printer() {
  var per = await yesterdaysClosing('MSFT');
  console.log(per);
  var ter = await todaysLatest('MSFT');
  console.log(ter);
}
printer();