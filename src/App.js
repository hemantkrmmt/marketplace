import { useState, useEffect } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Marketplace from "./Components/Marketplace";

function App() {
  const initialCategories = [
    "category1",
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
  ];
  const [categories, setCategories] = useState(initialCategories);
  const [checkboxData, setCheckboxData] = useState([]);
  useEffect(() => {
    fetch("https://demo2235712.mockable.io/marketplace")
      .then(res => res.json())
      .then(resJson => {
        setCheckboxData(resJson.data);
      })
      .catch(e => {
        setCheckboxData([]);
        console.log("error", e);
      });
  }, []);

  return (
    <div className="App">
      <Categories categories={categories} />
      <Marketplace checkboxData={checkboxData} />
    </div>
  );
}

export default App;
