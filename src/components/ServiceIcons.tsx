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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-20.00,-20.00) scale(1.20)">
      {/* Eye outline */}
      <path d="M30 100 C55 64, 145 64, 170 100 C145 136, 55 136, 30 100 Z" className="fill-primary/8 stroke-primary/40" />
      {/* Iris */}
      <circle cx="100" cy="100" r="28" className="fill-primary/5 stroke-primary/30" />
      {/* Central macula — highlighted */}
      <circle cx="100" cy="100" r="14" className="fill-accent/15 stroke-accent stroke-[3]" />
      {/* Distorted Amsler-grid lines inside the macula */}
      <path d="M86 94 q7 -4 14 0 t14 0" className="text-accent" strokeWidth="2.2" />
      <path d="M86 106 q7 4 14 0 t14 0" className="text-accent" strokeWidth="2.2" />
      <path d="M94 86 q-4 7 0 14 t0 14" className="text-accent" strokeWidth="2.2" />
      <path d="M106 86 q4 7 0 14 t0 14" className="text-accent" strokeWidth="2.2" />
      {/* Lashes */}
      <line x1="64" y1="71" x2="60" y2="62" className="stroke-primary/50" />
      <line x1="100" y1="65" x2="100" y2="55" className="stroke-primary/50" />
      <line x1="136" y1="71" x2="140" y2="62" className="stroke-primary/50" />
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Fundus globe */}
      <circle cx="100" cy="100" r="60" className="fill-primary/8 stroke-primary/30" />
      {/* Optic disc */}
      <circle cx="62" cy="98" r="12" className="fill-primary/15 stroke-primary/40" />
      {/* Major vascular arcades */}
      <path d="M72 92 C94 68, 126 62, 146 76" className="stroke-primary/60" strokeWidth="3" />
      <path d="M72 104 C94 132, 126 138, 148 126" className="stroke-primary/60" strokeWidth="3" />
      {/* Nasal vessels */}
      <path d="M52 92 C47 87, 46 82, 47 77" className="stroke-primary/50" strokeWidth="2" />
      <path d="M52 106 C47 112, 46 117, 47 122" className="stroke-primary/50" strokeWidth="2" />

      {/* Dot-blot hemorrhages */}
      <g fill="currentColor" stroke="none" className="text-red-500/90">
        <circle cx="82" cy="68" r="3" />
        <circle cx="76" cy="82" r="3" />
        <circle cx="83" cy="102" r="3" />
        <circle cx="75" cy="119" r="3" />
        <circle cx="81" cy="136" r="3" />
        <circle cx="99" cy="67" r="3" />
        <circle cx="92" cy="85" r="2.8" />
        <circle cx="100" cy="99" r="2.8" />
        <circle cx="93" cy="119" r="2.8" />
        <circle cx="103" cy="135" r="2.8" />
        <circle cx="120" cy="65" r="3" />
        <circle cx="109" cy="82" r="2.8" />
        <circle cx="121" cy="101" r="3" />
        <circle cx="108" cy="115" r="2.8" />
        <circle cx="118" cy="136" r="3" />
        <circle cx="135" cy="66" r="2.8" />
        <circle cx="126" cy="83" r="2.8" />
        <circle cx="138" cy="102" r="3" />
        <circle cx="129" cy="118" r="2.8" />
        <circle cx="138" cy="136" r="3" />
      </g>

      {/* Hard exudates */}
      <g fill="currentColor" stroke="none" className="text-yellow-500/90">
        <circle cx="95" cy="75" r="2.2" />
        <circle cx="112" cy="78" r="2" />
        <circle cx="88" cy="94" r="2" />
        <circle cx="116" cy="96" r="2.2" />
        <circle cx="104" cy="88" r="1.8" />
        <circle cx="128" cy="92" r="2" />
        <circle cx="90" cy="112" r="2" />
        <circle cx="120" cy="110" r="2.2" />
      </g>

      {/* Leakage droplet */}
      <path
        d="M150 150 C150 150, 140 165, 140 173 a10 10 0 0 0 20 0 C160 165, 150 150, 150 150 Z"
        className="fill-accent/10 stroke-accent stroke-[3]"
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball cross-section */}
      <circle cx="100" cy="100" r="64" className="fill-primary/8 stroke-primary/30" />
      {/* Cornea */}
      <path d="M38 80 C20 89, 20 111, 38 120" className="stroke-primary/40" strokeWidth="2.5" />
      {/* Lens */}
      <ellipse cx="45" cy="100" rx="6.5" ry="16" className="fill-primary/10 stroke-primary/40" />
      {/* Intact retina lining */}
      <path d="M66 154 C104 172, 150 146, 160 104" className="stroke-primary/60" strokeWidth="3" />
      {/* Detached retina flap — filled and accented */}
      <path
        d="M160 94 C152 60, 116 46, 80 54 C104 60, 124 70, 132 86 C136 96, 130 104, 118 106"
        className="fill-accent/15 stroke-accent stroke-[3.5]"
      />
      {/* Tear detail */}
      <path d="M118 106 l8 -4 l-2 6 l6 2" className="stroke-accent" strokeWidth="2.5" />
      {/* Lift indicator arrow */}
      <path d="M104 76 l6 -6 l-8 0" className="stroke-accent" strokeWidth="2" />
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-20.00,-20.00) scale(1.20)">
      {/* Eye almond shape */}
      <path d="M28 100 C54 62, 146 62, 172 100 C146 138, 54 138, 28 100 Z" className="fill-primary/8 stroke-primary/40" />
      {/* Iris */}
      <circle cx="100" cy="100" r="28" className="fill-primary/5 stroke-primary/30" />
      {/* Geographic atrophy ring */}
      <circle cx="100" cy="100" r="16" className="stroke-accent/60" strokeWidth="2" strokeDasharray="4 5" />

      {/* Drusen deposits */}
      <g fill="currentColor" stroke="none" className="text-gold">
        <circle cx="100" cy="100" r="4.5" />
        <circle cx="91" cy="94" r="3.2" />
        <circle cx="110" cy="94" r="3.2" />
        <circle cx="93" cy="108" r="3.2" />
        <circle cx="109" cy="107" r="3.2" />
        <circle cx="84" cy="100" r="2.5" />
        <circle cx="117" cy="100" r="2.5" />
        <circle cx="100" cy="84" r="2.5" />
        <circle cx="100" cy="117" r="2.5" />
      </g>

      {/* Lashes */}
      <line x1="64" y1="69" x2="60" y2="60" className="stroke-primary/50" />
      <line x1="100" y1="63" x2="100" y2="53" className="stroke-primary/50" />
      <line x1="136" y1="69" x2="140" y2="60" className="stroke-primary/50" />
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball globe */}
      <circle cx="92" cy="108" r="58" className="fill-primary/8 stroke-primary/30" />
      {/* Iris/pupil */}
      <circle cx="92" cy="108" r="22" className="fill-primary/5 stroke-primary/40" />
      <circle cx="92" cy="108" r="8" className="fill-primary/50" stroke="none" />

      {/* Vitrectomy probe */}
      <line x1="152" y1="44" x2="116" y2="80" className="stroke-accent" strokeWidth="4" />
      {/* Probe handle */}
      <path d="M152 44 l16 -16 a6 6 0 0 1 9 9 l-16 16 Z" className="fill-accent/20 stroke-accent" strokeWidth="2.5" />
      {/* Probe tip */}
      <circle cx="116" cy="80" r="3.5" className="fill-accent" stroke="none" />

      {/* Light pipe */}
      <line x1="158" y1="118" x2="128" y2="120" className="stroke-primary/70" strokeWidth="3" />
      <path d="M128 120 l-8 -3 m8 3 l-8 4" className="stroke-primary/70" strokeWidth="2" />
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <g transform="translate(-12.00,-12.00) scale(1.12)">
      {/* Eyeball globe */}
      <circle cx="100" cy="100" r="62" className="fill-primary/8 stroke-primary/30" />
      {/* Cornea */}
      <path d="M42 78 C24 88, 24 112, 42 122" className="stroke-primary/40" strokeWidth="2.5" />
      {/* Normal lens position (dotted) */}
      <ellipse cx="64" cy="100" rx="9" ry="22" className="stroke-primary/30" strokeWidth="2" strokeDasharray="4 5" />

      {/* Dense, dislocated cataractous lens */}
      <ellipse cx="104" cy="120" rx="15" ry="26" transform="rotate(32 104 120)" className="fill-accent/10 stroke-accent stroke-[3]" />
      {/* Cataract opacity hatch marks */}
      <g className="stroke-accent" strokeWidth="2" fill="none">
        <line x1="94" y1="114" x2="113" y2="122" />
        <line x1="97" y1="106" x2="114" y2="114" />
        <line x1="92" y1="124" x2="109" y2="132" />
        <line x1="100" y1="100" x2="117" y2="108" />
      </g>

      {/* Displacement arrow */}
      <path d="M76 104 C84 110, 92 114, 98 118" className="stroke-primary/50" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M98 118 l-9 -1 m9 1 l-3 -8" className="stroke-primary/50" strokeWidth="2" />
    </g>
  </svg>
);
