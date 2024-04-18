import {ROUTERS} from "./utils/router";
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterLayout"
import NEWS from "./pages/users/news";
import PROMOTION from "pages/users/promotion";
import CONTACTPAGE from "pages/users/contactPage";
import INTRODUCE from "pages/users/introducePage";
import ABOUTUS from "pages/users/aboutUsPage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME, 
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.NEWS, 
            component: <NEWS/>
        },
        {
            path: ROUTERS.USER.PROMOTION, 
            component: <PROMOTION/>
        },
        {
            path: ROUTERS.USER.CONTACT, 
            component: <CONTACTPAGE/>
        },
        {
            path: ROUTERS.USER.ABOUTUS, 
            component: <ABOUTUS/>
        },

        
    ]
    return (
    <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (<Route key ={key} path ={item.path} element ={item.component}/>))
            }
        </Routes>
    </MasterLayout>
    );
};

const RouterCustom = () =>{
    return renderUserRouter();
}; 

export default RouterCustom;