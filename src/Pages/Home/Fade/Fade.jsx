import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Fade = () => {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-left" className='mt-10 max-w-xl mx-auto border-white bg-blue-950 '>
      <p className='font text-white p-5'>Explore best toy for your child brain and knowledge development. We provide safe and nature friendly toy and kits for your children.</p>
    </div>
              
    );
};

export default Fade;