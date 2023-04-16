import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import './HeaderSearch.css'

const CustomInputSearch = () => {
  return <Input className="Search" placeholder=" Search for a influencer" prefix={<SearchOutlined />} />;
};

export default CustomInputSearch;
