import * as React from "react";
import { Outlet, Link} from 'react-router-dom';
import '../css/header.css'


function HeaderComponent(props) {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light header">
                <img src= "assets/logo.png" style= {{width: '50px'}}></img>
                <a class="navbar-brand" href="#"><h2>FlashLoan</h2></a>

                <div class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item header-menu">
                        <Link class="nav-link" to="/">Get to know <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link header-menu" to="/simple-powerful-profitable-bsc-eth-flash-loan-method-tutorial">How to Code</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </form>
                </div>
            </nav>
            <Outlet/>
        </>
        
    );
}

export default HeaderComponent;