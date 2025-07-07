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
  },
  
  // === DEUXIÈME VAGUE - 25 VILLES RESTANTES ===
  "cogolin": {
    name: "Cogolin",
    slug: "cogolin",
    title: "Serrurier à Cogolin (83)",
    subtitle: "Dépannage serrurerie 24h/24 Cogolin",
    description: "Serrurier Cogolin : urgence serrure 24h/24, porte bloquée, clé perdue, intervention 30min, devis gratuit, agréé assurances.",
    metaTitle: "Serrurier Cogolin (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-cogolin",
    districts: ["Centre-ville", "Marines de Cogolin", "Pardigon", "Cavalaire", "Route de Gassin", "Zone artisanale", "Port de plaisance", "Golfe de Saint-Tropez"],
    landmarks: ["Marines de Cogolin", "Place de la République", "Musée Raimu", "Port de plaisance"],
    introVariation: 1,
    testimonial: {
      name: "Antoine R.",
      district: "Marines de Cogolin",
      text: "Serrure bloquée aux Marines, serrurier arrivé rapidement malgré l'accès compliqué. Déblocage parfait, prix honnête !"
    }
  },

  "saint-cyr-sur-mer": {
    name: "Saint-Cyr-sur-Mer",
    slug: "saint-cyr-sur-mer",
    title: "Serrurier à Saint-Cyr-sur-Mer (83)",
    subtitle: "Service serrurerie urgence 24/7 Saint-Cyr",
    description: "Serrurier Saint-Cyr-sur-Mer : dépannage urgent 24h/24, ouverture porte, serrure cassée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Saint-Cyr-sur-Mer (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-saint-cyr-sur-mer",
    districts: ["Les Lecques", "La Madrague", "Centre-ville", "Place Portalis", "Nouveau Port", "Port d'Alon", "Bandol-Est", "Route des Lecques"],
    landmarks: ["Plage des Lecques", "Port de La Madrague", "Statue de la Liberté", "Villa romaine"],
    introVariation: 2,
    testimonial: {
      name: "Valérie C.",
      district: "Les Lecques",
      text: "Clé cassée aux Lecques en pleine saison. Technicien efficace, extraction propre, cylindre sauvé. Service au top !"
    }
  },

  "le-pradet": {
    name: "Le Pradet",
    slug: "le-pradet",
    title: "Serrurier au Pradet (83)",
    subtitle: "Intervention serrurerie express 24h/24 Le Pradet",
    description: "Serrurier Le Pradet : urgence 24h/24, porte claquée, clé perdue, serrure bloquée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Le Pradet (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-le-pradet",
    districts: ["Centre-ville", "Les Oursinières", "Le Pin de Galle", "Monaco", "Garonne", "La Rade", "Port des Oursinières", "Côte d'Azur"],
    landmarks: ["Port des Oursinières", "Plage de Monaco", "Sentier littoral", "Marché provençal"],
    introVariation: 3,
    testimonial: {
      name: "Sébastien F.",
      district: "Les Oursinières",
      text: "Porte claquée aux Oursinières dimanche matin. Intervention ultra-rapide, ouverture sans dégât. Parfait !"
    }
  },

  "la-crau": {
    name: "La Crau",
    slug: "la-crau",
    title: "Serrurier à La Crau (83)",
    subtitle: "Dépannage serrurerie 24/7 La Crau",
    description: "Serrurier La Crau : urgence serrure 24h/24, ouverture porte, clé cassée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier La Crau (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-crau",
    districts: ["Centre-ville", "La Moutonne", "La Farlède", "Place Victor Hugo", "Zone commerciale", "Les Bousquets", "Quartier résidentiel", "Route de Toulon"],
    landmarks: ["Place Victor Hugo", "Centre commercial", "Parc de La Moutonne", "Église Saint-André"],
    introVariation: 1,
    testimonial: {
      name: "Patricia L.",
      district: "La Moutonne",
      text: "Serrure forcée à La Moutonne, sécurisation immédiate et contact assurance géré. Service complet et rassurant !"
    }
  },

  "cuers": {
    name: "Cuers",
    slug: "cuers",
    title: "Serrurier à Cuers (83)",
    subtitle: "Service serrurerie urgence 24h/24 Cuers",
    description: "Serrurier Cuers : dépannage urgent 24h/24, porte bloquée, serrure grippée, perte clés, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Cuers (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-cuers",
    districts: ["Centre historique", "Les Bousquets", "Pierrefeu", "Route de Carnoules", "Zone d'activités", "Quartier des Blaquières", "Sainte-Marguerite", "Le Colombier"],
    landmarks: ["Église Saint-Pierre", "Château de Cuers", "Marché provençal", "Cours de la République"],
    introVariation: 2,
    testimonial: {
      name: "Franck B.",
      district: "Centre historique",
      text: "Clé perdue dans le centre historique. Serrurier respectueux du patrimoine, remplacement discret. Très pro !"
    }
  },

  "vidauban": {
    name: "Vidauban",
    slug: "vidauban",
    title: "Serrurier à Vidauban (83)",
    subtitle: "Intervention serrurerie express 24/7 Vidauban",
    description: "Serrurier Vidauban : urgence 24h/24, ouverture porte claquée, serrure bloquée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Vidauban (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-vidauban",
    districts: ["Centre-ville", "Les Ferrages", "Taradeau", "Trans-en-Provence", "Zone viticole", "Quartier des Vignes", "Route de Draguignan", "Le Thoronet"],
    landmarks: ["Maison des vins", "Château de Berne", "Vignobles", "Place de la Liberté"],
    introVariation: 3,
    testimonial: {
      name: "Michel G.",
      district: "Les Ferrages",
      text: "Porte bloquée aux Ferrages, intervention nocturne rapide. Ouverture propre, tarif respecté. Recommandé !"
    }
  },

  "sollies-pont": {
    name: "Solliès-Pont",
    slug: "sollies-pont",
    title: "Serrurier à Solliès-Pont (83)",
    subtitle: "Dépannage serrurerie 24h/24 Solliès-Pont",
    description: "Serrurier Solliès-Pont : urgence serrure 24h/24, porte claquée, clé cassée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Solliès-Pont (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-sollies-pont",
    districts: ["Centre-ville", "Solliès-Ville", "La Foux", "Le Revest", "Belgentier", "Zone commerciale", "Quartier résidentiel", "Route de Toulon"],
    landmarks: ["Château de Solliès", "Foire aux figues", "Gapeau", "Place de la République"],
    introVariation: 1,
    testimonial: {
      name: "Christelle M.",
      district: "Solliès-Ville",
      text: "Serrure grippée à Solliès-Ville, déblocage rapide sans remplacement. Prix correct et service efficace !"
    }
  },

  "bormes-les-mimosas": {
    name: "Bormes-les-Mimosas",
    slug: "bormes-les-mimosas",
    title: "Serrurier à Bormes-les-Mimosas (83)",
    subtitle: "Service serrurerie urgence 24/7 Bormes",
    description: "Serrurier Bormes-les-Mimosas : dépannage urgent 24h/24, ouverture porte, serrure bloquée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Bormes-les-Mimosas (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-bormes-les-mimosas",
    districts: ["Village médiéval", "La Favière", "Cabasson", "Le Pin de Bormes", "Cap de Brégancon", "Port de plaisance", "Pellegrino", "Fort de Brégançon"],
    landmarks: ["Village fleuri", "Fort de Brégançon", "Port de la Favière", "Château de Bormes"],
    introVariation: 2,
    testimonial: {
      name: "Stéphane D.",
      district: "La Favière",
      text: "Clé perdue à La Favière, remplacement cylindre immédiat. Technicien discret et professionnel. Parfait !"
    }
  },

  "bandol": {
    name: "Bandol",
    slug: "bandol",
    title: "Serrurier à Bandol (83)",
    subtitle: "Intervention serrurerie express 24h/24 Bandol",
    description: "Serrurier Bandol : urgence 24h/24, porte claquée, clé cassée, serrure grippée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Bandol (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-bandol",
    districts: ["Centre-ville", "Port de Bandol", "Rènecros", "Les Baumelles", "Sanary-Ouest", "Zone viticole", "Casino", "Front de mer"],
    landmarks: ["Port de Bandol", "Casino", "Île de Bendor", "Vignobles AOC"],
    introVariation: 3,
    testimonial: {
      name: "Caroline P.",
      district: "Port de Bandol",
      text: "Porte claquée près du port en pleine nuit. Intervention rapide, ouverture sans casse. Service fiable !"
    }
  },

  "le-beausset": {
    name: "Le Beausset",
    slug: "le-beausset",
    title: "Serrurier au Beausset (83)",
    subtitle: "Dépannage serrurerie 24/7 Le Beausset",
    description: "Serrurier Le Beausset : urgence serrure 24h/24, ouverture porte, clé perdue, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Le Beausset (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-le-beausset",
    districts: ["Centre-ville", "Le Camp", "Évenos", "Circuit Paul Ricard", "Zone commerciale", "Quartier résidentiel", "Route d'Ollioules", "Les Vignes"],
    landmarks: ["Circuit Paul Ricard", "Chapelle Notre-Dame", "Marché provençal", "Centre commercial"],
    introVariation: 1,
    testimonial: {
      name: "Éric T.",
      district: "Le Camp",
      text: "Serrure forcée au Camp, sécurisation immédiate et remplacement. Contact assurance géré, très pro !"
    }
  },

  "carqueiranne": {
    name: "Carqueiranne",
    slug: "carqueiranne",
    title: "Serrurier à Carqueiranne (83)",
    subtitle: "Service serrurerie urgence 24h/24 Carqueiranne",
    description: "Serrurier Carqueiranne : dépannage urgent 24h/24, porte bloquée, serrure cassée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Carqueiranne (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-carqueiranne",
    districts: ["Centre-ville", "Les Salins", "Port des Salettes", "Carqueiranne-Plage", "Les Terrasses", "Route de Hyères", "La Capte", "Giens-Ouest"],
    landmarks: ["Port des Salettes", "Château de Carqueiranne", "Plage de Carqueiranne", "Parc Sainte-Claire"],
    introVariation: 2,
    testimonial: {
      name: "Sandrine L.",
      district: "Les Salins",
      text: "Clé cassée aux Salins, extraction professionnelle réussie. Cylindre intact, prix raisonnable. Merci !"
    }
  },

  "fayence": {
    name: "Fayence",
    slug: "fayence",
    title: "Serrurier à Fayence (83)",
    subtitle: "Intervention serrurerie express 24/7 Fayence",
    description: "Serrurier Fayence : urgence 24h/24, ouverture porte claquée, serrure bloquée, perte clés, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Fayence (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-fayence",
    districts: ["Village perché", "Tourrettes", "Seillans", "Mons", "Golf de Fayence", "Aérodrome", "Route de Grasse", "Pays de Fayence"],
    landmarks: ["Village perché", "Golf de Fayence", "Aérodrome", "Table d'orientation"],
    introVariation: 3,
    testimonial: {
      name: "Jean-Claude R.",
      district: "Village perché",
      text: "Porte bloquée dans le village perché. Serrurier arrivé rapidement malgré l'accès difficile. Top !"
    }
  },

  "la-londe-les-maures": {
    name: "La Londe-les-Maures",
    slug: "la-londe-les-maures",
    title: "Serrurier à La Londe-les-Maures (83)",
    subtitle: "Dépannage serrurerie 24h/24 La Londe",
    description: "Serrurier La Londe-les-Maures : urgence serrure 24h/24, porte claquée, clé cassée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier La Londe-les-Maures (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-londe-les-maures",
    districts: ["Centre-ville", "Miramar", "L'Argentière", "Pellegrin", "Port de Miramar", "Massif des Maures", "Domaine du Rayol", "Côte des Maures"],
    landmarks: ["Port de Miramar", "Domaine du Rayol", "Massif des Maures", "Plage de l'Argentière"],
    introVariation: 1,
    testimonial: {
      name: "Nathalie V.",
      district: "Miramar",
      text: "Serrure grippée à Miramar, déblocage rapide et efficace. Pas de remplacement nécessaire, parfait !"
    }
  },

  "le-muy": {
    name: "Le Muy",
    slug: "le-muy",
    title: "Serrurier au Muy (83)",
    subtitle: "Service serrurerie urgence 24/7 Le Muy",
    description: "Serrurier Le Muy : dépannage urgent 24h/24, ouverture porte, serrure bloquée, clé perdue, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Le Muy (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-le-muy",
    districts: ["Centre-ville", "Les Arcs", "Taradeau", "Vidauban-Sud", "Route de Draguignan", "Zone d'activités", "Les Cabassols", "Route de Fréjus"],
    landmarks: ["Tour Charles Quint", "Musée de la Libération", "Place de la Libération", "Porte Sarrasine"],
    introVariation: 2,
    testimonial: {
      name: "Thierry K.",
      district: "Centre-ville",
      text: "Clé perdue près de la Tour Charles Quint. Remplacement immédiat, travail discret et pro. Recommandé !"
    }
  },

  "saint-tropez": {
    name: "Saint-Tropez",
    slug: "saint-tropez",
    title: "Serrurier à Saint-Tropez (83)",
    subtitle: "Intervention serrurerie express 24h/24 Saint-Tropez",
    description: "Serrurier Saint-Tropez : urgence 24h/24, porte claquée, clé cassée, serrure de luxe, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Saint-Tropez (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-saint-tropez",
    districts: ["Vieux Port", "La Ponche", "Les Graniers", "Pampelonne", "Ramatuelle", "Les Salins", "Gassin", "Presqu'île"],
    landmarks: ["Vieux Port", "Citadelle", "Place des Lices", "Musée de l'Annonciade"],
    introVariation: 3,
    testimonial: {
      name: "Alexandre M.",
      district: "Vieux Port",
      text: "Serrure haut de gamme bloquée près du Vieux Port. Technicien spécialisé, déblocage délicat réussi. Parfait !"
    }
  },

  "lorgues": {
    name: "Lorgues",
    slug: "lorgues",
    title: "Serrurier à Lorgues (83)",
    subtitle: "Dépannage serrurerie 24/7 Lorgues",
    description: "Serrurier Lorgues : urgence serrure 24h/24, ouverture porte, clé perdue, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Lorgues (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-lorgues",
    districts: ["Centre historique", "Thoronet", "Entrecasteaux", "Route de Draguignan", "Zone viticole", "Les Arcs-sur-Argens", "Carcès", "Abbaye du Thoronet"],
    landmarks: ["Collégiale Saint-Martin", "Cours de la République", "Vignobles", "Abbaye du Thoronet"],
    introVariation: 1,
    testimonial: {
      name: "Brigitte F.",
      district: "Centre historique",
      text: "Porte claquée dans le centre historique. Intervention respectueuse du patrimoine, ouverture propre. Top !"
    }
  },

  "pierrefeu-du-var": {
    name: "Pierrefeu-du-Var",
    slug: "pierrefeu-du-var",
    title: "Serrurier à Pierrefeu-du-Var (83)",
    subtitle: "Service serrurerie urgence 24h/24 Pierrefeu",
    description: "Serrurier Pierrefeu-du-Var : dépannage urgent 24h/24, porte bloquée, serrure cassée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Pierrefeu-du-Var (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-pierrefeu-du-var",
    districts: ["Centre-ville", "Collobrières", "Puget-Ville", "Route de Cuers", "Zone viticole", "Massif des Maures", "La Môle", "Cogolin-Nord"],
    landmarks: ["Château de Pierrefeu", "Vignobles", "Massif des Maures", "Place de la République"],
    introVariation: 2,
    testimonial: {
      name: "Didier P.",
      district: "Centre-ville",
      text: "Serrure forcée au centre-ville, sécurisation immédiate. Contact assurance géré, service complet !"
    }
  },

  "le-luc": {
    name: "Le Luc",
    slug: "le-luc",
    title: "Serrurier au Luc (83)",
    subtitle: "Intervention serrurerie express 24/7 Le Luc",
    description: "Serrurier Le Luc : urgence 24h/24, ouverture porte claquée, serrure bloquée, clé cassée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Le Luc (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-le-luc",
    districts: ["Centre-ville", "Cabasse", "Flassans", "Route de Draguignan", "Gare TGV", "Zone d'activités", "Le Cannet", "Les Mayons"],
    landmarks: ["Gare TGV", "Tour de l'Horloge", "Musée du Timbre", "Place Louis Brunet"],
    introVariation: 3,
    testimonial: {
      name: "Fabrice L.",
      district: "Gare TGV",
      text: "Clé perdue près de la gare TGV. Remplacement rapide, j'ai pu reprendre mon train. Service efficace !"
    }
  },

  "gareoult": {
    name: "Garéoult",
    slug: "gareoult",
    title: "Serrurier à Garéoult (83)",
    subtitle: "Dépannage serrurerie 24h/24 Garéoult",
    description: "Serrurier Garéoult : urgence serrure 24h/24, porte claquée, clé perdue, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Garéoult (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-gareoult",
    districts: ["Centre-ville", "Signes", "Méounes", "Route de Toulon", "Zone commerciale", "La Ciotat", "Rocbaron", "Forcalqueiret"],
    landmarks: ["Place de la Liberté", "Église Notre-Dame", "Route des vins", "Centre commercial"],
    introVariation: 1,
    testimonial: {
      name: "Martine B.",
      district: "Centre-ville",
      text: "Serrure grippée au centre-ville, déblocage rapide sans remplacement. Prix honnête et service pro !"
    }
  },

  "grimaud": {
    name: "Grimaud",
    slug: "grimaud",
    title: "Serrurier à Grimaud (83)",
    subtitle: "Service serrurerie urgence 24/7 Grimaud",
    description: "Serrurier Grimaud : dépannage urgent 24h/24, ouverture porte, serrure bloquée, clé cassée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Grimaud (83) – Service Urgence 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-grimaud",
    districts: ["Village médiéval", "Port Grimaud", "Cogolin-Est", "Saint-Tropez-Nord", "Marina", "Les Marines", "Beauvallon", "Sainte-Maxime-Ouest"],
    landmarks: ["Château de Grimaud", "Port Grimaud", "Village médiéval", "Golfe de Saint-Tropez"],
    introVariation: 2,
    testimonial: {
      name: "Corinne D.",
      district: "Port Grimaud",
      text: "Clé cassée à Port Grimaud, extraction délicate réussie. Technicien patient et professionnel. Parfait !"
    }
  },

  "la-motte": {
    name: "La Motte",
    slug: "la-motte",
    title: "Serrurier à La Motte (83)",
    subtitle: "Intervention serrurerie express 24h/24 La Motte",
    description: "Serrurier La Motte : urgence 24h/24, porte claquée, clé perdue, serrure grippée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier La Motte (83) – Intervention Express 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-la-motte",
    districts: ["Centre-ville", "Les Arcs", "Draguignan-Sud", "Route de Fréjus", "Zone viticole", "Flayosc", "Trans", "Taradeau"],
    landmarks: ["Château de La Motte", "Vignobles", "Route des vins", "Place du Village"],
    introVariation: 3,
    testimonial: {
      name: "Alain C.",
      district: "Centre-ville",
      text: "Porte bloquée au centre-ville, ouverture rapide et soignée. Tarif correct, service recommandé !"
    }
  },

  "puget-sur-argens": {
    name: "Puget-sur-Argens",
    slug: "puget-sur-argens",
    title: "Serrurier à Puget-sur-Argens (83)",
    subtitle: "Dépannage serrurerie 24/7 Puget-sur-Argens",
    description: "Serrurier Puget-sur-Argens : urgence serrure 24h/24, ouverture porte, clé cassée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Puget-sur-Argens (83) – Dépannage 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-puget-sur-argens",
    districts: ["Centre-ville", "Roquebrune", "Fréjus-Ouest", "Route de Bagnols", "Base Nature", "Saint-Aygulf-Nord", "Malpasset", "Les Caous"],
    landmarks: ["Base Nature François Léotard", "Village perché", "Rocher de Puget", "Argens"],
    introVariation: 1,
    testimonial: {
      name: "Sylvie M.",
      district: "Base Nature",
      text: "Serrure bloquée près de la Base Nature. Intervention rapide, déblocage sans casse. Service efficace !"
    }
  },

  "carnoules": {
    name: "Carnoules",
    slug: "carnoules",
    title: "Serrurier à Carnoules (83)",
    subtitle: "Service serrurerie urgence 24h/24 Carnoules",
    description: "Serrurier Carnoules : dépannage urgent 24h/24, porte bloquée, serrure cassée, clé perdue, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Carnoules (83) – Service Urgence 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-carnoules",
    districts: ["Centre-ville", "Pignans", "Besse-sur-Issole", "Route de Brignoles", "Gonfaron", "Zone d'activités", "Le Luc-Sud", "Les Mayons"],
    landmarks: ["Place de la République", "Église Saint-Cyprien", "Route des vins", "Forêt des Maures"],
    introVariation: 2,
    testimonial: {
      name: "Bernard R.",
      district: "Centre-ville",
      text: "Clé perdue au centre-ville, remplacement immédiat. Serrurier ponctuel et professionnel. Très bien !"
    }
  },

  "gonfaron": {
    name: "Gonfaron",
    slug: "gonfaron",
    title: "Serrurier à Gonfaron (83)",
    subtitle: "Intervention serrurerie express 24/7 Gonfaron",
    description: "Serrurier Gonfaron : urgence 24h/24, ouverture porte claquée, serrure bloquée, intervention 30min, agréé assurances.",
    metaTitle: "Serrurier Gonfaron (83) – Intervention Express 24/7 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-gonfaron",
    districts: ["Centre-ville", "Carnoules", "Pignans", "Route du Luc", "Massif des Maures", "La Garde-Freinet", "Village des Tortues", "Forêt domaniale"],
    landmarks: ["Village des Tortues", "Massif des Maures", "Place du Général de Gaulle", "Pont sur l'Argens"],
    introVariation: 3,
    testimonial: {
      name: "Monique T.",
      district: "Centre-ville",
      text: "Porte claquée en pleine nuit, intervention rapide malgré l'isolement. Service fiable et rassurant !"
    }
  },

  "cavalaire-sur-mer": {
    name: "Cavalaire-sur-Mer",
    slug: "cavalaire-sur-mer",
    title: "Serrurier à Cavalaire-sur-Mer (83)",
    subtitle: "Dépannage serrurerie 24h/24 Cavalaire",
    description: "Serrurier Cavalaire-sur-Mer : urgence serrure 24h/24, porte claquée, clé cassée, intervention 30min, devis gratuit.",
    metaTitle: "Serrurier Cavalaire-sur-Mer (83) – Dépannage 24h/24 – 30min",
    canonical: "https://serrure-minute-var.com/zones/serrurier-cavalaire-sur-mer",
    districts: ["Centre-ville", "Port de plaisance", "Pardigon", "La Croix-Valmer", "Débarquement", "Heraclea", "Route de Saint-Tropez", "Baie de Cavalaire"],
    landmarks: ["Port de plaisance", "Plage du Débarquement", "Maison de la Mer", "Promenade de la Mer"],
    introVariation: 1,
    testimonial: {
      name: "Véronique P.",
      district: "Port de plaisance",
      text: "Serrure grippée près du port, déblocage rapide en pleine saison. Technicien efficace, prix correct !"
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