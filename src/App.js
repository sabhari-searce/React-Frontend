import './App.css';
import CustomHeader from './custom-components/CustomHeader/CustomHeader';
import CustomSidebar from './custom-components/CustomSidebar/CustomSidebar';
import CustomPath from './custom-components/CustomPath/CustomPath';
import CustomLogo from './custom-components/CustomLogo/Customlogo';
import CustomInstaReportHeading from './custom-components/CustomInstaReport/CustomInstaReportHeading/CustomInstaReportHeading';
import CustomGenres from './custom-components/CustomRightSide/CustomGeneres/CustomGeneres';
import CustomInstaReportContent from './custom-components/CustomInstaReport/CustomInstaReportContent/CustomInstaReportContent';
import CustomLocation from './custom-components/CustomRightSide/CustomLocations/CustomLocation';
import CustomInterests from './custom-components/CustomRightSide/CustomInterests/CustomInterests';
import CustomBrand from './custom-components/CustomRightSide/CustomBrand/CustomBrand';
import CustomTab from './custom-components/CustomTab/CustomTab';
import CustomChartTag from './custom-components/CustomChartTab/CustomChartTab';
import CustomMonthChart from './custom-components/CustomMonthChart/CustomMonthChart';
import CustomAccount from './custom-components/CustomRightSide/CustomAccount/CustomAccount';
import CustomCampaigns from './custom-components/CustomRightSide/CustomCampaigns/CustomCampaigns';

function App() {
  return (
    <div>
      <CustomHeader />
      <CustomSidebar />
      <div className="Content">
        <CustomPath />
        <CustomLogo />
        <div className="container">
          <div className="left">
            <CustomInstaReportHeading />
            <CustomInstaReportContent />
            <CustomTab />
            <CustomChartTag />
            <CustomMonthChart />
          </div>
          <div className="right">
            <CustomGenres />
            <CustomLocation />
            <CustomInterests />
            <CustomBrand />
            <CustomAccount />
            <CustomCampaigns />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
