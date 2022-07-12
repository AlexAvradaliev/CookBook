import HomeHeader from '../../components/Headers/HomeHeader/HomeHeader';
import HomeSearch from '../../components/Headers/HomeSearch/HomeSearch';
import Nav from '../../components/Nav/Nav';
import styles from './Home.module.css';


const Home = () => {

    return (
            <HomeHeader>
                <Nav homeStyles={true} />
                <HomeSearch />
            </HomeHeader>
    );
};

export default Home;
