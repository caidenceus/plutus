import Header from "./Header";
import OverviewTiles from "./OverviewTiles";
import Graphs from './Graphs';

function Home() {
  return (
    <div style={{backgroundColor: "rgba(240 240 240 / 0.5)", width: "100%"}}>
      <Header />
      <OverviewTiles />
      <Graphs />
    </div>
  );
}

export default Home;