import { useEffect, useState } from "react";

type StateType<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T>(url: string): StateType<T> => {
  const [state, setState] = useState<StateType<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Fail fetching");
        }

        const responseData = await response.json();

        setState({
          data: responseData,
          loading: false,
          error: null,
        });
        // setData(responseData);
      } catch (error) {
        let errorMessage = "Unknown error occurred";

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        setState({
          data: null,
          loading: false,
          error: errorMessage,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
