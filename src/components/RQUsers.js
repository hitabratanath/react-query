import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const RQUsers = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "my-users",
    fetchUsers
  );
  if (isError) return <h2>{error.message}</h2>;
  console.log("Loading " + isLoading + "fetching " + isFetching);
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {data?.data.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </>
  );
};
export default RQUsers;
