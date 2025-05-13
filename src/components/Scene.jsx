import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import { Suspense } from 'react'

function Scene() {
  return (
    <>
      <OrbitControls makeDefault />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  )
}

export default Scene
