import { Area, AreaChart, Label, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function CustomAreaChart({ data, label, ...otherProps }) {
    return (
        <div style={{ height: "inherit", width: "100%" }}>
            <ResponsiveContainer height={"100%"} width={"100%"}>
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="year" />
                    {/* <YAxis /> */}
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Label value={label} position={"centerTop"} />
                    <Tooltip />
                    <Area type="monotone" stroke="#8884d8" fillOpacity={1} {...otherProps} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}