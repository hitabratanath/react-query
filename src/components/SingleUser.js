import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
const handleFetch = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
const SingleUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery("single-user", () =>
    handleFetch(id)
  );
  if (isLoading || isFetching) return <h1>Loading...</h1>;
  return (
    <>
      <button onClick={() => navigate("/all-users")}>Back</button>
      <table>
        <tr>
          <th>Properties</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>ID</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data?.data.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{data?.data.email}</td>
        </tr>
      </table>
    </>
  );
};
export default SingleUser;
