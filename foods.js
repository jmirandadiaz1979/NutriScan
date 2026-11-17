// NutriScan — base de datos de alimentos (valores por 100 g). Se carga antes que index.html.
const NATURAL_FOODS=[
  // VERDURAS
  {id:'espinaca',name:'Espinaca',cat:'verdura',ico:'🥬',kcal:23,prot:2.9,carb:3.6,fat:0.4,fiber:2.2,sugar:0.4,vitC:28,iron:2.7,calcium:99},
  {id:'lechuga',name:'Lechuga romana',cat:'verdura',ico:'🥬',kcal:17,prot:1.2,carb:3.3,fat:0.3,fiber:2.1,sugar:1.2,vitC:24,iron:0.9,calcium:36},
  {id:'acelga',name:'Acelga',cat:'verdura',ico:'🥬',kcal:19,prot:1.8,carb:3.7,fat:0.2,fiber:1.6,sugar:1.1,vitC:30,iron:1.8,calcium:51},
  {id:'kale',name:'Kale (col rizada)',cat:'verdura',ico:'🥬',kcal:49,prot:4.3,carb:8.8,fat:0.9,fiber:3.6,sugar:2.3,vitC:120,iron:1.5,calcium:150},
  {id:'brocoli',name:'Brócoli',cat:'verdura',ico:'🥦',kcal:34,prot:2.8,carb:6.6,fat:0.4,fiber:2.6,sugar:1.7,vitC:89,iron:0.7,calcium:47},
  {id:'coliflor',name:'Coliflor',cat:'verdura',ico:'🥦',kcal:25,prot:1.9,carb:5.0,fat:0.3,fiber:2.0,sugar:1.9,vitC:48,iron:0.4,calcium:22},
  {id:'col_bruselas',name:'Coles de Bruselas',cat:'verdura',ico:'🥦',kcal:43,prot:3.4,carb:8.9,fat:0.3,fiber:3.8,sugar:2.2,vitC:85,iron:1.4,calcium:42},
  {id:'repollo',name:'Repollo',cat:'verdura',ico:'🥬',kcal:25,prot:1.3,carb:5.8,fat:0.1,fiber:2.5,sugar:3.2,vitC:36,iron:0.5,calcium:40},
  {id:'pepino',name:'Pepino',cat:'verdura',ico:'🥒',kcal:16,prot:0.7,carb:3.6,fat:0.1,fiber:0.5,sugar:1.7,vitC:2.8,iron:0.3,calcium:16},
  {id:'apio',name:'Apio',cat:'verdura',ico:'🌿',kcal:16,prot:0.7,carb:3.0,fat:0.2,fiber:1.6,sugar:1.3,vitC:3.1,iron:0.2,calcium:40},
  {id:'rucula',name:'Rúcula',cat:'verdura',ico:'🥬',kcal:25,prot:2.6,carb:3.7,fat:0.7,fiber:1.6,sugar:2.1,vitC:15,iron:1.5,calcium:160},
  // HORTALIZAS
  {id:'tomate',name:'Tomate',cat:'hortaliza',ico:'🍅',kcal:18,prot:0.9,carb:3.9,fat:0.2,fiber:1.2,sugar:2.6,vitC:14,iron:0.3,calcium:10},
  {id:'tomate_cherry',name:'Tomate cherry',cat:'hortaliza',ico:'🍅',kcal:18,prot:0.9,carb:3.9,fat:0.2,fiber:1.2,sugar:2.6,vitC:16,iron:0.3,calcium:10},
  {id:'pimiento_rojo',name:'Pimiento rojo',cat:'hortaliza',ico:'🫑',kcal:31,prot:1.0,carb:6.0,fat:0.3,fiber:2.1,sugar:4.2,vitC:128,iron:0.4,calcium:7},
  {id:'pimiento_verde',name:'Pimiento verde',cat:'hortaliza',ico:'🫑',kcal:20,prot:0.9,carb:4.6,fat:0.2,fiber:1.7,sugar:2.4,vitC:80,iron:0.4,calcium:10},
  {id:'zanahoria',name:'Zanahoria',cat:'hortaliza',ico:'🥕',kcal:41,prot:0.9,carb:9.6,fat:0.2,fiber:2.8,sugar:4.7,vitC:6,iron:0.3,calcium:33},
  {id:'cebolla',name:'Cebolla',cat:'hortaliza',ico:'🧅',kcal:40,prot:1.1,carb:9.3,fat:0.1,fiber:1.7,sugar:4.2,vitC:7.4,iron:0.2,calcium:23},
  {id:'ajo',name:'Ajo',cat:'hortaliza',ico:'🧄',kcal:149,prot:6.4,carb:33,fat:0.5,fiber:2.1,sugar:1.0,vitC:31,iron:1.7,calcium:181},
  {id:'puerro',name:'Puerro',cat:'hortaliza',ico:'🌿',kcal:61,prot:1.5,carb:14,fat:0.3,fiber:1.8,sugar:3.9,vitC:12,iron:2.1,calcium:59},
  {id:'calabacin',name:'Calabacín',cat:'hortaliza',ico:'🥒',kcal:17,prot:1.2,carb:3.1,fat:0.3,fiber:1.0,sugar:2.5,vitC:17,iron:0.4,calcium:16},
  {id:'berenjena',name:'Berenjena',cat:'hortaliza',ico:'🍆',kcal:25,prot:1.0,carb:5.9,fat:0.2,fiber:3.0,sugar:3.5,vitC:2.2,iron:0.2,calcium:9},
  {id:'calabaza',name:'Calabaza',cat:'hortaliza',ico:'🎃',kcal:26,prot:1.0,carb:6.5,fat:0.1,fiber:0.5,sugar:2.8,vitC:9,iron:0.8,calcium:21},
  {id:'esparrago',name:'Espárrago',cat:'hortaliza',ico:'🌿',kcal:20,prot:2.2,carb:3.9,fat:0.1,fiber:2.1,sugar:1.9,vitC:5.6,iron:2.1,calcium:24},
  {id:'alcachofa',name:'Alcachofa',cat:'hortaliza',ico:'🌿',kcal:47,prot:3.3,carb:10,fat:0.2,fiber:5.4,sugar:0.9,vitC:12,iron:1.3,calcium:44},
  {id:'remolacha',name:'Remolacha',cat:'hortaliza',ico:'🟣',kcal:43,prot:1.6,carb:9.6,fat:0.2,fiber:2.8,sugar:6.8,vitC:4.9,iron:0.8,calcium:16},
  {id:'nabo',name:'Nabo',cat:'hortaliza',ico:'🌿',kcal:28,prot:0.9,carb:6.4,fat:0.1,fiber:1.8,sugar:3.8,vitC:21,iron:0.3,calcium:30},
  {id:'maiz',name:'Maíz dulce',cat:'hortaliza',ico:'🌽',kcal:86,prot:3.2,carb:19,fat:1.2,fiber:2.7,sugar:3.2,vitC:7,iron:0.5,calcium:2},
  {id:'guisante',name:'Guisante fresco',cat:'hortaliza',ico:'🟢',kcal:81,prot:5.4,carb:14,fat:0.4,fiber:5.1,sugar:5.7,vitC:40,iron:1.5,calcium:25},
  {id:'judia_verde',name:'Judía verde',cat:'hortaliza',ico:'🟢',kcal:31,prot:1.8,carb:7.1,fat:0.1,fiber:3.4,sugar:3.3,vitC:12,iron:1.0,calcium:37},
  // FRUTAS
  {id:'manzana',name:'Manzana',cat:'fruta',ico:'🍎',kcal:52,prot:0.3,carb:14,fat:0.2,fiber:2.4,sugar:10,vitC:4.6,iron:0.1,calcium:6},
  {id:'pera',name:'Pera',cat:'fruta',ico:'🍐',kcal:57,prot:0.4,carb:15,fat:0.1,fiber:3.1,sugar:9.8,vitC:4.3,iron:0.2,calcium:9},
  {id:'platano',name:'Plátano',cat:'fruta',ico:'🍌',kcal:89,prot:1.1,carb:23,fat:0.3,fiber:2.6,sugar:12,vitC:8.7,iron:0.3,calcium:5},
  {id:'naranja',name:'Naranja',cat:'fruta',ico:'🍊',kcal:47,prot:0.9,carb:12,fat:0.1,fiber:2.4,sugar:9.4,vitC:53,iron:0.1,calcium:40},
  {id:'mandariana',name:'Mandarina',cat:'fruta',ico:'🍊',kcal:53,prot:0.8,carb:13,fat:0.3,fiber:1.8,sugar:10,vitC:27,iron:0.1,calcium:37},
  {id:'limon',name:'Limón',cat:'fruta',ico:'🍋',kcal:29,prot:1.1,carb:9.3,fat:0.3,fiber:2.8,sugar:2.5,vitC:53,iron:0.6,calcium:26},
  {id:'fresas',name:'Fresas',cat:'fruta',ico:'🍓',kcal:32,prot:0.7,carb:7.7,fat:0.3,fiber:2.0,sugar:4.9,vitC:59,iron:0.4,calcium:16},
  {id:'arandanos',name:'Arándanos',cat:'fruta',ico:'🫐',kcal:57,prot:0.7,carb:14,fat:0.3,fiber:2.4,sugar:10,vitC:9.7,iron:0.3,calcium:6},
  {id:'frambuesa',name:'Frambuesa',cat:'fruta',ico:'🍓',kcal:52,prot:1.2,carb:12,fat:0.7,fiber:6.5,sugar:4.4,vitC:26,iron:0.7,calcium:25},
  {id:'moras',name:'Moras',cat:'fruta',ico:'🫐',kcal:43,prot:1.4,carb:9.6,fat:0.5,fiber:5.3,sugar:4.9,vitC:21,iron:0.6,calcium:29},
  {id:'cereza',name:'Cerezas',cat:'fruta',ico:'🍒',kcal:63,prot:1.1,carb:16,fat:0.2,fiber:2.1,sugar:13,vitC:7,iron:0.4,calcium:13},
  {id:'melocoton',name:'Melocotón',cat:'fruta',ico:'🍑',kcal:39,prot:0.9,carb:9.5,fat:0.3,fiber:1.5,sugar:8.4,vitC:6.6,iron:0.3,calcium:6},
  {id:'ciruela',name:'Ciruela',cat:'fruta',ico:'🍑',kcal:46,prot:0.7,carb:11,fat:0.3,fiber:1.4,sugar:9.9,vitC:9.5,iron:0.2,calcium:6},
  {id:'uvas',name:'Uvas',cat:'fruta',ico:'🍇',kcal:69,prot:0.7,carb:18,fat:0.2,fiber:0.9,sugar:16,vitC:3.2,iron:0.4,calcium:10},
  {id:'kiwi',name:'Kiwi',cat:'fruta',ico:'🥝',kcal:61,prot:1.1,carb:15,fat:0.5,fiber:3.0,sugar:9.0,vitC:93,iron:0.3,calcium:34},
  {id:'mango',name:'Mango',cat:'fruta',ico:'🥭',kcal:60,prot:0.8,carb:15,fat:0.4,fiber:1.6,sugar:14,vitC:36,iron:0.2,calcium:11},
  {id:'pina',name:'Piña',cat:'fruta',ico:'🍍',kcal:50,prot:0.5,carb:13,fat:0.1,fiber:1.4,sugar:10,vitC:48,iron:0.3,calcium:13},
  {id:'melon',name:'Melón',cat:'fruta',ico:'🍈',kcal:34,prot:0.8,carb:8.2,fat:0.2,fiber:0.9,sugar:7.9,vitC:18,iron:0.2,calcium:9},
  {id:'sandia',name:'Sandía',cat:'fruta',ico:'🍉',kcal:30,prot:0.6,carb:7.6,fat:0.2,fiber:0.4,sugar:6.2,vitC:8.1,iron:0.2,calcium:7},
  {id:'aguacate',name:'Aguacate',cat:'fruta',ico:'🥑',kcal:160,prot:2.0,carb:8.5,fat:15,fiber:6.7,sugar:0.7,vitC:10,iron:0.6,calcium:12},
  {id:'granada',name:'Granada',cat:'fruta',ico:'🍎',kcal:83,prot:1.7,carb:19,fat:1.2,fiber:4.0,sugar:14,vitC:10,iron:0.3,calcium:10},
  {id:'papaya',name:'Papaya',cat:'fruta',ico:'🍈',kcal:43,prot:0.5,carb:11,fat:0.3,fiber:1.7,sugar:7.8,vitC:62,iron:0.3,calcium:20},
  {id:'higo',name:'Higo fresco',cat:'fruta',ico:'🍎',kcal:74,prot:0.8,carb:19,fat:0.3,fiber:2.9,sugar:16,vitC:2,iron:0.4,calcium:35},
  // LEGUMBRES (cocidas)
  {id:'lentejas',name:'Lentejas cocidas',cat:'legumbre',ico:'🫘',kcal:116,prot:9.0,carb:20,fat:0.4,fiber:7.9,sugar:1.8,vitC:1.5,iron:3.3,calcium:19},
  {id:'garbanzos',name:'Garbanzos cocidos',cat:'legumbre',ico:'🫘',kcal:164,prot:8.9,carb:27,fat:2.6,fiber:7.6,sugar:4.8,vitC:1.3,iron:2.9,calcium:49},
  {id:'judias_negras',name:'Judías negras cocidas',cat:'legumbre',ico:'🫘',kcal:132,prot:8.9,carb:24,fat:0.5,fiber:8.7,sugar:0.3,vitC:0,iron:2.1,calcium:27},
  {id:'judias_blancas',name:'Judías blancas cocidas',cat:'legumbre',ico:'🫘',kcal:127,prot:8.7,carb:22,fat:0.5,fiber:7.4,sugar:0.3,vitC:0,iron:2.2,calcium:90},
  {id:'soja',name:'Soja cocida',cat:'legumbre',ico:'🫘',kcal:173,prot:17,carb:10,fat:9.0,fiber:6.0,sugar:3.0,vitC:1.7,iron:2.5,calcium:102},
  {id:'edamame',name:'Edamame',cat:'legumbre',ico:'🫘',kcal:121,prot:11,carb:9.9,fat:5.2,fiber:5.2,sugar:2.2,vitC:6.1,iron:2.3,calcium:60},
  {id:'guisantes_secos',name:'Guisantes secos cocidos',cat:'legumbre',ico:'🟢',kcal:118,prot:8.3,carb:21,fat:0.4,fiber:8.3,sugar:2.9,vitC:0.4,iron:1.3,calcium:27},
  {id:'habas',name:'Habas cocidas',cat:'legumbre',ico:'🫘',kcal:110,prot:7.6,carb:19,fat:0.4,fiber:5.4,sugar:1.8,vitC:1.4,iron:1.5,calcium:36},
  // CEREALES / TUBÉRCULOS
  {id:'arroz_blanco',name:'Arroz blanco cocido',cat:'cereal',ico:'🍚',kcal:130,prot:2.7,carb:28,fat:0.3,fiber:0.4,sugar:0,vitC:0,iron:0.2,calcium:10},
  {id:'arroz_integral',name:'Arroz integral cocido',cat:'cereal',ico:'🍚',kcal:123,prot:2.7,carb:26,fat:1.0,fiber:1.8,sugar:0,vitC:0,iron:0.5,calcium:10},
  {id:'avena',name:'Avena cruda',cat:'cereal',ico:'🌾',kcal:389,prot:17,carb:66,fat:7.0,fiber:11,sugar:1.1,vitC:0,iron:4.7,calcium:54},
  {id:'quinoa',name:'Quinoa cocida',cat:'cereal',ico:'🌾',kcal:120,prot:4.4,carb:22,fat:1.9,fiber:2.8,sugar:0.9,vitC:0,iron:1.5,calcium:17},
  {id:'pasta_trigo',name:'Pasta de trigo cocida',cat:'cereal',ico:'🍝',kcal:158,prot:5.8,carb:31,fat:0.9,fiber:1.8,sugar:0.6,vitC:0,iron:1.0,calcium:7},
  {id:'pan_integral',name:'Pan integral',cat:'cereal',ico:'🍞',kcal:247,prot:13,carb:41,fat:4.2,fiber:7.0,sugar:6.0,vitC:0,iron:3.0,calcium:73},
  {id:'pan_blanco',name:'Pan blanco',cat:'cereal',ico:'🍞',kcal:265,prot:9.0,carb:51,fat:3.2,fiber:2.7,sugar:5.0,vitC:0,iron:2.9,calcium:51},
  {id:'patata',name:'Patata cocida',cat:'cereal',ico:'🥔',kcal:86,prot:1.9,carb:20,fat:0.1,fiber:1.8,sugar:0.9,vitC:13,iron:0.3,calcium:5},
  {id:'boniato',name:'Boniato cocido',cat:'cereal',ico:'🍠',kcal:90,prot:2.0,carb:21,fat:0.1,fiber:3.3,sugar:4.2,vitC:13,iron:0.7,calcium:27},
  // PROTEÍNAS ANIMALES
  {id:'pechuga_pollo',name:'Pechuga de pollo cocida',cat:'proteina',ico:'🍗',kcal:165,prot:31,carb:0,fat:3.6,fiber:0,sugar:0,vitC:0,iron:1.0,calcium:15},
  {id:'muslo_pollo',name:'Muslo de pollo cocido',cat:'proteina',ico:'🍗',kcal:209,prot:26,carb:0,fat:11,fiber:0,sugar:0,vitC:0,iron:1.3,calcium:12},
  {id:'ternera_magra',name:'Ternera magra',cat:'proteina',ico:'🥩',kcal:176,prot:26,carb:0,fat:7.4,fiber:0,sugar:0,vitC:0,iron:2.5,calcium:18},
  {id:'lomo_cerdo',name:'Lomo de cerdo',cat:'proteina',ico:'🥩',kcal:242,prot:27,carb:0,fat:14,fiber:0,sugar:0,vitC:0,iron:0.9,calcium:19},
  {id:'salmon',name:'Salmón',cat:'proteina',ico:'🐟',kcal:208,prot:20,carb:0,fat:13,fiber:0,sugar:0,vitC:0,iron:0.3,calcium:9},
  {id:'atun_fresco',name:'Atún fresco',cat:'proteina',ico:'🐟',kcal:144,prot:23,carb:0,fat:5.1,fiber:0,sugar:0,vitC:0,iron:1.0,calcium:8},
  {id:'merluza',name:'Merluza',cat:'proteina',ico:'🐟',kcal:82,prot:17,carb:0,fat:1.0,fiber:0,sugar:0,vitC:0,iron:0.5,calcium:27},
  {id:'bacalao',name:'Bacalao',cat:'proteina',ico:'🐟',kcal:82,prot:18,carb:0,fat:0.7,fiber:0,sugar:0,vitC:0,iron:0.5,calcium:16},
  {id:'sardina',name:'Sardina fresca',cat:'proteina',ico:'🐟',kcal:208,prot:25,carb:0,fat:11,fiber:0,sugar:0,vitC:0,iron:2.9,calcium:382},
  {id:'huevo_entero',name:'Huevo entero',cat:'proteina',ico:'🥚',kcal:143,prot:13,carb:0.7,fat:10,fiber:0,sugar:0.4,vitC:0,iron:1.8,calcium:56},
  {id:'clara_huevo',name:'Clara de huevo',cat:'proteina',ico:'🥚',kcal:52,prot:11,carb:0.7,fat:0.2,fiber:0,sugar:0.5,vitC:0,iron:0.1,calcium:7},
  {id:'pavo_pechuga',name:'Pechuga de pavo',cat:'proteina',ico:'🍗',kcal:135,prot:30,carb:0,fat:1.0,fiber:0,sugar:0,vitC:0,iron:1.0,calcium:15},
  // LÁCTEOS
  {id:'leche_entera',name:'Leche entera',cat:'lacteo',ico:'🥛',kcal:61,prot:3.2,carb:4.8,fat:3.3,fiber:0,sugar:4.8,vitC:0,iron:0.1,calcium:113},
  {id:'leche_desnatada',name:'Leche desnatada',cat:'lacteo',ico:'🥛',kcal:35,prot:3.5,carb:5.0,fat:0.2,fiber:0,sugar:5.0,vitC:0,iron:0.1,calcium:125},
  {id:'yogur_natural',name:'Yogur natural',cat:'lacteo',ico:'🫙',kcal:61,prot:3.5,carb:4.7,fat:3.3,fiber:0,sugar:4.7,vitC:0,iron:0.1,calcium:121},
  {id:'yogur_griego',name:'Yogur griego natural',cat:'lacteo',ico:'🫙',kcal:97,prot:9.0,carb:3.6,fat:5.0,fiber:0,sugar:3.2,vitC:0,iron:0.1,calcium:110},
  {id:'queso_fresco',name:'Queso fresco (Burgos)',cat:'lacteo',ico:'🧀',kcal:97,prot:11,carb:2.5,fat:4.8,fiber:0,sugar:2.5,vitC:0,iron:0.2,calcium:120},
  {id:'queso_cottage',name:'Queso cottage',cat:'lacteo',ico:'🧀',kcal:98,prot:11,carb:3.4,fat:4.3,fiber:0,sugar:2.7,vitC:0,iron:0.1,calcium:83},
  {id:'requesón',name:'Requesón (Ricotta)',cat:'lacteo',ico:'🧀',kcal:174,prot:11,carb:3.0,fat:13,fiber:0,sugar:0.3,vitC:0,iron:0.4,calcium:207},
  // GRASAS SALUDABLES
  {id:'aceite_oliva',name:'Aceite de oliva virgen extra',cat:'grasa',ico:'🫒',kcal:884,prot:0,carb:0,fat:100,fiber:0,sugar:0,vitC:0,iron:0.1,calcium:1},
  {id:'aguacate_g',name:'Aguacate (grasa)',cat:'grasa',ico:'🥑',kcal:160,prot:2.0,carb:8.5,fat:15,fiber:6.7,sugar:0.7,vitC:10,iron:0.6,calcium:12},
  {id:'aceite_coco',name:'Aceite de coco',cat:'grasa',ico:'🥥',kcal:892,prot:0,carb:0,fat:99,fiber:0,sugar:0,vitC:0,iron:0.1,calcium:1},
  {id:'mantequilla',name:'Mantequilla',cat:'grasa',ico:'🧈',kcal:717,prot:0.9,carb:0.1,fat:81,fiber:0,sugar:0.1,vitC:0,iron:0.02,calcium:24},
  // FRUTOS SECOS Y SEMILLAS
  {id:'almendras',name:'Almendras',cat:'fruto_seco',ico:'🥜',kcal:579,prot:21,carb:22,fat:50,fiber:12,sugar:4.4,vitC:0,iron:3.7,calcium:264},
  {id:'nueces',name:'Nueces',cat:'fruto_seco',ico:'🥜',kcal:654,prot:15,carb:14,fat:65,fiber:6.7,sugar:2.6,vitC:1.3,iron:2.9,calcium:98},
  {id:'avellanas',name:'Avellanas',cat:'fruto_seco',ico:'🥜',kcal:628,prot:15,carb:17,fat:61,fiber:9.7,sugar:4.3,vitC:6.3,iron:4.7,calcium:114},
  {id:'anacardos',name:'Anacardos',cat:'fruto_seco',ico:'🥜',kcal:553,prot:18,carb:30,fat:44,fiber:3.3,sugar:5.9,vitC:0.5,iron:6.7,calcium:37},
  {id:'pistachos',name:'Pistachos',cat:'fruto_seco',ico:'🥜',kcal:560,prot:20,carb:28,fat:45,fiber:10,sugar:7.7,vitC:5.6,iron:4.0,calcium:105},
  {id:'semillas_chia',name:'Semillas de chía',cat:'fruto_seco',ico:'🌱',kcal:486,prot:17,carb:42,fat:31,fiber:34,sugar:0,vitC:1.6,iron:7.7,calcium:631},
  {id:'semillas_lino',name:'Semillas de lino',cat:'fruto_seco',ico:'🌱',kcal:534,prot:18,carb:29,fat:42,fiber:27,sugar:1.6,vitC:0.6,iron:5.7,calcium:255},
  {id:'semillas_calabaza',name:'Semillas de calabaza',cat:'fruto_seco',ico:'🌱',kcal:559,prot:30,carb:11,fat:49,fiber:6.0,sugar:1.4,vitC:1.9,iron:8.8,calcium:46},
  {id:'cacahuetes',name:'Cacahuetes',cat:'fruto_seco',ico:'🥜',kcal:567,prot:26,carb:16,fat:49,fiber:8.5,sugar:4.7,vitC:0,iron:4.6,calcium:92},
  {id:'pipas_girasol',name:'Pipas de girasol',cat:'fruto_seco',ico:'🌱',kcal:584,prot:21,carb:20,fat:51,fiber:8.6,sugar:2.6,vitC:1.4,iron:5.3,calcium:78},
  // HONGOS / SETAS
  {id:'champiñon',name:'Champiñón',cat:'verdura',ico:'🍄',kcal:22,prot:3.1,carb:3.3,fat:0.3,fiber:1.0,sugar:2.0,vitC:2.1,iron:0.5,calcium:3},
  {id:'seta_portobello',name:'Seta Portobello',cat:'verdura',ico:'🍄',kcal:22,prot:2.1,carb:3.9,fat:0.4,fiber:1.3,sugar:2.1,vitC:0,iron:0.3,calcium:3},
];

const EXTRA_FOODS_RAW=[
 'ternera_picada|Ternera picada magra|proteina|🥩|137|21|0|5|0|0|11|c',
 'cerdo_solomillo|Solomillo de cerdo|proteina|🥩|143|22|0|5.5|0|0|10|c',
 'conejo|Conejo|proteina|🐇|136|20|0|5.5|0|0|9|c',
 'jamon_serrano|Jamón serrano|proteina|🥓|241|31|0|12|0|0|28|ci',
 'jamon_cocido|Jamón cocido extra|proteina|🥓|107|17|1|4|0|0|11|ci',
 'dorada|Dorada|proteina|🐟|100|19|0|2.5|0|0|11|p',
 'lubina|Lubina|proteina|🐟|97|18|0|2.5|0|0|12|p',
 'caballa|Caballa|proteina|🐟|205|19|0|14|0|0|7|p',
 'trucha|Trucha|proteina|🐟|119|20|0|3.5|0|0|9|p',
 'lenguado|Lenguado|proteina|🐟|86|18|0|1.5|0|0|15|p',
 'atun_lata|Atún en lata al natural|proteina|🥫|116|26|0|1|0|0|13|p',
 'gambas|Gambas|proteina|🦐|85|20|0.2|0.5|0|0|16|m',
 'mejillones|Mejillones|proteina|🦪|86|12|3.7|2.2|0|0|4|m',
 'calamar|Calamar|proteina|🦑|92|15.6|3.1|1.4|0|0|9|m',
 'pulpo|Pulpo|proteina|🐙|82|15|2.2|1|0|0|14|m',
 'tofu|Tofu firme|proteina|🧈|76|8|1.9|4.8|0.3|0.6|8|s',
 'tempeh|Tempeh|proteina|🟫|192|20|7.6|11|0|0|14|s',
 'seitan|Seitán|proteina|🟫|120|21|4|2|0|0|10|g',
 'kefir|Kéfir natural|lacteo|🥛|41|3.3|4.5|1|0|4.5|2.5|l',
 'skyr|Skyr|lacteo|🥛|63|11|4|0.2|0|4|4.5|l',
 'mozzarella|Mozzarella|lacteo|🧀|280|22|2|22|0|1|8|l',
 'queso_manchego|Queso manchego curado|lacteo|🧀|400|26|0.5|33|0|0.5|16|l',
 'bebida_soja|Bebida de soja|lacteo|🥛|33|3.3|0.6|1.8|0.5|0.5|1.3|s',
 'bebida_avena|Bebida de avena|lacteo|🥛|45|1|7|1.5|0.8|4|1.6|g',
 'bebida_almendra|Bebida de almendra|lacteo|🥛|15|0.6|0.2|1.1|0.3|0|2|f',
 'cuscus|Cuscús (crudo)|cereal|🌾|376|13|77|0.6|5|1|3|g',
 'pasta_integral|Pasta integral (cruda)|cereal|🍝|348|13|66|2.5|7|3|2|g',
 'trigo_sarraceno|Trigo sarraceno|cereal|🌾|343|13|72|3.4|10|0|4|',
 'mijo|Mijo|cereal|🌾|378|11|73|4.2|8.5|1|3|',
 'pan_centeno|Pan de centeno|cereal|🍞|259|8.5|48|3.3|6|4|4|g',
 'tortitas_arroz|Tortitas de arroz|cereal|🍘|387|8|82|2.8|4|0.5|6|',
 'rabano|Rábano|verdura|🌱|16|0.7|3.4|0.1|1.6|1.9|2.5|',
 'col_lombarda|Col lombarda|verdura|🥬|31|1.4|7.4|0.2|2.1|3.8|1.8|',
 'hinojo|Hinojo|verdura|🌿|31|1.2|7.3|0.2|3.1|0|2.5|',
 'alubias_pintas|Alubias pintas (crudas)|legumbre|🫘|333|21|60|1.2|15|2|2.8|',
 'hummus|Hummus|legumbre|🧆|166|8|14|9.6|6|0.3|6|e',
 'datiles|Dátiles|fruta|🌴|282|2.5|75|0.4|8|63|8|',
 'pasas|Pasas|fruta|🍇|299|3|79|0.5|4|59|6|',
 'tahini|Tahini|grasa|🥣|595|17|21|54|9|0.5|12|e',
 'crema_cacahuete|Crema de cacahuete|grasa|🥜|588|25|20|50|6|9|8|a',
 'aceitunas|Aceitunas|grasa|🫒|115|0.8|6|11|3|0|6|',
 'chocolate_negro|Chocolate negro 85%|grasa|🍫|600|10|19|48|13|14|14|',
 'miel|Miel|cereal|🍯|304|0.3|82|0|0|82|9|x',
 'rape|Rape|proteina|🐟|76|14.5|0|1.5|0|0|20|p',
 'sepia|Sepia|proteina|🦑|79|16|0.8|0.7|0|0|10|m',
 'almejas|Almejas|proteina|🦪|86|14.7|3.6|1|0|0|14|m',
 'pavo_muslo|Muslo de pavo|proteina|🍗|135|18|0|6.5|0|0|6|c',
 'soja_texturizada|Soja texturizada (seca)|proteina|🟫|327|52|30|1.2|13|0|9|s',
 'queso_feta|Queso feta|lacteo|🧀|264|14|4|21|0|4|12|l',
 'queso_burgos|Queso de Burgos|lacteo|🧀|174|13|3|12.7|0|3|8|l',
 'yogur_proteico|Yogur proteico|lacteo|🥛|60|10|4|0.2|0|4|4.5|l',
 'arroz_basmati|Arroz basmati (cocido)|cereal|🍚|121|3.5|25|0.4|0.7|0|2.5|',
 'bulgur|Bulgur (cocido)|cereal|🌾|83|3|19|0.2|4.5|0.1|3|g',
 'fideos_arroz|Fideos de arroz (cocidos)|cereal|🍜|109|0.9|25|0.2|1|0|3|',
 'pan_pita|Pan de pita|cereal|🫓|275|9|56|1.2|2|1|3.5|g',
 'tortilla_trigo|Tortilla de trigo|cereal|🫓|300|8|50|7|3|3|4|g',
 'pan_espelta|Pan de espelta|cereal|🍞|250|11|45|2|6|3|5|g',
 'yuca|Yuca|cereal|🍠|160|1.4|38|0.3|1.8|1.7|2|',
 'berro|Berros|verdura|🥬|11|2.3|1.3|0.1|0.5|0.2|6|',
 'canonigos|Canónigos|verdura|🥬|14|2|0.7|0.4|1.5|0.2|9|',
 'endivia|Endivia|verdura|🥬|17|1.3|3.4|0.2|3.1|0.3|4|',
 'romanesco|Romanesco|verdura|🥦|25|2.5|3|0.5|2.5|1.2|3.5|',
 'pak_choi|Pak choi|verdura|🥬|13|1.5|2.2|0.2|1|1|4|',
 'cebolleta|Cebolleta|hortaliza|🧅|32|1.8|7.3|0.2|2.6|2.3|3|',
 'pimiento_amarillo|Pimiento amarillo|hortaliza|🫑|27|1|6.3|0.2|0.9|4.2|3|',
 'shiitake|Shiitake|verdura|🍄|34|2.2|7|0.5|2.5|2.4|14|',
 'brotes_soja|Brotes de soja|verdura|🌱|30|3|6|0.2|1.8|4|5|',
 'chirivia|Chirivía|hortaliza|🥕|75|1.2|18|0.3|4.9|4.8|2.5|',
 'albaricoque|Albaricoque|fruta|🍑|48|1.4|11|0.4|2|9|3|',
 'nectarina|Nectarina|fruta|🍑|44|1.1|10.5|0.3|1.7|7.9|3|',
 'pomelo|Pomelo|fruta|🍊|42|0.8|10.7|0.1|1.6|7|2|',
 'chirimoya|Chirimoya|fruta|🍈|75|1.6|18|0.7|3|13|4|',
 'caqui|Caqui|fruta|🍅|70|0.6|18.6|0.2|3.6|12.5|3|',
 'pinones|Piñones|fruto_seco|🌰|673|14|13|68|3.7|3.6|60|f',
 'semillas_sesamo|Semillas de sésamo|fruto_seco|🌰|573|18|23|50|12|0.3|10|e',
 'semillas_canamo|Semillas de cáñamo|fruto_seco|🌱|553|32|9|48|4|1.5|22|'
];

const MICROS_RAW=`espinaca:99,2.7,79,558,0.5,28,0,0,194,469
lechuga:33,1,14,247,0.2,4,0,0,136,436
acelga:51,1.8,81,379,0.4,30,0,0,14,306
kale:150,1.5,47,491,0.6,120,0,0,141,500
brocoli:47,0.7,21,316,0.4,89,0,0,63,31
coliflor:22,0.4,15,299,0.3,48,0,0,57,0
col_bruselas:42,1.4,23,389,0.4,85,0,0,61,38
repollo:40,0.5,12,170,0.2,36,0,0,43,5
pepino:16,0.3,13,147,0.2,3,0,0,7,5
apio:40,0.2,11,260,0.1,3,0,0,36,22
rucula:160,1.5,47,369,0.5,15,0,0,97,119
tomate:10,0.3,11,237,0.2,14,0,0,15,42
tomate_cherry:10,0.3,11,237,0.2,14,0,0,15,42
pimiento_rojo:7,0.4,12,211,0.3,128,0,0,46,157
pimiento_verde:10,0.3,10,175,0.1,80,0,0,10,18
zanahoria:33,0.3,12,320,0.2,6,0,0,19,835
cebolla:23,0.2,10,146,0.2,7,0,0,19,0
ajo:181,1.7,25,401,1.2,31,0,0,3,0
puerro:59,2.1,28,180,0.1,12,0,0,64,83
calabacin:16,0.4,18,261,0.3,18,0,0,24,10
berenjena:9,0.2,14,229,0.2,2,0,0,22,1
calabaza:21,0.8,12,340,0.3,9,0,0,16,426
esparrago:24,2.1,14,202,0.5,6,0,0,52,38
alcachofa:44,1.3,60,370,0.5,12,0,0,68,1
remolacha:16,0.8,23,325,0.4,5,0,0,109,2
nabo:30,0.3,11,191,0.3,21,0,0,15,0
maiz:2,0.5,37,270,0.5,7,0,0,42,9
guisante:25,1.5,33,244,1.2,40,0,0,65,38
judia_verde:37,1,25,211,0.2,12,0,0,33,35
manzana:6,0.1,5,107,0,5,0,0,3,3
pera:9,0.2,7,116,0.1,4,0,0,7,1
platano:5,0.3,27,358,0.2,9,0,0,20,3
naranja:40,0.1,10,181,0.1,53,0,0,30,11
mandariana:37,0.2,12,166,0.1,27,0,0,16,34
limon:26,0.6,8,138,0.1,53,0,0,11,1
fresas:16,0.4,13,153,0.1,59,0,0,24,1
arandanos:6,0.3,6,77,0.2,10,0,0,6,3
frambuesa:25,0.7,22,151,0.4,26,0,0,21,2
moras:29,0.6,20,162,0.5,21,0,0,25,11
cereza:13,0.4,11,222,0.1,7,0,0,4,3
melocoton:6,0.3,9,190,0.2,7,0,0,4,16
ciruela:6,0.2,7,157,0.1,10,0,0,5,17
uvas:10,0.4,7,191,0.1,4,0,0,2,3
kiwi:34,0.3,17,312,0.1,93,0,0,25,4
mango:11,0.2,10,168,0.1,36,0,0,43,54
pina:13,0.3,12,109,0.1,48,0,0,18,3
melon:9,0.2,12,267,0.2,37,0,0,21,169
sandia:7,0.2,10,112,0.1,8,0,0,3,28
aguacate:12,0.6,29,485,0.6,10,0,0,81,7
aguacate_g:12,0.6,29,485,0.6,10,0,0,81,7
granada:10,0.3,12,236,0.4,10,0,0,38,0
papaya:20,0.3,21,182,0.1,61,0,0,37,47
higo:35,0.4,17,232,0.2,2,0,0,6,7
lentejas:19,3.3,36,369,1.3,1.5,0,0,181,2
garbanzos:49,2.9,48,291,1.5,1.3,0,0,172,1
judias_negras:27,2.1,70,355,1.1,0,0,0,149,0
judias_blancas:90,3.7,63,561,1,0,0,0,140,0
soja:102,5.1,86,515,1.2,1.7,0,0,54,0
edamame:63,2.3,64,436,1.4,6,0,0,311,9
guisantes_secos:14,1.3,36,362,1,0.4,0,0,65,1
habas:36,1.5,43,268,1,0.3,0,0,104,0
arroz_blanco:10,0.2,12,35,0.5,0,0,0,3,0
arroz_integral:10,0.5,44,86,0.6,0,0,0,4,0
avena:54,4.7,177,429,4,0,0,0,56,0
quinoa:17,1.5,64,172,1.1,0,0,0,42,1
pasta_trigo:7,0.5,18,44,0.5,0,0,0,7,0
pan_integral:107,2.5,82,250,1.8,0,0,0,50,0
pan_blanco:70,1.6,25,115,0.7,0,0,0,30,0
patata:8,0.3,20,328,0.3,10,0,0,9,0
boniato:38,0.7,27,475,0.3,20,0,0,6,961
pechuga_pollo:15,1,29,256,1,0,0.1,0.3,4,6
muslo_pollo:12,1.3,23,230,2.4,0,0.2,0.4,8,16
ternera_magra:18,2.7,22,318,5.7,0,0.1,2.5,9,0
lomo_cerdo:19,0.9,26,360,2.4,0,0.9,0.7,2,2
salmon:15,0.3,29,384,0.6,0,11,3.2,26,50
atun_fresco:7,1.1,50,323,0.9,0,5.4,10,2,757
merluza:14,0.3,25,300,0.5,1,1,1,12,10
bacalao:16,0.4,32,413,0.5,1,1,0.9,7,12
sardina:382,2.9,39,397,1.3,0,4.8,8.9,12,32
huevo_entero:56,1.8,12,138,1.3,0,2,1.1,47,160
clara_huevo:7,0.1,11,163,0,0,0,0.1,4,0
pavo_pechuga:11,0.7,28,293,1.7,0,0.1,0.5,7,0
leche_entera:113,0,10,132,0.4,0,0.1,0.5,5,46
leche_desnatada:122,0,11,150,0.4,0,0.1,0.5,5,60
yogur_natural:121,0.1,12,155,0.6,0.5,0,0.4,7,27
yogur_griego:110,0.1,11,141,0.5,0,0,0.5,7,12
queso_fresco:100,0.1,8,100,0.6,0,0,0.4,13,35
queso_cottage:83,0.1,8,104,0.4,0,0,0.4,12,37
aceite_oliva:1,0.6,0,1,0,0,0,0,0,0
aceite_coco:0,0,0,0,0,0,0,0,0,0
mantequilla:24,0,2,24,0.1,0,1.5,0.2,3,684
almendras:269,3.7,270,733,3.1,0,0,0,44,0
nueces:98,2.9,158,441,3.1,1.3,0,0,98,1
avellanas:114,4.7,163,680,2.5,6,0,0,113,1
anacardos:37,6.7,292,660,5.8,0.5,0,0,25,0
pistachos:105,3.9,121,1025,2.2,5.6,0,0,51,26
semillas_chia:631,7.7,335,407,4.6,1.6,0,0,49,0
semillas_lino:255,5.7,392,813,4.3,0.6,0,0,87,0
semillas_calabaza:46,8.8,592,809,7.8,1.9,0,0,58,1
cacahuetes:92,4.6,168,705,3.3,0,0,0,240,0
pipas_girasol:78,5.3,325,645,5,1.4,0,0,227,3
seta_portobello:3,0.4,9,364,0.5,0,0.2,0.1,25,0
ternera_picada:12,2.2,19,320,4.8,0,0.1,2.3,6,0
cerdo_solomillo:20,1.1,28,390,2,0.7,0.9,0.7,5,2
conejo:12,3.3,25,330,1.7,0,0,7,8,0
jamon_serrano:10,2.3,24,360,2.8,0,0.5,0.6,2,0
jamon_cocido:8,0.7,19,280,1.5,0,0.3,0.7,2,0
dorada:15,0.4,30,350,0.4,0,6,2.5,10,12
lubina:12,0.4,30,300,0.4,0,5,3,10,15
caballa:12,1.6,76,314,0.6,0.4,16,19,1,50
trucha:43,0.4,28,452,0.5,2,11,4,10,15
lenguado:20,0.3,24,300,0.4,0,3,1,13,8
atun_lata:11,1,27,237,0.8,0,1.2,2.5,4,16
gambas:70,0.5,38,185,1.1,0,0,1.1,3,54
mejillones:26,4,34,320,1.6,8,0.3,12,42,64
calamar:32,0.7,33,246,1.5,4.7,0,1.3,5,10
pulpo:53,5.3,30,350,2.9,5,0,20,16,0
tofu:350,5.4,58,121,0.8,0.1,0,0,15,0
tempeh:111,2.7,81,412,1.1,0,0,0.1,24,0
seitan:142,5.2,31,100,1.3,0,0,0,8,0
kefir:120,0.1,12,164,0.4,1,0.1,0.4,5,30
skyr:110,0.1,12,150,0.5,0,0,0.5,7,2
mozzarella:505,0.4,20,76,2.9,0,0.4,2.3,7,174
queso_manchego:800,0.4,28,100,3.5,0,0.5,1.5,10,300
bebida_soja:120,0.4,15,118,0.2,0,0.8,0.4,4,0
bebida_avena:120,0.3,6,100,0.1,0,0.75,0.38,2,0
bebida_almendra:120,0.3,7,67,0.1,0,0.75,0.38,0,0
cuscus:24,1.1,44,166,0.8,0,0,0,24,0
pasta_integral:36,3.9,143,427,2.9,0,0,0,40,0
trigo_sarraceno:18,2.2,231,460,2.4,0,0,0,30,0
mijo:8,3,114,195,1.7,0,0,0,85,0
pan_centeno:73,2.8,40,166,1.1,0,0,0,30,0
tortitas_arroz:14,1.2,65,128,2,0,0,0,5,0
champiñon:3,0.5,9,318,0.5,2,0.2,0.04,17,0
requesón:207,0.4,11,125,1.2,0,0,0.3,12,100
rabano:25,0.3,10,233,0.3,15,0,0,25,0
col_lombarda:45,0.8,16,243,0.2,57,0,0,18,24
hinojo:49,0.7,17,414,0.2,12,0,0,27,48
alubias_pintas:113,5,176,1393,3,6,0,0,525,0
hummus:38,2.4,71,228,1.9,0,0,0,59,1
datiles:39,1,43,656,0.4,0,0,0,15,0
pasas:50,1.9,32,749,0.2,2,0,0,5,0
tahini:426,4.6,95,414,4.6,0,0,0,98,3
crema_cacahuete:49,1.9,168,649,2.5,0,0,0,87,0
aceitunas:52,3.3,11,42,0.2,0,0,0,0,20
chocolate_negro:73,11.9,228,715,3.3,0,0,0,13,0
miel:6,0.4,2,52,0.2,0.5,0,0,2,0
rape:10,0.4,22,300,0.5,0,1,0.5,5,10
sepia:90,0.6,40,350,1.7,1,0,3.5,5,0
almejas:46,14,9,314,1.4,14,0,49,14,90
pavo_muslo:11,1.5,22,250,3.5,0,0.1,0.5,8,10
soja_texturizada:241,9.2,310,2384,5,0,0,0,300,0
queso_feta:493,0.7,19,62,2.9,0,0.5,1.7,23,125
queso_burgos:600,0.2,13,100,1.5,0,0.2,0.6,12,100
yogur_proteico:120,0.1,12,150,0.5,0,0,0.5,7,2
arroz_basmati:10,0.4,12,40,0.5,0,0,0,4,0
bulgur:10,0.96,32,68,0.6,0,0,0,18,0
fideos_arroz:2,0.1,9,12,0.3,0,0,0,2,0
pan_pita:86,1.7,37,120,0.9,0,0,0,40,0
tortilla_trigo:130,3.3,26,160,0.8,0,0,0,30,0
pan_espelta:30,2.2,50,200,1.8,0,0,0,30,0
yuca:16,0.3,21,271,0.3,21,0,0,27,1
berro:120,0.2,21,330,0.1,43,0,0,9,160
canonigos:38,2.2,13,459,0.6,38,0,0,14,222
endivia:52,0.8,15,314,0.8,6.5,0,0,142,108
romanesco:22,0.9,20,340,0.4,62,0,0,57,0
pak_choi:105,0.8,19,252,0.2,45,0,0,66,223
cebolleta:72,1.5,20,276,0.4,19,0,0,64,50
pimiento_amarillo:11,0.5,12,225,0.2,184,0,0,26,10
shiitake:2,0.4,20,304,1,0,0.4,0,13,0
brotes_soja:13,0.9,21,149,0.4,14,0,0,61,0
chirivia:36,0.6,29,375,0.6,17,0,0,67,0
albaricoque:13,0.4,10,259,0.2,10,0,0,9,96
nectarina:6,0.3,9,201,0.2,5,0,0,5,17
pomelo:22,0.1,9,135,0.1,31,0,0,13,46
chirimoya:10,0.7,17,287,0.2,12,0,0,23,0
caqui:8,0.2,9,161,0.1,7.5,0,0,8,81
pinones:16,5.5,251,597,6.5,0.8,0,0,34,1
semillas_sesamo:975,14.6,351,468,7.8,0,0,0,97,0
semillas_canamo:70,8,700,1200,9.9,0.5,0,0,110,0`;
