import axios from "axios";
import { useQuery } from "react-query";

const handleFetch = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const Refetch = () => {
  const { isLoading, data, refetch, isFetching } = useQuery(
    "refresh-users",
    handleFetch,
    {
      enabled: false
    }
  );
  console.log(`Loading - ${isLoading}, Fetching - ${isFetching}`);
  if (isLoading || isFetching) return <h1>Loading...</h1>;
  return (
    <>
      <button onClick={refetch}>Fetch</button>
      <ul>
        {data?.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
export default Refetch;
