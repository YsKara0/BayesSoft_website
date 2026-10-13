// Local, text-free interface diagram for no-JS/WebGL failure. Both states remain
// available; this is a static diagram, not a claim to match the PBR renderer.
export function fallbackSvg(compact = false) {
  const left = compact ? "" : `<rect x="130" y="77" width="102" height="256" rx="7" fill="#f5f5f0" stroke="#aeb3af"/><path d="M225 88v234" stroke="#78858a" stroke-width="4"/>${[112,153,194,235,276].map((y) => `<rect x="146" y="${y}" width="65" height="22" rx="2" fill="#e4e7e4"/>`).join("")}`;
  const right = compact ? `<path d="M365 82h14v250h-14" fill="#cbd0ca" stroke="#9fa8a5"/>` : `<rect x="398" y="77" width="102" height="256" rx="7" fill="#f5f5f0" stroke="#aeb3af"/><path d="M405 88v234" stroke="#78858a" stroke-width="4"/><rect x="420" y="110" width="60" height="130" fill="#e4e7e4"/>`;
  const cards = compact
    ? `<rect x="289" y="126" width="61" height="71" rx="3" fill="#fff"/><rect x="289" y="211" width="61" height="71" rx="3" fill="#fff"/>`
    : `<rect x="251" y="174" width="61" height="71" rx="3" fill="#fff"/><rect x="326" y="174" width="61" height="71" rx="3" fill="#fff"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" aria-hidden="true"><defs><radialGradient id="ground"><stop stop-color="#687273" stop-opacity=".14"/><stop offset="1" stop-color="#687273" stop-opacity="0"/></radialGradient></defs><ellipse cx="320" cy="366" rx="${compact ? 120 : 220}" ry="28" fill="url(#ground)"/><rect x="${compact ? 241 : 135}" y="343" width="${compact ? 158 : 365}" height="15" rx="3" fill="#aeb3af"/>${left}${right}<rect x="237" y="73" width="161" height="260" rx="9" fill="#f5f5f0" stroke="#aeb3af"/><rect x="247" y="92" width="140" height="228" rx="3" fill="#e4e7e4"/><rect x="265" y="106" width="92" height="7" fill="#56636a"/>${cards}<rect x="275" y="299" width="85" height="10" rx="2" fill="#8aadc2"/></svg>`;
}
