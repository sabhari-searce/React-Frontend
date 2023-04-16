import React from "react";
import { Col, Row } from "antd";
import './CustomLogo.css'
import CustomLogoWithTitle from "./CustomLogoComponents/CustomLogoWithTitle";
import CustomLogoIcons from "./CustomLogoComponents/CustomLogoIcons";

const CustomLogo = () => {
    return (
      <div className="Logo">
        <>
          <div className="OuterContainerLogo">
            <Row>
              <Col span={6}><CustomLogoWithTitle /></Col>
              <Col span={14}></Col>
              <Col span={4}><CustomLogoIcons /></Col>
            </Row>
          </div>
        </>
      </div>
    );
};

export default CustomLogo;
