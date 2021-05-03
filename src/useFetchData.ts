import { useState } from "react";
import apiData from "./api";
import { TPerson } from "./PersonInfo";

type TReturn = {
  data: TPerson[];
  loading: boolean;
  error: string;
  fetchData: () => Promise<void>;
};

const useFetchData = (): TReturn => {
  const [data, setData] = useState<TPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    error && setError("");
    try {
      const fetchedData = await apiData();
      setData([...data, ...fetchedData]);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { data, loading, error, fetchData };
};

export default useFetchData;
