import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Profile from "./components/pages/Profile";
import Chat from "./components/pages/Chat/";
import Groups from "./components/pages/Groups";
import Friends from "./components/pages/Friends";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/group" element={<Groups />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
        </Route>
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
