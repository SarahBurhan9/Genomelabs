import { cx } from "@/lib/cx";

export function ServiceMotif({ name = "pcr", className }) {
  return (
    <svg
      viewBox="0 0 320 180"
      className={cx("service-motif h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {name === "pcr" ? <PcrMotif /> : null}
      {name === "orbit" ? <OrbitMotif /> : null}
      {name === "ticks" ? <TicksMotif /> : null}
      {name === "extract" ? <ExtractMotif /> : null}
    </svg>
  );
}

function PcrMotif() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M24 140h272" opacity="0.35" />
      <path d="M40 140 C70 140 78 40 110 40 S150 140 182 140 S230 48 270 48" />
      <circle cx="110" cy="40" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="182" cy="140" r="3" fill="currentColor" stroke="none" />
      <circle cx="248" cy="62" r="2.5" fill="currentColor" stroke="none" className="node-accent" />
      <path d="M48 28h18M57 19v18" opacity="0.5" />
    </g>
  );
}

function OrbitMotif() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="168" cy="90" r="28" />
      <circle cx="168" cy="90" r="52" opacity="0.45" />
      <circle cx="168" cy="90" r="74" opacity="0.25" />
      <circle cx="214" cy="58" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="120" cy="112" r="2.5" fill="currentColor" stroke="none" className="node-accent" />
      <path d="M36 150h64" opacity="0.4" />
    </g>
  );
}

function TicksMotif() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {Array.from({ length: 9 }, (_, index) => (
        <line
          key={index}
          x1="46"
          x2={index % 3 === 0 ? 78 : 64}
          y1={28 + index * 15}
          y2={28 + index * 15}
          opacity={index % 3 === 0 ? 1 : 0.45}
        />
      ))}
      <path d="M108 132h150" />
      <path d="M108 132 V48" opacity="0.35" />
      <circle cx="188" cy="86" r="3" fill="currentColor" stroke="none" />
      <circle cx="230" cy="64" r="2.5" fill="currentColor" stroke="none" className="node-accent" />
      <path d="M150 132l38-46 42 22 48-44" />
    </g>
  );
}

function ExtractMotif() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="48" y="36" width="36" height="108" />
      <path d="M48 64h36M48 92h36M48 120h36" opacity="0.4" />
      <path d="M110 90h150" />
      <circle cx="150" cy="90" r="3" fill="currentColor" stroke="none" />
      <circle cx="196" cy="90" r="3" fill="currentColor" stroke="none" className="node-accent" />
      <circle cx="242" cy="90" r="3" fill="currentColor" stroke="none" />
      <path d="M150 90v-28M196 90v18M242 90v-18" opacity="0.45" />
    </g>
  );
}
