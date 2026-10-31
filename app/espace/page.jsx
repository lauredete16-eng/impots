"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
const fmt = (n) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n);

export default function Espace() {
  const { user, ready } = useAuth();
  const router = useRouter();
  useEffect(() => { if (ready && !user) router.replace("/connexion"); }, [ready, user, router]);
  if (!user) return <p className="p-10">Chargement…</p>;
  const total = user.echeancier.reduce((s, e) => s + e.montant, 0);
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Bonjour {user.prenom} {user.nom}</h1>
      <dl className="mt-4 grid gap-2 rounded-lg bg-brand-light p-5 text-sm sm:grid-cols-3">
        <div><dt className="text-gray-600">Numéro fiscal</dt><dd className="font-semibold">{user.numeroFiscal}</dd></div>
        <div><dt className="text-gray-600">Situation</dt><dd className="font-semibold">{user.situation}</dd></div>
        <div><dt className="text-gray-600">Courriel</dt><dd className="font-semibold">{user.email}</dd></div>
      </dl>
      <h2 className="mt-10 text-xl font-bold">Mes avis d'impôt</h2>
      <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm">
        <thead><tr className="border-b text-gray-600"><th className="py-2">Année</th><th>Revenu</th><th>Impôt</th><th>Statut</th></tr></thead>
        <tbody>{user.avis.map((a) => <tr key={a.annee} className="border-b"><td className="py-2">{a.annee}</td><td>{fmt(a.revenu)}</td><td>{fmt(a.impot)}</td><td className={a.statut === "Payé" ? "text-brand" : "font-semibold text-red-700"}>{a.statut}</td></tr>)}</tbody>
      </table></div>
      <h2 className="mt-10 text-xl font-bold">Échéancier — ce qui reste à payer</h2>
      <ul className="mt-3 divide-y rounded-lg border">
        {user.echeancier.map((e, i) => <li key={i} className="flex justify-between px-4 py-3 text-sm"><span>{e.date}</span><strong>{fmt(e.montant)}</strong></li>)}
        <li className="flex justify-between bg-brand-light px-4 py-3 text-sm font-bold"><span>Total</span><strong>{fmt(total)}</strong></li>
      </ul>
      <Link href="/" className="btn btn-outline mt-8">Retour à l'accueil</Link>
    </div>
  );
}