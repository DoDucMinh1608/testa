import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Player from './components/Player'
import RotatingBox from './components/RotationBox'
import WorldGround from './components/WorldGround'
import BoxForest from './components/BoxForest'

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
        <Canvas camera={{ fov: 75, position: [0, 1, 5] }}>
          <Sky />
          <ambientLight intensity={0.5} />
          <PointerLockControls />
          <Player />
          {/* <RotatingBox position={[1, 2, 5]} /> */}
          <BoxForest />
          <WorldGround />
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default App
