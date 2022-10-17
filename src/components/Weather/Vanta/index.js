import React from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import RINGS from "vanta/dist/vanta.rings.min.js";
import CELLS from "vanta/dist/vanta.cells.min.js";
import NET from "vanta/dist/vanta.net.min.js";



const initVanta = (vantaRef) => ({
	el: vantaRef.current,
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
	scale: 1.0,
	scaleMobile: 1.0,
});

class Vanta extends React.Component {
	constructor() {
		super();
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.vantaEffect = RINGS(initVanta(this.vantaRef));
	}

	componentDidUpdate(prev) {
		console.log(prev);
		if (prev.city !== this.props.city) {
			if (this.props.city.includes("màu 1")) {
				this.vantaEffect = CLOUDS(initVanta(this.vantaRef));
			}
			if (this.props.city.includes("màu 2")) {
				this.vantaEffect = CELLS(initVanta(this.vantaRef));
			}
			if (this.props.city.includes("màu 3")) {
				this.vantaEffect = NET(initVanta(this.vantaRef));
			}
			if (this.props.city.includes("ok")) {
				this.vantaEffect = RINGS(initVanta(this.vantaRef));
			}
		}
	}

	componentWillUnmount() {
		if (this.vantaEffect) {
			this.vantaEffect.destroy();
		}
	}

	render() {

		return (
			<div className="vanta" style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}></div>
		);
		
	}
}

export default Vanta;
