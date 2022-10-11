import React from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min.js";

class Vanta extends React.Component {
	constructor() {
		super();
		this.vantaRef = React.createRef();
	}
	componentDidMount() {
		this.vantaEffect = CLOUDS({
			el: this.vantaRef.current,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			skyColor: 0x649af7,
			cloudColor: 0x484448,
			sunColor: 0xf27200,
			sunGlareColor: 0xffffff,
		});
	}
	componentWillUnmount() {
		if (this.vantaEffect) {
			this.vantaEffect.destroy();
		}
	}
	render() {
		return (
			<div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}></div>
		);
	}
}

export default Vanta;
