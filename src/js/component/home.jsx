import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<div className="big-counter">
			<div className="calendar">
				<i className="fa-regular fa-clock-nine"></i>
			</div>
			<div className="one-digit">0</div>
			<div className="two-digit">0</div>
			<div className="three-digit">0</div>
			<div className="four-digit">0</div>
			<div className="five-digit">0</div>
			<div className="six-digit">0</div>
		</div>
		</>
	);
};

export default Home;
