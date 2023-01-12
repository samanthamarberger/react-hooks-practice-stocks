import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, buyStock }) {
  //console.log(portfolioStocks);
  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioStocks.map((stock) => (
          <Stock key={stock.name} stock={stock} buyStock={buyStock}/>
        ))}
    </div>
  );
}

export default PortfolioContainer;
