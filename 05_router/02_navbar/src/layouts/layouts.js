import Header from "../components/Headers";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'; 

function Layout(){
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;