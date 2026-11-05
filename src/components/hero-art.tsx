/**
 * Abstract soft-3D composition: arches, domes, rounded slabs, discs and spheres.
 * Layered SVG so a few shapes can float. No text, no pictograms.
 * To swap in a rendered WebP/PNG later, replace this component's output with <Image>.
 */
const lime = (id: string, a = "#D6FF3F", b = "#9CD400") => (
  <linearGradient id={id} x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stopColor={a} />
    <stop offset="1" stopColor={b} />
  </linearGradient>
);

export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 570"
      role="img"
      aria-label="Abstract 3D composition of arches, domes, slabs and spheres"
      className={className}
    >
      <defs>
        {lime("l1")}
        {lime("l2", "#C6F522", "#86BD00")}
        <linearGradient id="lback" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A5D800" />
          <stop offset="1" stopColor="#6E9F00" />
        </linearGradient>
        <linearGradient id="t1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2FD0D8" />
          <stop offset="1" stopColor="#0B97A3" />
        </linearGradient>
        <linearGradient id="t2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5CE0E4" />
          <stop offset="1" stopColor="#14AEB8" />
        </linearGradient>
        <linearGradient id="t3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1FB8C2" />
          <stop offset="1" stopColor="#0A8793" />
        </linearGradient>
        <linearGradient id="w1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7FAFB" />
          <stop offset="1" stopColor="#CFDBE2" />
        </linearGradient>
        <linearGradient id="w2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E6EEF2" />
          <stop offset="1" stopColor="#BDCCD5" />
        </linearGradient>
        <radialGradient id="sl" cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#E9FF7A" />
          <stop offset=".5" stopColor="#B9F500" />
          <stop offset="1" stopColor="#79AB00" />
        </radialGradient>
        <radialGradient id="sw" cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".6" stopColor="#E7EEF2" />
          <stop offset="1" stopColor="#B9C8D1" />
        </radialGradient>
        <radialGradient id="st" cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#9AF2F5" />
          <stop offset=".5" stopColor="#12BFC5" />
          <stop offset="1" stopColor="#0A7F8A" />
        </radialGradient>
        <radialGradient id="glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#CFEFFF" stopOpacity=".9" />
          <stop offset="1" stopColor="#CFEFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <ellipse cx="420" cy="290" rx="400" ry="270" fill="url(#glow)" />

      {/* contact shadows */}
      <g filter="url(#soft)" fill="#06182A" opacity=".2">
        <ellipse cx="400" cy="520" rx="380" ry="20" />
      </g>

      {/* big lime arch */}
      <g className="animate-float-c">
        <path fillRule="evenodd" fill="url(#lback)" transform="translate(-14 4)"
          d="M195 340V190a185 185 0 0 1 370 0v150h-95V190a90 90 0 0 0-180 0v150Z" />
        <path fillRule="evenodd" fill="url(#l1)"
          d="M195 340V190a185 185 0 0 1 370 0v150h-95V190a90 90 0 0 0-180 0v150Z" />
      </g>

      {/* tall teal block (back right) */}
      <path fill="url(#t1)" d="M545 380V150a107 107 0 0 1 215 0v230Z" />

      {/* white slabs */}
      <path fill="url(#w1)" d="M385 380V190a95 95 0 0 1 95-95h85v285Z" />
      <path fill="url(#w2)" d="M470 440V360c0-80 90-135 180-135s140 65 140 135v80Z" />

      {/* lime dome upper right */}
      <path fill="url(#l2)" d="M530 440c0-70 55-125 125-125s125 55 125 125Z" />

      {/* teal central block */}
      <g className="animate-float-a">
        <path fill="url(#t1)" d="M240 470V255a50 50 0 0 1 50-50h125a50 50 0 0 1 50 50v215Z" />
        <path fill="#fff" opacity=".12" d="M240 470V255a50 50 0 0 1 50-50h30v265Z" />
      </g>

      {/* lime half-dome left */}
      <path fill="url(#l2)" d="M0 480V420c0-80 60-140 135-140s105 60 105 140v60Z" />

      {/* teal drum + disc */}
      <g>
        <path fill="url(#t3)" d="M110 365v60a95 22 0 0 0 190 0v-60Z" />
        <ellipse cx="205" cy="365" rx="95" ry="22" fill="url(#t2)" />
      </g>
      <g>
        <path fill="url(#t3)" d="M195 458v22a100 20 0 0 0 200 0v-22Z" />
        <ellipse cx="295" cy="458" rx="100" ry="20" fill="url(#t2)" />
      </g>

      {/* front lime dome with arch */}
      <g className="animate-float-b">
        <path fillRule="evenodd" fill="url(#lback)" transform="translate(10 -6)"
          d="M355 520a140 140 0 0 1 280 0h-65a75 75 0 0 0-150 0Z" />
        <path fillRule="evenodd" fill="url(#l1)"
          d="M355 520a140 140 0 0 1 280 0h-65a75 75 0 0 0-150 0Z" />
      </g>

      {/* spheres */}
      <g className="animate-float-a">
        <circle cx="145" cy="205" r="34" fill="url(#sl)" />
        <circle cx="565" cy="48" r="22" fill="url(#st)" />
      </g>
      <circle cx="102" cy="455" r="52" fill="url(#sw)" />
      <g className="animate-float-b">
        <circle cx="513" cy="478" r="50" fill="url(#sl)" />
      </g>
    </svg>
  );
}
