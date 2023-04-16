import { Avatar, Space, Badge } from "antd";
import { InstagramOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./CustomAccountComponent.css";

const CustomAccountComponent = (AccountProps) => {
  return (
    <div>
      <Tag
        className="ChartTab"
        style={{ width: "100%", padding: "5% 5% 5% 5%", marginBottom:"5%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space wrap size={24} style={{ flex: "1" }}>
            <Badge
              count={
                <InstagramOutlined
                  style={{
                    color: "white",
                    fontSize: "small",
                  }}
                />
              }
            >
              <Avatar
                shape="circle"
                size="large"
                icon={<img src={AccountProps.image} alt="Insta" />}
              />
            </Badge>

            <Space direction="vertical" align="left">
              <p className="InstaId" style={{ margin: 0 }}>
                {AccountProps.name}
              </p>
              <p className="Followers" style={{ margin: 0 }}>
                <em>{AccountProps.id}</em>
              </p>
              <p className="Followers" style={{ margin: 0 }}>
                <em>{AccountProps.followers}</em>
              </p>
            </Space>
          </Space>

          <div
            style={{
              backgroundColor: "#28251a",
              //   padding: "5px",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          >
            <PlusCircleOutlined
              style={{ fontSize: 30, color: "#fac912", border: "none" }}
            />
          </div>
        </div>
      </Tag>
    </div>
  );
};

export default CustomAccountComponent;
