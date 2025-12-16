import { Outlet } from "react-router-dom";
import OthersHeader from "../components/OthersHeader";
import GeneralFooter from "../components/GeneralFooter";

const OtherLayout = () => {
    return(
        <div>
            {/* <OthersHeader /> */}
            <Outlet />
            <GeneralFooter />
        </div>
    )
}
export default OtherLayout;