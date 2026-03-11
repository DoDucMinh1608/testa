import { useLayoutEffect, useRef } from "react"
import * as THREE from 'three'

function BoxForest({ count = 10 }) {
  const meshRef = useRef()
  const tempObject = new THREE.Object3D()

  useLayoutEffect(() => {
    for (let i = 0; i < count; i++) {
      // Set random positions
      tempObject.position.set(Math.random() * 50 - 25, 0, Math.random() * 50 - 25, Math.random() * 50 - 25)
      tempObject.updateMatrix()
      // Apply matrix to the specific instance
      meshRef.current.setMatrixAt(i, tempObject.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [count])

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0xff0000} />
    </instancedMesh>
  )
}

export default BoxForest