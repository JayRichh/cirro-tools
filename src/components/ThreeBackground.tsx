import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  darkMode: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    animationId: number | null;
    clock: THREE.Clock;
    mainCirroGroup: THREE.Group;
    floatingCircles: THREE.Mesh[];
    orthographicWidth: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const threeScene = new THREE.Scene();

    const ORTHOGRAPHIC_HEIGHT = 10;
    const initialAspectRatio = container.clientWidth / container.clientHeight;
    let orthographicWidth = ORTHOGRAPHIC_HEIGHT * initialAspectRatio;

    const orthographicCamera = new THREE.OrthographicCamera(
      -orthographicWidth,
      orthographicWidth,
      ORTHOGRAPHIC_HEIGHT,
      -ORTHOGRAPHIC_HEIGHT,
      0.1,
      1000
    );
    orthographicCamera.position.z = 5;

    const webglRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    webglRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(webglRenderer.domElement);

    const createCanvasTexture = (drawingFunction: (ctx: CanvasRenderingContext2D, size: number) => void, textureSize = 1024) => {
      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = offscreenCanvas.height = textureSize;
      const canvasContext = offscreenCanvas.getContext("2d");
      if (canvasContext) {
        drawingFunction(canvasContext, textureSize);
      }
      const canvasTexture = new THREE.CanvasTexture(offscreenCanvas);
      canvasTexture.generateMipmaps = false;
      canvasTexture.needsUpdate = true;
      return canvasTexture;
    };

    const createMainCirroRippleGroup = (currentOrthographicWidth: number) => {
      const cirroGroup = new THREE.Group();

      const solidCircleTexture = createCanvasTexture((context, size) => {
        const radialGradient = context.createRadialGradient(
          size / 2,
          size / 2,
          0,
          size / 2,
          size / 2,
          size / 2
        );
        radialGradient.addColorStop(0, "#26c6daCC");
        radialGradient.addColorStop(0.3, "#00bcd4AA");
        radialGradient.addColorStop(0.6, "#4dd0e188");
        radialGradient.addColorStop(0.85, "#80deea44");
        radialGradient.addColorStop(1, "#b2ebf200");
        context.fillStyle = radialGradient;
        context.fillRect(0, 0, size, size);
      });

      const centralSolidCircle = new THREE.Mesh(
        new THREE.CircleGeometry(1, 128),
        new THREE.MeshBasicMaterial({
          map: solidCircleTexture,
          transparent: true,
          opacity: 0.95,
          depthWrite: false,
        })
      );
      centralSolidCircle.scale.setScalar(7.5);
      cirroGroup.add(centralSolidCircle);

      const concentricRingConfigurations = [
        {
          radiusRatio: 2.2,
          strokeWidth: 0.5,
          hexColor: "#006064",
          alphaOpacity: 0.5,
        },
        {
          radiusRatio: 3.2,
          strokeWidth: 0.6,
          hexColor: "#00838f",
          alphaOpacity: 0.45,
        },
        {
          radiusRatio: 4.5,
          strokeWidth: 0.7,
          hexColor: "#0097a7",
          alphaOpacity: 0.4,
        },
        {
          radiusRatio: 6.0,
          strokeWidth: 0.8,
          hexColor: "#26c6da",
          alphaOpacity: 0.35,
        },
      ];

      concentricRingConfigurations.forEach(
        ({ radiusRatio, strokeWidth, hexColor, alphaOpacity }) => {
          const ringTexture = createCanvasTexture((context, size) => {
            context.clearRect(0, 0, size, size);
            context.strokeStyle = hexColor;
            context.lineWidth = Math.max(1, Math.floor(strokeWidth * (size / 8)));
            context.beginPath();
            context.arc(
              size / 2,
              size / 2,
              (size / 2) * (radiusRatio / 7),
              0,
              Math.PI * 2
            );
            context.stroke();
          });

          const concentricRingMesh = new THREE.Mesh(
            new THREE.CircleGeometry(1, 128),
            new THREE.MeshBasicMaterial({
              map: ringTexture,
              transparent: true,
              opacity: alphaOpacity,
              depthWrite: false,
            })
          );
          concentricRingMesh.scale.setScalar(7);
          cirroGroup.add(concentricRingMesh);
        }
      );

      const radarSweepTexture = createCanvasTexture((context, size) => {
        context.clearRect(0, 0, size, size);
        const centerX = size / 2;
        const centerY = size / 2;
        const sweepRadius = size;

        const wedgeAngleRadians = Math.PI / 4;
        const wedgeStartAngle = -wedgeAngleRadians / 2;
        const wedgeEndAngle = wedgeAngleRadians / 2;

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(
          centerX,
          centerY,
          sweepRadius,
          wedgeStartAngle,
          wedgeEndAngle,
          false
        );
        context.closePath();

        context.save();
        context.clip();

        const sweepGradient = context.createRadialGradient(
          centerX,
          centerY,
          sweepRadius * 0.01,
          centerX,
          centerY,
          sweepRadius
        );
        sweepGradient.addColorStop(0.0, "rgba(140,255,255,0.85)");
        sweepGradient.addColorStop(0.25, "rgba(80,238,245,0.55)");
        sweepGradient.addColorStop(0.6, "rgba(38,198,218,0.25)");
        sweepGradient.addColorStop(1.0, "rgba(38,198,218,0.00)");
        context.fillStyle = sweepGradient;
        context.fillRect(0, 0, size, size);
        context.restore();

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(
          centerX,
          centerY,
          sweepRadius,
          wedgeStartAngle,
          wedgeEndAngle,
          false
        );
        context.closePath();
        context.lineWidth = Math.max(1, Math.floor(size * 0.002));
        context.strokeStyle = "rgba(180,255,255,0.7)";
        context.stroke();
      });

      const radarSweepMesh = new THREE.Mesh(
        new THREE.CircleGeometry(1, 128),
        new THREE.MeshBasicMaterial({
          map: radarSweepTexture,
          transparent: true,
          opacity: 1,
          depthWrite: true,
        })
      );
      radarSweepMesh.scale.setScalar(7.4);
      radarSweepMesh.rotation.z = 0;
      radarSweepMesh.position.z = -1;
      cirroGroup.add(radarSweepMesh);

      cirroGroup.position.set(-currentOrthographicWidth, ORTHOGRAPHIC_HEIGHT, 1);
      (cirroGroup as any).userData = {
        pulseSpeed: 0.5,
        radarSweepReference: radarSweepMesh,
      };

      return cirroGroup;
    };

    const createFloatingCircleElements = (currentOrthographicWidth: number) => {
      const floatingCircleMeshes: THREE.Mesh[] = [];
      const floatingCircleConfigurations = [
        { hexColor: "#4dd0e1", diameter: 3, baseOpacity: 0.6 },
        { hexColor: "#26c6da", diameter: 4, baseOpacity: 0.55 },
        { hexColor: "#80deea", diameter: 3.5, baseOpacity: 0.5 },
        { hexColor: "#00acc1", diameter: 2.5, baseOpacity: 0.65 },
      ];

      floatingCircleConfigurations.forEach((configuration, arrayIndex) => {
        const gradientAngle = Math.random() * Math.PI * 2;
        const fullOpacityHex = Math.floor(configuration.baseOpacity * 255)
          .toString(16)
          .padStart(2, "0");
        const fadedOpacityHex = Math.floor(configuration.baseOpacity * 0.3 * 255)
          .toString(16)
          .padStart(2, "0");

        const circleTexture = createCanvasTexture((context, size) => {
          const linearGradient = context.createLinearGradient(
            size / 2,
            size / 2,
            size / 2 + (Math.cos(gradientAngle) * size) / 2,
            size / 2 + (Math.sin(gradientAngle) * size) / 2
          );
          linearGradient.addColorStop(0, configuration.hexColor + fullOpacityHex);
          linearGradient.addColorStop(0.5, configuration.hexColor + fullOpacityHex);
          linearGradient.addColorStop(1, configuration.hexColor + fadedOpacityHex);
          context.fillStyle = linearGradient;
          context.fillRect(0, 0, size, size);
        });

        const floatingCircleMesh = new THREE.Mesh(
          new THREE.CircleGeometry(1, 64),
          new THREE.MeshBasicMaterial({
            map: circleTexture,
            transparent: true,
            depthWrite: false,
          })
        );
        floatingCircleMesh.scale.setScalar(configuration.diameter);

        const maximumXBoundary = currentOrthographicWidth * 0.85;
        const maximumYBoundary = ORTHOGRAPHIC_HEIGHT * 0.85;
        floatingCircleMesh.position.set(
          (Math.random() - 0.5) * maximumXBoundary * 2,
          (Math.random() - 0.5) * maximumYBoundary * 2,
          -arrayIndex * 0.1
        );

        (floatingCircleMesh as any).userData = {
          horizontalVelocity: (Math.random() - 0.5) * 0.008,
          verticalVelocity: (Math.random() - 0.5) * 0.008,
          scaleAnimationSpeed: Math.random() * 0.3 + 0.2,
          scaleAnimationPhase: Math.random() * Math.PI * 2,
          originalDiameter: configuration.diameter,
          maximumXBoundary,
          maximumYBoundary,
        };

        threeScene.add(floatingCircleMesh);
        floatingCircleMeshes.push(floatingCircleMesh);
      });

      return floatingCircleMeshes;
    };

    const mainCirroRippleGroup = createMainCirroRippleGroup(orthographicWidth);
    threeScene.add(mainCirroRippleGroup);

    const floatingCircleMeshArray = createFloatingCircleElements(orthographicWidth);

    const animationClock = new THREE.Clock();

    const animateMainCirroRipple = (elapsedTime: number) => {
      mainCirroRippleGroup.scale.setScalar(1 + Math.sin(elapsedTime * 0.5) * 0.08);
      mainCirroRippleGroup.rotation.z = elapsedTime * 0.02;

      const radarSweepRotationSpeed = 0.25;
      const radarSweepMesh = (mainCirroRippleGroup as any).userData.radarSweepReference;
      if (radarSweepMesh) {
        radarSweepMesh.rotation.z = -elapsedTime * radarSweepRotationSpeed;
      }
    };

    const animateFloatingCircleElements = (elapsedTime: number) => {
      floatingCircleMeshArray.forEach((circleMesh) => {
        const animationData = (circleMesh as any).userData;

        circleMesh.position.x += animationData.horizontalVelocity;
        circleMesh.position.y += animationData.verticalVelocity;

        if (Math.abs(circleMesh.position.x) > animationData.maximumXBoundary) {
          animationData.horizontalVelocity *= -1;
        }
        if (Math.abs(circleMesh.position.y) > animationData.maximumYBoundary) {
          animationData.verticalVelocity *= -1;
        }

        const currentScale =
          animationData.originalDiameter +
          Math.sin(
            elapsedTime * animationData.scaleAnimationSpeed +
              animationData.scaleAnimationPhase
          ) *
            0.4;
        circleMesh.scale.setScalar(currentScale);
      });
    };

    const runAnimationLoop = () => {
      const animationId = requestAnimationFrame(runAnimationLoop);
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
      const elapsedTime = animationClock.getElapsedTime();

      animateMainCirroRipple(elapsedTime);
      animateFloatingCircleElements(elapsedTime);

      webglRenderer.render(threeScene, orthographicCamera);
    };

    const handleResize = () => {
      if (!container) return;
      
      const currentAspectRatio = container.clientWidth / container.clientHeight;
      orthographicWidth = ORTHOGRAPHIC_HEIGHT * currentAspectRatio;

      orthographicCamera.left = -orthographicWidth;
      orthographicCamera.right = orthographicWidth;
      orthographicCamera.top = ORTHOGRAPHIC_HEIGHT;
      orthographicCamera.bottom = -ORTHOGRAPHIC_HEIGHT;
      orthographicCamera.updateProjectionMatrix();

      webglRenderer.setSize(container.clientWidth, container.clientHeight);

      mainCirroRippleGroup.position.x = -orthographicWidth;
      mainCirroRippleGroup.position.y = ORTHOGRAPHIC_HEIGHT;

      floatingCircleMeshArray.forEach((circleMesh) => {
        (circleMesh as any).userData.maximumXBoundary = orthographicWidth * 0.85;
        (circleMesh as any).userData.maximumYBoundary = ORTHOGRAPHIC_HEIGHT * 0.85;
      });

      if (sceneRef.current) {
        sceneRef.current.orthographicWidth = orthographicWidth;
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    sceneRef.current = {
      scene: threeScene,
      camera: orthographicCamera,
      renderer: webglRenderer,
      animationId: null,
      clock: animationClock,
      mainCirroGroup: mainCirroRippleGroup,
      floatingCircles: floatingCircleMeshArray,
      orthographicWidth,
    };

    runAnimationLoop();

    return () => {
      resizeObserver.disconnect();
      
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }

      if (sceneRef.current) {
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.MeshBasicMaterial) {
              if (object.material.map) {
                object.material.map.dispose();
              }
              object.material.dispose();
            }
          }
        });

        sceneRef.current.renderer.dispose();
        if (container.contains(sceneRef.current.renderer.domElement)) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        transition: "background-color 0.3s",
      }}
    />
  );
};
