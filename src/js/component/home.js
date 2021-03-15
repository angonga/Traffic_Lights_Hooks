import React from "react";
import PropTypes from "prop-types";

//create your first component
export class Luces extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}

	render() {
		return (
			<div className="container">
				<div id="luces">
					<div
						className={
							"red ligth " +
							(this.state.selected == "red" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "red" });
						}}
					/>
					<div
						className={
							"yelow ligth " +
							(this.state.selected == "yelow" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "yelow" });
						}}
					/>
					<div
						className={
							"green ligth " +
							(this.state.selected == "green" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "green" });
						}}
					/>
				</div>
			</div>
		);
	}
}
Luces.propTypes = {
	red: PropTypes.string,
	yelow: PropTypes.string,
	green: PropTypes.string
};
