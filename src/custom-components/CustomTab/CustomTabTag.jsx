import { Tag } from "antd";
import "./CustomTabTag.css";
import { HeartFilled, FileImageOutlined } from "@ant-design/icons";
import CustomTabTagComponent from "./CustomTabTagComponent";

const CustomTabTag = () => (
  <div className="tag-container">
    <Tag className="custom-tag">
      <CustomTabTagComponent
        icon={<HeartFilled />}
        title="AVG LIKES PER POST "
        value="12.7K"
        extra=" "
      />
      <CustomTabTagComponent
        icon="₹"
        title="SPONSORED POSTS "
        value="8.9 %  "
        extra=" of all content"
      />
      <CustomTabTagComponent
        icon={<FileImageOutlined />}
        title="POST FREQUENCY "
        value="3  "
        extra=" post per weeks"
      />
    </Tag>
  </div>
);
export default CustomTabTag;


