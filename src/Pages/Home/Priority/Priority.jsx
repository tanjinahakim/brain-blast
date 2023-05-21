import {FaBaby, FaBiking, FaBrain, FaPeopleCarry } from "react-icons/fa";
const Priority = () => {
    return (
        <section className="my-20 max-w-5xl mx-auto">
            <h1 className="font text-5xl text-center">Our Priorities</h1>
            <div className="grid lg:grid-cols-4 gap-4 mt-6">
                <div className="shadow-lg border text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300">
                    <FaBaby className="w-20 h-20 lg:mx-20 mx-64 my-4"></FaBaby>
                    <p className="font my-2">Baby Safety Products</p>
                </div>
                <div className="shadow-lg border text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300">
                    <FaBiking className="w-20 h-20 lg:mx-20 mx-64 my-4"></FaBiking>
                    <p className="font my-2">Fast and Easy Delivery</p>
                </div>
                <div className="shadow-lg border text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 duration-300">
                    <FaBrain className="w-20 h-20 lg:mx-20 mx-64 my-4"></FaBrain>
                    <p className="font my-2">Brain Development </p>
                </div>
                <div className="shadow-lg border text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-200 duration-300">
                    <FaPeopleCarry className="w-20 h-20 lg:mx-20 mx-64 my-4 "></FaPeopleCarry>
                    <p className="font my-2">More Communication</p>
                </div>
                
            </div>
        </section>
    );
};

export default Priority;