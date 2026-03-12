import { KeyboardControls, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import BoxForest from './components/BoxForest'
import InfiniteGround from './components/InfiniteGround'
import Player from './components/Player'
import SolidFloor from './components/SolidFloor'

const map = [
  { name: 'forward', keys: ['KeyW'] },
  { name: 'backward', keys: ['KeyS'] },
  { name: 'left', keys: ['KeyA'] },
  { name: 'right', keys: ['KeyD'] },
  { name: "up", keys: ['Space'] },
  { name: "down", keys: ['ShiftLeft'] }
]

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden relative bg-black">
      <div className='absolute z-10 right-1/2 bottom-1/2 size-3 bg-white border-2 translate-1/2'></div>
      <KeyboardControls map={map}>
        <Canvas camera={{ fov: 120, position: [0, 1, 5], far: 20 }}>
          {/* <Sky /> */}
          {/* <fog attach="fog" args={['black', 0, 10]} /> */}
          <ambientLight intensity={0.3} />
          <directionalLight args={[1, 1, 1]} color={0xffffff} />
          <PointerLockControls />
          <Player />
          <BoxForest />

          {/* <WorldGround /> */}
          <SolidFloor />
          <InfiniteGround />
          {/* <Instances range={100}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
            <RotatingBox args={[1, 1, 1]} />
          </Instances> */}
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default App
