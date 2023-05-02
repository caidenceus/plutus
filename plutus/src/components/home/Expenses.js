import Typography from "../common/Typography";
import { colors } from "../common/colors";

function ExpenseTile({ title, amount, percent }) {
  return (
    <div style={{color: "#fff", width: "40%"}}>
      <div style={{backgroundColor: colors.darkTeal, borderRadius: "6px"}}>
        <Typography variant="h6" fontWeight="500">
          {title}
        </Typography>
      </div>
      <div style={{backgroundColor: colors.darkTeal, borderRadius: "6px", opacity: "0.7", padding: "6px 0"}}>
        <Typography variant="h4" margin="6px">
          {amount}
        </Typography>
        <Typography variant="subtitle2" margin="6px">
          {percent}%
        </Typography>
        <Typography variant="subtitle2" margin="6px">
          vs last month
        </Typography>
      </div>
    </div>
  );
}

function Expenses() {
  return (
    <div style={{textAlign: "center"}}>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <ExpenseTile title={"Income"} amount={1000} percent={"-7.5"} />
        <ExpenseTile title={"Expenses"} amount={1000} percent={"-7.5"} />
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <ExpenseTile title={"Net gain"} amount={1000} percent={"-7.5"} />
        <ExpenseTile title={"Net worth"} amount={1000} percent={"-7.5"} />
      </div>
    </div>
  );
}

export default Expenses;