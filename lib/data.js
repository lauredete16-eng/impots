// `image: { label, bg, src }` → mets `src: "/images/xxx.jpg"` pour afficher une vraie image.
export const NEWS = [
  { id: 1, title: "Mesures de soutien aux commerces touchés par les dégradations du samedi 17 et dimanche 18 octobre 2026",
    text: "Le Gouvernement met en place un ensemble de mesures économiques pour soutenir les entreprises victimes des dégradations des 17 et 18 octobre 2026.", date: "26/10/2026", image: { src: "/images/L3.jpeg", label: "Calculatrice (bandeau)", bg: "#d9d6d2" } },
  { id: 2, title: "Carburants : détail des aides pour faire face à la hausse des prix",
    text: "Suite aux dernières annonces du gouvernement, découvrez les dispositifs d’aide pour faire face à la hausse des prix du carburant : l’aide pour les travailleurs grands rouleurs, l’aide pour les entreprises du secteur du bâtiment et des travaux publics utilisant du gazole non routier et l’aide pour l’acquisition de gazole non routier utilisé pour la réalisation de travaux agricoles ou forestiers.", date: "01/10/2026", image: { src: "/images/L4.jpeg", label: "Aides carburant (3 visuels)", bg: "#e9c46a" } },
  { id: 3, title: "Facturation électronique",
    text: "Depuis le 1er septembre 2026, les grandes entreprises et les entreprises de taille intermédiaire doivent émettre leurs factures via une plateforme agréée, et toutes les entreprises doivent être en capacité de recevoir des factures électroniques.", date: "28/09/2026", image: { src: "/images/L5.jpeg", label: "Logo Facturation électronique", bg: "#2e2a80" } },
  { id: 4, title: "Ouverture du service de correction des déclarations de revenus en ligne",
    text: "Le service de correction des déclarations de revenus en ligne est ouvert du 29 juillet au 30 novembre 2026 inclus.", date: "30/07/2026", image: { src: "/images/L6.jpeg", label: "Femme avec smartphone", bg: "#59686a" } },
  { id: 5, title: "Bulletin \"DGFiP Statistiques\" n°52 - La taxe d’habitation sur les résidences secondaires en 2025",
    text: "Les montants mis à la charge des contribuables au titre de la taxe d’habitation sur les résidences secondaires (THRS) diminuent de 9,7 % en 2025.", date: "20/10/2026", image: { src: "/images/L7.jpeg", label: "Statistique publique de la fiscalité", bg: "#d8d9fb" } },
  { id: 6, title: "Bulletin \"DGFiP Analyses\" n°11 - Manque à gagner en matière d'impôt sur les sociétés : à partir des données de contrôle fiscal 2015-2019, une première estimation à 6 Md€",
    text: "", date: "", image: { src: "/images/L8.jpeg", label: "Statistique publique de la fiscalité", bg: "#d8d9fb" } },
];

export const BON_A_SAVOIR = [
  { title: "Concours, métiers de l’informatique, apprentissage, stages", text: "Avez-vous pensé aux finances publiques ?", ext: true, image: { src: "/images/L10.jpeg", label: "Qui mieux que vous pour rejoindre les Finances publiques ?", bg: "#000091" } },
  { title: "Gérer mon prélèvement à la source", text: "Mariage, naissance, retraite, évolution salariale : adaptez votre impôt à votre nouvelle situation.", image: { src: "/images/L11.jpeg", label: "Votre situation a changé ? (4 photos)", bg: "#c5cdf5" } },
  { title: "Aides aux entreprises, indépendants, entrepreneurs", text: "Découvrir l’ensemble des aides et contacter mon conseiller départemental aux entreprises en difficulté.", image: { src: "/images/L12.jpeg", label: "Soutien aux entreprises", bg: "#e5e5e5" } },
  { title: "Gérer mes biens immobiliers", text: "Le service en ligne des usagers propriétaires.\nPour éviter les erreurs d'imposition et être en règle, pensez à déclarer tout changement concernant vos biens immobiliers.", image: { src: "/images/L13.jpeg", label: "Maquette de maison", bg: "#d6d6d0" } },
  { title: "Services publics +", text: "Dans le cadre des nouveaux engagements du service public, nous nous engageons pour des services plus proches, plus simples, plus efficaces. Retrouvez nos engagements et nos résultats.", image: { src: "/images/L14.jpeg", label: "Services publics +", bg: "#eef0ee" } },
];

export const ACCOMPAGNEMENT = [
  { label: "Trouver un point d'accueil de proximité", picto: "pin" },
  { label: "Les engagements de la DGFIP", picto: "bank", ext: true },
  { label: "Services en ligne", sub: "laissez vous guider !", picto: "web", ext: true },
  { label: "Fin du chèque en 2027", picto: "cheque" },
];
export const DEMARCHES = [["Vérifier un avis d’impôt", "avis"], ["Payez vos impôts", "pay"], ["Payer vos factures publiques", "invoice"], ["Payer une amende", "fine"], ["Payer un forfait de post-stationnement", "parking"], ["Obtenir un quitus fiscal", "quitus"], ["Acheter un timbre fiscal", "stamp"], ["Consulter un extrait de plan cadastral", "plan"], ["Accéder aux ventes domaniales", "sale"]];
export const POUR_ALLER_PLUS_LOIN = ["Statistiques et Données", "Accompagnement fiscal des PME", "Les rescrits", "Le droit à l’erreur", "Le contrôle fiscal et la lutte contre la fraude", "Charte des droits du contribuable vérifié"];

export const PARTICULIER = {
  intro: "Découvrez des tutoriels et simulateurs, des informations sur les différents impôts et réductions, les démarches liées à vos changements de situation, à vos biens immobiliers.",
  links: ["Payer en ligne", "Autres démarches", "Questions & réponses", "Calendrier fiscal", "Actualités"],
};
export const PROFESSIONNEL = {
  intro: "Découvrez des simulateurs d'impôt, des informations sur la vie de votre entreprise, son régime fiscal, les modalités de déclaration et de paiement de la TVA, de la CFE, l'accompagnement des PME.",
  links: ["Démarches", "Questions & réponses", "Calendrier fiscal", "Actualités"],
};