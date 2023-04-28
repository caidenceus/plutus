import Header from "./Header";
import OverviewTiles from "./OverviewTiles";

function Home() {
  return (
    <div style={{backgroundColor: "rgba(240 240 240 / 0.5)", width: "100%"}}>
      <Header />
      <OverviewTiles />
    </div>
  );
}

export default Home;