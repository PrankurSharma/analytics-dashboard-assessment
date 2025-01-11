import { Col } from "antd";
import Card from "../UI/Card";
import { calculateSales } from "../utils/helper";
import CustomPieChart from "../Charts/CustomPieChart";

export default function FigureCards({ data }) {

    const headings = [{
        name: "County",
        data: calculateSales(data, "County")
    }, {
        name: "Electric Vehicle Type",
        data: calculateSales(data, "Electric Vehicle Type")
    }, {
        name: "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
        data: calculateSales(data, "Clean Alternative Fuel Vehicle (CAFV) Eligibility")
    }];
    return (
        <>
            {headings.map((val, idx) => {
                return <Col key={val.name} xs={24} sm={24} md={idx === headings.length - 1 ? 24 : 12} lg={8}>
                    <Card loading={!data} title={val.name} styles={{
                        body: {
                            padding: "24px"
                        }
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "40%" }}>
                            {val.data?.map((x) => {
                                return (
                                    <div key={x[val.name.toLowerCase()]}>
                                        <h4 title={x[val.name.toLowerCase()]}>{x[val.name.toLowerCase()]}</h4>
                                        <p>{x.count} %</p>
                                    </div>
                                );
                            })}
                        </div>
                        <CustomPieChart data={val.data} dataKey="count" nameKey={val.name.toLocaleLowerCase()} />
                    </Card>
                </Col>
            })}
        </>
    );
}