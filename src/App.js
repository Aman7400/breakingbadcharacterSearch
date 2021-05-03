import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <Characters loading={isLoading} items={items} />
    </div>
  );
}

export default App;
