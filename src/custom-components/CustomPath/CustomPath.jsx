import React from "react";
import './CustomPath.css'
import { RightOutlined } from "@ant-design/icons";


const CustomPath = () => {
  return (
    <div className="Path">
      <div className="OuterContainerPath">
        <div className="InnerContentInactive">
          <p>
            HOME <RightOutlined className="Arrow" /> BROWSE INFLUENCERS
            <RightOutlined className="Arrow" />{" "}
            <div className="ActivePage">INFLUENCER</div>
          </p>
          <br></br>
          <div className="PathLine"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomPath;
