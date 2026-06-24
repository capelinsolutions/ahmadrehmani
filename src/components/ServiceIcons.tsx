import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MacularDiseasesIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.424"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-32.00,-32.00) scale(1.32)">
      {/* Eye almond shape */}
      <path d="M30 100 C55 64, 145 64, 170 100 C145 136, 55 136, 30 100 Z" className="opacity-40" />
      {/* Iris */}
      <circle cx="100" cy="100" r="24" className="opacity-60" />
      {/* Central macula highlight - Colored with Accent */}
      <circle cx="100" cy="100" r="11" stroke="currentColor" className="text-accent stroke-[3]" />
      {/* Disturbed macula spokes */}
      <line x1="100" y1="89" x2="100" y2="84" />
      <line x1="100" y1="111" x2="100" y2="116" />
      <line x1="89" y1="100" x2="84" y2="100" />
      <line x1="111" y1="100" x2="116" y2="100" />
      {/* Wavy distortion lines */}
      <path d="M94 97 q3 -2.5 6 0 t6 0" strokeWidth="1.667" className="text-accent" />
      <path d="M94 103 q3 2.5 6 0 t6 0" strokeWidth="1.667" className="text-accent" />
      {/* Lashes top */}
      <line x1="64" y1="71" x2="60" y2="62" />
      <line x1="100" y1="65" x2="100" y2="55" />
      <line x1="136" y1="71" x2="140" y2="62" />
    </g>
  </svg>
);

export const DiabeticIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.857"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Fundus circle */}
      <circle cx="100" cy="100" r="58" className="opacity-40" />
      {/* Optic nerve head (disc) */}
      <circle cx="62" cy="98" r="11" className="opacity-60" />
      {/* Superior arcade */}
      <path d="M71 92 C92 68, 124 62, 144 76" strokeWidth="2.500" />
      {/* Inferior arcade */}
      <path d="M71 104 C92 132, 124 138, 146 126" strokeWidth="2.500" />
      {/* Nasal vessels */}
      <path d="M53 92 C48 87, 47 82, 48 77" strokeWidth="1.964" />
      <path d="M53 106 C48 112, 47 117, 48 122" strokeWidth="1.964" />

      {/* Hemorrhages - Styled in red/accent */}
      <g fill="currentColor" stroke="none" className="text-red-500/80">
        <circle cx="82" cy="68" r="2.6" />
        <circle cx="76" cy="82" r="2.6" />
        <circle cx="83" cy="102" r="2.6" />
        <circle cx="75" cy="119" r="2.6" />
        <circle cx="81" cy="136" r="2.6" />
        <circle cx="99" cy="67" r="2.6" />
        <circle cx="92" cy="85" r="2.6" />
        <circle cx="100" cy="99" r="2.6" />
        <circle cx="93" cy="119" r="2.6" />
        <circle cx="103" cy="135" r="2.6" />
        <circle cx="120" cy="65" r="2.6" />
        <circle cx="109" cy="82" r="2.6" />
        <circle cx="121" cy="101" r="2.6" />
        <circle cx="108" cy="115" r="2.6" />
        <circle cx="118" cy="136" r="2.6" />
        <circle cx="135" cy="66" r="2.6" />
        <circle cx="126" cy="83" r="2.6" />
        <circle cx="138" cy="102" r="2.6" />
        <circle cx="129" cy="118" r="2.6" />
        <circle cx="138" cy="136" r="2.6" />
      </g>

      {/* Blood droplet (leakage) - Highlighted with Accent or Crimson */}
      <path
        d="M150 150 C150 150, 140 165, 140 173 a10 10 0 0 0 20 0 C160 165, 150 150, 150 150 Z"
        className="text-accent stroke-[3] fill-accent/10"
      />
    </g>
  </svg>
);

export const DetachmentIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.857"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball globe */}
      <circle cx="100" cy="100" r="64" className="opacity-40" />
      {/* Cornea bump */}
      <path d="M38 80 C20 89, 20 111, 38 120" className="opacity-60" />
      {/* Lens */}
      <ellipse cx="45" cy="100" rx="6.5" ry="16" className="opacity-60" />
      {/* Retina lining (intact) */}
      <path d="M66 154 C104 172, 150 146, 160 104" strokeWidth="2.500" />
      {/* Detached retina - Styled in bold Accent */}
      <path
        d="M160 94 C152 60, 116 46, 80 54 C104 60, 124 70, 132 86 C136 96, 130 104, 118 106"
        strokeWidth="3"
        className="text-accent"
      />
      {/* Lift indicator arrow */}
      <path d="M104 76 l6 -6 l-8 0" strokeWidth="1.964" className="text-accent" />
    </g>
  </svg>
);

export const MacularDegenerationIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.424"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-32.00,-32.00) scale(1.32)">
      {/* Eye almond shape */}
      <path d="M28 100 C54 62, 146 62, 172 100 C146 138, 54 138, 28 100 Z" className="opacity-40" />
      {/* Iris */}
      <circle cx="100" cy="100" r="25" className="opacity-60" />
      {/* Faded/blurred central scotoma ring */}
      <circle cx="100" cy="100" r="14" strokeDasharray="3 5" strokeWidth="1.970" className="text-accent/60" />
      
      {/* Drusen deposits clustered at center - Styled with gold/accent */}
      <g fill="currentColor" stroke="none" className="text-accent">
        <circle cx="100" cy="100" r="3.6" />
        <circle cx="92" cy="96" r="2.6" />
        <circle cx="108" cy="96" r="2.6" />
        <circle cx="95" cy="106" r="2.6" />
        <circle cx="107" cy="105" r="2.6" />
      </g>

      {/* Lashes */}
      <line x1="64" y1="69" x2="60" y2="60" />
      <line x1="100" y1="63" x2="100" y2="53" />
      <line x1="136" y1="69" x2="140" y2="60" />
    </g>
  </svg>
);

export const SurgicalIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.857"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball globe */}
      <circle cx="92" cy="108" r="56" className="opacity-40" />
      {/* Iris/pupil */}
      <circle cx="92" cy="108" r="20" className="opacity-60" />
      <circle cx="92" cy="108" r="7" fill="currentColor" stroke="none" />
      
      {/* Surgical vitrectomy probe entering from upper right */}
      <line x1="150" y1="46" x2="116" y2="80" strokeWidth="3.571" className="text-accent" />
      {/* Probe handle */}
      <path d="M150 46 l16 -16 a6 6 0 0 1 9 9 l-16 16 Z" strokeWidth="2.679" className="text-accent" />
      {/* Probe tip touching globe */}
      <circle cx="116" cy="80" r="2.6" fill="currentColor" stroke="none" className="text-accent" />
      
      {/* Second instrument (light pipe) lower right */}
      <line x1="156" y1="118" x2="128" y2="120" strokeWidth="2.857" className="opacity-80" />
      <path d="M128 120 l-8 -3 m8 3 l-8 4" strokeWidth="1.964" className="opacity-80" />
    </g>
  </svg>
);

export const DislocatedLensIcon: React.FC<IconProps> = ({ size = "100%", className, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.857"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball globe */}
      <circle cx="100" cy="100" r="60" className="opacity-40" />
      {/* Cornea bump */}
      <path d="M42 78 C24 88, 24 112, 42 122" className="opacity-60" />
      {/* Dotted outline showing where the lens should sit */}
      <ellipse cx="64" cy="100" rx="9" ry="22" strokeWidth="1.786" strokeDasharray="3 5" className="opacity-50" />
      
      {/* Dense cloudy lens, dislocated - Styled in Accent */}
      <ellipse cx="104" cy="120" rx="14" ry="24" transform="rotate(32 104 120)" strokeWidth="3" className="text-accent fill-accent/5" />
      {/* Opacity hatch marks inside lens */}
      <line x1="95" y1="115" x2="112" y2="122" strokeWidth="1.964" className="text-accent" />
      <line x1="98" y1="108" x2="113" y2="115" strokeWidth="1.964" className="text-accent" />
      <line x1="93" y1="125" x2="108" y2="131" strokeWidth="1.964" className="text-accent" />
      
      {/* Displacement arrow */}
      <path d="M76 104 C84 110, 92 114, 98 118" strokeWidth="1.786" strokeDasharray="3 4" className="opacity-70" />
      <path d="M98 118 l-9 -1 m9 1 l-3 -8" strokeWidth="1.786" className="opacity-70" />
    </g>
  </svg>
);
