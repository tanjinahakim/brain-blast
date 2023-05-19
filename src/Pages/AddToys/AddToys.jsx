import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
const AddToys = () => {
    const {user}=useContext(AuthContext);
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newToy = {name,seller,email,quantity,price,rating,category,description,photo}
        console.log(newToy)
        fetch('http://localhost:5000/addToy',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Product added successfully',
                })
            }
        })
        form.reset()
    }
    return (
        <>
            <div className=" bg-[#daedf1] ">
                <h1 className="text-center font font-bold text-4xl pt-10">Add Toy</h1>
                <div className="max-w-4xl mx-auto py-10 ">
                    <form onSubmit={handleAddToy}>
                        {/* ToyName and Seller Name*/}
                        <div className="md:flex">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered   w-full " />
                            </label>
                        </div>
                            <div className="form-control md:w-1/2 ml-4 ">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="seller" placeholder="Seller" className="input input-bordered  w-full" defaultValue={user?.displayName} readOnly/>
                                </label>
                            </div>
                        </div>
                        {/* Seller Email and Seller Name*/}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered  w-full " defaultValue={user?.email}  readOnly/>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4 ">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered  w-full"  />
                                </label>
                            </div>
                        </div>
                        {/* Price and Rating*/}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered  w-full " />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4 ">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered  w-full"  />
                                </label>
                            </div>
                        </div>
                        {/* Sub Category and Description*/}
                        <div className="md:flex">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select className="select w-full" type="text" name="category" >
                                <option >Math</option>
                                <option>Language</option>
                                <option>Science</option>
                                <option>Others</option>
                                </select>
                            </div>
                            <div className="form-control md:w-1/2 ml-4 ">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered  w-full"  />
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                        <input type="submit" className="btn btn-md font w-full mt-6  bg-[#27244E] text-white text-lg  border-white border-2" value="Add Toy"/>
                        </div>
                        </form>
                </div>
            </div>
        </>
    );
};

export default AddToys;