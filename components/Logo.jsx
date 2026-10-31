import { SITE } from "@/lib/config";

const LOGO_SRC = "/images/L1.jpeg";

export default function Logo({ large = false }) {
  return (
    <span className="inline-flex flex-col items-start leading-none">
      <img
        src={LOGO_SRC}
        alt={SITE.name}
        className={large ? "h-14 w-auto" : "h-10 w-auto"}
      />
      <span
        className={`mt-2 font-extrabold uppercase leading-[1.05] tracking-tight text-black ${
          large ? "text-4xl" : "text-xl"
        }`}
      >
        République
        <br />
        de Michel
      </span>
      <span
        className={`mt-1 font-serif italic text-gray-700 ${
          large ? "text-base" : "text-[11px]"
        }`}
      >
       Liberté
        <br />
        Egalité
        <br />
        Fraternité
      </span>
    </span>
  );
}