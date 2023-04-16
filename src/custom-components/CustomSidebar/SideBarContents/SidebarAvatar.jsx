import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const AvatarImage = () => {
  return <img src="/g5logo.png" />;
}

const SidebarAvatar = () => {
  return <Avatar size="large" icon={<AvatarImage />} />;

}
export default SidebarAvatar;
