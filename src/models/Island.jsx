

import { useRef , useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import {  useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3d/island.glb';
import {a} from '@react-spring/three';


const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) =>{
  const islandRef = useRef();
  const {gl,viewport} = useThree();

  const { nodes, materials } = useGLTF(islandScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor=  0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;


  }

  const handlePointerUP = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false)
    

  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX -lastX.current)/ viewport.width
  
      islandRef.current.rotation.y += delta*0.01 * Math.PI;
      lastX.current= clientX;
      rotationSpeed.current = delta*0.01 * Math.PI;
    }


  }

  const handleKeyDown = (e) =>{
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    }else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }


  const handleKeyUp =(e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);

    }
  }

  useFrame(()=>{
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;
    
    if(Math.abs(rotationSpeed.current)<0.001){
      rotationSpeed.current = 0;

    }
    islandRef.current.rotation.y += rotationSpeed.current;


    }else{
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
    }
  })

  useEffect(() => {
    const cavas= gl.domElement;

    cavas.addEventListener('pointerdown',handlePointerDown);
    cavas.addEventListener('pointerup',handlePointerUP);
    cavas.addEventListener('pointermove',handlePointerMove);
    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('keyup',handleKeyUp);

    return ()=> {
      cavas.removeEventListener('pointerdown',handlePointerDown);
      cavas.removeEventListener('pointerup',handlePointerUP);
      cavas.removeEventListener('pointermove',handlePointerMove);
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('keyup',handleKeyUp);

    }

  },[gl, handlePointerDown, handlePointerUP, handlePointerMove]);


  return (
    <a.group  ref= {islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001} 
      />
    </a.group>
  );
}

export default Island;
