import img from '../../../assets/images/banner/Cloudy.svg'
import letter from '../../../assets/images/banner/letter.png'
import toys from '../../../assets/images/banner/toys.png'
const Banner = () => {
    return (
        <>
            <section className='relative bg-gray-50' >
            <img src={toys} className='absolute top-8 h-32 right-7 animate-pulse' />
                <div className='text-center absolute inset-x-4 inset-y-28 '>
                 <p>Explore best learning toys for your smart child</p>
                <h1 className='font text-4xl'> Brain Blast</h1>
                <h3>Find a dream toy for your child`s brain development </h3>
                </div>
                <img src={img}alt="" />
                <img src={letter} className='absolute top-5 h-32 left-5 animate-pulse' />
            </section>
        </>
    );
};

export default Banner;