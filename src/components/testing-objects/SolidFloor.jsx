import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function SolidFloor({ renderDistance = 40 }) {
  const meshRef = useRef()

  useFrame((state) => {
    // Keep the solid plane centered under the player
    meshRef.current.position.x = state.camera.position.x
    meshRef.current.position.z = state.camera.position.z
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
      {/* The plane should be large enough to cover the fog distance */}
      <planeGeometry args={[renderDistance * 2.5, renderDistance * 2.5]} />
      <meshStandardMaterial color="#fafafa" />
    </mesh>
  )
}

export default SolidFloor