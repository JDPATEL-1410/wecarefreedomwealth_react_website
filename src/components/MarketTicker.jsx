import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MarketTicker = () => {
    const [marketData, setMarketData] = useState([]);

    // Fetch live market data
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                // Using Yahoo Finance API alternative - we'll fetch major Indian indices
                const symbols = [
                    { symbol: '^NSEI', name: 'NIFTY 50' },
                    { symbol: '^NSEBANK', name: 'NIFTY BANK' },
                    { symbol: '^BSESN', name: 'SENSEX' },
                    { symbol: 'RELIANCE.NS', name: 'RELIANCE' },
                    { symbol: 'TCS.NS', name: 'TCS' },
                    { symbol: 'INFY.NS', name: 'INFOSYS' },
                    { symbol: 'HDFCBANK.NS', name: 'HDFC BANK' },
                    { symbol: 'ICICIBANK.NS', name: 'ICICI BANK' },
                    { symbol: 'SBIN.NS', name: 'SBI' },
                    { symbol: 'BAJFINANCE.NS', name: 'BAJAJ FINANCE' }
                ];

                // Fetch data from Yahoo Finance API
                const promises = symbols.map(async (item) => {
                    try {
                        const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${item.symbol}?interval=1d&range=1d`;
                        const response = await fetch(
                            `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`
                        );
                        const data = await response.json();

                        if (data.chart && data.chart.result && data.chart.result[0]) {
                            const result = data.chart.result[0];
                            const meta = result.meta;
                            const currentPrice = meta.regularMarketPrice;
                            const previousClose = meta.chartPreviousClose || meta.previousClose;
                            const change = currentPrice - previousClose;
                            const changePercent = (change / previousClose) * 100;

                            return {
                                name: item.name,
                                symbol: item.symbol,
                                price: currentPrice.toFixed(2),
                                change: change.toFixed(2),
                                changePercent: changePercent.toFixed(2),
                                isPositive: change >= 0
                            };
                        }
                        return null;
                    } catch (error) {
                        console.error(`Error fetching ${item.symbol}:`, error);
                        return null;
                    }
                });

                const results = await Promise.all(promises);
                const validData = results.filter(item => item !== null);

                if (validData.length > 0) {
                    setMarketData(validData);
                }
            } catch (error) {
                console.error('Error fetching market data:', error);
            }
        };

        fetchMarketData();

        // Refresh data every 60 seconds
        const interval = setInterval(fetchMarketData, 60000);

        return () => clearInterval(interval);
    }, []);

    // Fallback data in case API fails
    const fallbackData = [
        { name: 'NIFTY 50', price: '25068.10', change: '-5.56', changePercent: '-0.02', isPositive: false },
        { name: 'NIFTY BANK', price: '52068.75', change: '+145.30', changePercent: '+0.28', isPositive: true },
        { name: 'SENSEX', price: '82068.80', change: '-12.45', changePercent: '-0.02', isPositive: false },
        { name: 'GOLD (₹)', price: '71413', change: '+89.00', changePercent: '+0.12', isPositive: true },
        { name: 'RELIANCE', price: '1413.50', change: '-3.81', changePercent: '-0.27', isPositive: false },
        { name: 'TCS', price: '4068.25', change: '+12.30', changePercent: '+0.30', isPositive: true },
        { name: 'INFOSYS', price: '1968.40', change: '+8.65', changePercent: '+0.44', isPositive: true },
        { name: 'HDFC BANK', price: '1768.90', change: '-5.20', changePercent: '-0.29', isPositive: false }
    ];

    const displayData = marketData.length > 0 ? marketData : fallbackData;

    return (
        <div className="w-full fixed top-0 left-0 right-0 bg-black border-b-2 border-gray-800 overflow-hidden z-[100002]">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="relative overflow-hidden py-2">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: "-50%"
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                    }}
                >
                    {/* Duplicate the data for seamless loop */}
                    {[...displayData, ...displayData].map((item, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center px-6 border-r border-gray-700"
                        >
                            <span className="text-white font-semibold text-sm mr-3">
                                {item.name}
                            </span>
                            <span className="text-white text-sm mr-2">
                                ₹{item.price}
                            </span>
                            <span
                                className={`text-sm font-medium ${item.isPositive ? 'text-green-400' : 'text-red-400'
                                    }`}
                            >
                                {item.isPositive ? '▲' : '▼'} {Math.abs(item.change)} ({item.changePercent}%)
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Live indicator */}
            <div className="absolute top-2 right-4 flex items-center z-20">
                <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <span className="ml-2 text-xs text-gray-400 font-medium">LIVE</span>
            </div>
        </div>
    );
};

export default MarketTicker;
