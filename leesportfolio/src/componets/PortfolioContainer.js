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
}