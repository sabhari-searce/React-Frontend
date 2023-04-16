import { Avatar, Space, Badge } from "antd";
import {
  InstagramOutlined
} from "@ant-design/icons";
import './InstaHeadingHndler.css'

const InstaProfile = () => {
    return <img src="/insta.png" alt="Insta" />
}

const InstaHeadingHandler = () => {
  return (
    <Space wrap size={24}>
      <Badge
        count={
          <InstagramOutlined
            style={{
              color: "white",
            }}
          />
        }
      >
        <Avatar shape="circle" size="large" icon={<InstaProfile />} />
      </Badge>

      <Space direction="vertical" align="center">
        <p className="InstaId" style={{ margin: 0 }}>
          @galleri5
        </p>
        <h4 className="Followers" style={{ margin: 0 }}>
          <em>46.k Followers</em>
        </h4>
      </Space>
    </Space>
  );
};

export default InstaHeadingHandler;
