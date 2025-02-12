import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Restaurants from "./src/components/Restaurants";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./src/components/Error";
import Restaurants from "./src/components/Restaurants";
import Navbar from "./src/components/Navbar";
import SingleRestaurantCard from "./src/components/SingleRestaurantCard";
import { UserContext, UserProvider } from "./src/contexts/UserContext";

const AboutUs = lazy(() => import("./src/components/AboutUs"));
const Container = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const data = {
      authUserName: "Suneet",
    };
    setUserName(data.authUserName);
  }, []);
  return (
    <>
      {/* <UserProvider> */}
      <UserContext.Provider
        value={{ userData: userName, setUserName: setUserName }}
      >
        <Navbar />
        <Outlet />
        <h1>Footer</h1>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </>
  );
};

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
      { path: "/restaurants/:id", element: <SingleRestaurantCard /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
