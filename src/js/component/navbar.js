import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
	return (
		<nav className="nav d-flex justify-content-between px-5">
			<div className="d-flex flex-column justify-content-start gap-2">
				<h1><strong><u>AGENDA DE CONTACTOS</u></strong></h1>
			</div>
			<div className="d-flex justify-content-end gap-2 align-items-center">
				<Link to="/">
					<button className="btn btn-custom">HOME</button>
				</Link>
				<Link to="/nuevo">
					<button className="btn btn-custom">AÑADIR NUEVO CONTACTO</button>
				</Link>
				<div className="enlacenavgrapper d-flex gap-2">
					<a className="enlacenav" href="https://www.linkedin.com/in/joansimonutti/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>
					<a className="enlacenav" href="https://github.com/JoanSimonutti" target="_blank" rel="noopener noreferrer"><FaGithub size={35} /></a>
				</div>
			</div>
		</nav>
	);
};
