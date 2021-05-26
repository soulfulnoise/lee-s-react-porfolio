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



        </ul>

        


        
    )

}
