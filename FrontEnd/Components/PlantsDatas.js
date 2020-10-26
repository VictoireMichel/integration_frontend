const PlantsList = [
  {
    id: 1,
    nom: "Persil",
    description: "Le persil est une plante bisannuelle de 25 à 80 cm de haut, très aromatique au froissement, à odeur caractéristique.\n" +
            "\n" +
            "Les tiges sont striées et les feuilles sont glabres. Les feuilles d'un vert luisant sont doublement divisées, surtout celles de la base, les feuilles supérieures ayant souvent seulement trois lobes étroits et allongés. Les fleurs, d'une couleur jaune verdâtre tirant sur le blanc en pleine floraison, sont groupées en ombelles composées comprenant huit à vingt rayons. Les ombellules sont munies d'un involucelle à nombreuses bractées. La racine allongée de type pivotant est assez développée. Elle est jaunâtre, d'odeur forte et aromatique.",
    croissance: "25",
    entretien: "Récolter toutes les 3 à 4 semaines",
    sol: "riche",
    luminosité: "1(ensoleillé)",
    imageurl: "../images/persil.png"
  },
  {
    id: 2,
    nom: "Origan",
    croissance: "25",
    saison: "1",
    description: "Les plantes atteignent généralement une taille variant entre 30 et 80 cm.\n" +
            "\n" +
            "Les tiges rouges, à section carrée, sont velues avec des feuilles arrondies, vertes, légèrement dentées.\n" +
            "\n" +
            "Les fleurs sont roses ou pourpres, et sont regroupées en petits panicules.",
    imageurl: "../images/origan.png"
  },
  {
    id: 3,
    nom: "Thym",
    description: "Le Thym est un sous-arbrisseau à racines ligneuses, rameuses, tortueuses. Les tiges, de 10 à 30 centimètres, sont ligneuses à la base, herbacées au sommet, très diffuses. Les feuilles, opposées, sessiles, très petites, ovales, lancéolées, ont un bord rouge en dessous. Les fleurs, roses, visibles de juin à octobre, sont réunies en glomérules ; l'ensemble constitue des grappes terminales feuillées. Le fruit se compose de quatre akènes ovoïdes arrondis.",
    entretien: " Garder votre plante dans une pièce lumineuse ou sur le rebord d’une fenêtre de façon à ce qu’elle profite du soleil toute la journée. La terre du pot doit être poreuse, pas trop argileuse et bien drainée.L’arrosage du thym en pot doit être régulier, notamment la première année de culture ou en cas de sécheresse prolongée. Attention toutefois à ne pas trop arroser : le thym craint les excès d’humidité.",
    croissance: "28",
    sol: "très bien drainé",
    luminosité: "2(très ensoleillé)",
    imageurl: "../images/thym.png"
  },
  {
    id: 4,
    nom: "Ail",
    croissance: "25",
    saison: "1",
    description: "Elle est composée d’une tige creuse et assez grande, de nombreuses feuilles engainant le bas de cette tige, de fleurs blanches ou rosées groupées en ombelles, et d’un bulbe (ou ‘’tête’’). Ce dernier est lui-même constitué de 10 à 16 bulbilles arquées appelées caïeux (ou \"gousses\" d'ail), blancs ou rosés, réunis entre eux et entourés d’une membrane blanche. \n" +
            "\n" +
            "Il a une odeur forte et un goût âcre. Cette odeur pénétrante et désagréable est due à la présence d’une molécule qui ne préexiste pas dans la plante, mais qui se forme lors de la coupure ou du broyage du bulbe.",
    imageurl: "../images/ail.png"
  },
  {
    id: 5,
    nom: "Oignon",
    croissance: "25",
    saison: "1",
    description: "L'oignon est une espèce herbacée, vivace par son bulbe unique, cultivée comme une annuelle ou bisannuelle (floraison la deuxième année). C'est une plante haute de 60 à 100 cm, dont les feuilles de couleur verte sont cylindriques, creuses (ce qui distingue cette espèce du poireau et de l'ail, autres espèces cultivées appartenant aussi au genre Allium). La tige florale dressée est également creuse. Elle présente un renflement vers sa base.\n" +
            "\n" +
            "Le bulbe est relativement gros, de forme sphérique, parfois plus ou moins aplatie.\n" +
            "\n" +
            "Les fleurs petites (de 4 à 5 mm de large), de couleur blanche ou verte, sont regroupées en une ombelle sphérique, en position terminale sur la tige. Les fleurs ont une symétrie trimère, à trois sépales, trois pétales et six étamines. L'ovaire unique est divisé en trois loges. Le fruit est une capsule s'ouvrant par trois valves, libérant chacune généralement deux graines. On peut compter environ 600 fleurs par ombelle.\n" +
            "\n" +
            "Chez certaines variétés, il arrive que des bulbilles se développent à la place des fleurs.\n" +
            "\n" +
            "Les graines sont noires, anguleuses. Il y a environ 250 graines par gramme. La durée de germination est faible (2 ans).",
    imageurl: "../images/oignon.png"
  },
  {
    id: 6,
    nom: "Ciboulette",
    croissance: "25",
    saison: "1",
    description: "La ciboulette (Allium schoenoprasum L.) est une plante vivace originaire du bassin méditerranéen. Elle fait partie de la famille des Alliacées, tout comme l'ail et l'oignon. Elle est communément utilisée comme condiment. Son feuillage cylindrique et creux, vert foncé et très linéaire permet de constituer de jolies bordures au potager ou dans les allées. Sa floraison en ombelles couleur lilas ajoute encore à son attrait ornemental. On trouve aussi des ciboulettes à fleurs blanches ou même rose pourpré foncé comme la variété 'Forescate' par exemple.",
    imageurl: "../images/ciboulette.png"
  },
  {
    id: 7,
    nom: "Echalote",
    croissance: "25",
    saison: "1",
    description: "C'est une plante vivace par son bulbe, mais cultivée comme annuelle. Elle forme une touffe haute de 20 à 30 cm de feuilles cylindriques creuses. Le bulbe planté comporte plusieurs points végétatifs, qui, après la plantation, donneront naissance à de nouveaux bulbes-fils formant une touffe. L'inflorescence est, comme chez toutes les espèces du genre Allium, une ombelle sphérique. Les graines sont petites et noires.\n" +
            "\n" +
            "La plante est très voisine de l'oignon (Allium cepa var. cepa) mais présente un nombre plus important de points végétatifs par bulbe ; ces points sont visibles en coupant transversalement un bulbe. La saveur de l'échalote est également plus marquée que celle de l'oignon.",
    imageurl: "../images/echalote.png"
  },
  {
    id: 8,
    nom: "Cerfeuil",
    croissance: "25",
    saison: "1",
    description: "Anthriscus cerefolium est une plante fine et menu. Germant au printemps, il montre une croissance rapide, puis finit toujours par fleurir durant l’été. Ses feuilles ont un délicat limbe mince et très découpé, rappelant une fougère. Elles ont un parfum et un gout très caractéristique, appétissant. Les tiges s’élèvent jusqu’à 50 cm de hauteur pour fleurir en plusieurs ombelles, regroupant des petites fleurs blanches, formant un assez joli bouquet.",
    imageurl: "../images/cerfeuil.png"
  },
  {
    id: 9,
    nom: "Fenouil",
    croissance: "25",
    saison: "1",
    description: "Plante aromatique, vivace, de la famille des ombellifères. Originaire d'Europe méridionnale, cultivé dès le moyen âge en Italie, on la trouve dans toute l'Europe centrale, en Asie occidentale et en Afrique du nord. La racine est ligneuse, la tige buissonnante, et peut monter à 1,5m.",
    imageurl: "../images/fenouil.png"
  }
];

export default PlantsList;
