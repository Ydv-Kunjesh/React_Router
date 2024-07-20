
import { Outlet } from "react-router-dom"
// import Check from "./Components/Check"
// eslint-disable-next-line no-unused-vars
// import Contact from "./Components/Contact"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";

function Layout(){
    return (
        <>  
        <Header/>     
        <Outlet/>
        <Footer/>
        </>
    )
}

export default  Layout; 