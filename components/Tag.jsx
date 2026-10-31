import { Bolt } from "./Icons";
const STYLES = {
  "À la une": "bg-[#fceeac] text-[#3d3200]",
  Particulier: "bg-[#eef0fb] text-[#283a7d]",
  Professionnel: "bg-[#fdeef6] text-[#6b3550]",
  "Communication générale": "bg-[#eeeeee] text-[#333333]",
};
export default function Tag({ children }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-sm font-bold uppercase tracking-wide ${STYLES[children] || STYLES["Communication générale"]}`}>
      {children === "À la une" && <Bolt />}{children}
    </span>
  );
}
