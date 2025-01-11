import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function CustomPieChart({ data, showLegend, ...otherProps }) {
    return (
        <div style={{ height: "inherit", width: "60%" }}>
            <ResponsiveContainer height={"100%"} width={"100%"}>
                <PieChart>
                    <Pie data={data} {...otherProps} innerRadius={40} fill="#8884d8" />
                    <Tooltip />
                    {showLegend && <Legend />}
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}