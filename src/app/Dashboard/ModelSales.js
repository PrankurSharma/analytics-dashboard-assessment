import { Col } from "antd";
import CustomAreaChart from "../Charts/CutomAreaChart";
import { calculateYearlySales } from "../utils/helper";
import Card from "../UI/Card";

export default function ModelSales({ data }) {
    const chartData = calculateYearlySales(data);
    return (
        <Col xs={24} sm={24} md={10} lg={10}>
            <Card title={"Yearly Sales"} loading={!data} style={{
                height: "100%",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column"
            }} styles={{
                body: {
                    height: "100%"
                },
                header: {
                    borderBottom: "none"
                }
            }}>
                <CustomAreaChart label={"Yearly Estimates"} data={chartData} dataKey={"count"}/>
            </Card>
        </Col>
    );
}
