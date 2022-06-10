import React,{Fragment} from 'react'
import NavBar from '../components/navBar/NavBar';
import Juego from '../components/play/play';
const Home = () => {
    return ( 
        <Fragment>
            <NavBar/>
            <Juego/>
        </Fragment>
     );
}
export default Home;