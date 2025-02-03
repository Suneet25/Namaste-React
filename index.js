import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Restaurants from "./src/components/Restaurants";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./src/components/Error";
import RestaurantCard from "./src/components/RestaurantCard";
import Navbar from "./src/components/Navbar";

const AboutUs = lazy(() => import("./src/components/AboutUs"));

const Container = () => (
  <>
    <Navbar />
    <Outlet />
    <h1>Footer</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading AboutUs...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/restaurants", element: <Restaurants /> },
      { path: "/restaurants/:id", element: <RestaurantCard /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
