import axios from "axios";
import { useQuery } from "react-query";

const handleFetch = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const onSuccess = () => {
  return <h1>Success</h1>;
};
const onError = () => {
  console.log("error side effects");
};
const FetchSideEffects = () => {
  const { isLoading, data, refetch, isFetching } = useQuery(
    "fetch-side-effects",
    handleFetch,
    {
      enabled: false,
      onSuccess,
      onError
    }
  );
  if (isLoading || isFetching) return <h1>Loading...</h1>;
  return (
    <>
      <button onClick={refetch}>Fetch</button>
      {onSuccess}
      <ul>
        {data?.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
export default FetchSideEffects;
