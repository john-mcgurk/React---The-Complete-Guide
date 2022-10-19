import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = valueArray.reduce((a,b) => a+b,0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}/>
      ))}
    </div>
  );
};

export default Chart;