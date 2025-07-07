// Données des 40 villes du Var avec contenu unique pour éviter duplicate content
export const citiesData = {
  // === PREMIÈRE VAGUE - 15 VILLES PRIORITAIRES ===
  "toulon": {
    name: "Toulon",
    slug: "toulon",
    title: "Serrurier à Toulon (83)",
    subtitle: "Intervention d'urgence 24h/24 dans tout Toulon",
    description: "Serrurier Toulon : dépannage serrurerie 24h/24, ouverture porte claquée, changement serrure, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Toulon (83) – Dépannage Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-toulon",
    districts: ["Le Mourillon", "Saint-Roch", "Sainte-Anne", "Pont du Las", "La Serinette", "Centre-ville", "Sainte-Musse", "La Rode"],
    landmarks: ["Port de Toulon", "Opéra de Toulon", "Musée national de la Marine", "Plages du Mourillon"],
    introVariation: 1,
    testimonial: {
      name: "Mathieu L.",
      district: "Le Mourillon",
      text: "Porte bloquée un dimanche matin au Mourillon, l'équipe est arrivée en 20 minutes pile. Ouverture sans casse, tarif annoncé respecté. Service impeccable !"
    }
  },
  
  "la-seyne-sur-mer": {
    name: "La Seyne-sur-Mer",
    slug: "la-seyne-sur-mer", 
    title: "Serrurier à La Seyne-sur-Mer (83)",
    subtitle: "Dépannage serrurerie 24/7 à La Seyne",
    description: "Serrurier La Seyne-sur-Mer : urgence serrure 24h/24, porte claquée, clé cassée, intervention rapide 30min, devis gratuit.",
    metaTitle: "Serrurier La Seyne-sur-Mer (83) – Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-seyne-sur-mer",
    districts: ["Tamaris", "Les Sablettes", "Centre-ville", "Janas", "Berthe", "Mar Vivo", "Balaguier", "Saint-Mandrier"],
    landmarks: ["Fort de Balaguier", "Parc de la Navale", "Plage des Sablettes", "Port de plaisance"],
    introVariation: 2,
    testimonial: {
      name: "Karim M.",
      district: "Tamaris",
      text: "Serrure forcée après tentative de cambriolage à Tamaris. Intervention en urgence, sécurisation immédiate et contact direct avec l'assurance. Parfait !"
    }
  },

  "hyeres": {
    name: "Hyères",
    slug: "hyeres",
    title: "Serrurier à Hyères (83)",
    subtitle: "Service serrurerie urgence 24h/24 Hyères",
    description: "Serrurier Hyères : dépannage urgent serrure, ouverture porte, perte de clés, 24h/24, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Hyères (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-hyeres",
    districts: ["Centre historique", "Les Salins", "Giens", "Porquerolles", "Ayguade", "Almanarre", "La Capte", "Costebelle"],
    landmarks: ["Villa Noailles", "Îles d'Hyères", "Presqu'île de Giens", "Parc Olbius Riquier"],
    introVariation: 3,
    testimonial: {
      name: "Sophie D.",
      district: "Giens",
      text: "Clé cassée dans la serrure à Giens un samedi soir. Technicien arrivé rapidement, extraction propre sans abîmer le cylindre. Je recommande !"
    }
  },

  "frejus": {
    name: "Fréjus",
    slug: "frejus",
    title: "Serrurier à Fréjus (83)",
    subtitle: "Intervention serrurerie express 24h/24 Fréjus",
    description: "Serrurier Fréjus : urgence 24h/24, ouverture porte claquée, serrure bloquée, perte clés, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Fréjus (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-frejus",
    districts: ["Fréjus-Plage", "Centre historique", "Caïs", "Villeneuve", "Saint-Aygulf", "La Tour de Mare", "Capitou", "Port-Fréjus"],
    landmarks: ["Amphithéâtre romain", "Aqueduc de Fréjus", "Port de plaisance", "Plages de Saint-Aygulf"],
    introVariation: 1,
    testimonial: {
      name: "Laurent B.",
      district: "Saint-Aygulf",
      text: "Porte claquée en rentrant de plage à Saint-Aygulf. Intervention ultra-rapide, 25 minutes chrono. Prix correct et travail soigné."
    }
  },

  "draguignan": {
    name: "Draguignan",
    slug: "draguignan",
    title: "Serrurier à Draguignan (83)",
    subtitle: "Dépannage serrurerie 24/7 Draguignan",
    description: "Serrurier Draguignan : urgence serrure 24h/24, porte bloquée, clé perdue, changement serrure, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Draguignan (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-draguignan",
    districts: ["Centre historique", "Saint-Léger", "Malmont", "Sainte-Roseline", "Nartuby", "Riou-Blanc", "Figanières", "Font de Fillol"],
    landmarks: ["Tour de l'Horloge", "Musée des Arts et Traditions", "Boulevard Clemenceau", "Parc de la Malmont"],
    introVariation: 2,
    testimonial: {
      name: "Isabelle R.",
      district: "Centre historique",
      text: "Perte de clés dimanche soir près de la Tour de l'Horloge. Serrurier arrivé en 30min, remplacement cylindre immédiat. Service au top !"
    }
  },

  "saint-raphael": {
    name: "Saint-Raphaël",
    slug: "saint-raphael",
    title: "Serrurier à Saint-Raphaël (83)",
    subtitle: "Service serrurerie urgence 24h/24 Saint-Raphaël",
    description: "Serrurier Saint-Raphaël : dépannage urgent 24h/24, ouverture porte, serrure cassée, perte clés, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Saint-Raphaël (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-saint-raphael",
    districts: ["Valescure", "Boulouris", "Centre-ville", "Santa Lucia", "Agay", "Le Dramont", "Anthéor", "Trayas"],
    landmarks: ["Basilique Notre-Dame", "Port de Santa Lucia", "Plage du Débarquement", "Massif de l'Estérel"],
    introVariation: 3,
    testimonial: {
      name: "Nicolas P.",
      district: "Valescure",
      text: "Serrure grippée à Valescure, impossible d'ouvrir. Technicien venu rapidement, déblocage sans remplacement. Efficace et pas cher !"
    }
  },

  "brignoles": {
    name: "Brignoles",
    slug: "brignoles",
    title: "Serrurier à Brignoles (83)",
    subtitle: "Intervention serrurerie express 24/7 Brignoles",
    description: "Serrurier Brignoles : urgence 24h/24, porte claquée, clé cassée, serrure bloquée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Brignoles (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-brignoles",
    districts: ["Centre-ville", "Les Censiés", "Saint-Louis", "La Fontsante", "Les Rougières", "Les Oiseaux", "Château", "Place Carami"],
    landmarks: ["Musée du Pays Brignolais", "Église Saint-Sauveur", "Place Carami", "Maison de la Provence verte"],
    introVariation: 1,
    testimonial: {
      name: "Marine F.",
      district: "Les Censiés",
      text: "Cambriolage aux Censiés, porte défoncée. Sécurisation immédiate et contact assurance géré. Remise en état parfaite, merci !"
    }
  },

  "six-fours-les-plages": {
    name: "Six-Fours-les-Plages",
    slug: "six-fours-les-plages",
    title: "Serrurier à Six-Fours-les-Plages (83)",
    subtitle: "Dépannage serrurerie 24h/24 Six-Fours",
    description: "Serrurier Six-Fours-les-Plages : urgence serrure 24h/24, ouverture porte, clé perdue, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Six-Fours-les-Plages (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-six-fours-les-plages",
    districts: ["Le Brusc", "Les Lônes", "Centre-ville", "Reynier", "Bonnegrâce", "Le Cros", "Sicié", "Petit Gaou"],
    landmarks: ["Fort de Six-Fours", "Île du Petit Gaou", "Parc de la Méditerranée", "Port du Brusc"],
    introVariation: 2,
    testimonial: {
      name: "Thomas G.",
      district: "Le Brusc",
      text: "Porte claquée au retour de pêche au Brusc. Intervention nocturne rapide, ouverture propre sans dégât. Service fiable !"
    }
  },

  "la-garde": {
    name: "La Garde",
    slug: "la-garde",
    title: "Serrurier à La Garde (83)",
    subtitle: "Service serrurerie urgence 24/7 La Garde",
    description: "Serrurier La Garde : dépannage urgent 24h/24, porte bloquée, serrure cassée, perte clés, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier La Garde (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-garde",
    districts: ["Centre historique", "Le Plan", "La Pauline", "Sainte-Marguerite", "Rouvenchy", "Les Quatre Chemins", "Château", "La Foux"],
    landmarks: ["Château de La Garde", "Université de Toulon", "Parc de la Navale", "Centre commercial Grand Var"],
    introVariation: 3,
    testimonial: {
      name: "Céline H.",
      district: "La Pauline",
      text: "Serrure bloquée à La Pauline, impossible de rentrer chez moi. Technicien efficace, réparation rapide. Parfait !"
    }
  },

  "la-valette-du-var": {
    name: "La Valette-du-Var",
    slug: "la-valette-du-var",
    title: "Serrurier à La Valette-du-Var (83)",
    subtitle: "Intervention serrurerie express 24h/24 La Valette",
    description: "Serrurier La Valette-du-Var : urgence 24h/24, ouverture porte claquée, clé cassée, serrure bloquée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier La Valette-du-Var (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-valette-du-var",
    districts: ["Le centre", "Les Espaluns", "Tauriac", "La Rode", "Les Bagnols", "Mont Redon", "Centre commercial", "Zone d'activités"],
    landmarks: ["Centre commercial Grand Var", "Parc Tauriac", "École militaire", "Zone commerciale Espaluns"],
    introVariation: 1,
    testimonial: {
      name: "David M.",
      district: "Les Espaluns",
      text: "Clé cassée dans serrure aux Espaluns. Extraction professionnelle, cylindre intact. Intervention rapide et soignée !"
    }
  },

  "saint-maximin-la-sainte-baume": {
    name: "Saint-Maximin-la-Sainte-Baume",
    slug: "saint-maximin-la-sainte-baume",
    title: "Serrurier à Saint-Maximin-la-Sainte-Baume (83)",
    subtitle: "Dépannage serrurerie 24/7 Saint-Maximin",
    description: "Serrurier Saint-Maximin-la-Sainte-Baume : urgence serrure 24h/24, porte claquée, clé perdue, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Saint-Maximin-la-Sainte-Baume (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-saint-maximin-la-sainte-baume",
    districts: ["Centre-ville historique", "Les Bréguières", "Villa Romana", "Camps la Source", "Nans-les-Pins", "Plan d'Aups", "Rougiers", "Sainte-Baume"],
    landmarks: ["Basilique Sainte-Marie-Madeleine", "Couvent Royal", "Grotte de Sainte-Baume", "Hôtel de ville"],
    introVariation: 2,
    testimonial: {
      name: "Pierre L.",
      district: "Centre-ville historique",
      text: "Porte bloquée près de la Basilique. Serrurier respectueux du patrimoine, intervention discrète et efficace. Recommandé !"
    }
  },

  "sanary-sur-mer": {
    name: "Sanary-sur-Mer",
    slug: "sanary-sur-mer",
    title: "Serrurier à Sanary-sur-Mer (83)",
    subtitle: "Service serrurerie urgence 24h/24 Sanary",
    description: "Serrurier Sanary-sur-Mer : dépannage urgent 24h/24, ouverture porte, serrure bloquée, perte clés, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Sanary-sur-Mer (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-sanary-sur-mer",
    districts: ["Centre-ville et port", "Portissol", "La Cride", "Beaucours", "Ollioulette", "Les Gorguettes", "Maliverny", "La Guicharde"],
    landmarks: ["Port de Sanary", "Tour romane", "Chapelle Notre-Dame de Pitié", "Marché provençal"],
    introVariation: 3,
    testimonial: {
      name: "Martine C.",
      district: "Portissol",
      text: "Perte de clés à Portissol, serrurier arrivé vite malgré l'accès difficile. Remplacement cylindre immédiat. Service top !"
    }
  },

  "sainte-maxime": {
    name: "Sainte-Maxime",
    slug: "sainte-maxime",
    title: "Serrurier à Sainte-Maxime (83)",
    subtitle: "Intervention serrurerie express 24/7 Sainte-Maxime",
    description: "Serrurier Sainte-Maxime : urgence 24h/24, porte claquée, clé cassée, serrure grippée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Sainte-Maxime (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-sainte-maxime",
    districts: ["Centre-ville", "La Nartelle", "Le Sémaphore", "La Croisette", "Val d'Esquières", "Madrague", "Les Carabiniers", "Guerrevieille"],
    landmarks: ["Tour Carrée", "Plage de la Nartelle", "Port de plaisance", "Musée de la Tour Carrée"],
    introVariation: 1,
    testimonial: {
      name: "Julien R.",
      district: "La Nartelle",
      text: "Serrure grippée à La Nartelle en pleine saison. Déblocage rapide, pas de remplacement nécessaire. Tarif honnête !"
    }
  },

  "roquebrune-sur-argens": {
    name: "Roquebrune-sur-Argens",
    slug: "roquebrune-sur-argens",
    title: "Serrurier à Roquebrune-sur-Argens (83)",
    subtitle: "Dépannage serrurerie 24h/24 Roquebrune",
    description: "Serrurier Roquebrune-sur-Argens : urgence serrure 24h/24, ouverture porte, clé perdue, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Roquebrune-sur-Argens (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-roquebrune-sur-argens",
    districts: ["Village médiéval", "La Bouverie", "Les Issambres", "La Gaillarde", "Le Muy", "Puget-sur-Argens", "Fréjus-Est", "Malpasset"],
    landmarks: ["Rocher de Roquebrune", "Château médiéval", "Plages des Issambres", "Base Nature François Léotard"],
    introVariation: 2,
    testimonial: {
      name: "Amélie T.",
      district: "Les Issambres",
      text: "Porte claquée aux Issambres en pleine nuit. Intervention rapide malgré l'heure, ouverture sans casse. Merci !"
    }
  },

  "ollioules": {
    name: "Ollioules",
    slug: "ollioules",
    title: "Serrurier à Ollioules (83)",
    subtitle: "Service serrurerie urgence 24/7 Ollioules",
    description: "Serrurier Ollioules : dépannage urgent 24h/24, porte bloquée, serrure cassée, perte clés, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Ollioules (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-ollioules",
    districts: ["Centre ancien", "Faveyrolles", "La Reppe", "Châteauvallon", "Le Gapeau", "Route de Marseille", "Z.I. La Reppe", "Les Gorges"],
    landmarks: ["Châteauvallon", "Gorges d'Ollioules", "Marché aux fleurs", "Théâtre national"],
    introVariation: 3,
    testimonial: {
      name: "Philippe K.",
      district: "Centre ancien",
      text: "Clé cassée dans vieille serrure du centre ancien. Technicien patient, extraction minutieuse réussie. Travail d'artisan !"
    }
  }
};

// Variations de texte d'introduction pour éviter duplicate content
export const introVariations = {
  1: "Vous rencontrez un problème de serrurerie urgent à [CITY] ? Serrure Minute intervient 24h/24 et 7j/7 dans tous les quartiers de [CITY] pour résoudre vos problèmes de serrure, porte claquée, clé cassée ou perte de clés. Nos artisans serruriers expérimentés se déplacent en moins de 30 minutes avec tout le matériel professionnel nécessaire.",
  
  2: "Face à une urgence serrurerie à [CITY] ? Pas de panique ! Serrure Minute est votre partenaire de confiance pour tous vos dépannages serrurerie dans la commune de [CITY]. Que vous soyez bloqué dehors, confronté à une serrure défaillante ou victime d'une effraction, nos techniciens qualifiés interviennent rapidement 24h/24.",
  
  3: "Besoin d'un serrurier de confiance à [CITY] ? Serrure Minute met à votre service son expertise en serrurerie d'urgence dans toute la ville de [CITY]. Nos professionnels agréés interviennent jour et nuit pour résoudre tous vos problèmes : ouverture de porte, changement de serrure, sécurisation après cambriolage."
};

// FAQ spécifiques par variations pour éviter duplicate content
export const faqVariations = {
  1: [
    {
      question: "Combien coûte une intervention à [CITY] ?",
      answer: "Nos tarifs sont transparents et conformes aux barèmes officiels. Devis gratuit systématique avant intervention à [CITY]."
    },
    {
      question: "Intervenez-vous la nuit à [CITY] ?",
      answer: "Oui, nous intervenons 24h/24 et 7j/7 dans tous les quartiers de [CITY], même les nuits et jours fériés."
    },
    {
      question: "Combien de temps pour arriver à [CITY] ?",
      answer: "Délai moyen de 15 à 30 minutes selon votre quartier à [CITY]. Intervention prioritaire en cas d'urgence absolue."
    }
  ],
  2: [
    {
      question: "Êtes-vous agréé assurance pour [CITY] ?",
      answer: "Oui, nous sommes agréés par toutes les compagnies d'assurance. Facturation directe possible à [CITY]."
    },
    {
      question: "Garantissez-vous vos interventions à [CITY] ?",
      answer: "Toutes nos prestations à [CITY] sont garanties 1 an. Pièces et main d'œuvre incluses."
    },
    {
      question: "Travaillez-vous sur tous types de serrures à [CITY] ?",
      answer: "Oui, nous maîtrisons tous les systèmes : cylindre européen, serrure multipoints, serrure connectée à [CITY]."
    }
  ],
  3: [
    {
      question: "Comment se déroule l'intervention à [CITY] ?",
      answer: "Diagnostic gratuit, devis transparent, intervention soignée avec matériel professionnel à [CITY]."
    },
    {
      question: "Acceptez-vous les paiements CB à [CITY] ?",
      answer: "Oui, nous acceptons espèces, chèque et carte bancaire pour toutes nos interventions à [CITY]."
    },
    {
      question: "Proposez-vous du conseil sécurité à [CITY] ?",
      answer: "Nos experts vous conseillent gratuitement sur l'amélioration de votre sécurité à [CITY]."
    }
  ]
};