import InstaHeadingHandler from "./InstaHeadingComponents/InstaHeadingHandler";
import React from "react";
import { Col, Row } from "antd";
import InstaHeadingIcons from "./InstaHeadingComponents/InstaHeadingIcons";
import InstaHeadingProgress from "./InstaHeadingComponents/InstaHeadingProgress";

const CustomInstaReportHeading = () => {
return (
  <>
    <Row>
      <Col span={8}>
        <InstaHeadingHandler />
      </Col>
      <Col span={16}>
        <InstaHeadingIcons />
      </Col>
    </Row>
    <Row>
        <br />
    </Row>
    <Row>
      <InstaHeadingProgress />
      
    </Row>
  </>
);
}

export default CustomInstaReportHeading;