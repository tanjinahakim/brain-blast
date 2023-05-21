import { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';


const ShopByCategory = () => {
    const [toys,setToys]=useState([]);
    const [activeTab, setActiveTab] = useState("Math");
    useEffect(() => {
        fetch(`https://brain-blast-tanjinahakim.vercel.app/allToysCategory/${activeTab}`)
          .then((res) => res.json())
          .then((result) =>{
            setToys(result)
            console.log(result)
            console.log(activeTab);
          });
      }, [activeTab]);
      const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <section className='mt-20 mb-50'>
            <h1 className='font font-bold text-5xl text-center'>Popular <span className='text-pink-600'>Toys</span> </h1>
           <div className="tabs tabs-boxed max-w-xl mx-auto mt-14 relative">
            <div className=' absolute left-1/4 font-bold font space-x-3 '>
            <a className="tab hover:border px-4 hover:text-blue-600 hover:text-lg " onClick={() => handleTabClick("Math")}>Math</a> 
            <a className="tab px-4 hover:border hover:text-blue-600 hover:text-lg " onClick={() => handleTabClick("Science")}>Science</a> 
            <a className="tab hover:border px-4 hover:text-blue-600 hover:text-lg " onClick={() => handleTabClick("Language")}>Language</a>
            </div>
            </div>
            <div className=" grid lg:grid-cols-3 space-y-5 lg:space-x-3 mt-6 lg:max-w-5xl lg:mx-auto mx-20 min-w-screen ">
                {toys?.map((toy) => (
                <Toys key={toy._id} toy={toy}></Toys>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;