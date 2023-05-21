import { useEffect, useState } from "react";
import './Gallery.css'
const Gallery = () => {
    const [gallery,setGallery]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/gallery')
    .then(res=>res.json())
    .then(data=>setGallery(data))
   },[])
  
    return (
        <>
            
            <section className="mt-20">
            <h1 className='font font-bold text-5xl text-center'>Find best <span className='text-pink-600'>Toys</span> for your kids</h1>
            <div className="p-24 grid lg:grid-cols-4 gap-4">
                {
                     gallery.map((image,i)=>(

                        <img 
                        key={i}
                        src={image.url} 
                        className=" p-4 shadow-lg bg-purple-200 transition-transform group-hover:scale-110 duration-200 "
                        />
                        ))
                }
            </div>
            </section>
        </>
    );
};

export default Gallery;