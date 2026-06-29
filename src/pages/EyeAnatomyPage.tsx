import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Float } from "@react-three/drei";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointer2 } from "lucide-react";
import * as THREE from "three";
import PageShell from "@/components/PageShell";

/* ------------------------------------------------------------------ */
/* 3D Eye Model                                                        */
/* ------------------------------------------------------------------ */

type LayerKey = "cornea" | "lens" | "vitreous" | "retina" | "optic-nerve" | null;

interface EyeProps {
  hovered: boolean;
  activeLayer: LayerKey;
  setActiveLayer: (l: LayerKey) => void;
}

const Eye = ({ hovered, activeLayer, setActiveLayer }: EyeProps) => {
  const group = useRef<THREE.Group>(null!);

  // Procedural iris texture
  const irisTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 512;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(256, 256, 30, 256, 256, 240);
    g.addColorStop(0, "#0a0a0a");
    g.addColorStop(0.18, "#0a0a0a");
    g.addColorStop(0.22, "#1d4a6b");
    g.addColorStop(0.55, "#2d7aa8");
    g.addColorStop(0.85, "#0f3a55");
    g.addColorStop(1, "#f4ede3");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);
    // iris striations
    for (let i = 0; i < 240; i++) {
      const a = Math.random() * Math.PI * 2;
      ctx.strokeStyle = `rgba(${20 + Math.random() * 40},${60 + Math.random() * 80},${110 + Math.random() * 60},${0.35})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(256 + Math.cos(a) * 55, 256 + Math.sin(a) * 55);
      ctx.lineTo(256 + Math.cos(a) * (130 + Math.random() * 70), 256 + Math.sin(a) * (130 + Math.random() * 70));
      ctx.stroke();
    }
    // subtle veins on sclera area
    for (let i = 0; i < 30; i++) {
      ctx.strokeStyle = `rgba(180,60,60,0.18)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      const sx = Math.random() * 512;
      const sy = Math.random() * 512;
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(sx + 20, sy + 5, sx + 40, sy - 8, sx + 60, sy + 2);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    // gentle idle rotation when not interacting
    group.current.rotation.y += delta * (hovered ? 0.05 : 0.15);
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });

  // Layer reveal: outer sclera fades, then cornea, then lens
  const outerOpacity = hovered ? 0.18 : 1;
  const corneaOpacity = hovered ? 0.25 : 0.0;
  const lensOpacity = hovered ? 0.75 : 0.0;
  const retinaOpacity = hovered ? 0.9 : 0.0;
  const nerveOpacity = hovered ? 1 : 0.0;

  const layerHandlers = (key: LayerKey) => ({
    onPointerOver: (e: any) => {
      e.stopPropagation();
      setActiveLayer(key);
      document.body.style.cursor = "pointer";
    },
    onPointerOut: () => {
      setActiveLayer(null);
      document.body.style.cursor = "auto";
    },
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={group}>
        {/* Sclera (outer white) — fades on hover */}
        <mesh>
          <sphereGeometry args={[1.5, 96, 96]} />
          <meshPhysicalMaterial
            map={irisTexture}
            transparent
            opacity={outerOpacity}
            roughness={0.35}
            clearcoat={1}
            clearcoatRoughness={0.05}
            transmission={hovered ? 0.6 : 0}
            thickness={0.5}
            ior={1.37}
            depthWrite={!hovered}
          />
        </mesh>

        {/* Cornea — transparent dome at front */}
        <mesh position={[0, 0, 1.25]} {...layerHandlers("cornea")}>
          <sphereGeometry args={[0.55, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          <meshPhysicalMaterial
            color="#bfe3f5"
            transparent
            opacity={corneaOpacity}
            roughness={0}
            transmission={1}
            thickness={0.3}
            ior={1.376}
            clearcoat={1}
          />
        </mesh>

        {/* Lens — biconvex behind iris */}
        <group position={[0, 0, 0.95]} {...layerHandlers("lens")}>
          <mesh scale={[1, 1, 0.42]}>
            <sphereGeometry args={[0.42, 64, 64]} />
            <meshPhysicalMaterial
              color="#e8f4ff"
              transparent
              opacity={lensOpacity}
              roughness={0}
              transmission={0.95}
              thickness={0.6}
              ior={1.42}
              clearcoat={1}
              clearcoatRoughness={0}
            />
          </mesh>
        </group>

        {/* Vitreous body — subtle gel */}
        <mesh {...layerHandlers("vitreous")}>
          <sphereGeometry args={[1.35, 64, 64]} />
          <meshPhysicalMaterial
            color="#dcefff"
            transparent
            opacity={hovered ? 0.08 : 0}
            roughness={0}
            transmission={1}
            thickness={1.5}
            ior={1.336}
            depthWrite={false}
          />
        </mesh>

        {/* Retina — inner shell, back half */}
        <mesh rotation={[0, Math.PI, 0]} {...layerHandlers("retina")}>
          <sphereGeometry args={[1.42, 96, 96, 0, Math.PI * 2, 0, Math.PI / 1.4]} />
          <meshStandardMaterial
            color="#c84a4a"
            transparent
            opacity={retinaOpacity}
            roughness={0.65}
            metalness={0.1}
            side={THREE.BackSide}
            emissive="#5a1818"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Macula spot */}
        <mesh position={[0, 0, -1.38]} rotation={[0, 0, 0]}>
          <circleGeometry args={[0.18, 32]} />
          <meshBasicMaterial color="#7a1f1f" transparent opacity={hovered ? 0.9 : 0} side={THREE.DoubleSide} />
        </mesh>

        {/* Optic nerve */}
        <mesh
          position={[0.35, -0.05, -1.45]}
          rotation={[Math.PI / 2, 0, -0.35]}
          {...layerHandlers("optic-nerve")}
        >
          <cylinderGeometry args={[0.16, 0.22, 0.7, 32]} />
          <meshStandardMaterial
            color="#f3e3c5"
            transparent
            opacity={nerveOpacity}
            roughness={0.7}
            emissive="#a37c3a"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Floating label when a layer is active */}
        {hovered && activeLayer && (
          <Html center distanceFactor={6} position={[0, 1.85, 0]} zIndexRange={[100, 0]}>
            <div className="px-4 py-2 rounded-full bg-foreground text-background font-display text-sm font-bold whitespace-nowrap shadow-2xl">
              {LAYER_META[activeLayer].label}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
};

/* ------------------------------------------------------------------ */
/* Layer metadata                                                      */
/* ------------------------------------------------------------------ */

const LAYER_META: Record<Exclude<LayerKey, null>, { label: string; blurb: string; idx: string }> = {
  cornea: {
    idx: "01",
    label: "Cornea",
    blurb:
      "The transparent front layer that refracts incoming light. Responsible for roughly two-thirds of the eye's total focusing power.",
  },
  lens: {
    idx: "02",
    label: "Crystalline Lens",
    blurb:
      "A flexible biconvex structure that fine-tunes focus by changing shape — a process called accommodation that diminishes with age.",
  },
  vitreous: {
    idx: "03",
    label: "Vitreous Body",
    blurb:
      "The clear gel filling the posterior chamber. Maintains the eye's shape and provides an optical path to the retina.",
  },
  retina: {
    idx: "04",
    label: "Retina",
    blurb:
      "A neural tissue layer at the back of the eye where photoreceptors convert light into electrical signals. Home of the macula and fovea.",
  },
  "optic-nerve": {
    idx: "05",
    label: "Optic Nerve",
    blurb:
      "A bundle of over one million nerve fibers that transmits visual information from the retina to the visual cortex of the brain.",
  },
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const EyeAnatomyPage = () => {
  const [hovered, setHovered] = useState(false);
  const [activeLayer, setActiveLayer] = useState<LayerKey>(null);

  return (
    <PageShell>
      <Helmet>
        <title>Interactive Eye Anatomy | Retina Center NJ</title>
        <meta
          name="description"
          content="Explore an interactive 3D model of the human eye. Hover to reveal the cornea, lens, vitreous, retina, and optic nerve."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/eye-anatomy" />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8 lg:pt-24 lg:pb-12 relative">
          <div className="max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Interactive Anatomy
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              The Human Eye, <span className="italic text-accent">Layer by Layer</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A clinically inspired 3D model that reveals the eye's internal architecture on demand.
              Hover the eye to expose the cornea, lens, vitreous, retina, and optic nerve.
            </p>
          </div>
        </div>
      </section>

      {/* 3D STAGE + INFO */}
      <section className="bg-gradient-to-b from-background via-accent-pale/30 to-background">
        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Canvas card */}
            <div
              className="relative rounded-[2rem] bg-foreground overflow-hidden shadow-2xl shadow-foreground/20 aspect-[4/3] lg:aspect-square"
              onPointerEnter={() => setHovered(true)}
              onPointerLeave={() => {
                setHovered(false);
                setActiveLayer(null);
              }}
            >
              {/* Hint */}
              <div
                className={`absolute top-5 left-5 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full bg-background/10 backdrop-blur text-background/90 font-body text-xs font-medium border border-background/15 transition-opacity duration-500 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <MousePointer2 className="w-3.5 h-3.5" />
                Hover the eye to reveal the inner layers
              </div>
              <div
                className={`absolute top-5 right-5 z-10 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur text-background/80 font-body text-[10px] font-bold uppercase tracking-[0.2em] border border-background/15 transition-opacity duration-500 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Drag to rotate · Scroll to zoom
              </div>

              <Canvas
                camera={{ position: [0, 0.2, 4.2], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
              >
                <color attach="background" args={["#0a0e14"]} />
                <fog attach="fog" args={["#0a0e14", 6, 14]} />
                <ambientLight intensity={0.35} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <directionalLight position={[-3, -2, -4]} intensity={0.4} color="#5fa8d3" />
                <pointLight position={[0, 0, 3]} intensity={0.7} color="#ffffff" />
                <Suspense fallback={null}>
                  <Eye hovered={hovered} activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  enableZoom
                  minDistance={3}
                  maxDistance={6}
                  enableDamping
                  dampingFactor={0.08}
                  autoRotate={!hovered}
                  autoRotateSpeed={0.6}
                />
              </Canvas>

              {/* Vignette */}
              <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  {activeLayer ? LAYER_META[activeLayer].idx : "—"}
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight transition-all duration-300">
                  {activeLayer ? LAYER_META[activeLayer].label : "Five Structures, One System"}
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4 min-h-[6rem]">
                  {activeLayer
                    ? LAYER_META[activeLayer].blurb
                    : "Each structure plays a distinct role in capturing, focusing, and transmitting light. Hover any layer in the model — or any item below — to inspect it."}
                </p>
              </div>

              {/* Layer list */}
              <ul className="divide-y divide-border border-y border-border">
                {(Object.keys(LAYER_META) as Array<Exclude<LayerKey, null>>).map((key) => {
                  const m = LAYER_META[key];
                  const isActive = activeLayer === key;
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        onMouseEnter={() => {
                          setHovered(true);
                          setActiveLayer(key);
                        }}
                        onMouseLeave={() => setActiveLayer(null)}
                        className={`w-full flex items-center gap-4 py-4 text-left transition-colors group ${
                          isActive ? "text-accent" : "text-foreground hover:text-accent"
                        }`}
                      >
                        <span className="font-body text-xs font-bold tracking-widest text-muted-foreground w-8">
                          {m.idx}
                        </span>
                        <span className="font-display text-lg font-bold flex-1">{m.label}</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "translate-x-1" : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-body text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95 transition-all self-start"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default EyeAnatomyPage;
