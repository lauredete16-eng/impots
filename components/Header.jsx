"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useAuth } from "./AuthProvider";
import { Search, Burger, Close } from "./Icons";
import { SITE } from "@/lib/config";

const NAV = [["Accueil", "/"], ["Particulier", "/particulier"], ["Professionnel", "/professionnel"], ["Partenaire", "#"], ["Collectivité", "#"], ["Statistiques et Données", "#"], ["International", "#"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const inEspace = pathname.startsWith("/espace");

  const actions = user ? (
    <>
      {!inEspace && <Link href="/espace" className="btn btn-primary">Mon espace</Link>}
      <button onClick={logout} className="btn btn-outline">Déconnexion</button>
    </>
  ) : (
    <>
      <Link href="/connexion?type=particulier" className="btn btn-primary">Connexion à mon espace Finances publiques</Link>
      <Link href="/connexion?type=professionnel" className="btn btn-outline">Connexion à l'espace professionnel</Link>
    </>
  );

  return (
    <header className="relative z-20 bg-white shadow-[0_4px_8px_rgba(0,0,0,.12)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-start justify-between pt-5">
          <Link href="/" aria-label={`Accueil — ${SITE.name}`}><Logo /></Link>
          <div className="flex items-center gap-3">
            <div className="hidden flex-wrap justify-end gap-2 md:flex">{actions}</div>
            {!inEspace && <button aria-label="Rechercher" className="p-2 text-brand"><Search width={26} height={26} /></button>}
            {!inEspace && (
              <button aria-label={open ? "Fermer le menu" : "Menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="border border-gray-300 p-3 text-brand md:hidden">{open ? <Close /> : <Burger />}</button>
            )}
          </div>
        </div>
        <p className="mt-3 border-t border-gray-300 py-3 text-xl font-medium">{SITE.domain}</p>
      </div>
      {!inEspace && (
        <nav aria-label="Menu principal" className={`${open ? "block" : "hidden"} border-t border-gray-200 bg-white md:block`}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-2 py-3 md:hidden">{actions}</div>
            <ul className="flex flex-col md:flex-row md:flex-wrap">
              {NAV.map(([label, href]) => <li key={label}><Link href={href} className="block border-b border-gray-200 px-3 py-3 font-medium hover:bg-brand-light hover:text-brand md:border-b-0">{label}</Link></li>)}
              <li><Link href="#" className="block px-3 py-3 font-medium hover:bg-brand-light hover:text-brand md:hidden">Contact et prise de RDV</Link></li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}