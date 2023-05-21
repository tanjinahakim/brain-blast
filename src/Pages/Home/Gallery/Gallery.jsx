import './Gallery.css'
import bg2 from '../../../assets/images/gallery/bg2.jpg';
import bg3 from '../../../assets/images/gallery/bg3.jpg';
import bg4 from '../../../assets/images/gallery/bg4.jpg';
import bg5 from '../../../assets/images/gallery/bg5.jpg';
import bg6 from '../../../assets/images/gallery/bg6.jpg';
import bg1 from '../../../assets/images/gallery/bg7.jpg';
const Gallery = () => {
    
  
    return (
        <>
            
            <section>
                <h1 className='font font-bold text-5xl text-center my-20'>Find best <span className='text-pink-600'>Toys</span> for your kids</h1>
                <div className='max-w-4xl mx-auto grid lg:grid-cols-3 gap-2'>
                    <div>
                        <img src={bg1}/>
                    </div>
                    <div>
                        <img src={bg2}/>
                    </div>
                    <div>
                        <img src={bg3} />
                    </div>
                    <div>
                        <img src={bg4}/>
                    </div>
                    <div>
                        <img src={bg5}/>
                    </div>
                    <div>
                        <img src={bg6}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;