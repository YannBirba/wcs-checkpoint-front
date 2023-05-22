import { useQuery } from "@apollo/client";
import { getContinents } from "../../queries/getContinents";
import { Continent } from "../../types/Continent";
import { ContinentItem } from "../ContinentItem/ContinentItem";

export const ContinentsList = () => {
  const { data, loading, error } = useQuery<{ continents: Continent[] }>(
    getContinents
  );

  if (error) {
    return <>error.message</>;
  }

  if (loading) {
    return <>Loading ...</>;
  }

  if (!data) {
    return <>No data for now</>;
  }

  const continents = data.continents;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {continents.length > 0 &&
        continents.map((continent) => (
          <ContinentItem key={continent.code} continent={continent} />
        ))}
    </div>
  );
};
