

import React from "react";

let Footer : React.FC<any> = (_props)=>{

    return(
        <React.Fragment>
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
                    {/* <div className="col-span-0" >
                    </div> */}
            </footer>
        </React.Fragment>
    )
}

export default Footer;


