
import React from "react";
import NavBar from "../components2/navBar";
import { Outlet } from "react-router-dom";
import Footer from "../components2/fotter";


let LayOut : React.FC<any> = (_props)=>{


    let openCloseDrower = ()=>{
        alert('open close pop-up');
    }


    return(
        <React.Fragment>
                {/* <NavBar />
                <div className="mt-24"></div>
                <Outlet />
                <Footer /> */}
                 <div className="min-h-screen flex flex-col">
                        <NavBar openCloseDrower={openCloseDrower} />

                        <main className="flex-1 mt-24">
                            <Outlet />
                        </main>

                        <Footer />
               </div>
        </React.Fragment>
    )
}

export default LayOut;