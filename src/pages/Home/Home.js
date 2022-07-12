import Cuisines from '../../components/Common/Cuisines/Cuisines';
import Groups from '../../components/Common/Groups/Groups';
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
                <Groups />
            </Main>
        </>
    );
};

export default Home;
