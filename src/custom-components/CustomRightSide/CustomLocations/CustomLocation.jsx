import './CustomLocations.css'
import CustomLocationTag from './CustomLocationTag';

const CustomLocation = () => {
    return (
      <div className="OuterLocation">
        <h3 className="LocationHeading">Active Locations</h3>
        <CustomLocationTag location="Mumbai" />
        <CustomLocationTag location="Delhi" />
      </div>
    );
}

export default CustomLocation;