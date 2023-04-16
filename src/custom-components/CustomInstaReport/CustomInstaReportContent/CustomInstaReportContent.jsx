import InstaContentHeading from "./InstaReportContentComponents/InstaContentHeading";
import InstaContentMainContent from "./InstaReportContentComponents/InstaContentMainContent";

const CustomInstaReportContent = () => {
return (
  <div>
    <InstaContentHeading title="Insights" />
    <div style={{ display: "flex" }}>
      <InstaContentMainContent
        title="Engagement rate per photo"
        boldContent="3.5%"
        summary="Better than others in this category"
        increase={true}
      />
      <InstaContentMainContent
        title="Avg price per photo"
        boldContent="₹45.6k"
        summary="costlier than others in this category"
        increase={false}
      />
      <InstaContentMainContent
        title="Expected impressions per photo"
        boldContent="4.6M"
        summary="Better than others in this category"
        increase={true}
      />
    </div>
    <InstaContentMainContent
      title="Engagement rate per Reel"
      boldContent="3.5%"
      summary="Better than others in this category"
      increase={true}
    />
    <InstaContentHeading title="Key Performane Indicators" />
    <div style={{ display: "flex" }}>
      <InstaContentMainContent
        title="CTR"
        boldContent="8.5%"
        summary="Better than others in this category"
        increase={true}
      />
      <InstaContentMainContent
        title="CPM"
        boldContent="₹700"
        summary="costlier than others in this category"
        increase={false}
      />
      <InstaContentMainContent
        title="CPC"
        boldContent="₹92.6"
        summary="Better than others in this category"
        increase={true}
      />
    </div>
  </div>
);
}

export default CustomInstaReportContent;