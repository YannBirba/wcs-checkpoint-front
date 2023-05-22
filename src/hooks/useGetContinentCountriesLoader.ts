import { useQuery } from "@apollo/client";
import { LoaderFunction } from "react-router-dom";
import { getContinentCountries } from "../queries/getContinentCountries";

export const useGetContinentCountriesLoader: LoaderFunction = ({ params }) => {
  const { data, loading, error } = useQuery(getContinentCountries, {
    variables: {
      
    }
  })
};
