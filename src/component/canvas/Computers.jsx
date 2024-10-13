

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   // Load the GLTF model
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight
//         skyColor={'#ffffff'}
//         groundColor={'#444444'}
//         intensity={0.6}
//       />

//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize={1024}
//       />

//       <pointLight intensity={1} position={[10, 10, 10]} />

//       <directionalLight
//         position={[10, 10, 5]}
//         intensity={0.8}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-far={50}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />

//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.5 : 0.55}   
//         position={isMobile ? [0, -2.5, -2] : [0, -2.75, -1.2]}  
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       style={{ width: "100vw", height: "100vh" }}  // Ensures the canvas fills the viewport
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI}
//           minPolarAngle={0}
//           enableRotate={true}
//           autoRotate={true}        // Enable automatic rotation
//           autoRotateSpeed={2.5}    // Slightly increased rotation speed
//           enablePan={true}         // Allow panning if needed
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber"; 
// import { Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   // Load the GLTF model
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   // Automatic rotation
//   useFrame(() => {
//     // Ensure the scene is loaded before trying to rotate it
//     if (computer.scene) {
//       computer.scene.rotation.y += 0.005; // Adjust rotation speed as needed
//     }
//   });

//   return (
//     <mesh>
//       <hemisphereLight
//         skyColor={'#ffffff'}
//         groundColor={'#444444'}
//         intensity={0.6}
//       />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} position={[10, 10, 10]} />
//       <directionalLight
//         position={[10, 10, 5]}
//         intensity={0.8}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-far={50}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.5 : 0.55}
//         position={isMobile ? [-1.5, -3.25, -2] : [-0.75, -3.5, -1.2]}
//         rotation={[-0.01, -0.2, -0.1]} // Initial rotation
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="always" // Set to always for continuous rendering
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       style={{ width: "100vw", height: "100vh" }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;



import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; 
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Load the GLTF model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // State to track whether the model should rotate
  const [isRotating, setIsRotating] = useState(false);

  // Automatic rotation
  useFrame(() => {
    if (computer.scene && isRotating) {
      computer.scene.rotation.y += 0.005; // Adjust rotation speed as needed
    }
  });

  // Click handler to toggle rotation
  const handleClick = () => {
    setIsRotating((prev) => !prev); // Toggle rotation state
  };

  return (
    <mesh onClick={handleClick}> {/* Attach the click event here */}
      <hemisphereLight
        skyColor={'#ffffff'}
        groundColor={'#444444'}
        intensity={0.6}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.55}
        position={isMobile ? [-1.5, -3.25, -2] : [-0.75, -3.5, -1.2]}
        rotation={[-0.01, -0.2, -0.1]} // Initial rotation
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Set to always for continuous rendering
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
