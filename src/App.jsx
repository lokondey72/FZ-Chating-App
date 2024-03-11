import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
