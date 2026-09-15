import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./Hero.module.css";

function createCodeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 80, 640);
  gradient.addColorStop(0, "#1e3a8a");
  gradient.addColorStop(1, "#312e81");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 640);

  const glow = ctx.createRadialGradient(512, 320, 40, 512, 320, 360);
  glow.addColorStop(0, "rgba(125, 211, 252, 0.35)");
  glow.addColorStop(1, "rgba(30, 58, 138, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1024, 640);

  ctx.fillStyle = "#e0f2fe";
  ctx.font = "bold 220px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("</>", 512, 330);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const ResumeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0.9, 1.55, 4.6);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x7dd3fc, 0.55);
    const keyLight = new THREE.PointLight(0x38bdf8, 28, 18);
    keyLight.position.set(2.4, 3.2, 3.2);
    const fillLight = new THREE.PointLight(0x6366f1, 18, 16);
    fillLight.position.set(-3.2, 1.4, 2.2);
    const rimLight = new THREE.PointLight(0x22d3ee, 16, 12);
    rimLight.position.set(0.2, 2.4, -3);
    const floorLight = new THREE.PointLight(0x2563eb, 22, 8);
    floorLight.position.set(0, -0.8, 0.4);
    scene.add(ambient, keyLight, fillLight, rimLight, floorLight);

    const laptop = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1b2d4a,
      metalness: 0.62,
      roughness: 0.28,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x0b1728,
      metalness: 0.4,
      roughness: 0.35,
      emissive: 0x123056,
      emissiveIntensity: 0.25,
    });

    const base = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.08, 1.55), bodyMat);
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.03, 1.12), darkMat);
    keyboard.position.set(0, 0.055, 0.08);
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.02, 0.36),
      new THREE.MeshStandardMaterial({
        color: 0x1e3a5f,
        metalness: 0.5,
        roughness: 0.2,
      })
    );
    trackpad.position.set(0, 0.065, 0.48);
    laptop.add(base, keyboard, trackpad);

    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.04, -0.74);
    screenGroup.rotation.x = -1.02;
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(2.32, 1.48, 0.07), bodyMat);
    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(2.08, 1.26),
      new THREE.MeshBasicMaterial({ map: createCodeTexture() })
    );
    display.position.z = 0.045;
    screenGroup.add(bezel, display);
    laptop.add(screenGroup);
    laptop.position.set(0, 0.05, 0);
    laptop.rotation.y = -0.22;
    scene.add(laptop);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 1.55, 0.14, 64),
      new THREE.MeshStandardMaterial({
        color: 0x102038,
        metalness: 0.72,
        roughness: 0.22,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.55,
      })
    );
    platform.position.y = -0.48;
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.48, 0.045, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x60a5fa })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.4;
    scene.add(platform, ring);

    const floating = [];
    const cubeGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const cubeConfigs = [
      { color: 0x38bdf8, position: [1.35, 1.25, 0.15], scale: 1 },
      { color: 0x22d3ee, position: [-1.25, 1.05, 0.45], scale: 0.72 },
      { color: 0x818cf8, position: [1.55, 0.25, 0.85], scale: 0.58 },
      { color: 0x67e8f9, position: [-1.45, 0.2, 0.05], scale: 0.5 },
      { color: 0x60a5fa, position: [0.55, 1.65, -0.45], scale: 0.42 },
    ];

    cubeConfigs.forEach((config, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: config.color,
        metalness: 0.2,
        roughness: 0.25,
        emissive: config.color,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.92,
      });
      const mesh = new THREE.Mesh(cubeGeo, material);
      mesh.position.set(...config.position);
      mesh.scale.setScalar(config.scale);
      mesh.userData = { offset: index * 1.2, origin: mesh.position.clone() };
      scene.add(mesh);
      floating.push(mesh);

      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(cubeGeo),
        new THREE.LineBasicMaterial({ color: 0xbfdbfe, transparent: true, opacity: 0.45 })
      );
      mesh.add(wire);
    });

    const diamond = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.32, 0),
      new THREE.MeshStandardMaterial({
        color: 0x7dd3fc,
        metalness: 0.7,
        roughness: 0.12,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.55,
      })
    );
    diamond.position.set(1.85, 1.55, -0.05);
    scene.add(diamond);
    floating.push(diamond);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const setSize = () => {
      const { clientWidth, clientHeight } = mount;
      const width = Math.max(clientWidth, 1);
      const height = Math.max(clientHeight, 1);
      const narrow = width < 320;
      camera.aspect = width / height;
      camera.position.set(narrow ? 0.35 : 0.75, 1.62, narrow ? 5.1 : 4.7);
      camera.lookAt(0, 0.18, 0);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, narrow ? 1.5 : 2));
      renderer.setSize(width, height, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
    };

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(mount);
    setSize();

    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      const time = clock.getElapsedTime();
      if (!reducedMotion) {
        laptop.rotation.y = -0.22 + pointer.x * 0.12;
        laptop.rotation.x = pointer.y * 0.05;
        laptop.position.y = 0.05 + Math.sin(time * 0.8) * 0.04;
        platform.rotation.y = time * 0.15;
        ring.rotation.z = time * 0.2;
        floating.forEach((mesh, index) => {
          const origin = mesh.userData.origin || mesh.position;
          mesh.rotation.x = time * 0.45 + index;
          mesh.rotation.y = time * 0.6 + index * 0.4;
          if (mesh.userData.origin) {
            mesh.position.y = origin.y + Math.sin(time * 1.1 + mesh.userData.offset) * 0.12;
          }
        });
        diamond.rotation.y = time * 0.85;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={styles.scene} aria-hidden="true" />;
};
