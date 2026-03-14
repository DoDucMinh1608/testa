import { Line } from "@react-three/drei"
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { LineGeometry, LineMaterial } from "three/examples/jsm/Addons.js"
import { Line2 } from "three/examples/jsm/lines/webgpu/Line2.js"

extend({ Line2, LineGeometry, LineMaterial })

function TestObject() {
  const lineRef = useRef()
  const { camera } = useThree()
  const points = [
    [0, 0, 0],
    [1, 2, 3],
    [4, 0, 1],
    [0, 0, 0],
  ]

  useFrame((state, delta) => {
    lineRef.current
  })

  return (
    <Line
      ref={lineRef}
      points={points}       // Array of points [x, y, z]
      // color="hotpink"       // Color of the linea
      lineWidth={15}         // Thickness of the line
      dashed={false}        // Toggle dashed line
      vertexColors={[[1, 0, 0], [0, 1, 0], [0, 0, 1], [0, 0, 1]]} // Optional: Per-point colors
    />
  )
}

export default TestObject