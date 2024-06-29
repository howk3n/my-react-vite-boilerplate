import { RouterProvider } from "react-router-dom";
import { createRouter } from "./app/routes";

const AppRouter = () => {
  const router = createRouter();
  return <RouterProvider router={router} />;
};

function App() {
  return <AppRouter />;
}

export default App;
