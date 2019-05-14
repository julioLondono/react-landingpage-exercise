import React from "react";
import { Card } from "./card.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link disabled"
									href="#"
									tabIndex="-1"
									aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility class for typography and spacing to
						space content out within the larger container.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</div>

				<div className="row text-center">
					<div className="col-lg-3 col-md-6 mb-4">
						<Card
							title="Card #1"
							content="Content of Card # 1, should be placed below the title"
						/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Card
							title="Card #2"
							content="Content of Card # 2, should be placed below the title"
						/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Card
							title="Card #3"
							content="Content of Card # 3, should be placed below the title"
						/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Card
							title="Card #4"
							content="Content of Card # 4, should be placed below the title"
						/>
					</div>
				</div>
				<footer className="py-5 bg-dark">
					<div className="container">
						<p className="m-0 text-center text-white">
							Copyright © Your Website 2019
						</p>
					</div>
				</footer>
			</div>
		);
	}
}
