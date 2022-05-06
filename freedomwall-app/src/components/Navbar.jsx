import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { isChecked } from '../Context/ContextAPI';
import { Container } from 'react-bootstrap';
import { Navbar, NavItem, NavbarToggler, Collapse, Nav } from 'reactstrap';

function NavbarComponent() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="bg-dark">
			<Container>
				<Navbar
					color="dark"
					light
					expand="md"
					className="navbar-dark navbar-expand-sm"
				>
					<Link className="navbar-brand" to="/">
						FreedomWall
					</Link>

					<NavbarToggler
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link className="nav-item nav-link" to="/stories">
									Stories
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</Container>
		</div>
	);
}

export default NavbarComponent;
