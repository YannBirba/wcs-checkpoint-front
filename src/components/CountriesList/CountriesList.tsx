import { useParams } from "react-router-dom";
import { Country } from "../../types/Country";
import { useQuery } from "@apollo/client";
import { CountryItem } from "../CountryItem/CountryItem";
import { getContinentCountries } from "../../queries/getContinentCountries";

export const CountriesList = () => {
  const { continentCode } = useParams();

  const { data, error, loading } = useQuery<{ countries: Country[] }>(
    getContinentCountries,
    {
      variables: {
        filter: {
          continent: {
            eq: continentCode,
          },
        },
      },
    }
  );

  if (error) {
    return <>{error.message}</>;
  }

  if (loading) {
    return <>Loading ...</>;
  }

  if (!data) {
    return <>No data for now</>;
  }

  const countries = data.countries;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {countries.length > 0 &&
        countries.map((country) => (
          <CountryItem key={country.code} country={country} />
        ))}
    </div>
  );
};
