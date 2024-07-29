import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Character = () => {
  const character = useGLTF('/valleSoftware.glb');

  return (
    <group>
      <primitive object={character.scene} />
    </group>
  )
}

export const AvatarCanvas = () => {
  return (
    <Canvas style={{width: '300px', height: '500px'}}>
      <ambientLight intensity={3}/>
      <PerspectiveCamera makeDefault position={[0, 1.7, 1]}/>
      <OrbitControls target={[0, 1.43, 0]} />
      <Character  />
    </Canvas>
  )
}
