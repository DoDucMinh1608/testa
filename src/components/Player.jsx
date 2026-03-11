import { useKeyboardControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three'

const speed = 0.1
function Player() {
  const { camera } = useThree()
  const [, getKeys] = useKeyboardControls()

  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()

  useFrame((state, delta) => {
    const { forward, backward, left, right, up, down } = getKeys()
    const dir = new THREE.Vector3(+left - +right, 0, +forward - +backward)

    camera.getWorldDirection(frontVector)
    frontVector.y = 0
    frontVector.normalize()
    sideVector.crossVectors(camera.up, frontVector)

    direction
      .set(0, 0, 0)
      .addScaledVector(frontVector, dir.z)
      .addScaledVector(sideVector, dir.x)
      .normalize()
      .multiplyScalar(speed)

    camera.position.x += direction.x
    camera.position.y += (+up - +down) * speed
    camera.position.z += direction.z

    if (camera.position.y < 1 && down) camera.position.y = 1
  })
}

export default Player