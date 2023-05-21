import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Priority from "../Priority/Priority";
import Service from "../Service/Service";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Service></Service>
            <ShopByCategory></ShopByCategory>
            <Priority></Priority>
        </div>
    );
};

export default Home;