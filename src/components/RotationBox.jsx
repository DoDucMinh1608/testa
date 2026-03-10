import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function RotatingBox({ args = [1, 1, 1], position = [0, 0, 0] }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={0xff0000} />
    </mesh>
  )
}

export default RotatingBox