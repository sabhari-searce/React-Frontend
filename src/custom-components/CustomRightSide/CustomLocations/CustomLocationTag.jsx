import './CustomLocationTag.css';
import { Tag } from "antd";


const IndiaFlag = () => {
    return (
      <div className="Flag">
        <img
          src="/India.png"
          alt="India flag"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
      </div>
    );
}

const CustomLocationTag = (LocationProp) => {
    return (
      <div>
        <Tag className="LocationTag">
          {
            <div style={{display:"flex"}}>
              <IndiaFlag />
              {LocationProp.location}
            </div>
          }
        </Tag>
      </div>
    );
}

export default CustomLocationTag