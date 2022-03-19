import axios from "axios";
import { useQueries } from "react-query";
const handleFetch = (item) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${item}`);
};
const DynamicParallel = ({ id }) => {
  const queryResults = useQueries(
    id.map((item) => {
      return {
        queryKey: ["multi-user", item],
        queryFn: () => handleFetch(item)
      };
    })
  );
  console.log({ queryResults });
  return (
    <>
      {/* <h2>{queryResults[0]?.queryResults[0].data.data.name}</h2> */}
      <h1>Dynamic</h1>
    </>
  );
};
export default DynamicParallel;
