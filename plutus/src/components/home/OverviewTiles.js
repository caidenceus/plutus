import Typography from "../common/Typography";
import { colors } from "../common/colors";
import "./OverviewTiles.css";

import { useState } from "react";

function Tile({ title, dollarAmount, color }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleIsHovered() {
    setIsHovered(!isHovered);
  }

  const tileStyle = {
    color: "white",
    backgroundColor: color,
    borderRadius: "25px",
    width: "20%",
    padding: "20px"
  };

  return (
    <div
      style={tileStyle}
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsHovered}
      class={isHovered && "hover-animation"}
    >
      <Typography variant="h5" margin={"0"}>${dollarAmount.toLocaleString()}</Typography>
      <Typography variant="h6" margin={"0"}>{title}</Typography>
    </div>
  );
}

function OverviewTiles() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", padding: "0 50px"}}>
      <Tile title={"Total"} dollarAmount={1000.00} color={colors.red} />
      <Tile title={"Savings"} dollarAmount={1000.00} color={colors.yellow} />
      <Tile title={"Investments"} dollarAmount={1000.00} color={colors.green} />
      <Tile title={"Cost of living"} dollarAmount={1000.00} color={colors.teal} />
    </div>
  );
}

export default OverviewTiles;