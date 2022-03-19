import axios from "axios";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
const handleFetch = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const activeStyle = ({ isActive }) => {
  return {
    textDecoration: "none"
  };
};
const AllUsers = () => {
  const { data, isLoading, refetch, isFetching } = useQuery(
    "all-users",
    handleFetch,
    {
      enabled: false
    }
  );
  if (isLoading || isFetching) return <h1>Loading...</h1>;
  return (
    <div className="users-container">
      <button onClick={refetch}>Fetch</button>
      {data?.data.map((item) => (
        <div className="users" key={item.id}>
          <NavLink to={`/all-users/${item.id}`} style={activeStyle}>
            {item.id} {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default AllUsers;
