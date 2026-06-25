

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

let Footer : React.FC<any> = (_props)=>{

    return(
        <React.Fragment>
            <div className="hidden sm:block" >
                <footer className="bg-gray-900 w-full h-20 text-gray-100 text-[75%] grid grid-cols-4  place-items-center">
                        <div className="col-span-3" >
                            © 2025 Docusmart Solutions GmbH
                        </div>
                        <div className="col-span-1">
                            <div className="flex gap-10" >
                                <span>Legal <br /> Notice/Impressum</span>
                                <span>Privacy/Datenschutz</span>
                            </div>
                        </div>
                </footer>
        </div>

        
        <div className="visible sm:hidden" >
                <footer className="bg-gray-900 w-full h-20 text-gray-100 text-[75%] flex justify-center items-center flex-col gap-6 py-20">
                        <div  >
                            © 2025 Docusmart Solutions GmbH
                        </div>

                        <div className="flex justify-center items-center gap-2" >
                                <FaPhoneAlt size={15} />
                                <span>Welcome@docalign.de</span>
                        </div>

                        <div className="flex justify-center items-center gap-2" >
                                <MdOutlineEmail size={18} />
                                <span>+49 30 740 73960</span>
                        </div>
                </footer>
        </div>


        </React.Fragment>
    )
}

export default Footer;


