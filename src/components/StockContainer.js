import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock, sortedBy, filter }) {
  //console.log(stocks);
  if (sortedBy === "Alphabetically") {
    //console.log("ABC");
    stocks.sort((a, b) => a.name.localeCompare(b.name));
  }
  if(sortedBy === "Price") {
    //console.log("123");
    stocks.sort((a, b) => a.price - b.price);
  }

  const stocksToDisplay = stocks.filter((stock) => {
    if (filter === "All") return true;

    return stock.type === filter;
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => (
        <Stock key={stock.name} stock={stock} buyStock={buyStock}/>
      ))}
    </div>
  );
}

export default StockContainer;
