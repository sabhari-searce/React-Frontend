import {
  FacebookOutlined,
  YoutubeFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import './InstaHeadingIcons.css'

const InstaHeadingIcons = () => {
    return (
      <div className="MostOut">
        <div className="SocialOuter">
          <div className="IconSocial">
            <FacebookOutlined />
          </div>
        </div>
        <div className="SocialOuter">
          <div className="IconSocial">
            <YoutubeFilled />
          </div>
        </div>
        <div className="SocialOuter">
          <div className="IconSocial">
            <TwitterOutlined />
          </div>
        </div>
      </div>
    );
    

}

export default InstaHeadingIcons;