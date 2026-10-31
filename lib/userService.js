// Service d'utilisateurs 100 % frontend : les comptes sont créés ici, dans le code.
// Pour ajouter un utilisateur : ajoute un objet dans USERS (ou appelle UserService.create).
const USERS = [
  {
    id: 1, type: "particulier", identifiant: "0701486045", motDePasse: "260823",
    nom: "Cocheret", prenom: "Michelle", numeroFiscal: "12 34 56 78 00 123", email: "michelle.cocheret@gmail.com",
    situation: "Strasbourg",
    avis: [
      { annee: 2025, revenu: 42000, impot: 1850, statut: "Payé" },
      { annee: 2024, revenu: 38000, impot: 1520, statut: "Payé" },
    ],
    echeancier: [
      { date: "3 novembre 2026", montant: 1600 },
      { date: "16 novembre 2026", montant: 2000 },
      { date: "31 décembre 2026", montant: 2000 },
    ],
  },
  {
    id: 2, type: "professionnel", identifiant: "entreprise", motDePasse: "demo1234",
    nom: "Traoré", prenom: "Awa", numeroFiscal: "SIREN 123 456 789", email: "contact@entreprise.example",
    situation: "SARL — Régime réel normal",
    avis: [{ annee: 2025, revenu: 28500000, impot: 2400000, statut: "À payer" }],
    echeancier: [{ date: "20 octobre 2026", montant: 310000 }],
  },
];
const KEY = "fiscalia_session";
const strip = ({ motDePasse, ...u }) => u;

export const UserService = {
  login(identifiant, motDePasse, type) {
    const u = USERS.find((x) => x.identifiant === identifiant.trim() && x.motDePasse === motDePasse.trim() && (!type || x.type === type));
    if (!u) return { ok: false, error: "Identifiant ou mot de passe incorrect." };
    const user = strip(u);
    try { localStorage.setItem(KEY, JSON.stringify(user)); } catch {}
    return { ok: true, user };
  },
  logout() { try { localStorage.removeItem(KEY); } catch {} },
  getCurrentUser() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } },
  create(data) { USERS.push({ id: USERS.length + 1, avis: [], echeancier: [], ...data }); },
};