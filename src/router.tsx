import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ErrorView } from "./views/Error/ErrorView";
import { NotFoundView } from "./views/NotFound/NotFoundView";
import { ContinentsView } from "./views/Continents/ContinentsView";
import { CountriesView } from "./views/Countries/CountriesView";
import { CountryView } from "./views/Country/CountryView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "",
        element: <ContinentsView />,
        children: [
          {
            path: "/:id/countries",
            element: <CountriesView />,
            children: [
              {
                path: "/:id/countries/:id",
                element: <CountryView />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundView />,
  },
]);