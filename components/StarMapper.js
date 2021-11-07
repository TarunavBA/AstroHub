import * as React from 'react';
import { View, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import { TweenMax } from 'gsap';
import {
  AmbientLight,
  SphereGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  DeviceOrientationControls,
} from 'three';
import StarHandler from '../Classes/StarHandler';

let deg = 0.01;
let deg1 = 0.01;
let dis = 2;

function polar(angle, distance, angle_) {
  let temp = {
    x: distance * Math.sin(angle_) * Math.cos(angle),
    z: distance * Math.sin(angle_) * Math.sin(angle),
    y: distance * Math.cos(angle_),
  };
  return temp;
}

export default class StarMapper extends React.Component {
  componentDidMount() {
    this.sphere = new Star();
    this.camera = new PerspectiveCamera(100, 0.4, 0.01, 1000);
    this.starhandler = new StarHandler()
  }
  render() {
    return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={async (gl) => {
          // GL Parameter disruption
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

          // Renderer declaration and set properties
          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor('#000000');

          // Scene declaration, add a fog, and a grid helper to see axes dimensions
          const scene = new Scene();
          scene.fog = new Fog('#3A96C4', 1, 10000);
          scene.add(new GridHelper(10, 10));

          // Add all necessary lights
          const ambientLight = new AmbientLight(0x101010);
          scene.add(ambientLight);

          // Add sphere object instance to our scene
          scene.add(this.sphere);

          // Render function
          const render = () => {
            this.camera.updateProjectionMatrix();
            requestAnimationFrame(render);
            renderer.render(scene, this.camera);
            gl.endFrameEXP();
          };
          render();
        }}></GLView>
    );
  }
}

class Star extends Mesh {
  constructor() {
    super(
      new SphereGeometry(1, 16, 16),
      new MeshBasicMaterial({
        color: 0xffffff,
      })
    );
  }
}
