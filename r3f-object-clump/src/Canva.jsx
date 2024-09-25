import React from 'react'
import { Physics } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Pointer from "./Pointer";
import Clump from "./Clump";
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing";
import Sex from './Components/Sex';

const Canva = () => {
  return (
    <div className=" w-full h-screen">
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        shadows
        camera={{
          fov: 35,
          near: 1,
          far: 40,
          position: [0, 0, 20],
        }}
      >
        <color attach="background" args={["#dfdfdf"]} />

        {/* add light variances  */}
        <Environment files="stadium_01_4k.hdr" background blur={0} />
        <ambientLight intensity={4} />
        <spotLight
          intensity={4}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />

        <Physics gravity={[0, 2, 0]} iterations={10}>
          {/* <Debug color="black" scale={1.1}> */}
          <Pointer />
          <Clump />
          {/* children */}
          {/* </Debug> */}
        </Physics>
        <OrbitControls
          enableDamping={true}
          enablePan={true}
          enableZoom={false}
        />

        <EffectComposer  disableNormalPass multisampling={0}>
          <N8AO
            halfRes
            color="black"
            aoRadius={2}
            intensity={1}
            aoSamples={6}
            denoiseSamples={4}
          />
          <SMAA />
        </EffectComposer >
      </Canvas>  
      <Sex/> 
    </div>
  )
}

export default Canva
