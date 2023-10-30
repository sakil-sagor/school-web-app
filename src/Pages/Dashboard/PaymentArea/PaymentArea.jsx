import { Outlet } from "react-router-dom";
import TopNavbar from "../SideNavbar/TopNavbar";

const PaymentArea = () => {
    const routes = [
        { id: 1, path: '/dashboard/payment/all', name: 'All Payment' },
        { id: 2, path: '/dashboard/payment/allcalculation', name: 'Total Payment' },
    ];
    return (
        <div>
            <div>
                <div>
                    <TopNavbar routes={routes}></TopNavbar>
                </div>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default PaymentArea;