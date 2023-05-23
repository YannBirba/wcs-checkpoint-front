import { Link } from "react-router-dom";
import { Continent } from "../../types/Continent";

export type ContinentProps = {
  continent: Continent;
};

export const ContinentItem = ({ continent }: ContinentProps) => {
  return (
    <Link to={`/${continent.code}/countries`}>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>{continent.name}</h2>
      </div>
    </Link>
  );
};
