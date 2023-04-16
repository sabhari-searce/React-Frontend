import {
  EditFilled,
  UnorderedListOutlined,
  NotificationFilled,
} from "@ant-design/icons";
import './CustomLogoIcons.css'


const CustomLogoIcons = () => {
return (
  <div className="OuterBox">
    <div className="InnerBox">
      <div className="selected-icon">
        <EditFilled />
      </div>
    </div>
    <div className="InnerBox">
      <div className="unselected-icon">
        <UnorderedListOutlined />
      </div>
    </div>
    <div className="InnerBox">
      <div className="unselected-icon">
        <NotificationFilled />
      </div>
    </div>
  </div>
);
}

export default CustomLogoIcons;