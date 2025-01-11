import { Col } from "antd";
import CustomPieChart from "../Charts/CustomPieChart";
import { calculateSales } from "../utils/helper";
import Card from "../UI/Card";

export default function Sales({ data, title, type }) {
    const chartData = calculateSales(data, type);
    return (
        <Col span={24}>
            <Card title={title} style={{ display: "flex", flexDirection: "column" }} styles={{
                header: {
                    borderBottom: 0
                }
            }} loading={!data}>
                <div style={{ width: "40%", minHeight: "200px", textAlign: "center" }}>
                    {chartData?.map((x) => {
                        return (
                            <div key={x[type.toLowerCase()]} style={{ display: "inline-block", width: "fit-content", marginRight: "50px", height: "inherit" }}>
                                <h4 title={x[type.toLowerCase()]}>{x[type.toLowerCase()]}</h4>
                                <p>{x.count} %</p>
                            </div>
                        );
                    })}
                </div>
                <CustomPieChart showLegend={true} data={chartData} dataKey="count" nameKey={type.toLowerCase()} />
            </Card>
        </Col>
    );
}