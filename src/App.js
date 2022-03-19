import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import RQUsers from "./components/RQUsers";
import Refetch from "./components/Refetch";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FetchSideEffects from "./components/FetchSideEffects";
import AllUsers from "./components/AllUsers";
import SingleUser from "./components/SingleUser";
import DynamicParallel from "./components/DynamicParallel";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/rqusers">RQUsers</Link>
          </li>
          <li>
            <Link to="/refetch">Refetch</Link>
          </li>
          <li>
            <Link to="/all-users">All Users</Link>
          </li>
          <li>
            <Link to="/dynamic-parallel">Dynamic</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rqusers" element={<RQUsers />} />
        <Route path="/refetch" element={<Refetch />} />
        <Route path="/sideeffect" element={<FetchSideEffects />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/all-users/:id" element={<SingleUser />} />
        <Route
          path="/dynamic-parallel"
          element={<DynamicParallel id={[1, 3, 4]} />}
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
