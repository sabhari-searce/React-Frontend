import { Avatar, Space } from "antd";
import './CustomLogoWithTitle.css'

const LogoCircle = () => {
    return <img src="/g5circle.png" />;
}

const CustomLogoWithTitle = () => {
    return (
      <Space wrap size={24}>
        <Avatar size={94} icon={<LogoCircle />} alt="Profile pictures" />
        <Space direction="vertical" align="center">
          <p className="Title" style={{ margin: 0 }}>galleri5</p>
          <h4 className="Category" style={{ margin: 0 }}>Category A</h4>
        </Space>
      </Space>
    );
  
};

export default CustomLogoWithTitle;
