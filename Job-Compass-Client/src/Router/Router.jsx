import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../auth/Login";
import Error from "../Pages/Error";
import Register from './../auth/Register';
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "*", element: <Error /> },
      { path: "/post-job", element: <CreateJob/>},
      { path: "/my-job", element: <MyJobs/>},
      { path: "/salary", element: <SalaryPage/>},
      {
        path: "edit-job/:id",
        element: <UpdateJob/>,
        loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      }
  ],
  },
]);

export default router;