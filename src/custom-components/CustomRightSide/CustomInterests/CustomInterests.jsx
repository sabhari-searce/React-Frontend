import './CustomInterests.css'
import CustomInterestsTag from './CustomInterestsTag';


const CustomInterests = () => {
    return (
      <div className="OuterInterest">
        <h3 className="InterestHeading">Interests</h3>
        <div style={{ display: "flex" }}>
          <CustomInterestsTag interest="HOME & INTERIORS" />
          <CustomInterestsTag interest="PETS & ANIMALS" />
        </div>
        <CustomInterestsTag interest="FASHION & STYLE" />
      </div>
    );
}

export default CustomInterests;