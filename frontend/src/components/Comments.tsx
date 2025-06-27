import React from "react";

const Comments = () => {
  const tickers = [
    { ticker: "VTI", detail: "Vanguard Total Stock Market" },
    { ticker: "XLF", detail: "Financial Select Sector SPDR Fund" },
    { ticker: "XLE", detail: "Energy Select Sector SPDR Fund" },
    { ticker: "XLK", detail: "Technology Select Sector SPDR Fund" },
    { ticker: "XLU", detail: "Utilities Select Sector SPDR Fund" },
    { ticker: "EWJ", detail: "iShares MSCI Japan ETF" },
    { ticker: "FTSE100", detail: "FTSE 100 Index" },
    {
      ticker: "DXY",
      detail: "US Dollar Index (US Dollar vs. basket of foreign currencies",
    },
    { ticker: "TIP", detail: "Treasury Inflation-Protected Securities" },
    { ticker: "SCHP", detail: "Schwab U.S. TIPS ETF" },
    { ticker: "EEM", detail: "iShares MSCI Emerging Markets ETF" },
    { ticker: "SPY", detail: "SPDR S&P 500 ETF Trust" },
    { ticker: "VOO", detail: "Vanguard S&P 500 ETF" },
    { ticker: "CCI30", detail: "CCI30 Currency index" },
    { ticker: "FXI", detail: "iShares China Large-Cap ETF" },
    { ticker: "SLV", detail: "iShares Silver Trust" },
    { ticker: "DIA", detail: "Dow Jones Industrial Average ETF" },
    { ticker: "UNG", detail: "United States Natural Gas Fund" },
    { ticker: "TLT", detail: "iShares 20+ Year Treasury Bond ETF" },
    { ticker: "IWM", detail: "iShares Russell 2000 ETF (small-cap)" },
    { ticker: "QQQ", detail: "Invesco QQQ Trust (NASDAQ 100 index)" },
    { ticker: "USO", detail: "United States Oil Fund" },
    { ticker: "SH", detail: "ProShares Short S&P500" },
    { ticker: "RWM", detail: "ProShares Short Russell2000" },
    { ticker: "PSQ", detail: "ProShares Short QQQ" },
    { ticker: "AGG", detail: "iShares Core U.S. Aggregate Bond ETF" },
    { ticker: "DOG", detail: "ProShares Short Dow30" },
    { ticker: "EWA", detail: "iShares MSCI Australia ETF" },
    {
      ticker: "EFA",
      detail:
        "iShares MSCI EAFE ETF (large and mid-cap developed market equities, exluding the U.S. and Canada)",
    },
    { ticker: "IJH", detail: "iShares Core S&P Mid-Cap ETF" },
    { ticker: "", detail: "Apple Inc." },
    { ticker: "AAPL", detail: "Apple Inc." },
    { ticker: "AAPL", detail: "Apple Inc." },
    { ticker: "AAPL", detail: "Apple Inc." },
  ];

  const comments = [
    { comment: "VIX calls - long volatility" },
    {
      comment:
        "ISM Manufacturing Index - leading indicator for economic activity",
    },
    { comment: "M2 money supply" },
    { comment: "Housing starts" },
    { comment: "Consumer confidence survey" },
    {
      comment:
        "Retail stocks (diffusion or concentration of good/bad performers)",
    },
  ];

  return (
    <div>
      <h1>Comments</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Ticker</th>
            <th className="text-left">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Great article!</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>Very informative.</td>
            <td>Jane Smith</td>
            <td>2023-10-02</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
