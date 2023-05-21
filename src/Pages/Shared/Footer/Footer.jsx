import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import img from '../../../assets/images/Logo/logo.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1D1847]  mt-20 text-white">
  <div>
    <img src={img} alt="" className="w-24 h-24  rounded-full " />
    <p><span className='font text-2xl'>Brain Blast</span><br/>Find a dream toy for your child`s brain development</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Deliver</a>  
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
    <div>
    <span className="footer-title">Contact Us</span>
     <div className="grid grid-flow-col gap-4">
      <Link to={'https://www.facebook.com/'}><FaFacebook className='w-12 h-12'></FaFacebook></Link>
      <Link to={'https://www.twitter.com/'}><FaTwitter className='w-12 h-12'></FaTwitter></Link> 
      <Link to={'https://www.instagram.com/'}><FaInstagram className='w-12 h-12'></FaInstagram></Link>
    </div>
    <div className="form-control w-80 mt-2">
      <div className="relative">
        <input type="text" placeholder="Enter your email" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
    </div>
</footer>
    );
};

export default Footer;