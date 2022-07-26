import React, { useState, useEffect } from "react";
import axios from "axios";
function Affichage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>API Rest</h1>
      {data.map((item) =>
        item.userId === 1 && item.completed === true ? (
          <div>
            <input type="checkbox" id="tacheFait" checked />
            <label for="tache">{item.title}</label>
          </div>
        ) : item.userId === 1 && item.completed === false ? (
          <div>
            <input type="checkbox" id="tacheNonFait" />
            <label for="tache">{item.title}</label>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
export default Affichage;
