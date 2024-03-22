import React from "react";

const Navbar: React.FC = () =>{
    return(
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                <div className="text-white font-bold text-xl"><a href="#home">Sudhin Karki</a></div>
                
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;