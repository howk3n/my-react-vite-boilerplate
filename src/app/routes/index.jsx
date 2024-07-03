import { createBrowserRouter } from "react-router-dom";

/**
 * Uses react-router-dom.createBrowserRouter() to create routes setup
 * @returns react-router-dom Router object
 */
export const createRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      // element: <Home />
    },
  ]);
};
