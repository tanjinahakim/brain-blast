import img from '../../../assets/images/banner/Cloudy.svg'
import letter from '../../../assets/images/banner/letter.png'
import toys from '../../../assets/images/banner/toys.png'
const Banner = () => {
    return (
        <>
            <section className='relative bg-gray-50' >
            <img src={toys} className='absolute top-8 h-32 right-7 animate-pulse' />
                <div className='text-center absolute inset-x-4 inset-y-16 '>
                <h1 className='font text-6xl'> Br<span className='text-pink-500 text-8xl animate-bounce'>A</span>in Bl<span className='text-blue-500 animate-spin'>a</span>st</h1>
                <h3 className='menu-font'>Find a dream toy for your child`s brain development,<br/>Explore best learning toys for your smart child </h3>
                </div>
                <img src={img}alt="" />
                <img src={letter} className='absolute top-5 h-32 left-5 animate-pulse' />
            </section>
        </>
    );
};

export default Banner;