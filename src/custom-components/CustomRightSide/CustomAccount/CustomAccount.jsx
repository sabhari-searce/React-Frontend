import CustomAccountComponent from "./CustomAccountComponent";
import './CustomAccount.css'

const CustomAccount = () => {
    return (
      <div>
        <p className="AccountHeading">Similar Accounts</p>
        <CustomAccountComponent
          image="/nautic.png"
          name="John Dae"
          id="janedoe"
          followers="13.5M Followers"
        />
        <CustomAccountComponent
          image="/roadster.png"
          name="Jane Doe"
          id="janedoe"
          followers="600.5K Followers"
        />
        <CustomAccountComponent
          image="/myntra.png"
          name="Jane Deez"
          id="janedoe"
          followers="45.6K Followers"
        />
      </div>
    );
}

export default CustomAccount;