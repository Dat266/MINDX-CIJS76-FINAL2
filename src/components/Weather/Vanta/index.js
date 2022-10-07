import React from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min.js";

class Vanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = CELLS({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xfff33f,
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
