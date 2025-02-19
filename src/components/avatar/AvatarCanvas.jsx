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
    <div className="w-full max-w-lg h-[520px] p-3 rounded-xl border-2 border-blue-500 shadow-md">
      <div className="w-full h-full">
        <Canvas className="w-full max-w-lg h-[520px] ">
          <ambientLight intensity={3} />
          <PerspectiveCamera makeDefault position={[0, 1.7, 1]} />
          <OrbitControls target={[0, 1.43, 0]} />
          <Character />
        </Canvas>
      </div>
    </div>
  );
};
