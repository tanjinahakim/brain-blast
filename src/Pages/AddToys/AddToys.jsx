import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }


    return (
        <>
                        <section className="max-w-6xl mx-auto">
                <div className="bg-gray-100 py-10 my-10">
                <h1 className="text-center font font-bold text-4xl my-4">Add Toy</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
        
                        <div className=" border-2 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-2">
                        <div>
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input {...register("toyName", { required: true })} placeholder="Enter toy name" className="border w-full py-2 rounded-md px-2"/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input {...register("sellerName")} placeholder="Seller Name" className="border w-full py-2 rounded-md px-2" value={user?.displayName}/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input {...register("sellerEmail")} placeholder="Seller Email" className="border w-full py-2 rounded-md px-2" value={user?.email}/>
                        </div>
                        
                        <div>
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>    
                        <select {...register("toys")} className="border w-full py-2 rounded-md px-2">
                            <option value="language">Language</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="colours">other</option>
                        </select>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price")} placeholder="Price" className="border w-full py-2 rounded-md px-2"/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input {...register("quantity")} placeholder="Quantity" className="border w-full py-2 rounded-md px-2"/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Raiting</span>
                        </label>
                        <input {...register("rating")} placeholder="Rating" className="border w-full py-2 rounded-md px-2"/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input {...register("description")} placeholder="Description" className="border w-full py-2 rounded-md px-2"/>
                        </div>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register("photoURL")} placeholder="Photo URL" className="border w-full py-2 rounded-md px-10 "/>
                        </div>
                        <div>
                        <input type="submit" className="border bg-[#271033] py-2 px-10 rounded-xl w-full my-4 font text-white" />
                        </div>
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddToys;