import { PROFESSIONNEL } from "@/lib/data";
export const metadata = { title: "Professionnel" };
export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Professionnel</h1>
      <p className="mt-3 max-w-3xl text-gray-700">{PROFESSIONNEL.intro}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{PROFESSIONNEL.links.map((l) => <li key={l}><a href="#" className="block rounded border border-gray-200 px-4 py-3 font-medium text-brand hover:bg-brand-light">{l}</a></li>)}</ul>
    </div>
  );
}
