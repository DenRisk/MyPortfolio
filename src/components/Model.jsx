import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export function Model() {
  const { scene } = useGLTF('/models/Roomv7.glb')
  const texture01 = useTexture('/textures/TexturePack01Baked.jpg')
  const texture02 = useTexture('/textures/TexturePack02Baked.jpg')
  const texture03 = useTexture('/textures/TexturePack03Baked.jpg')

  // Optional: sRGB-Encoding für realistischere Farben
  texture01.encoding = THREE.sRGBEncoding
  texture01.flipY = false

  texture02.encoding = THREE.sRGBEncoding
  texture02.flipY = false

  texture03.encoding = THREE.sRGBEncoding
  texture03.flipY = false

  // Setze das bakedMaterial für alle Meshes
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.includes('TP01')) {
        child.material = new THREE.MeshBasicMaterial({ map: texture01 })
      }

      if (child.name.includes('TP02')) {
        child.material = new THREE.MeshBasicMaterial({ map: texture02 })
      }

      if (child.name.includes('TP03')) {
        child.material = new THREE.MeshBasicMaterial({ map: texture03 })
      }
    }
  })

  return <primitive object={scene} />
}
