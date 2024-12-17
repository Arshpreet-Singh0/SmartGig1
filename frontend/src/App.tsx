import {createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import Page from "./pages/Page";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { path: "/", element: <LandingPage /> },
          { path: "/signin", element: <SigninPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/profile", element: <ProfilePage />},
          { path: "*", element: <NotFound />},
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
