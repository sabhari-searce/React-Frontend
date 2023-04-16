import { Space } from "antd";
import './CustomTabTagComponent.css'
import { MinusCircleOutlined } from "@ant-design/icons";


const CustomTabTagComponent = (TagProp) => {
  return (
    <div className="OuterTab">
      <Space wrap size={24}>
        <div className="TabIcon">{TagProp.icon}</div>

        <Space direction="vertical" align="left">
          <div className="Title" style={{ margin: 0 }}>
            {TagProp.title}
            <MinusCircleOutlined className="TabDot" />
          </div>
          <div className="Category" style={{ margin: 0, display: "flex" }}>
            {TagProp.value}
            <p style={{ fontSize: "small", margin: "0 0 0 6px" }}>
              {TagProp.extra}
            </p>
          </div>
        </Space>
      </Space>
    </div>
  );
};

export default CustomTabTagComponent;
