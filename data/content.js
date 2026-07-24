/*
  Toutes les données modifiables du site sont ici.
  Pour changer un texte, une date, un lien de projet ou un chiffre : c'est ici, pas dans index.html.
  Chaque champ texte a une version { fr, en }.
*/

const PROJECTS = [
  {
    id: "sql-rh",
    tag: "SQL",
    color: "blue",
    title: { fr: "Analyse RH DataLendo", en: "DataLendo HR Analysis" },
    stat: { value: "15", label: { fr: "requêtes métier écrites", en: "business queries written" } },
    problem: {
      fr: "Une base RH relationnelle brute (SQLite) : effectifs, turnover, performance — aucune réponse directe aux questions que se pose une direction RH.",
      en: "A raw relational HR database (SQLite): headcount, turnover, performance — no direct answers to the questions an HR department actually asks."
    },
    approach: {
      fr: "Modélisation du schéma relationnel, écriture de 15 requêtes SQL complexes (CTE, fonctions de fenêtrage) pour isoler les tendances d'effectif et de départs.",
      en: "Relational schema modeling, 15 complex SQL queries written (CTEs, window functions) to isolate headcount and attrition trends."
    },
    result: {
      fr: "Synthèse d'insights et recommandations concrètes livrées, directement exploitables par une direction RH.",
      en: "Insight synthesis and concrete recommendations delivered, directly usable by an HR department."
    },
    proof: {
      fr: "La même logique s'applique à une base de données GMAO : interroger l'historique d'interventions pour en extraire des indicateurs de fiabilité exploitables.",
      en: "The same logic applies to a CMMS database: querying maintenance history to extract usable reliability indicators."
    },
    links: [
      { label: { fr: "Voir le code", en: "View code" }, url: "https://github.com/ABC123-CODEctrl/Datalendo_rh", primary: true }
    ]
  },
  {
    id: "python-afrimarket",
    tag: "Python",
    color: "orange",
    title: { fr: "AfriMarket — Analyse stratégique des ventes", en: "AfriMarket — Strategic Sales Analysis" },
    stat: { value: "10 100", label: { fr: "commandes e-commerce auditées", en: "e-commerce orders audited" } },
    problem: {
      fr: "10 100 commandes e-commerce brutes, sans indicateurs de rentabilité ni visibilité sur les retours et annulations.",
      en: "10,100 raw e-commerce orders, with no profitability indicators and no visibility on returns or cancellations."
    },
    approach: {
      fr: "Audit et nettoyage des données, feature engineering (chiffre d'affaires, marge, profit, indicateurs de retour/annulation), puis dashboard interactif Streamlit avec filtres et rapport exécutif pour la direction.",
      en: "Data audit and cleaning, feature engineering (revenue, margin, profit, return/cancellation indicators), then an interactive Streamlit dashboard with filters and an executive report for management."
    },
    result: {
      fr: "2,08 M de chiffre d'affaires analysé, taux de retour identifié à 8,16 %, panier moyen de 231,82.",
      en: "$2.08M in revenue analyzed, return rate identified at 8.16%, average basket value of 231.82."
    },
    proof: {
      fr: "Transformer des données brutes en KPI exploitables et en dashboard de pilotage — exactement ce qu'exige le suivi d'un parc d'équipements ou d'un budget de maintenance.",
      en: "Turning raw data into actionable KPIs and a steering dashboard — exactly what's required to track an equipment fleet or a maintenance budget."
    },
    links: [
      { label: { fr: "Voir le code", en: "View code" }, url: "https://github.com/ABC123-CODEctrl/Afrimarketproject", primary: true },
      { label: { fr: "Voir l'application", en: "View live app" }, url: "https://afrimarketproject2.streamlit.app/", note: { fr: "Peut prendre ~30s à se réveiller", en: "May take ~30s to wake up" } }
    ]
  },
  {
    id: "r-sante-cameroun",
    tag: "R",
    color: "blue",
    title: { fr: "Observatoire Santé Cameroun", en: "Cameroon Health Observatory" },
    stat: { value: "10 300", label: { fr: "consultations nettoyées", en: "consultations cleaned" } },
    problem: {
      fr: "Un jeu de données de santé publique volontairement \"sale\" : 10 300 consultations, 150 centres de santé, 10 régions — inutilisable en l'état pour une décision ministérielle.",
      en: "A deliberately \"dirty\" public health dataset: 10,300 consultations, 150 health centers, 10 regions — unusable as-is for a ministerial decision."
    },
    approach: {
      fr: "Nettoyage complet du jeu de données, analyse business, puis dashboard Shiny à 6 onglets avec recommandations priorisées pour un ministère de la santé.",
      en: "Full dataset cleaning, business analysis, then a 6-tab Shiny dashboard with prioritized recommendations for a health ministry."
    },
    result: {
      fr: "Taux de rupture de stock médicaments identifié à 18 %, couverture d'assurance santé mesurée à 35,1 %.",
      en: "Medicine stock-out rate identified at 18%, health insurance coverage measured at 35.1%."
    },
    proof: {
      fr: "Détecter des ruptures critiques (stock, disponibilité) à partir de données sales — la même compétence permet de repérer les pannes récurrentes et les ruptures de pièces détachées.",
      en: "Detecting critical shortages (stock, availability) from messy data — the same skill spots recurring failures and spare-parts shortages."
    },
    links: [
      { label: { fr: "Voir le code", en: "View code" }, url: "https://github.com/ABC123-CODEctrl/Projet_Sante_Cameroun", primary: true },
      { label: { fr: "Voir l'application", en: "View live app" }, url: "https://connect.posit.cloud/stevengoma/content/019f8b39-b810-ad49-5174-3f464a4c3542", note: { fr: "Connexion Posit requise", en: "Posit login required" } }
    ]
  }
];

const TIMELINE = [
  {
    period: { fr: "Avril 2021 — Aujourd'hui", en: "April 2021 — Present" },
    role: { fr: "Heavy Duty Mechanic — Projet LTA", en: "Heavy Duty Mechanic — LTA Project" },
    company: "SAIPEM",
    place: { fr: "Dammam, Arabie Saoudite", en: "Dammam, Saudi Arabia" },
    desc: {
      fr: "Maintenance d'équipements lourds et groupes électrogènes, encadrement d'équipes de quart, installation d'armoires électriques, maintenance de grues et chariots élévateurs.",
      en: "Maintenance of heavy equipment and generator sets, shift team supervision, electrical panel installation, crane and forklift maintenance."
    }
  },
  {
    period: { fr: "Mars 2020 — Février 2021", en: "March 2020 — February 2021" },
    role: { fr: "Technicien Maintenance Électromécanique — Indépendant", en: "Electromechanical Maintenance Technician — Independent" },
    company: { fr: "Activité indépendante", en: "Independent contractor" },
    place: { fr: "Congo", en: "Congo" },
    desc: {
      fr: "Interventions de maintenance électromécanique en autonomie totale, de la prise de commande au diagnostic jusqu'à la réparation.",
      en: "Fully autonomous electromechanical maintenance work, from client intake to diagnosis and repair."
    }
  },
  {
    period: { fr: "Octobre 2018 — Février 2020", en: "October 2018 — February 2020" },
    role: { fr: "Mécanicien Offshore — Projet TAP", en: "Offshore Mechanic — TAP Project" },
    company: "SAIPEM",
    place: { fr: "Offshore Italie / Albanie", en: "Offshore Italy / Albania" },
    desc: {
      fr: "Maintenance mécanique en environnement offshore contraint, sur un projet gazier international de grande envergure.",
      en: "Mechanical maintenance in a constrained offshore environment, on a large-scale international gas project."
    }
  },
  {
    period: { fr: "Mars 2006 — Octobre 2018", en: "March 2006 — October 2018" },
    role: { fr: "Adjoint Chef de Service Maintenance Électrique", en: "Deputy Head of Electrical Maintenance" },
    company: "STHIC",
    place: { fr: "Congo — clients : Airtel Congo, MTN Congo, Warid Congo, Mucodec, BCI, LCB, BCH", en: "Congo — clients: Airtel Congo, MTN Congo, Warid Congo, Mucodec, BCI, LCB, BCH" },
    desc: {
      fr: "12 ans d'encadrement d'équipes de maintenance électrique pour des clients télécom et bancaires majeurs du Congo.",
      en: "12 years leading electrical maintenance teams for major telecom and banking clients in Congo."
    }
  }
];

const CERTIFICATIONS = [
  { title: { fr: "Analyse des données avec R", en: "Data Analysis with R" }, date: { fr: "Juin 2026", en: "June 2026" }, icon: "r" },
  { title: { fr: "Power BI — Visualisation des données", en: "Power BI — Data Visualization" }, date: { fr: "Avril 2026", en: "April 2026" }, icon: "chart" },
  { title: { fr: "Excel pour l'analyse des données", en: "Excel for Data Analysis" }, date: { fr: "Mars 2026", en: "March 2026" }, icon: "grid" },
  { title: { fr: "Python", en: "Python" }, date: { fr: "Février 2026", en: "February 2026" }, icon: "code" },
  { title: { fr: "SQL", en: "SQL" }, date: { fr: "Février 2026", en: "February 2026" }, icon: "database" },
  { title: { fr: "Pompage solaire, PVSyst et installations photovoltaïques", en: "Solar Pumping, PVSyst & PV Installations" }, date: { fr: "Avril—Juin 2026", en: "April—June 2026" }, icon: "sun" },
  { title: { fr: "BTS Électrotechnique", en: "BTS in Electrical Engineering" }, date: { fr: "2002—2004", en: "2002—2004" }, icon: "gear" }
];

const SKILLS_FIELD = [
  {
    icon: "gear",
    title: { fr: "Groupes électrogènes", en: "Generator sets" },
    desc: { fr: "Installation, maintenance préventive/corrective, armoires électriques, inverseurs de source.", en: "Installation, preventive/corrective maintenance, electrical panels, transfer switches." }
  },
  {
    icon: "wind",
    title: { fr: "Compresseurs d'air", en: "Air compressors" },
    desc: { fr: "Rotatifs et alternatifs.", en: "Rotary and reciprocating types." }
  },
  {
    icon: "bolt",
    title: { fr: "Machines électriques DC/AC", en: "DC/AC electrical machines" },
    desc: { fr: "Diagnostic et réparation.", en: "Diagnosis and repair." }
  },
  {
    icon: "crane",
    title: { fr: "Grues industrielles", en: "Industrial cranes" },
    desc: { fr: "Manitowoc 4100W/777, Kobelco KE2500/200T, Locatelli 60T.", en: "Manitowoc 4100W/777, Kobelco KE2500/200T, Locatelli 60T." }
  },
  {
    icon: "truck",
    title: { fr: "Engins lourds", en: "Heavy machinery" },
    desc: { fr: "Chariots élévateurs, excavateurs CAT 374D/374F.", en: "Forklifts, CAT 374D/374F excavators." }
  },
  {
    icon: "hardhat",
    title: { fr: "Supervision & HSE", en: "Supervision & HSE" },
    desc: { fr: "Encadrement d'équipes de quart, planification, application rigoureuse des normes HSE.", en: "Shift team leadership, planning, rigorous HSE compliance." }
  }
];

const SKILLS_DATA = [
  {
    icon: "database",
    title: { fr: "SQL", en: "SQL" },
    desc: { fr: "Modélisation relationnelle, requêtes complexes (CTE, fonctions de fenêtrage), extraction d'indicateurs métier.", en: "Relational modeling, complex queries (CTEs, window functions), business indicator extraction." }
  },
  {
    icon: "code",
    title: { fr: "Python", en: "Python" },
    desc: { fr: "Nettoyage de données, feature engineering avec pandas, dashboards interactifs (Streamlit).", en: "Data cleaning, feature engineering with pandas, interactive dashboards (Streamlit)." }
  },
  {
    icon: "chart",
    title: { fr: "R", en: "R" },
    desc: { fr: "Tidyverse, ggplot2, dashboards Shiny, rapports R Markdown automatisés.", en: "Tidyverse, ggplot2, Shiny dashboards, automated R Markdown reports." }
  },
  {
    icon: "grid",
    title: { fr: "Excel & Power BI", en: "Excel & Power BI" },
    desc: { fr: "Tableaux de bord, KPI, visualisation.", en: "Dashboards, KPIs, visualization." }
  },
  {
    icon: "spark",
    title: { fr: "Claude (IA)", en: "Claude (AI)" },
    desc: { fr: "Automatisation de l'analyse de données et génération de rapports/documents.", en: "Automating data analysis and report/document generation." }
  },
  {
    icon: "gauge",
    title: { fr: "Indicateurs de fiabilité", en: "Reliability indicators" },
    desc: { fr: "Structuration de données GMAO pour produire MTBF, MTTR, taux de panne.", en: "Structuring CMMS data to produce MTBF, MTTR, failure rate." }
  }
];
