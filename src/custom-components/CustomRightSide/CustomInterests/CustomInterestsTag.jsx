import { Tag } from "antd";
import './CustomInterestsTag.css'

const CustomInterestsTag = (InterestProps) => {
  return (
    <div className="OuterTag">
      <Tag className="InterestTag">{InterestProps.interest}</Tag>
    </div>
  );
};

export default CustomInterestsTag;
