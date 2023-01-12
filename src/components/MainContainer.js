import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [sortedBy, setSortedBy] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks));
  }, [])

  let updatedStock = [];
  function buyStock(newPortfolioStock) {
    if (portfolioStocks.includes(newPortfolioStock)) {
      //console.log("too many: ", newPortfolioStock);
      updatedStock = portfolioStocks.filter((stock) => stock.name !== newPortfolioStock.name);
    } else {
      updatedStock = ([...portfolioStocks, newPortfolioStock]);
    }
    setPortfolioStocks(updatedStock);
  }

  function handleSortChange(sorter) {
    setSortedBy(sorter);
  }
  
  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }
  //console.log(filter);

  return (
    <div>
      <SearchBar onSortChange={handleSortChange} onFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock} sortedBy={sortedBy} filter={filter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} buyStock={buyStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
