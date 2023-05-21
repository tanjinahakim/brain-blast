import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Priority from "../Priority/Priority";
import Service from "../Service/Service";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../../../hooks/useTitle";
import Fade from "../Fade/Fade";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Service></Service>
            <Fade></Fade>
            <ShopByCategory></ShopByCategory>
            <Priority></Priority>
        </div>
    );
};

export default Home;