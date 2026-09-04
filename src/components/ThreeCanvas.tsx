import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useCursor } from '../context/CursorContext';

interface ThreeCanvasProps {
  currentSection: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ currentSection }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setCursorMode, resetCursor, prefersReducedMotion } = useCursor();
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGlSupported(false);
      return;
    }

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.04);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Immersive UI dual ember & cool slate contrast)
    const ambientLight = new THREE.AmbientLight(0x18120e, 2.0);
    scene.add(ambientLight);

    const pointLightEmber = new THREE.PointLight(0xff4e00, 3.2, 22);
    pointLightEmber.position.set(4, 3, 4);
    scene.add(pointLightEmber);

    const pointLightCool = new THREE.PointLight(0x0ea5e9, 1.8, 20);
    pointLightCool.position.set(-4, -3, 3);
    scene.add(pointLightCool);

    // 4. Central AI Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Geometric Core (Icosahedron Wireframe in Electric Ember)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xff4e00,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.name = 'ai-neural-core';
    coreGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xff621e,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbiting Ring 1 (Ember)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xff4e00,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Orbiting Ring 2 (Warm bone / cool slate)
    const ring2Geo = new THREE.TorusGeometry(2.8, 0.015, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xe0d8d0,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 3;
    coreGroup.add(ring2);

    // Orbiting Satellite Nodes
    const satelliteCount = 6;
    const satellites: THREE.Mesh[] = [];
    const satelliteGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0xff4e00 });

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satelliteGeo, satelliteMat);
      satellites.push(sat);
      coreGroup.add(sat);
    }

    // 5. Particle Constellation (Neural Field with Immersive UI palette)
    const particleCount = 1000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0xff4e00); // Electric Ember
    const c2 = new THREE.Color(0xe0d8d0); // Warm Bone
    const c3 = new THREE.Color(0x38bdf8); // Ambient Cyan Accent

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 35;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 35;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 20 - 2;

      const mixedColor = Math.random() > 0.6 ? c1 : Math.random() > 0.3 ? c2 : c3;
      particleColors[idx] = mixedColor.r;
      particleColors[idx + 1] = mixedColor.g;
      particleColors[idx + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Neural Edges / Constellation Lines
    const lineCount = 40;
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 2 * 3);
    for (let i = 0; i < lineCount; i++) {
      const p1Index = Math.floor(Math.random() * 200) * 3;
      const p2Index = Math.floor(Math.random() * 200) * 3;
      linePositions[i * 6] = particlePositions[p1Index];
      linePositions[i * 6 + 1] = particlePositions[p1Index + 1];
      linePositions[i * 6 + 2] = particlePositions[p1Index + 2];
      linePositions[i * 6 + 3] = particlePositions[p2Index];
      linePositions[i * 6 + 4] = particlePositions[p2Index + 1];
      linePositions[i * 6 + 5] = particlePositions[p2Index + 2];
    }
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xff4e00,
      transparent: true,
      opacity: 0.2,
    });
    const neuralLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(neuralLines);

    // 7. Mouse & Raycasting
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let isHoveringCore = false;

    const onMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      mouse.targetX = (clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(clientY / window.innerHeight) * 2 + 1;

      pointer.x = (clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const targetCameraPos = { x: 0, y: 0, z: 10 };
    const targetCorePos = { x: 2.8, y: 0, z: 0 };

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Section-based camera & core journey
      if (currentSection === 'hero') {
        targetCorePos.x = window.innerWidth > 1024 ? 2.5 : 0;
        targetCorePos.y = window.innerWidth > 1024 ? 0 : 0.8;
        targetCorePos.z = 0;
        targetCameraPos.z = 9.5;
        targetCameraPos.y = 0;
      } else if (currentSection === 'about') {
        targetCorePos.x = window.innerWidth > 1024 ? -3.0 : 0;
        targetCorePos.y = 0.5;
        targetCorePos.z = -1;
        targetCameraPos.z = 10.5;
        targetCameraPos.y = -1;
      } else if (currentSection === 'education') {
        targetCorePos.x = window.innerWidth > 1024 ? 3.2 : 0;
        targetCorePos.y = -0.5;
        targetCorePos.z = -2;
        targetCameraPos.z = 11;
        targetCameraPos.y = -2;
      } else if (currentSection === 'projects') {
        targetCorePos.x = 0;
        targetCorePos.y = 1.2;
        targetCorePos.z = -3;
        targetCameraPos.z = 11.5;
        targetCameraPos.y = -3;
      } else if (currentSection === 'skills') {
        targetCorePos.x = window.innerWidth > 1024 ? -2.8 : 0;
        targetCorePos.y = 0;
        targetCorePos.z = -2;
        targetCameraPos.z = 11;
        targetCameraPos.y = -4;
      } else if (currentSection === 'certifications') {
        targetCorePos.x = window.innerWidth > 1024 ? 2.8 : 0;
        targetCorePos.y = -0.5;
        targetCorePos.z = -2;
        targetCameraPos.z = 11;
        targetCameraPos.y = -5;
      } else if (currentSection === 'contact') {
        targetCorePos.x = 0;
        targetCorePos.y = 0;
        targetCorePos.z = 0;
        targetCameraPos.z = 9;
        targetCameraPos.y = -6;
      }

      // Smooth position interpolation
      const coreSpeed = prefersReducedMotion ? 0.08 : 0.04;
      coreGroup.position.x += (targetCorePos.x - coreGroup.position.x) * coreSpeed;
      coreGroup.position.y += (targetCorePos.y - coreGroup.position.y) * coreSpeed;
      coreGroup.position.z += (targetCorePos.z - coreGroup.position.z) * coreSpeed;

      // Parallax camera tilt
      if (!prefersReducedMotion) {
        camera.position.x = mouse.x * 0.8;
        camera.position.y += (targetCameraPos.y + mouse.y * 0.5 - camera.position.y) * 0.05;
        camera.position.z += (targetCameraPos.z - camera.position.z) * 0.05;
        camera.lookAt(coreGroup.position.x * 0.3, coreGroup.position.y * 0.3, 0);
      }

      // Rotations
      if (!prefersReducedMotion) {
        const spinSpeed = isHoveringCore ? 1.8 : 1.0;
        coreMesh.rotation.x += 0.004 * spinSpeed;
        coreMesh.rotation.y += 0.007 * spinSpeed;

        innerMesh.rotation.y -= 0.01 * spinSpeed;
        innerMesh.rotation.z += 0.005 * spinSpeed;

        ring1.rotation.z += 0.008 * spinSpeed;
        ring2.rotation.z -= 0.006 * spinSpeed;

        particles.rotation.y = elapsed * 0.02;
        neuralLines.rotation.y = elapsed * 0.02;

        // Animate satellite nodes orbiting the core
        satellites.forEach((sat, i) => {
          const angle = elapsed * 0.6 + (i * Math.PI * 2) / satelliteCount;
          const radius = 2.4;
          sat.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * Math.cos(angle * 0.5) * 1.5,
            Math.sin(angle) * radius * 0.8
          );
        });
      }

      // Raycasting for interactive 3D core
      raycaster.setFromCamera(pointer, camera);
      const interactive3DObjects = [coreMesh, innerMesh, ring1, ring2, ...satellites];
      const intersects = raycaster.intersectObjects(interactive3DObjects);

      if (intersects.length > 0) {
        if (!isHoveringCore) {
          isHoveringCore = true;
          setCursorMode('three', 'INSPECT 3D CORE');
        }
      } else {
        if (isHoveringCore) {
          isHoveringCore = false;
          resetCursor();
        }
      }

      // 3D Object subtly responds to cursor presence
      const targetScale = isHoveringCore ? 1.14 : 1.0;
      coreGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

      const targetLightIntensity = isHoveringCore ? 5.2 : 3.2;
      pointLightEmber.intensity = THREE.MathUtils.lerp(pointLightEmber.intensity, targetLightIntensity, 0.08);

      const targetOpacity = isHoveringCore ? 0.85 : 0.4;
      coreMat.opacity = THREE.MathUtils.lerp(coreMat.opacity, targetOpacity, 0.1);
      if (isHoveringCore) {
        coreMat.color.lerp(new THREE.Color(0xff7a38), 0.1);
      } else {
        coreMat.color.lerp(new THREE.Color(0xff4e00), 0.1);
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [currentSection, prefersReducedMotion, setCursorMode, resetCursor]);

  if (!webGlSupported) {
    // Graceful fallback if WebGL is unavailable
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0b101b] to-[#07090e] bg-grid-pattern opacity-80" />
    );
  }

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};
