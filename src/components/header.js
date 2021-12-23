import * as React from "react";
import { Outlet, Link} from 'react-router-dom';
import '../css/header.css'


function HeaderComponent(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <img alt= "logo" src= "assets/logo.png" style= {{width: '50px'}}></img>
                <a className="navbar-brand" href="#"><h2>FlashLoan</h2></a>

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item header-menu">
                        <Link className="nav-link" to="/">Get to know <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link header-menu" to="/simple-powerful-profitable-bsc-eth-flash-loan-method-tutorial">How to Code</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
                    </form>
                </div>
            </nav>
            <Outlet/>
        </>
        
    );
}

export default HeaderComponent;