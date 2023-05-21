import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Toys = ({toy}) => {
    const {_id,photo,name,rating,price}= toy
    return (
        <>
            <div className="relative max-w-sm overflow-hidden rounded-2xl shadow-lg group">
                <img src={photo}  className="transition-transform group-hover:scale-110 duration-200 " style={{height:"20vw"}} />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                    <div className='text-white relative p-2 ml-2'>
                    <h2 className='text-xl font font-bold'>{name}</h2>
                    <p className='font1 text-lg'>${price}</p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                        />
                    </div>
                    <Link to={`/toy/${_id}`}><button className='btn  btn-sm absolute bottom-5 right-2 text-white bg-transparent text-xl border-none'><FaExternalLinkAlt></FaExternalLinkAlt></button></Link>
                </div>
            </div>
        </>
    );
};

export default Toys;