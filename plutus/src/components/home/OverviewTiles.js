import Typography from "../common/Typography";
import { colors } from "../common/colors"

function Tile({ title, dollarAmount, color }) {
  return (
    <div style={{color: "white", backgroundColor: color, borderRadius: "25px", width: "22%"}}>
      <Typography variant="h5">{dollarAmount}</Typography>
      <Typography variant="h6">{title}</Typography>
    </div>
  );
}

function OverviewTiles() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", padding: "0 50px"}}>
      <Tile title={"test"} dollarAmount={1000} color={colors.red} />
      <Tile title={"test"} dollarAmount={1000} color={colors.yellow} />
      <Tile title={"test"} dollarAmount={1000} color={colors.green} />
      <Tile title={"test"} dollarAmount={1000} color={colors.teal} />
    </div>
  );
}

export default OverviewTiles;