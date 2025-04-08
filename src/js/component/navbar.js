import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="nav d-flex justify-content-evenly">
			<div className="d-flex justify-content-start gap-2">
				<h1><strong>AGENDA DE CONTACTOS</strong></h1>
			</div>
			<div className="d-flex justify-content-end gap-2">
				<Link to="/">
					<button className="btn btn-custom">Home</button>
				</Link>
				<Link to="/nuevo">
					<button className="btn btn-custom">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
