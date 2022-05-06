import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { isChecked } from '../Context/ContextAPI';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
			<div className="container">
				<Link className="navbar-brand" to="/">
					FreedomWall
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link" to="/stories">
							Stories
						</Link>
					</div>
					<div className="navbar-nav ms-auto">
						{/* <label>
								<Toggle
									icons={false}
									onChange={(e) => isChecked(e.target.checked)}
								/>
								<span>No icons</span>
							</label> */}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
