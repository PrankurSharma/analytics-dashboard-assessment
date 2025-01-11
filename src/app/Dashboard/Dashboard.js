"use client"; // This is a client component
import { Row, Col } from "antd";
import { useFetchData } from "../Hooks/useFetchData";
import ModelSales from "./ModelSales";
import FigureCards from "./FigureCards";
import TableData from "./TableData";
import Sales from "./Sales";

export default function Dashboard() {
    const [data, setData] = useFetchData();
    return (
        <div style={{ padding: "40px" }}>
            <h2 style={{ textAlign: "center" }}>Analytics Dashboard</h2>
            <Row gutter={[20, 20]}>
                <ModelSales data={data} />
                <Col sm={24} md={14} lg={14}>
                    <Row gutter={[20, 20]}>
                        <Sales data={data} title={"City Sales"} type="City"/>
                        <Sales data={data} title={"Brand Sales"} type="Make"/>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: "40px" }} gutter={[20, 20]}>
                <FigureCards data={data} />
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <TableData data={data} />
            </Row>
        </div>
    );
}
