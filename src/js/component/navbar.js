import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
	return (
		<nav className="nav d-flex justify-content-center px-5">
			<div className="d-flex gap-2 align-items-center">
				<Link to="/">
					<button className="btn btn-custom">AGENDA</button>
				</Link>
				<Link to="/nuevo">
					<button className="btn btn-custom">AÑADIR CONTACTO</button>
				</Link>
				<div className="enlacenavgrapper d-flex gap-2">
					<a className="enlacenav" href="https://www.linkedin.com/in/joansimonutti/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>
					<a className="enlacenav" href="https://github.com/JoanSimonutti" target="_blank" rel="noopener noreferrer"><FaGithub size={35} /></a>
				</div>
			</div>
		</nav>
	);
};
