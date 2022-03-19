import { useEffect, useState } from "react";

const Users = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setNames(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {names.length !== 0 ? (
        names.map((name) => <h3 key={name.id}>{name.name}</h3>)
      ) : (
        <h2>Failed to fetch</h2>
      )}
    </>
  );
};
export default Users;
