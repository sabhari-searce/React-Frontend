import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";


const CustomBrandAvatar = () => {
    return (
      <div>
        <>
          <Avatar.Group
            maxCount={4}
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <Avatar src="/myntra.png" />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              <Avatar src="/avatar2.png" />
              {/* <Avatar src="/avatar3.png" /> */}
            </Avatar>
            {/* <Tooltip title="Ant User" placement="top"> */}
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                src="/avatar3.png"
              />
            {/* </Tooltip> */}
            <Avatar
              style={{
                backgroundColor: "#1890ff",
              }}
              src = "/g5logo.png"
            />
          </Avatar.Group>
        </>
      </div>
    );
}

export default CustomBrandAvatar;