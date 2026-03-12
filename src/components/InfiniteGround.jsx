import { Grid } from "@react-three/drei"
import { useRef } from "react"

function InfiniteGround({ distance = 30 }) {
  const gridRef = useRef()

  return (
    <Grid
      ref={gridRef}
      args={[distance, distance]}
      cellSize={1}
      fadeDistance={distance}
      infiniteGrid
      position={[0, -0.01, 0]}
    />
  )
}

export default InfiniteGround