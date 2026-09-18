import { Outlet } from "react-router"
import { Header } from "./Header"
import Footer from "./Footer"

export const Applayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}