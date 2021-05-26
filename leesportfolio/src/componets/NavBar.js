import React from "react";

function NavBar(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home"
                onClick={() => props.handlePageChange("Home")}
                className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
                    </a>
            </li>
            <li className="nav-item">
                <a href="#aboutme"
                onClick={() => props.handlePageChange("Aboutme")}
                className={props.currentPage === "Aboutme" ? "nav-link active" : "nav-link"}
                >
                    Aboutme
                    </a>
            </li>

            <li className="nav-item">
                <a href="#portfolio"
                onClick={() => props.handlePageChange("portfolio")}
                className={props.currentPage === "portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                    </a>
            </li>

            <li className="nav-item">
                <a href="#ContactMe"
                onClick={() => props.handlePageChange("ContactMe")}
                className={props.currentPage === "ContactMe" ? "nav-link active" : "nav-link"}
                >
                  ContactMe
                    </a>
            </li>
        </ul>  
    );
}
export default NavBar;
