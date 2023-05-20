import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Toy = () => {
    const toy = useLoaderData();
    const {name,seller,email,price,quantity,description,rating,photo} = toy;
    return (
        <>
           <div className="hero min-h-screen bg-base-200 max-w-5xl mx-auto lg:my-10">
                <div className="hero-content flex-col lg:flex-row Lg:px-10">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="lg:mx-10">
                        <div className="flex justify-between items-center">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <button className="btn btn-outline btn-error btn-sm">Add</button>
                        </div>
                        <div className="flex">
                            <p>{seller}</p>
                            <p className="pl-2">{email}</p>
                            </div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                        />
                    <h3 className="text-6xl py-4 ">${price}</h3>
                    <p><span className="font-bold ">Available Quantity :</span> {quantity}</p>
                    <p className="py-2"><span className="font-bold ">Description :</span><br /> {description}.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Toy;