import { useKeyboardControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three'

const speed = 0.1
function Player() {
  const { camera } = useThree()
  const [, getKeys] = useKeyboardControls()

  useFrame((state, delta) => {
    const { forward, backward, left, right, up, down } = getKeys()
    const direction = new THREE.Vector3(+right - +left, 0, +backward - +forward)
      .normalize()
      .multiplyScalar(speed)
      .applyQuaternion(camera.quaternion)

    console.log(camera.quaternion)


    camera.position.x += direction.x
    camera.position.y += (+up - +down) * speed
    camera.position.z += direction.z

    if (camera.position.y < 1 && down) camera.position.y = 1
  })
}

export default Player