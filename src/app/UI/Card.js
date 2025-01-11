import { Card as Cards } from "antd"
export default function Card ({ children, styles, ...otherProps }) {
    console.log("My styles ===", styles);
    return <Cards {...otherProps} styles={{
        ...styles,
        body: {
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            ...styles?.body
        }
    }}>{children}</Cards>
}