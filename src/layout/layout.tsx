
import React from "react";
import NavBar from "../components2/navBar";
import { Outlet } from "react-router-dom";
import Footer from "../components2/fotter";
import Drower from "../components2/drawer";



let LayOut : React.FC<any> = (_props)=>{

    let [openOrClosePopUp , setOpenOrClosePopUp] = React.useState(false)

    let y = ()=>{
        setOpenOrClosePopUp(!openOrClosePopUp)
    }

    return(
        <React.Fragment>
                {/* <NavBar />
                <div className="mt-24"></div>
                <Outlet />
                <Footer /> */}
                 <div className="min-h-screen flex flex-col">
                        <NavBar y={y} />

                        <main className="flex-1 mt-24">
                            <Outlet />
                        </main>
                        <Drower openOrClosePopUp={openOrClosePopUp} y={y} />
                        <Footer />
               </div>
        </React.Fragment>
    )
}

export default LayOut;