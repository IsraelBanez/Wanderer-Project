import React, {useRef, useEffect, useState} from 'react';
import {
    OrbitControls, 
    PerspectiveCamera, 
    Environment,
    Text,
    Lightformer,
    RoundedBox,
    Sparkles,
    Clouds,
    Cloud
} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import { radToDeg } from 'three/src/math/MathUtils';
import * as THREE from 'three';
import GSAP from 'gsap';

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

export default function AnimatedSphere(){

    /* Mouse controls camera */
    const orbitControlRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlRef.current){
            const {x, y} = state.mouse;
            orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlRef.current.update();
        }
    });


    return(
        <>
        {/* Camera*/}
        <PerspectiveCamera makeDefault position={[0, 1, 5]}/> 
        <OrbitControls 
            ref={orbitControlRef}
            enableZoom={false} 
            minPolarAngle={angleToRadians(60)} 
            maxPolarAngle={angleToRadians(80)}
        />

        {/* Lighting */}
        <ambientLight args={["#ffffff", 0.9]}/> 
        <pointLight args={["white", 15, 10, 2]} position={[-1.5, 2.4, 1]} castShadow />
        <Sparkles count={10} size={5} position={[0, 0.8, 0]} scale={[4, 1.5, 4]} speed={0.3} color="yellow"/>
       

        {/* Environment*/}
        <Environment background>
            <Lightformer />
            <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color="#2266cc" side={THREE.BackSide}  />
            </mesh>
        </Environment>

        {/* Text */ }
        <Text 
            color="black" 
            position={[0, 1.8, -1]}
            fontSize={0.5} 
            characters="abcdefghijklmnopqrstuvwxyz!?"
        >
            Where Ya' From Stanger?
        </Text>

        <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud seed={6} segments={40} bounds={[15, 4, 5]} volume={6} color="white" fade={25} concentrate="inside" speed={0.1} />
            <Cloud seed={2} segments={50} bounds={[15, 4, 5]} volume={8} color="pink" fade={100} concentrate="inside" speed={0.1} />
        </Clouds>

        {/* Ball */}
        <mesh 
            position={[0.07, 0.9, 0]} 
            castShadow 
        >
            <sphereGeometry args={[0.6, 32, 32]}  />
            <meshStandardMaterial color="red" metalness={0.4} roughness={0.2}/>
        </mesh>   

        {/* Metal pin */}
        <mesh 
            position={[-0.1, 0, 0]} 
            rotation={[(angleToRadians(180)), 0 , (angleToRadians(15))]}
            castShadow
        >
            <cylinderGeometry args={[0, 0.05, 1.25, 64, 1, false, 0, 6.28]} />
            <meshStandardMaterial color="grey" metalness={0.5} roughness={0.1} />
        </mesh>

        {/* Floor- Grass */}
        <RoundedBox args={[5, 0.2, 5]} radius={0.05} position={[0,0,0]} receiveShadow  castShadow>
            <meshStandardMaterial color="green" />
        </RoundedBox>

        <mesh position={[-0.069, 0.09,0]} rotation={[(angleToRadians(90)), 0, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.04, 0.02, 20, 100]}  />
            <meshStandardMaterial color="#804C1C" />
        </mesh>
        

        {/* Grass-Humps */}
        <RoundedBox args={[0.8, 0.2, 0.8]} radius={0.05} position={[-1.5,0.02,1.5]} castShadow  receiveShadow>
            <meshStandardMaterial color="green" />
        </RoundedBox>
        <RoundedBox args={[0.9, 0.2, 0.9]} radius={0.05} position={[1.5,0.06, -1.5]} castShadow receiveShadow >
            <meshStandardMaterial color="green" />
        </RoundedBox>
        <RoundedBox args={[0.6, 0.2, 0.6]} radius={0.05} position={[-1.2,0.01, -1.5]} castShadow  receiveShadow>
            <meshStandardMaterial color="green" />
        </RoundedBox>

        {/* Grass-Clump */}
        <mesh position={[-2, 0.18, 0]} rotation={[(angleToRadians(160)), 0 , (angleToRadians(15))]} receiveShadow castShadow>
            <capsuleGeometry args={[0.07, 0.4, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[-2.15, 0.18, 0]} rotation={[(angleToRadians(180)), 0 , (angleToRadians(155))]} receiveShadow castShadow>
            <capsuleGeometry args={[0.06, 0.2, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[-1.90, 0.16, 0.1]} rotation={[(angleToRadians(200)), 0 , (angleToRadians(35))]} receiveShadow castShadow>
            <capsuleGeometry args={[0.05, 0.2, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>

        {/* Grass-Clump2 */}
        <mesh position={[1.9, 0.16, 1]} rotation={[(angleToRadians(160)), 0 , (angleToRadians(15))]}  castShadow receiveShadow>
            <capsuleGeometry args={[0.07, 0.4, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[1.8, 0.16, 1]} rotation={[(angleToRadians(180)), 0 , (angleToRadians(155))]}  castShadow receiveShadow>
            <capsuleGeometry args={[0.06, 0.2, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[1.90, 0.14, 1.1]} rotation={[(angleToRadians(200)), 0 , (angleToRadians(35))]}  castShadow receiveShadow>
            <capsuleGeometry args={[0.05, 0.2, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>

        {/* Grass-Clump3 */}
        <mesh position={[0.1, 0.13, -1.4]} rotation={[(angleToRadians(160)), 0 , (angleToRadians(15))]}  castShadow receiveShadow>
            <capsuleGeometry args={[0.06, 0.4, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[0, 0.10, -1.4]} rotation={[(angleToRadians(180)), 0 , (angleToRadians(155))]}  castShadow receiveShadow>
            <capsuleGeometry args={[0.04, 0.2, 4, 8 ]} />
            <meshStandardMaterial color="green" />
        </mesh>

        {/* Rocks */}
        <mesh position={[-0.5, 0.06, 0]} castShadow>
            <dodecahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial color="grey"  roughness={1}/>
        </mesh>
        <mesh position={[-2, 0.08, -1.9]} castShadow >
            <dodecahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="grey"  roughness={1}/>
        </mesh>
        <mesh position={[2, 0.02, -1.0]} castShadow  receiveShadow>
            <tetrahedronGeometry args={[0.2, 2]} />
            <meshStandardMaterial color="grey"  roughness={1}/>
        </mesh>

        {/* Floor- Dirt */}
        <RoundedBox args={[4.9, 0.7, 4.9]} radius={0.05} position={[0, -0.32, 0]} receiveShadow  castShadow>
            <meshStandardMaterial color="#B46E2C" />
        </RoundedBox>
        
        {/* Floor- Dirt (Front) */}
        <RoundedBox args={[0.5, 0.3, 0.1]} radius={0.05} position={[-1.5, -0.2, 2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.2, 0.1]} radius={0.05} position={[0.8, -0.1, 2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.2, 0.1]} radius={0.05} position={[2, -0.4, 2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[1.7, -0.5, 2.41]}  receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[-0.3, -0.25, 2.41]}  receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.3, 0.1]} radius={0.05} position={[0, -0.4, 2.41]}  receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.2, 0.1]} radius={0.05} position={[-2, -0.4, 2.41]}  receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        
        {/* Floor- Dirt (Back) */}
        <RoundedBox args={[0.5, 0.3, 0.1]} radius={0.05} position={[-1.5, -0.2, -2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.2, 0.1]} radius={0.05} position={[0.8, -0.1, -2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.2, 0.1]} radius={0.05} position={[2, -0.4, -2.41]}  receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[1.7, -0.5, -2.41]}  receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[-0.3, -0.25, -2.41]}  receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.3, 0.1]} radius={0.05} position={[0, -0.4, -2.41]}  receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.2, 0.1]} radius={0.05} position={[-2, -0.4, -2.41]}  receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>

        {/* Floor- Dirt (Left) */}
        <RoundedBox args={[0.5, 0.3, 0.1]} radius={0.05} position={[-2.41, -0.2, -1.5]}  rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.2, 0.1]} radius={0.05} position={[-2.41, -0.1, 0.8,]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.2, 0.1]} radius={0.05} position={[-2.41, -0.4, 2]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[-2.41, -0.5, 1.7]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[-2.41, -0.25, -0.3]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.3, 0.1]} radius={0.05} position={[-2.41, -0.4, 0]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.2, 0.1]} radius={0.05} position={[-2.41, -0.4, -2]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        
        {/* Floor- Dirt (Right) */}
        <RoundedBox args={[0.5, 0.3, 0.1]} radius={0.05} position={[2.41, -0.2, -1.5]}  rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.2, 0.1]} radius={0.05} position={[2.41, -0.1, 0.8,]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.2, 0.1]} radius={0.05} position={[2.41, -0.4, 2]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#804C1C" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[2.41, -0.5, 1.7]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.15, 0.1]} radius={0.05} position={[2.41, -0.25, -0.3]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="grey" />
        </RoundedBox>
        <RoundedBox args={[0.4, 0.3, 0.1]} radius={0.05} position={[2.41, -0.4, 0]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.2, 0.1]} radius={0.05} position={[2.41, -0.4, -2]} rotation={[0, angleToRadians(90),0]} receiveShadow>
            <meshLambertMaterial color="#BE924A" />
        </RoundedBox>
        
       </>
    );
}