import RetirementPieChart from "../RetirementPieChart";
import NetWorthLineGraph from "../NetWorthLineGraph"
import  { colors } from '../common/colors'

function Graphs() {
    const retirementSavingsPiData = [
      {
        "id": "goal",
        "label": "Retirement goal",
        "value": 1000000,
        "color": colors.darkTeal
      },
      {
        "id": "savings",
        "label": "Retirement savings",
        "value": 250000,
        "color": colors.red
      }
    ]

    const netWorthLineData = [
        {
          "id": "Worth",
          "color": "hsl(289, 70%, 50%)",
          "data": [
            {
              "x": "Jan",
              "y": 135
            },
            {
              "x": "Feb",
              "y": 205
            },
            {
              "x": "Mar",
              "y": 152
            },
            {
              "x": "Apr",
              "y": 144
            },
            {
              "x": "May",
              "y": 184
            },
            {
              "x": "Jun",
              "y": 286
            },
            {
              "x": "Jul",
              "y": 179
            },
            {
              "x": "Aug",
              "y": 166
            },
            {
              "x": "Sep",
              "y": 0
            },
            {
              "x": "Oct",
              "y": 77
            },
            {
              "x": "Nov",
              "y": 33
            },
            {
              "x": "Dec",
              "y": 83
            }
          ]
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
            <NetWorthLineGraph data={netWorthLineData} />
          </div>
          <div style={{...graphTileStyle, width: "30vw", height: "30vw"}}>
            <RetirementPieChart data={retirementSavingsPiData} />
          </div>
        </div>
      </>
    );
}

export default Graphs;