import './CustomChartLeft.css'
import CustomChartLeftProgress from './CustomChartLeftProgress';

const CustomChartLeft = () => {
    return (
      <div>
        <p className="HeadingLeft">Genre Segmentation</p>
        <p className="HeadingSummaryLeft">
          Top 5 genres the influencer post contents in
        </p>
        <div>
          <CustomChartLeftProgress title="Fashion & Style" value="75" />
          <CustomChartLeftProgress title="Beauty" value="50" />
          <CustomChartLeftProgress title="Pets & Animals" value="25" />
          <CustomChartLeftProgress title="Food & Beverages" value="5" />
          <CustomChartLeftProgress title="Others" value="25" />
        </div>
        <p className="ViewLeft">view all &gt;&gt;</p>
      </div>
    );


}

export default CustomChartLeft;