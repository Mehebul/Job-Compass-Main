import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../auth/Login";
import Error from "../Pages/Error";
// import Register from './../auth/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/PageNotFound", element: <Error /> }
  ],
  },
]);

export default router;