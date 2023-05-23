import { Link } from "react-router-dom";
import { Country } from "../../types/Country";

export type CountryProps = {
  country: Country;
};

export const CountryItem = ({ country }: CountryProps) => {
  return (
    <Link to={`${country.code}`}>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>{country.name}</h2>
      </div>
    </Link>
  );
};
