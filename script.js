//----------script.js-----------

import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header";
import { Body } from "./components/body";
// import { About } from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Error } from "./components/Error";
// import { Contact } from "./components/Contact";
import useOnlineStatus from "./utils/useOnlineStatus";
import ProductInfo from "./components/productinfo";
import { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const statusOnline = useOnlineStatus();
  if (statusOnline === false) {
    return <h1>You are offline, try connecting to internet ......</h1>;
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading About Page.........</h1>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading Contact Page....</h1>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
      { path: "/products/:resId", element: <ProductInfo></ProductInfo> },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
