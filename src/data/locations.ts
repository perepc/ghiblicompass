import type { GhibliLocation } from '../types';

export const LOCATIONS: GhibliLocation[] = [
  // ── Museos y Parques ──────────────────────────────────────────────────────
  {
    id: 'ghibli-museum',
    name: 'Museo Ghibli de Mitaka',
    nameEn: 'Ghibli Museum, Mitaka',
    nameJp: '三鷹の森ジブリ美術館',
    coordinates: [35.6963, 139.5704],
    filmIds: ['general'],
    type: 'museo',
    description:
      'El museo oficial de Studio Ghibli, diseñado por Hayao Miyazaki. Ofrece exposiciones sobre el proceso creativo, cortometrajes exclusivos y el famoso robot guardian del tejado.',
    descriptionEn:
      'The official Studio Ghibli museum, designed by Hayao Miyazaki himself. It features exhibitions on the creative process, exclusive short films, and the iconic rooftop robot warrior.',
    prefecture: 'Tokyo',
  },
  {
    id: 'ghibli-park',
    name: 'Ghibli Park',
    nameEn: 'Ghibli Park',
    nameJp: 'ジブリパーク',
    coordinates: [35.1798, 137.1014],
    filmIds: ['general'],
    type: 'parque_tematico',
    description:
      'Parque temático abierto en 2022 en los terrenos de la Expo de Aichi. Incluye zonas inspiradas en El viaje de Chihiro, Mi vecino Totoro, El castillo en el cielo y El castillo ambulante.',
    descriptionEn:
      'Theme park opened in 2022 on the grounds of the Aichi Expo. It includes areas inspired by Spirited Away, My Neighbor Totoro, Castle in the Sky, and Howl\'s Moving Castle.',
    prefecture: 'Aichi',
  },

  // ── Mi vecino Totoro ──────────────────────────────────────────────────────
  {
    id: 'sayama-hills',
    name: 'Colinas de Sayama (Bosque de Totoro)',
    nameEn: 'Sayama Hills (Totoro Forest)',
    nameJp: '狭山丘陵',
    coordinates: [35.8066, 139.4117],
    filmIds: ['totoro'],
    type: 'naturaleza',
    description:
      'Las colinas que inspiraron el bosque donde vive Totoro. Hoy es un área verde protegida gracias en parte al activismo de Miyazaki. Se puede visitar el "Totoro no Furusato Nature Fund".',
    descriptionEn:
      'The hills that inspired the forest where Totoro lives. Today it is a protected green area, partly thanks to Miyazaki\'s activism. The "Totoro no Furusato Nature Fund" can be visited here.',
    prefecture: 'Saitama / Tokyo',
  },
  {
    id: 'tokorozawa',
    name: 'Tokorozawa Sakura Town',
    nameEn: 'Tokorozawa Sakura Town',
    nameJp: '所沢サクラタウン',
    coordinates: [35.8006, 139.4757],
    filmIds: ['totoro'],
    type: 'ciudad',
    description:
      'Ciudad natal de Totoro según el lore oficial. Alberga el complejo cultural Kadokawa con referencias a Totoro y la cultura pop japonesa.',
    descriptionEn:
      'Totoro\'s official hometown according to the lore. It houses the Kadokawa cultural complex with references to Totoro and Japanese pop culture.',
    prefecture: 'Saitama',
  },
  {
    id: 'inokashira-park',
    name: 'Parque Inokashira',
    nameEn: 'Inokashira Park',
    nameJp: '井の頭恩賜公園',
    coordinates: [35.6996, 139.5715],
    filmIds: ['totoro'],
    type: 'naturaleza',
    description:
      'Parque adyacente al Museo Ghibli. Sus frondosos árboles y estanque evocan la atmósfera del bosque de Totoro. Lugar de paseo habitual de Miyazaki.',
    descriptionEn:
      'Park adjacent to the Ghibli Museum. Its lush trees and pond evoke the atmosphere of Totoro\'s forest. A favourite walking spot for Miyazaki.',
    prefecture: 'Tokyo',
  },

  // ── La princesa Mononoke ──────────────────────────────────────────────────
  {
    id: 'yakushima',
    name: 'Isla de Yakushima',
    nameEn: 'Yakushima Island',
    nameJp: '屋久島',
    coordinates: [30.3483, 130.5313],
    filmIds: ['mononoke'],
    type: 'naturaleza',
    description:
      'Isla Patrimonio de la Humanidad cuya selva primigenia de cedros milenarios (yakusugi) fue la principal inspiración visual para el Bosque del Dios de los Ciervos en La princesa Mononoke.',
    descriptionEn:
      'UNESCO World Heritage island whose ancient cedar forest (yakusugi) was the primary visual inspiration for the Forest of the Deer God in Princess Mononoke.',
    prefecture: 'Kagoshima',
  },
  {
    id: 'tatara-shimane',
    name: 'Sitio de fundición Tatara, Shimane',
    nameEn: 'Tatara Iron-Smelting Site, Shimane',
    nameJp: '鉄の歴史村',
    coordinates: [35.3200, 133.0500],
    filmIds: ['mononoke'],
    type: 'industria',
    description:
      'La tradición del tatara (fundición de hierro con arena) de la región de Chugoku inspiró la forja de Irontown (Tataraba) de la película. Aún existen demostraciones vivas en el museo.',
    descriptionEn:
      'The tatara iron-smelting tradition of the Chugoku region inspired the ironworks of Irontown (Tataraba) in the film. Live demonstrations can still be seen at the museum.',
    prefecture: 'Shimane',
  },
  {
    id: 'izumo-taisha',
    name: 'Gran Santuario de Izumo',
    nameEn: 'Izumo Grand Shrine',
    nameJp: '出雲大社',
    coordinates: [35.4018, 132.6854],
    filmIds: ['mononoke'],
    type: 'templo_santuario',
    description:
      'Uno de los santuarios sintoístas más antiguos de Japón, dedicado a Okuninushi. La atmósfera espiritual y los bosques sagrados que lo rodean impregnan el mundo de La princesa Mononoke.',
    descriptionEn:
      'One of the oldest Shinto shrines in Japan, dedicated to Okuninushi. The spiritual atmosphere and sacred forests surrounding it permeate the world of Princess Mononoke.',
    prefecture: 'Shimane',
  },
  {
    id: 'kumano-kodo',
    name: 'Rutas de Kumano Kodō',
    nameEn: 'Kumano Kodō Pilgrimage Trails',
    nameJp: '熊野古道',
    coordinates: [33.8741, 135.8019],
    filmIds: ['mononoke'],
    type: 'naturaleza',
    description:
      'Red de rutas de peregrinación a través de bosques milenarios de la Península de Kii. Sus paisajes sagrados y fauna abundante son fuente de inspiración clara para el anime.',
    descriptionEn:
      'Network of pilgrimage routes through ancient forests of the Kii Peninsula. Their sacred landscapes and abundant wildlife are a clear source of inspiration for the film.',
    prefecture: 'Wakayama / Mie',
  },
  {
    id: 'eiheiji-temple',
    name: 'Templo Eiheiji',
    nameEn: 'Eiheiji Temple',
    nameJp: '永平寺',
    coordinates: [36.0943, 136.3984],
    filmIds: ['mononoke'],
    type: 'templo_santuario',
    description:
      'Importante templo zen del s. XIII rodeado de cedros gigantes. La densa y mística atmósfera forestal del complejo resuena con los bosques sagrados de la película.',
    descriptionEn:
      'Important 13th-century Zen temple surrounded by giant cedars. The dense, mystical forest atmosphere of the complex resonates with the sacred forests of the film.',
    prefecture: 'Fukui',
  },

  // ── El viaje de Chihiro ───────────────────────────────────────────────────
  {
    id: 'dogo-onsen',
    name: 'Dogo Onsen',
    nameEn: 'Dogo Onsen',
    nameJp: '道後温泉',
    coordinates: [33.8524, 132.7858],
    filmIds: ['chihiro'],
    type: 'onsen',
    description:
      'Una de las termas más antiguas de Japón (s. III a.C.). El edificio principal, con su arquitectura de madera multicuerpo, es considerada una de las principales inspiraciones visuales del Yubaba Bathhouse.',
    descriptionEn:
      'One of the oldest hot springs in Japan (3rd century BC). The main building, with its multi-storey wooden architecture, is considered one of the primary visual inspirations for Yubaba\'s Bathhouse.',
    prefecture: 'Ehime',
  },
  {
    id: 'beppu-onsen',
    name: 'Jigokumeguri de Beppu',
    nameEn: 'Beppu Jigoku Meguri (Hell Tour)',
    nameJp: '別府地獄めぐり',
    coordinates: [33.2843, 131.4891],
    filmIds: ['chihiro'],
    type: 'onsen',
    description:
      'Los "Infiernos" de Beppu: piscinas termales de colores surrealistas rodeadas de vapor. La atmósfera sobrenatural de los manantiales refleja el mundo del bathhouse de El viaje de Chihiro.',
    descriptionEn:
      'The "Hells" of Beppu: surreally coloured thermal pools surrounded by steam. The supernatural atmosphere of the springs mirrors the world of Spirited Away\'s bathhouse.',
    prefecture: 'Oita',
  },

  // ── Ponyo ────────────────────────────────────────────────────────────────
  {
    id: 'tomonoura',
    name: 'Puerto histórico de Tomonoura',
    nameEn: 'Historic Port of Tomonoura',
    nameJp: '鞆の浦',
    coordinates: [34.3687, 133.3800],
    filmIds: ['ponyo'],
    type: 'ciudad',
    description:
      'Pintoresco puerto de la era Edo con faros de piedra, almacenes blancos y una bahía llena de vida marina. Miyazaki vivió aquí temporalmente y lo convirtió en el escenario principal de Ponyo.',
    descriptionEn:
      'Picturesque Edo-era port with stone lighthouses, white warehouses, and a bay teeming with marine life. Miyazaki lived here temporarily and turned it into the main setting for Ponyo.',
    prefecture: 'Hiroshima',
  },

  // ── Si escuchas tu corazón ────────────────────────────────────────────────
  {
    id: 'seiseki-sakuragaoka',
    name: 'Seiseki-Sakuragaoka, Tama',
    nameEn: 'Seiseki-Sakuragaoka, Tama',
    nameJp: '聖蹟桜ヶ丘',
    coordinates: [35.6350, 139.4200],
    filmIds: ['whisper'],
    type: 'ciudad',
    description:
      'Barrio residencial de colinas en el oeste de Tokyo que sirvió de modelo para las callejuelas, escaleras y vistas que recorre Shizuku en Si escuchas tu corazón. Cuenta con murales y señales de la película.',
    descriptionEn:
      'Hilly residential neighbourhood in west Tokyo that served as the model for the alleyways, staircases and views explored by Shizuku in Whisper of the Heart. It features murals and signs referencing the film.',
    prefecture: 'Tokyo',
  },

  // ── La tumba de las luciérnagas ───────────────────────────────────────────
  {
    id: 'nada-kobe',
    name: 'Distrito de Nada, Kobe',
    nameEn: 'Nada District, Kobe',
    nameJp: '灘区',
    coordinates: [34.7024, 135.2078],
    filmIds: ['fireflies'],
    type: 'ciudad',
    description:
      'Zona portuaria de Kobe devastada por los bombardeos de 1945. Es el área que recorre Seita tras el bombardeo en La tumba de las luciérnagas. Hoy es un tranquilo barrio industrial.',
    descriptionEn:
      'Kobe\'s port area devastated by the 1945 bombings. This is the area Seita wanders through after the air raid in Grave of the Fireflies. Today it is a quiet industrial neighbourhood.',
    prefecture: 'Hyogo',
  },
  {
    id: 'nishinomiya',
    name: 'Nishinomiya',
    nameEn: 'Nishinomiya',
    nameJp: '西宮市',
    coordinates: [34.7388, 135.3460],
    filmIds: ['fireflies'],
    type: 'ciudad',
    description:
      'Ciudad donde residía la familia de la tía de Seita. El director Isao Takahata creció en esta zona y situó aquí episodios clave de la historia basada en la novela de Nosaka.',
    descriptionEn:
      'The city where Seita\'s aunt\'s family lived. Director Isao Takahata grew up in this area and set key episodes of the story based on Nosaka\'s novel here.',
    prefecture: 'Hyogo',
  },
  {
    id: 'sannomiya',
    name: 'Sannomiya, Kobe',
    nameEn: 'Sannomiya, Kobe',
    nameJp: '三宮',
    coordinates: [34.6913, 135.1956],
    filmIds: ['fireflies'],
    type: 'ciudad',
    description:
      'Centro neurálgico de Kobe. La estación de Sannomiya aparece en la secuencia inicial de la película, donde Seita aguarda en el andén. Hoy es el corazón comercial de la ciudad.',
    descriptionEn:
      'The nerve centre of Kobe. Sannomiya Station appears in the film\'s opening sequence, where Seita waits on the platform. Today it is the commercial heart of the city.',
    prefecture: 'Hyogo',
  },

  // ── Recuerdos del ayer ────────────────────────────────────────────────────
  {
    id: 'yamagata-city',
    name: 'Ciudad de Yamagata',
    nameEn: 'Yamagata City',
    nameJp: '山形市',
    coordinates: [38.2404, 140.3633],
    filmIds: ['yesterday'],
    type: 'ciudad',
    description:
      'Capital de la prefectura de Yamagata. Taeko visita esta ciudad rural para ayudar en la cosecha del cártamo. La película documenta con precisión la vida campesina de la región en los años 60.',
    descriptionEn:
      'Capital of Yamagata Prefecture. Taeko visits this rural city to help with the safflower harvest. The film accurately documents the rural life of the region in the 1960s.',
    prefecture: 'Yamagata',
  },
  {
    id: 'yamagata-fields',
    name: 'Campos de cártamo de Yamagata',
    nameEn: 'Yamagata Safflower Fields',
    nameJp: '紅花畑',
    coordinates: [38.3500, 140.3500],
    filmIds: ['yesterday'],
    type: 'paisaje',
    description:
      'Los campos de benibana (cártamo) que tiñen el paisaje de amarillo en verano. Símbolo de la prefectura y escenario principal del trabajo rural de Taeko en Recuerdos del ayer.',
    descriptionEn:
      'The benibana (safflower) fields that turn the landscape yellow in summer. A symbol of the prefecture and the main setting for Taeko\'s rural work in Only Yesterday.',
    prefecture: 'Yamagata',
  },

  // ── Pompoko ────────────────────────────────────────────────────────────────
  {
    id: 'tama-hills',
    name: 'Colinas de Tama',
    nameEn: 'Tama Hills',
    nameJp: '多摩丘陵',
    coordinates: [35.6197, 139.3561],
    filmIds: ['pompoko'],
    type: 'naturaleza',
    description:
      'Las colinas de Tama al oeste de Tokyo, urbanizadas desde los años 60. Su destrucción medioambiental para construir nuevas ciudades residenciales es el conflicto central de Pompoko.',
    descriptionEn:
      'The Tama hills west of Tokyo, urbanised since the 1960s. Their environmental destruction to build new residential towns is the central conflict of Pom Poko.',
    prefecture: 'Tokyo / Kanagawa',
  },

  // ── El viento se levanta ───────────────────────────────────────────────────
  {
    id: 'mount-fuji',
    name: 'Monte Fuji',
    nameEn: 'Mount Fuji',
    nameJp: '富士山',
    coordinates: [35.3606, 138.7274],
    filmIds: ['wind'],
    type: 'paisaje',
    description:
      'El volcán más alto de Japón aparece en múltiples escenas de El viento se levanta. Jiro Horikoshi trabajó en fábricas aeronáuticas de la región con vistas al Fuji, que inspira sus sueños.',
    descriptionEn:
      'Japan\'s tallest volcano appears in multiple scenes of The Wind Rises. Jiro Horikoshi worked in aeronautical factories in the region overlooking Fuji, which inspires his dreams.',
    prefecture: 'Shizuoka / Yamanashi',
  },
  {
    id: 'kagoshima',
    name: 'Kagoshima y Sakurajima',
    nameEn: 'Kagoshima & Sakurajima',
    nameJp: '鹿児島・桜島',
    coordinates: [31.5966, 130.6572],
    filmIds: ['wind'],
    type: 'paisaje',
    description:
      'La bahía de Kagoshima y el volcán activo Sakurajima aparecen en las escenas del viaje de Jiro al sur de Japón. El paisaje volcánico sirve de trasfondo para las reflexiones del protagonista.',
    descriptionEn:
      'Kagoshima Bay and the active Sakurajima volcano appear in scenes of Jiro\'s journey to southern Japan. The volcanic landscape serves as a backdrop for the protagonist\'s reflections.',
    prefecture: 'Kagoshima',
  },

  // ── Cuando Marnie estuvo aquí ──────────────────────────────────────────────
  {
    id: 'kushiro-marshlands',
    name: 'Marismas de Kushiro',
    nameEn: 'Kushiro Marshlands',
    nameJp: '釧路湿原',
    coordinates: [43.0419, 144.3750],
    filmIds: ['marnie'],
    type: 'naturaleza',
    description:
      'La mayor zona húmeda de Japón, Patrimonio de la Humanidad, con paisajes de niebla y silencio que recuerdan a los pastizales donde Anna pinta en la película.',
    descriptionEn:
      'Japan\'s largest wetland, a UNESCO World Heritage Site, with misty, silent landscapes reminiscent of the meadows where Anna paints in the film.',
    prefecture: 'Hokkaido',
  },
  {
    id: 'lake-akan',
    name: 'Lago Akan',
    nameEn: 'Lake Akan',
    nameJp: '阿寒湖',
    coordinates: [43.4500, 144.1183],
    filmIds: ['marnie'],
    type: 'naturaleza',
    description:
      'Lago volcánico de Hokkaido conocido por sus bolas de algas marimo. Su entorno tranquilo y brumoso aporta la atmósfera introspectiva que caracteriza Cuando Marnie estuvo aquí.',
    descriptionEn:
      'Volcanic lake in Hokkaido known for its marimo algae balls. Its calm, misty surroundings provide the introspective atmosphere that characterises When Marnie Was There.',
    prefecture: 'Hokkaido',
  },

  // ── El cuento de la Princesa Kaguya ───────────────────────────────────────
  {
    id: 'takahata-nara',
    name: 'Bosques de bambú de Nara',
    nameEn: 'Bamboo Forests of Nara',
    nameJp: '奈良の竹林',
    coordinates: [34.5319, 135.7985],
    filmIds: ['kaguya'],
    type: 'naturaleza',
    description:
      'Los bosques de bambú de la región de Nara y Kyoto inspiran el escenario donde el anciano cortador de bambú encuentra a la pequeña Kaguya en el tallo luminoso del cuento.',
    descriptionEn:
      'The bamboo forests of the Nara and Kyoto region inspire the setting where the elderly bamboo cutter finds little Kaguya inside a glowing stalk in the tale.',
    prefecture: 'Nara',
  },

  // ── El castillo en el cielo ────────────────────────────────────────────────
  {
    id: 'himeji-castle',
    name: 'Castillo de Himeji',
    nameEn: 'Himeji Castle',
    nameJp: '姫路城',
    coordinates: [34.8394, 134.6939],
    filmIds: ['laputa'],
    type: 'paisaje',
    description:
      'El castillo blanco más imponente de Japón, Patrimonio de la Humanidad. Su silueta gótica y elevada influyó en la concepción visual de los castillos de El castillo en el cielo.',
    descriptionEn:
      'Japan\'s most imposing white castle, a UNESCO World Heritage Site. Its tall, Gothic silhouette influenced the visual conception of the castles in Castle in the Sky.',
    prefecture: 'Hyogo',
  },
  {
    id: 'oga-peninsula',
    name: 'Península de Oga',
    nameEn: 'Oga Peninsula',
    nameJp: '男鹿半島',
    coordinates: [39.9357, 139.9767],
    filmIds: ['laputa'],
    type: 'paisaje',
    description:
      'Penínsual rocosa de Akita con acantilados dramáticos sobre el Mar del Japón. Sus paisajes costeros abruptos evocan las ciudades mineras y los escenarios de extracción de El castillo en el cielo.',
    descriptionEn:
      'Rocky peninsula in Akita with dramatic cliffs over the Sea of Japan. Its rugged coastal landscapes evoke the mining towns and extraction sites of Castle in the Sky.',
    prefecture: 'Akita',
  },

  // ── Kiki's Delivery Service ────────────────────────────────────────────────
  {
    id: 'ine-funaya',
    name: 'Ine Funaya (casas-barco)',
    nameEn: 'Ine Funaya (Boat Houses)',
    nameJp: '伊根の舟屋',
    coordinates: [35.6897, 135.2826],
    filmIds: ['kiki'],
    type: 'ciudad',
    description:
      'El pueblo pesquero de Ine con sus casas con garaje marino (funaya) al borde del mar. El ambiente costero mediterráneo de la película de Kiki comparte el encanto pintoresco de este lugar.',
    descriptionEn:
      'The fishing village of Ine with its houses featuring a marine garage (funaya) right at the water\'s edge. The coastal, Mediterranean-like atmosphere of Kiki\'s film shares the picturesque charm of this place.',
    prefecture: 'Kyoto',
  },

  // ── Nausicaä del Valle del Viento ──────────────────────────────────────────
  {
    id: 'miura-peninsula',
    name: 'Península de Miura',
    nameEn: 'Miura Peninsula',
    nameJp: '三浦半島',
    coordinates: [35.1352, 139.6142],
    filmIds: ['nausicaa'],
    type: 'paisaje',
    description:
      'Los acantilados y vientos marinos de la Península de Miura, al sur de Yokohama, influyeron en Miyazaki para concebir el Valle del Viento y los planeadores de Nausicaä.',
    descriptionEn:
      'The cliffs and sea winds of the Miura Peninsula, south of Yokohama, influenced Miyazaki in conceiving the Valley of the Wind and Nausicaä\'s gliders.',
    prefecture: 'Kanagawa',
  },

  // ── El castillo ambulante ───────────────────────────────────────────────────
  {
    id: 'colmar-ghibli',
    name: 'Nagoya (Inspir. europeas de Howl)',
    nameEn: 'Nagoya (European inspirations of Howl)',
    nameJp: '名古屋',
    coordinates: [35.1815, 136.9066],
    filmIds: ['howl'],
    type: 'ciudad',
    description:
      'Aunque El castillo ambulante se inspiró principalmente en ciudades europeas como Colmar (Alsacia), el equipo del estudio trabajó desde su base japonesa. Nagoya alberga el Ghibli Park más cercano a sus influencias visuals.',
    descriptionEn:
      'Although Howl\'s Moving Castle was mainly inspired by European cities such as Colmar (Alsace), the studio team worked from their Japanese base. Nagoya is home to Ghibli Park, closest to its visual influences.',
    prefecture: 'Aichi',
  },
];
