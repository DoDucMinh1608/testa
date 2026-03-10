import { Grid } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

function WorldGround() {
  const { camera } = useThree()
  const groundRef = useRef()

  return (
    <>
      <Grid args={[100, 100]} cellSize={0.1} sectionSize={1} cellColor={0x6f6f6f} sectionColor={0x9d4b4b} infiniteGrid />
      <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </>
  )
}

export default WorldGround