import React, { useState, useCallback } from "react";
import PersonInfo, { TPerson } from "./PersonInfo";
import Loader from "./Loader";
import useFetchData from "./useFetchData";

function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const { data, loading, error, fetchData } = useFetchData();

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
        {[...data]
          .sort((person: TPerson, _: TPerson) =>
            selected.includes(person.id) ? -1 : 1
          )
          .map((personInfo) => (
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
      <button onClick={fetchData} disabled={loading} className="load-more-btn">
        LOAD MORE
      </button>
    </div>
  );
}

export default App;
