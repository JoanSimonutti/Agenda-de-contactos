import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="nav d-flex justify-content-end gap-2">
			<Link to="/">
				<button className="btn btn-primary">Home</button>
			</Link>
			<Link to="/nuevo">
				<button className="btn btn-primary">Add New Contact</button>
			</Link>
		</nav>
	);
};
