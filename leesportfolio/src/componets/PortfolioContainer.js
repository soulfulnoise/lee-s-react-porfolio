import React, { Component } from "react";
import NavBar from "../componets/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";


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
            return <AboutMe/>;
        } else if (this.state.currentPage === "Work") {
            return <Work/>;
        } else {
            return <ContactMe/>;
        }
    };

    render() {
        return (
            <div>
                <NavBar
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Portfolio;