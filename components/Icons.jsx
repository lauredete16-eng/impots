const P = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
export const Arrow = (p) => <svg {...P} {...p}><path d="M4 12h16M14 6l6 6-6 6" /></svg>;
export const External = (p) => <svg {...P} {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
export const Search = (p) => <svg {...P} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
export const Burger = (p) => <svg {...P} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>;
export const Close = (p) => <svg {...P} {...p}><path d="M5 5l14 14M19 5 5 19" /></svg>;
export const Home = (p) => <svg {...P} width={18} height={18} {...p}><path d="M4 11 12 4l8 7v9H4zM10 20v-6h4v6" /></svg>;
export const Chat = (p) => <svg {...P} width={18} height={18} {...p}><path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-5 4V6a1 1 0 0 1 1-1z" /></svg>;
export const Bolt = (p) => <svg {...P} width={14} height={14} fill="currentColor" strokeWidth={0} {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>;
export const Contrast = (p) => <svg {...P} width={22} height={22} {...p}><circle cx="12" cy="12" r="5" /><path d="M12 7v10M12 1v2M12 21v2M3 12H1M23 12h-2M5 5 4 4M20 4l-1 1M5 19l-1 1M20 20l-1-1" /></svg>;
export const Social = ({ kind }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" fill="#000091">
    {kind === "facebook" && <path d="M20 4a16 16 0 1 0 2 31.9V25h-4v-5h4v-3.6c0-4 2.4-6.2 6-6.2 1.7 0 3.5.3 3.5.3v4h-2c-2 0-2.6 1.2-2.6 2.5V20h4.4l-.7 5H24v10.9A16 16 0 0 0 20 4z" />}
    {kind === "x" && <path d="M7 7h8l6 8 7-8h3l-8.6 10L34 33h-8l-6.4-8.6L12 33H9l9-10.5zm5 2 14 22h2L14 9z" />}
    {kind === "linkedin" && <path d="M6 6h28v28H6zm5 10v13h4V16zm2-6a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zM18 16v13h4v-7c0-2 1-3 2.5-3S27 20 27 22v7h4v-8c0-3.5-1.8-5.3-4.4-5.3-1.7 0-2.8.8-3.6 2V16z" />}
    {kind === "instagram" && <path d="M10 5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5zm10 8a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8-6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" fillRule="evenodd" />}
  </svg>
);
