import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthProvider";

const Routes = () => {
  const { token } = useAuth();

  const publicRoutes = [{ path: "/", element: <div>Public main page</div> }];
  const authOnlyRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { path: "/contacts", element: <div>Contacts</div> },
        { path: "/profile", element: <div>Profile</div> },
      ],
    },
  ];
  const notAuthOnlyRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <div>Register</div> },
    { path: "/", element: <div>Not authorized main page</div> },
  ];

  const router = createBrowserRouter([
    ...(!token ? notAuthOnlyRoutes : []),
    ...publicRoutes,
    ...authOnlyRoutes,
  ]);

  console.log(router);
  return <RouterProvider router={router} />;
};

export default Routes;
