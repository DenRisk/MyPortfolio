import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'

function App() {
  return (
    <div className="three-container">
      <h1>React Fiber Test Room</h1>

      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
