import Marquee from "react-fast-marquee";
import img1 from '../../../assets/partnar/fisher.png'
import img2 from '../../../assets/partnar/frog.png'
import img3 from '../../../assets/partnar/lego.jpg'
import img4 from '../../../assets/partnar/nerf.png'
import img5 from '../../../assets/partnar/images.png'
const Service = () => {
    return (
        <div>
            <h1 className='font font-bold text-5xl text-center my-20'>Featured Partner</h1>
            <Marquee>
                <img src={img1} style={{height:"100px",width:"100px"}}  className="mx-20" />
                <img src={img2} style={{height:"100px",width:"100px"}}  className="mx-20"/>
                <img src={img3} style={{height:"100px",width:"100px"}}  className="mx-20"/>
                <img src={img4} style={{height:"100px",width:"100px"}}  className="mx-20"/>
                <img src={img5} style={{height:"100px",width:"100px"}}  className="mx-20"/>
            </Marquee>
            
        </div>
    );
};

export default Service;