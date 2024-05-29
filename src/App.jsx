import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/";
import Groups from "./pages/Groups";
import Friends from "./pages/Friends";
import People from "./pages/People";
import FriendRequests from "./pages/FriendRequests";
import BlockList from "./pages/BlockList";

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
          <Route path="/people" element={<People />}></Route>
          <Route path="/friendrequest" element={<FriendRequests />}></Route>
          <Route path="/blocklist" element={<BlockList />}></Route>
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
