import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./pages/Home";


class Portfolio extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage:page});
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home/>;
        } else if (this.state.currentPage === "AboutMe"){
            return <Aboutme/>;
        } else if (this.state.currentPage === "Porfolio") {
            return <Portfolio/>;
        } else {
            return <Contact />;
        }
    };
}