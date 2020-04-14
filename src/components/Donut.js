import React, { useState, useRef, useEffect} from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useLoader, useFrame } from 'react-three-fiber'
import { useSpring, animated as a } from 'react-spring/three'


export default ({setShowLoader, icingColor}) => {
    const group = useRef()
    const outerGroup = useRef()
    const [hovered, setHovered ] = useState(false);
    const [active, setActive] = useState(false);


    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered]);
    let ugh = 360;

    const props = useSpring({
        scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
        rotation: active ? [0, THREE.Math.degToRad(ugh), 0] : [0, THREE.Math.degToRad(720), 0]
      })

    const {nodes, materials} = useLoader(GLTFLoader, '/newdonut.gltf', loader=>{
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco-gltf/')
        loader.setDRACOLoader(dracoLoader)
        console.log('donut uploaded');
      })

    React.useEffect(() => {
        setShowLoader(false)
    }, []);

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setActive(!active);
        console.log('TEST: ', icingColor);
    }, [icingColor]);

    // useEffect(() => testMe(), [icingColor]);

    // function testMe(){
    //     console.log('icing updated');
    //     setActive(true);
    // }

//     useFrame( ({state, clock}) => {
        
//     }
//    )


    return(
       
       <a.group
        ref={outerGroup}
        displose={null}
        >
            <a.group
                ref={group}
                dispose={null}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                rotation={props.rotation}
                scale={props.scale}>
                    <a.mesh 
                        material={materials['Material.001']} 
                        geometry={nodes.Icing.geometry} 
                        position={[0, 0, 0]}
                         >
                            <meshStandardMaterial
                              attach = "material"
                              color={icingColor}
                              />
                    </a.mesh>
                    <mesh material={materials['Material.002']} geometry={nodes.Donut.geometry} position={[0, 0, 0]} />
            </a.group>
        </a.group>
     
    )
  
}