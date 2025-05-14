import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Model() {
  const { scene } = useGLTF('/models/Roomv11.glb')
  const texture01 = useTexture('/textures/TexturePack01.jpg')
  const texture02 = useTexture('/textures/TexturePack02.jpg')
  const texture03 = useTexture('/textures/TexturePack03.jpg')

  // Optional: sRGB-Encoding für realistischere Farben
  texture01.colorSpace = THREE.SRGBColorSpace
  texture02.colorSpace = THREE.SRGBColorSpace
  texture03.colorSpace = THREE.SRGBColorSpace
  texture01.flipY = false
  texture02.flipY = false
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
