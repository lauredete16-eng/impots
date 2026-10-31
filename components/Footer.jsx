import Logo from "./Logo";
import { Social, External, Chat, Contrast } from "./Icons";
const COLS = [
  ["Rubriques du site", ["Particulier", "Professionnel", "Partenaire", "Collectivité", "Statistiques et Données", "International", "Documentation", "Nous connaître", "Nous rejoindre"]],
  ["Informations", ["Aide sur le site", "Sécurité informatique", "Ouverture des données publiques de la DGFiP", ["À quoi servent mes impôts ?", true], "Supports pédagogiques et citoyens"]],
  ["Qualité de service", ["Sourds et malentendants - Accéo", "Les engagements de la DGFiP", "Votre avis sur le site"]],
];
const LEGAL = ["Plan du site", "Accessibilité : partiellement conforme", "Accessibilité des services en ligne", "Mentions légales", "Données personnelles", "Gestion des cookies"];
export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-b-[3px] border-brand bg-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-xl font-bold">Suivez-nous sur les réseaux sociaux</h2>
          <ul className="mt-4 flex gap-6">{["facebook", "x", "linkedin", "instagram"].map((k) => <li key={k}><a href="#" aria-label={k}><Social kind={k} /></a></li>)}</ul>
        </div>
      </div>
      <div className="bg-grey2">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <a href="#" className="btn btn-outline gap-2 bg-white text-lg"><Chat /> Contact et prise de RDV</a>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {COLS.map(([t, items]) => (
              <div key={t}>
                <h3 className="font-bold">{t}</h3>
                <ul className="mt-3 space-y-3 text-[15px] text-gray-700">
                  {items.map((i) => { const [l, ext] = Array.isArray(i) ? i : [i, false]; return <li key={l}><a href="#" className="inline-flex items-center gap-2 hover:underline">{l}{ext && <External width={16} height={16} />}</a></li>; })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Logo large />
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg font-bold">
          {[["info.gouv.fr", "https://www.info.gouv.fr/"], ["service-public.gouv.fr", "https://www.service-public.gouv.fr/"], ["Legifrance.gouv.fr", "https://www.legifrance.gouv.fr"], ["data.gouv.fr", "https://www.data.gouv.fr/fr/"]].map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">{l}<External width={18} height={18} /></a></li>)}
        </ul>
        <ul className="mt-6 flex flex-wrap border-t border-gray-300 pt-6 text-gray-600">
          {LEGAL.map((l) => <li key={l} className="mb-2 mr-3 border-r border-gray-300 pr-3 text-[15px]"><a href="#" className="hover:underline">{l}</a></li>)}
        </ul>
        <button className="mt-2 inline-flex items-center gap-2 text-gray-600"><Contrast /> Paramètres d’affichage</button>
       
      </div>
    </footer>
  );
}
