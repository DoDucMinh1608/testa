import { Grid, Sky } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import SolidFloor from "./SolidFloor";

function WorldGround({ renderDistance = 32 }) {
  const { camera } = useThree()
  const groundRef = useRef()

  const camPosition = new THREE.Vector3()
  useFrame((state, delta) => {
    camera.getWorldPosition(camPosition)
    groundRef.current.position.x = camPosition.x
    groundRef.current.position.z = camPosition.z
  })

  return (
    <group>
      {/* <Grid args={[20, 20]} cellSize={0.1} sectionSize={1} cellColor={0xffffff} sectionColor={0x4d4b4b} infiniteGrid />*/}
      <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[renderDistance, renderDistance]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* 1. Atmospheric Sky */}
      <Sky />

      {/* 3. The Floor: Must fade out at the same distance */}
      <Grid
        infiniteGrid
        fadeDistance={renderDistance}
        fadeStrength={1}
        cellSize={0.2}
        sectionSize={1}
        cellColor="#6f6f6f"
        sectionColor="#9d4b4b"
      />
    </group>
  )
}

export default WorldGround