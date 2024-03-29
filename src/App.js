import React, { useState,  Suspense, useRef} from "react"
import { ReactSVG } from 'react-svg'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Transition, animated } from 'react-spring/renderprops'
import { Canvas, extend, useThree, useFrame} from 'react-three-fiber'
import Donut from './components/Donut'
import Interface from './components/Interface'


import './index.scss'

extend({ OrbitControls })

export default () => {

  const [showLoader, setShowLoader] = React.useState(true);
  const [icingColor, setIcingColor] = useState('#009DDC');
  const [addSprinkles, setAddSprinkles] = useState(false);

  const Controls = () => {
    const orbitRef = useRef();
    const { gl, camera } = useThree();
  
    useFrame(()=>{
      orbitRef.current.update()
    })
  
    return(
      <orbitControls
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        enableZoom={false}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }

  const Loading = (props) =>{
    console.log('loading');
    return(
      <animated.div  style={props.style} className="Loading__container" >
           <div className="Loading__spinner"><ReactSVG src="donut.svg" /></div>
       </animated.div>
    )
  }

  function radioChangeHandler(colorValue){
      setIcingColor(colorValue);
  }

  function sprinklesChangeHandler(sprinkleValue){
    setAddSprinkles(!addSprinkles)
  }

  return ( 
        < div className="App">
        
          <Transition
                items={showLoader}
                initial={{opacity: 1}}
                enter={{ opacity: 1}}
                from={{ opacity: 1}}
                leave={{ opacity: 0}}>
                {showLoader =>
                 showLoader && (props => <Loading style={props}/>) }
          </Transition> 

          
          <div className="App__canvas">

            <Interface 
              icingChange={(colorValue)=> radioChangeHandler(colorValue)}
              icingColor = {icingColor}
              sprinklesChange={(sprinkleValue) => sprinklesChangeHandler(sprinkleValue)}
              addSprinkles= {addSprinkles} />

            <Canvas camera={{ position: [0, 0.25, 0.2] }} 
                    onCreated={({ gl }) => {
                      gl.shadowMap.enabled= true
                      gl.shadowMap.type = THREE.PCFSoftShadowMap
              }}>
                <ambientLight/>
                <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
                <fog attach="fog" args={["black", 10, 25]}/>
                <Controls />
                <Suspense fallback={null}>
                    <Donut 
                    setShowLoader={setShowLoader}
                    icingColor={icingColor}
                    addSprinkles={addSprinkles} />
                </Suspense>
            </Canvas>

          </div>

  </div>
)
}
