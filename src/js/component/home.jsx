import React from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container bg-dark text-light">
			<div className="row">
				<p>Falta icono reloj</p>
			</div>
			<div id="one-digit">0</div>
			<div id="two-digit">0</div>
			<div id="three-digit">0</div>
			<div id="four-digit">0</div>
			<div id="five-digit">0</div>
			<div id="six-digit">0</div>
		</div>
		</>
	);
};

export default Home;
