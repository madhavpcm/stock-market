/* eslint-disable import/prefer-default-export */
import React from 'react'
import getConfig from 'next/config';
const request = require('request');


const { publicRuntimeConfig } = getConfig();
const { AV_API_KEY } = publicRuntimeConfig;

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
export const fetchIntraDay5min = symbol =>
  `${AlphaVantageUrl}${RequestType.TIME_SERIES_INTRADAY}&symbol=${symbol}&interval=5min&apikey=${AV_API_KEY}`;

export const getLastTwoDays = symbol =>
  `${AlphaVantageUrl}${RequestType.TIME_SERIES_DAILY}&symbol=${symbol}&outputsize=2&apikey=${AV_API_KEY}`;

//
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })

  const symbols = ["IBM", "MSFT", "APPL"]
};

function fetchNewData(symbol) {

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

        var result = {
          "Name": "",
          "Symbol": "",
          "Stocks": [],
        };
        var stockprices = [];
        var j = data['Time Series (Daily)'];
        var k = 0;
        for (var i in j) {
          if (k >= 2)
            break;
          stockprices.push(j[i]['1. open']);
          k = k + 1;
        }
        result['Symbol'] = symbol;
        result['Stocks'] = stockprices;
        resolve(result);
      }
    });
  })
}

async function printer() {
  var ter = await fetchNewData('MSFT');
}

printer();