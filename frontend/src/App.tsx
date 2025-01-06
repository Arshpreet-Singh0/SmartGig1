import {createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import Page from "./pages/Page";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/ProjectPage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBaordPage from "./pages/dashboard/DashBaordPage";
import PlaceBid from "./pages/dashboard/PlaceBid";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { path: "/", element: <LandingPage /> },
          { path: "/signin", element: <SigninPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/profile", element: <ProfilePage />},
          { path: "/projects", element: <DashBaordPage><JobPage /></DashBaordPage>},
          { path: "/dashboard", element: <DashBaordPage><DashBoard /></DashBaordPage>},
          { path: "/place-bid/:projectId", element: <PlaceBid />},
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
