import HomeHeader from '../../components/Headers/HomeHeader/HomeHeader';
import Nav from '../../components/Nav/Nav';
import styles from './Home.module.css';


const Home = () => {

    return (
            <HomeHeader>
                <Nav homeStyles={true} />
            </HomeHeader>
    );
};

export default Home;
