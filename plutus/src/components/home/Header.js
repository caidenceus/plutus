import Typography from "../common/Typography";

function Header() {
  return (
    <div style={{display: "flex", padding: "0 50px", justifyContent: "space-between"}}>
      <Typography variant={"h5"} fontWeight={"600"}>
        Overview
      </Typography>
      <Typography variant={"h6"} fontWeight={"500"} opacity={"0.6"}>
        {new Date().toLocaleDateString(
          'en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        }
      </Typography>
    </div>
  );
}

export default Header;