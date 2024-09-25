import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Canva from "./Canva";
import Men from "./Components/Men"
import Women from "./Components/Women"
import RegistrationForm from "./Components/RegistrationForm"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", 
        element: <Canva /> 
      },
      {
        path:"/Women",
        element:<Women/>
      },{
        path:"/Men",
        element:<Men/>
      },
      {
        path:"/RegistrationForm",
        element:<RegistrationForm/>
      }
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <AppContextProvider>
    <RouterProvider router={appRouter} />
  </AppContextProvider>
);
