// In this page we will write about the IEEE
import React from "react";

import skywhite from "../assets/skywhite.jpg"
import twoplanets from "../assets/twoplanets.jpg"
import earth from "../assets/earth-1756274_1920.jpg"
import v from "../assets/v.jpg"

// declaring the function 

export default function About_Hackthon() {

    return (
        <div className=" min-h-screen about-content">

            {/* First Paragraph introducing hackathon */}

            <div className="">
                <h2>
                    About <span className="highlight font-roboto">HACKATHON</span>
                </h2>
                <h1 className="about-hover-effect p-3 rounded-lg border-[2px] border-[#cbb9b9] font-poppins text-2xl">
                    Welcome to IEEE Kode Kurrent - Season 1, hosted by IEEE RGIPT at the Rajiv Gandhi Institute of Petroleum Technology! This is where innovation meets adrenaline. Engage in a stimulating environment of coding, collaboration, and ingenuity as you address challenges within advanced technological domains.
                </h1>
            </div>

            <div className="mx-auto text-8xl highlight m-10">Events</div>

            <div className="flex flex-row justify-center gap-11">
                <div className=" about-hover-effect  rounded-2xl  flex flex-col justify-center items-center bg-cover w-[40%] h-[300px]"
                    style={{ backgroundImage: `url(${earth})` }}>
                    <div className="p-2 mb-8 font-lato text-2xl border-[1px] border-[white] rounded-2xl">24 hour hackathon</div>
                    <div className="py-4  mx-2  font-poppins  border-[1px] border-[white] rounded-2xl text-[white]]"> A high-energy coding marathon where participants from diverse backgrounds come together to ideate, design, and develop solutions to real-world problems. Problem statements will be provided, challenging participants to unleash their technical prowess, creativity, and teamwork.</div>
                </div>

                <div className=" flex rounded-2xl about-hover-effect flex-col justify-center bg-cover items-center w-[40%] h-[300px] " style={{ backgroundImage: `url(${earth})` }}>
                    <div className="p-2 mb-12 font-lato text-2xl border-[1px] border-[white] rounded-2xl">VLSI Workshop</div>
                    <div className="py-4  mx-2  font-poppins  border-[1px] border-[white] rounded-2xl"> Explore the intricate world of Very-Large-Scale Integration (VLSI) technology through a comprehensive two-day hands-on workshop tailored for electronics enthusiasts, providing practical insights into semiconductor design and fabrication.</div>
                </div>

            </div>

            {/* Registration Instructions */}

            <div className="dropdown dropdown-hover  w-[80%] h-[800px]">
                <div tabIndex={0} role="button" className="btn m-12 font-agu text-4xl">Registration Instructions</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>


        </div>
    )
}
