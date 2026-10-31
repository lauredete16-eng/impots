import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import Picto from "@/components/Pictos";
import { Arrow, External, Home } from "@/components/Icons";
import { NEWS, BON_A_SAVOIR, ACCOMPAGNEMENT, DEMARCHES, POUR_ALLER_PLUS_LOIN, PARTICULIER, PROFESSIONNEL } from "@/lib/data";
import { SITE } from "@/lib/config";

const H2 = ({ children }) => <h2 className="mb-6 text-2xl font-bold">{children}</h2>;
const Bar = ({ ext, label, sub, picto }) => (
  <a href="#" className="flex flex-col items-center border border-gray-300 border-b-4 border-b-brand bg-white px-6 pb-4 pt-8 text-center text-brand hover:bg-brand-light">
    <span className="mb-6"><Picto kind={picto} /></span>
    <span className="text-lg"><b className={sub ? "font-bold" : "font-normal"}>{label}</b>{sub && <><br />{sub}</>}</span>
    <span className="mt-4 self-end">{ext ? <External /> : <Arrow />}</span>
  </a>
);

export default function Accueil() {
  return (
    <div>
      <h1 className="sr-only">Accueil {SITE.domain}</h1>

      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="border border-navy bg-white p-6 shadow-[0_0_28px_rgba(49,63,127,.28)] md:grid md:grid-cols-2 md:gap-8 md:p-8">
          <ImageSlot src="/images/L2.jpeg" label="Aides carburant — grands rouleurs 100 €" ratio="1/1" bg="#314a8a" className="mx-auto w-full max-w-md" />
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-bold leading-tight text-[#2d2a85]">Aide de 100 € pour les travailleurs « grands rouleurs »</h2>
            <p className="mt-3 text-gray-600">Publié le 27 octobre 2026</p>
            <p className="mt-4 text-lg">L'aide de 100 € pour les grands rouleurs a été <b>renouvelée et étendue pour la période d'octobre à décembre 2026.</b> Elle bénéficie désormais à 5,5 millions de personnes :</p>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-lg">
              <li>si vous avez <b>déjà perçu</b> l'aide sur la période précédente, <b>un nouveau versement de 100 €</b> vous a été <b>automatiquement attribué</b> le 16 octobre.</li>
              <li>si vous n'avez pas perçu l'aide sur la période précédente, nous vous invitons à utiliser notre simulateur pour <b>vérifier votre éligibilité aux nouveaux critères</b> et <b>effectuer votre demande</b>.<br />Les demandeurs doivent notamment effectuer plus de 15 kilomètres par trajet entre leur domicile et leur lieu de travail ou plus de 8 000 kilomètres par an dans le cadre de leur activité professionnelle (cette condition incluant les trajets domicile-travail).</li>
            </ul>
            <a href="#" className="mt-6 inline-flex border-l-[6px] border-red2 bg-navy px-5 py-3 text-xl text-white hover:bg-[#263266]">En savoir plus</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <H2>À la Une</H2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <a key={n.id} href="#" className="flex flex-col border border-gray-300 bg-white hover:shadow-md">
              <ImageSlot {...n.image} ratio="16/7" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-brand">{n.title}</h3>
                {n.text && <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">{n.text}</p>}
                <div className="mt-auto flex items-center justify-between pt-8 text-sm text-gray-600"><span>{n.date && `Publié le ${n.date}`}</span><Arrow className="text-brand" /></div>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-right"><a href="#" className="lnk text-lg">Voir toutes les actualités <Arrow /></a></p>
      </section>

      <section className="mt-14">
        <div className="bg-indigo2 px-4 py-4"><div className="mx-auto max-w-6xl"><ImageSlot src="/images/L9.jpeg" label="Bannière « Avec la facturation électronique, nous changeons d’ère — plus juste, plus simple, plus efficace »" ratio="16/5" bg="#3a3591" /></div></div>
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold text-[#2d2a85]">La facturation électronique est lancée</h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed"><b>Depuis le 1<sup>er</sup> septembre 2026</b>, les grandes entreprises et les entreprises de taille intermédiaire doivent émettre leurs factures via une plateforme agréée, et toutes les entreprises doivent être en capacité de recevoir des factures électroniques. Nos services sont pleinement mobilisés pour que chacune puisse entrer dans le dispositif.</p>
          <a href="#" className="btn btn-primary mt-6 text-lg">En savoir plus</a>
          <hr className="my-8 border-gray-300" />
          <p className="text-lg">Pour tout renseignement sur la facturation électronique :</p>
          <span className="mt-3 inline-flex items-stretch border border-gray-200 text-2xl font-bold"><span className="bg-gray-100 px-3 py-2 text-gray-500">{SITE.phonePro}</span><span className="flex flex-col justify-center bg-gray-500 px-3 text-xs font-semibold leading-tight text-white">Service gratuit<br />+ prix appel</span></span>
        </div>
        <div className="bg-[#dfeafb]"><div className="mx-auto max-w-6xl px-4 py-8">
          <h3 className="text-2xl font-bold">📖 Guide pratique pour accompagner la mise en œuvre de la réforme</h3>
          <p className="mt-3 text-lg text-[#3a3a3a]">Ce guide pratique précise les conditions de démarrage de la réforme effective depuis le 1er septembre.</p>
          <a href="#" className="lnk mt-4 text-xl font-bold"><Arrow width={18} /> Consulter le guide pratique (PDF) <External width={18} /></a>
        </div></div>
        <div className="h-12 bg-indigo2" />
      </section>

      <section className="bg-brand-light py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {[["Vous êtes un particulier", "particulier", "Accueil particulier", "/particulier", PARTICULIER], ["Vous êtes un professionnel", "professionnel", "Accueil Professionnel", "/professionnel", PROFESSIONNEL]].map(([t, type, a, ah, d]) => (
            <div key={t} className="bg-white p-8">
              <div className="flex items-center gap-4"><Picto kind={type === "particulier" ? "person" : "briefcase"} size={56} /><h2 className="text-2xl font-bold">{t}</h2></div>
              <Link href={`/connexion?type=${type}`} className="lnk mt-4 text-lg">Se connecter <External width={18} /></Link>
              <hr className="my-5 border-gray-300" />
              <Link href={ah} className="lnk text-lg"><Home /> {a}</Link>
              <p className="mt-4 text-lg leading-relaxed text-[#3a3a3a]">{d.intro}</p>
              <ul className="mt-6 space-y-4">{d.links.map((l) => <li key={l}><a href="#" className="lnk text-lg">{l} <Arrow width={18} /></a></li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <H2>Bon à savoir</H2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BON_A_SAVOIR.map((b) => (
            <a key={b.title} href="#" className="flex flex-col border border-gray-300 bg-white hover:shadow-md">
              <ImageSlot {...b.image} ratio="16/8" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand">{b.title}</h3>
                <p className="mt-3 whitespace-pre-line text-lg leading-relaxed text-[#3a3a3a]">{b.text}</p>
                <div className="mt-auto flex items-center justify-between pt-8 text-sm text-gray-600"><span>En savoir plus</span>{b.ext ? <External className="text-brand" /> : <Arrow className="text-brand" />}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14"><H2>Nous vous accompagnons</H2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{ACCOMPAGNEMENT.map((a) => <Bar key={a.label} {...a} />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-14"><H2>Démarches</H2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{DEMARCHES.map(([d, p]) => <Bar key={d} label={d} picto={p} ext />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-14"><H2>Pour aller plus loin</H2>
        <ul className="grid gap-3 sm:grid-cols-2">{POUR_ALLER_PLUS_LOIN.map((l) => <li key={l}><a href="#" className="lnk text-lg">{l} <Arrow width={18} /></a></li>)}</ul>
      </section>
    </div>
  );
}