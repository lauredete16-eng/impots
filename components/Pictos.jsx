// Pictogrammes SVG maison (bleu + rouge). Pour utiliser tes propres images, remplace <Picto> par <img src="/images/..." />.
const B = "#000091", R = "#e1000f";
const S = { fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
const Coin = ({ x, y, r = 7 }) => <g><circle cx={x} cy={y} r={r} stroke={R} {...S} /><text x={x} y={y + r * 0.38} fontSize={r * 1.2} fontWeight="700" fill={R} textAnchor="middle">€</text></g>;
const Car = ({ x, y, c = B }) => <g transform={`translate(${x} ${y})`} stroke={c} {...S}><path d="M2 14v-5l3-6h12l3 6v5z" /><circle cx="7" cy="15" r="2" /><circle cx="15" cy="15" r="2" /></g>;
const Doc = ({ children }) => <g><rect x="16" y="8" width="32" height="46" stroke={B} {...S} /><path d="M22 18h12M22 26h20" stroke={B} {...S} />{children}</g>;

const ART = {
  pin: <g><path d="M32 8a13 13 0 0 1 13 13c0 10-13 25-13 25S19 31 19 21A13 13 0 0 1 32 8z" stroke={B} {...S} /><circle cx="32" cy="21" r="5" stroke={R} {...S} /><ellipse cx="32" cy="50" rx="12" ry="3" stroke={B} {...S} /></g>,
  bank: <g><path d="M8 26 32 12l24 14zM10 52h44M16 30v20M26 30v20M38 30v20M48 30v20" stroke={B} {...S} /><Coin x={32} y={22} r={6} /></g>,
  web: <g><rect x="6" y="12" width="40" height="30" stroke={B} {...S} /><path d="M6 20h40M12 16h2M17 16h2" stroke={B} {...S} /><circle cx="44" cy="40" r="11" stroke={R} {...S} /><path d="M33 40h22M44 29c-5 6-5 16 0 22M44 29c5 6 5 16 0 22" stroke={R} {...S} /></g>,
  avis: <Doc><path d="M24 36l6 6 10-12" stroke={R} {...S} /></Doc>,
  pay: <g><rect x="6" y="16" width="52" height="32" stroke={B} {...S} /><path d="M6 26h52" stroke={B} {...S} /><Coin x={44} y={38} r={6} /></g>,
  invoice: <Doc><Coin x={40} y={44} r={7} /></Doc>,
  fine: <g><Car x={10} y={34} /><path d="M10 28h12" stroke={B} {...S} /><Coin x={32} y={16} r={8} /><Car x={34} y={36} c={R} /></g>,
  parking: <Doc><text x="32" y="40" fontSize="12" fontWeight="700" fill={R} textAnchor="middle">F</text><Car x={34} y={42} c={R} /></Doc>,
  quitus: <Doc><Coin x={20} y={14} r={7} /><Car x={30} y={40} c={R} /></Doc>,
  stamp: <g><path d="M32 8a8 8 0 0 1 4 15v10h-8V23a8 8 0 0 1 4-15zM16 33h32v10H16zM14 52h36" stroke={B} {...S} /><path d="M20 47h24" stroke={R} {...S} /></g>,
  plan: <g><rect x="10" y="12" width="44" height="40" stroke={B} {...S} /><path d="M10 26h44M10 40h44M25 12v40M40 12v40" stroke={B} {...S} /><circle cx="32" cy="33" r="4" stroke={R} {...S} /></g>,
  sale: <g><path d="M8 32 30 10h24v24L32 56z" stroke={B} {...S} /><circle cx="44" cy="20" r="3.5" stroke={R} {...S} /></g>,
  cheque: <g><rect x="6" y="16" width="52" height="32" stroke={B} {...S} /><path d="M12 26h20M12 34h14M12 42h10" stroke={B} {...S} /><Coin x={46} y={34} r={7} /></g>,
  person: <g><circle cx="32" cy="26" r="9" stroke={B} {...S} /><path d="M14 54c2-11 9-16 18-16s16 5 18 16" stroke={B} {...S} /><path d="M20 26a12 12 0 0 1 24 0" stroke={R} {...S} /></g>,
  briefcase: <g><rect x="8" y="22" width="48" height="30" rx="3" stroke={B} {...S} /><path d="M24 22v-6h16v6M8 36h48" stroke={B} {...S} /><path d="M28 36v4h8v-4" stroke={R} {...S} /></g>,
};
export default function Picto({ kind, size = 80 }) {
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">{ART[kind] || ART.doc}</svg>;
}
