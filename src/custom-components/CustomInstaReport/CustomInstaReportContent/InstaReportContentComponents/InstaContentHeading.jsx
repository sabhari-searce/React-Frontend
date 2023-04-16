import './InstaContentHeading.css'
import { InfoCircleOutlined } from "@ant-design/icons";

const InstaContentHeading = (HeadingProp) => {
return (
  <div className="OuterContent">
    <p className="ContentHead">
      {HeadingProp.title}<InfoCircleOutlined className="ContentHeadIcon" />
    </p>
  </div>
);
}

export default InstaContentHeading;