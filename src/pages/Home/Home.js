import Cuisines from '../../components/Common/Cuisines/Cuisines';
import Main from '../../components/Common/Main/Main';
import HomeHeader from '../../components/Headers/Home-header/HomeHeader';
import HomeSearch from '../../components/Headers/Home-search/HomeSearch';
import Nav from '../../components/Nav/Nav';
import styles from './Home.module.css';


const Home = () => {

    return (
        <>
            <HomeHeader>
                <Nav homeStyles={true} />
                <HomeSearch />
            </HomeHeader>
            <Main>
                <Cuisines />
            </Main>
        </>
    );
};

export default Home;
