import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import './InstaContentMainContent.css'

const Increase = () => {
    return (
      <div className="Increase">
        <ArrowUpOutlined />
      </div>
    );
};

const Decrease = () => {
  return (
    <div className="Decrease">
      <ArrowDownOutlined />
    </div>
  );
};

const InstaContentMainContent = (ContentProps) => {
  return (
    <div className="ContentsOuter">
      <p className="ContentTitle">{ContentProps.title}</p>
      <h1 className="BoldContent">{ContentProps.boldContent}</h1>
      <div className="SameLineContent">
        <p>{ContentProps.increase ? <Increase /> : <Decrease />}</p>
        <p className="SummaryContent">{ContentProps.summary}</p>
      </div>
    </div>
  );
};

export default InstaContentMainContent;
