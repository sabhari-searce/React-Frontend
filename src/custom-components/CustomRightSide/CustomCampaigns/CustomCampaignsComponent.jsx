import { Avatar, Space, Badge } from "antd";
import { InstagramOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./CustomCampaignsComponent.css";

const CustomCampaignsComponent = (AccountProps) => {
  return (
    <div>
      <Tag
        className="ChartTab"
        style={{ width: "100%", padding: "5% 5% 5% 5%", marginBottom: "5%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space wrap size={24} style={{ flex: "1" }}>
            
              <Avatar
                shape="circle"
                size="large"
                icon={<img src={AccountProps.image} alt="Insta" />}
              />

            <Space direction="vertical" align="left">
              <p className="InstaId" style={{ margin: 0 }}>
                {AccountProps.name}
              </p>
              <p className="Followers" style={{ margin: 0 }}>
                <em>{AccountProps.id}</em>
              </p>
              
            </Space>
          </Space>

          
        </div>
      </Tag>
    </div>
  );
};

export default CustomCampaignsComponent;
