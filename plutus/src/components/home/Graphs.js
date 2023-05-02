import RetirementPieChart from "../RetirementPieChart";
import NetWorthLineGraph from "../NetWorthLineGraph"
import Expenses from './Expenses';
import  { colors } from '../common/colors'

function Graphs() {
    const retirementSavingsPiData = [
      {
        "id": "goal",
        "label": "Retirement goal",
        "value": 1000000,
        "color": colors.teal
      },
      {
        "id": "savings",
        "label": "Retirement savings",
        "value": 250000,
        "color": colors.red
      }
    ]
    
    const graphTileStyle = {
        backgroundColor: "white",
        borderRadius: "25px",
        // (top and bottom) (left and right) (blur) (color)
        boxShadow: "5px 5px 10px rgba(230 230 230 / 0.9)",
        marginTop: "25px"
    }

    return (
      <>
        <div style={{display: "flex", justifyContent: "space-between", padding: "0 50px"}}>
          <div style={{...graphTileStyle, width: "30vw", height: "30vw"}}>
            <RetirementPieChart data={retirementSavingsPiData} />
          </div>
          <div style={{...graphTileStyle, width: "42vw", height: "30vw"}}>
            <NetWorthLineGraph data={netWorthLineData} />
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", padding: "0 50px"}}>
          <div style={{...graphTileStyle, width: "42vw", height: "30vw"}}>
            <Expenses />
          </div>
          <div style={{...graphTileStyle, width: "30vw", height: "30vw"}}>
            <RetirementPieChart data={retirementSavingsPiData} />
          </div>
        </div>
      </>
    );
}

export default Graphs;