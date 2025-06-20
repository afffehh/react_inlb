import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.css'; // Importing Bootstrap CSS from parent folder

function Navbar() {

    return (
        <>  
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TuneNest</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/tunetrek">TuneTrek</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );

}
export default Navbar;