import React,{Fragment} from 'react'
import NavBar from '../components/nabar/NavBar';
import Juego from '../components/juego/juego';
const Home = () => {
    return ( 
        <Fragment>
            <NavBar/>
            <Juego/>
        </Fragment>
     );
}
export default Home;