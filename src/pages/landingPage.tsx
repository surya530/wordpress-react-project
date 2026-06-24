
import React from "react";
// import { Button } from "../components/ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Carousel from "../components2/slider";
import weka_1 from  "../images/weka-1.jpg"
import client from "../images/client.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import client4 from "../images/client4.png"
import client5 from "../images/client5.png"
import client6 from "../images/client6.png"
import client7 from "../images/client7.png"
import client8 from "../images/client8.png"
import client9 from "../images/client9.png"
// import Footer from "../components2/fotter";

let LandingPage : React.FC<any> = (_props)=>{

    let [ourCustomers , _setOurCustomers] = React.useState([
        weka_1,
        client,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7,
        client8,
        client9
    ]);




    return(
        <React.Fragment>
            <div className="flex justify-around" >


                    <div className="flex items-center gap-6" >
                    <div className="flex gap-2 items-center" >
                        <FaPhoneAlt color="lightblue" />
                        +49 30 740 73960
                    </div>
                        <div className="flex gap-2 items-center" >
                                    <MdOutlineEmail />
                                Welcome@docalign.de
                        </div>
                    </div>

                    {/* <div className="flex items-center" >
                    </div> */}

                    <div className="flex items-center gap-6" >
                      <button className="bg-orange-400 p-3 text-white rounded-sm shadow-xl">For Self Publishers</button>
                        <button className="bg-blue-600 p-3 text-white rounded-sm flex gap-1 items-center shadow-xl ">
                                Get a Quote
                            <FaArrowRightLong />
                        </button>
                    </div>

            </div>


                        {/* images */}
            <div>

            </div>


                              <div className="mt-10">
                                                <div className="max-w-7xl mx-auto">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                    
                                                    {/* Left Column - Prepress and Premedia */}
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-teal-600 mb-6">
                                                        Prepress and Premedia Formatting
                                                        </h2>
                                                        
                                                        <p className="text-gray-700 mb-4">
                                                        We offer <span className="text-pink-500">text conversion services</span> for books, articles, trade journals, and catalogs.
                                                        </p>
                                                        
                                                        <p className="text-gray-700 mb-6">
                                                        Your files can simultaneously be converted into:
                                                        </p>
                                                        
                                                        <div className="bg-white rounded-lg p-4 mb-6 border-l-4 border-teal-600">
                                                        <p className="text-gray-800 font-semibold">
                                                            Print PDF | ePub | Developer-Specific XML (INDD, IDML)
                                                        </p>
                                                        <p className="text-gray-700 mt-2">
                                                            ebook (EPUB, AZW, mobi, Screen PDF)
                                                        </p>
                                                        </div>
                                                        
                                                        <p className="text-gray-700 mb-4">
                                                        Because many steps are fully automated and based on geometric measures, we can offer high precision typesetting or other high precision typesetting needs.
                                                        </p>
                                                    </div>

                                                    {/* Right Column - Custom Software Solutions */}
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-teal-600 mb-6">
                                                        Custom Software Solutions
                                                        </h2>
                                                        
                                                        <p className="text-gray-700 mb-6">
                                                        High-value custom solutions to give your company better performance, scalable solutions, and a happier, more efficient production team.
                                                        </p>
                                                        
                                                        <p className="text-gray-700 mb-4">
                                                        Our developers, designers, and product team will help you plan your digitization, production, and optimization roadmap using open standards – so that you can evolve and grow trusting the solutions in place are durable and efficient.
                                                        </p>
                                                        
                                                        <p className="text-gray-700">
                                                        <span className="text-pink-500"> Our experience</span> spans over decades and in many areas of software development and operations.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                            </div>







                        <div className="bg-[#F8F9FC] py-20" >
                            <div className="text-[#5298D2] text-center text-3xl font-semibold">Our Customers</div>
                            <div className="text-center mt-6" >We have long-standing partnerships with many well-established publishers in Germany and beyond.</div>
                                <div className="catalogs-slider" >
                                    <Carousel classs={"w-[75%] m-auto mt-10"} slidesToShow={5} centerMode={false}>
                                        {
                                            ourCustomers.map((e,index)=><div key={index} ><img src={e} alt={`Slide ${index + 1}`} className="" /></div>)
                                        }
                                    </Carousel>
                                </div>
                        </div>


                                        {/* Reviews */}

                        <div className="mb-16">
                            <div className="catalogs-slider" >
                            <Carousel classs={"w-[80%] m-auto mt-10"} slidesToShow={1} centerMode={true} >
                            <div className="text-center">
                                <div className="inline-block bg-blue-500 p-8 text-white italic">
                                    They have a team with very good IT professionals that brings in well-structured and clean, 
                                    error-free programming approach. With their software solutions we save approximately half of the 
                                    production time along with cost and energy. There is no other company that gives us this 
                                    much performance.					
                                </div>
                                <svg className="mx-auto w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15L0 0h20z" />
                                </svg>

                                <span className="text-xl font-semibold" >H. Hohenester</span>
                                <br />
                                <span className="font-playfair italic text-blue-400" >Managing Director, Schwaneberger Verlag</span>
                            </div>


                            <div className="text-center">
                                <div className="inline-block bg-blue-500  p-8 text-white italic">
                                        With our editing system 'jadis', we have to rely on a powerful and reliable program that runs
                                         on Unix servers 
                                        and quickly computes new variants.Without DocAlign, our editing system 
                                        will not function. It is the best option in digital production.					
                                </div>
                                <svg className="mx-auto w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15L0 0h20z" />
                                </svg>

                                <span className="text-xl font-semibold">S. Selle</span>
                                <br />
                                <span className="font-playfair italic text-blue-400" >Managing Director, Zweitwerk</span>
                            </div>


                            <div className="text-center">
                                <div className="inline-block bg-blue-500 p-8 text-white italic">
						                We started in 2000 with databases and XML. There is Unified data management which
                                        is a critical factor for streamlined 
                                        and high quality workflows and all the publishing houses should
                                        adopt it in the long run. With DocAlign, we feel that we are in good hands.					
                                </div>
                                <svg className="mx-auto w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15L0 0h20z" />
                                </svg>

                                <span className="text-xl font-semibold" >Dr. W. Andreae</span>
                                 <br />
                                <span className="font-playfair italic text-blue-400" >Managing Director, Lexxion</span>
                            </div>

                            </Carousel>
                            </div>

                        </div>



        </React.Fragment>
    )
}

export default LandingPage;