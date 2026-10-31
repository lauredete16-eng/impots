"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

function Form() {
  const router = useRouter();
  const type = useSearchParams().get("type") === "professionnel" ? "professionnel" : "particulier";
  const { login } = useAuth();
  const [id, setId] = useState(""); const [pw, setPw] = useState(""); const [err, setErr] = useState("");
  const submit = (e) => { e.preventDefault(); const r = login(id, pw, type); if (r.ok) router.push("/espace"); else setErr(r.error); };
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold">{type === "professionnel" ? "Connexion à l'espace professionnel" : "Connexion à mon espace"}</h1>
      
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block text-sm font-medium">Identifiant<input value={id} onChange={(e) => setId(e.target.value)} required autoComplete="username" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" /></label>
        <label className="block text-sm font-medium">Mot de passe<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required autoComplete="current-password" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" /></label>
        {err && <p role="alert" className="text-sm font-medium text-red-700">{err}</p>}
        <button className="btn btn-primary w-full">Se connecter</button>
      </form>
    </div>
  );
}
export default function Page() { return <Suspense><Form /></Suspense>; }