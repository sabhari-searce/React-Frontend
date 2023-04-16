import CustomCampaignsComponent from "./CustomCampaignsComponent";
import "./CustomCampaigns.css";

const CustomCampaigns = () => {
  return (
    <div>
      <p className="CampaignsHeading">Past Campaigns</p>
      <CustomCampaignsComponent
        image="/myntra.png"
        name="End of Reason Sale"
        id="Myntra"
      />
      <CustomCampaignsComponent
        image="/nautic.png"
        name="Autumn Winter Sale"
        id="Nautica"
      />
      <CustomCampaignsComponent
        image="/roadster.png"
        name="Roadster Store Launch"
        id="Roadster"
      />
    </div>
  );
};

export default CustomCampaigns;
