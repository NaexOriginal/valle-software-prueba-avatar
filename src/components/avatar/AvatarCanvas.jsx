import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Character = () => {
  const character = useGLTF('/valleSoftware3.glb');

  return (
    <group>
      <primitive object={character.scene} />
    </group>
  );
};

export const AvatarCanvas = () => {
  return (
    <div style={{
      width: '620px', 
      height: '520px', 
      padding: '10px', 
      borderRadius: '15px', 
      border: '3px solid #3498db', /* Color del borde */
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' /* Sombra para destacar un poco */
    }}>
      <Canvas style={{ width: '600px', height: '500px' }}>
        <ambientLight intensity={3} />
        <PerspectiveCamera makeDefault position={[0, 1.7, 1]} />
        <OrbitControls target={[0, 1.43, 0]} />
        <Character />
      </Canvas>
    </div>
  );
};
