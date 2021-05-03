import React, { useState, useCallback } from "react";
import apiData from "./api";
import PersonInfo, { TPerson } from "./PersonInfo";
import Loader from "./Loader";

function App() {
  const [data, setData] = useState<TPerson[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    error && setError("");
    try {
      const fetchedData = await apiData();
      setData([...data, ...fetchedData]);
      if (!fetchedData.length) setDisabledBtn(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const onPersonSelect = useCallback(
    (personId: string, isSelected: boolean) => {
      setSelected((selected) =>
        isSelected
          ? selected.filter((id) => id !== personId)
          : [...selected, personId]
      );
    },
    []
  );

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          <PersonInfo
            key={personInfo.id}
            person={personInfo}
            onSelect={onPersonSelect}
            selected={selected.includes(personInfo.id)}
          />
        ))}
      </div>
      {loading && <Loader />}
      {error && (
        <div className="error-info">
          <p>{error}.</p>
          <p> Please try again.</p>
        </div>
      )}
      <button
        onClick={fetchData}
        disabled={disabledBtn}
        className="load-more-btn"
      >
        LOAD MORE
      </button>
    </div>
  );
}

export default App;
