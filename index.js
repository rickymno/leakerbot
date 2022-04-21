const Telegraf = require("telegraf");
const token = "5376015913:AAHzidtlJB2Ar_7mAHwNfOnig0UcO9GmjXE";
//const domain = "http://kings-bot2021.herokuapp.com/";
const randomItem = require("random-item");
const bot = new Telegraf(token);

bot.start((message) => {
  return message.reply(
    "🤖 salve, io sono LeakerBot ma se vuoi puoi chiamarmi l'oracolo con il Palle Maximo. Vorresti conoscere le informazioni sui nuovi titoli Pokémon in anteprima? eccomi qua!"
  );
});

//----------------ARRAY-------------------------------------------------------
const intro = [
  `So bene che non crederete alle mie parole, ma tramite un giro di amicizie vicine a The Pokémon Company, sono riuscito a scoprire le cose interessanti che vi andrò ad elencare. 
`,
  `Lavoravo per GameFreak, ma ora non più, per questo voglio divulgare le seguenti notizie. 
`,
  `Dovete assolutamente ascoltare quello che ho da dire... 
`,
  `Un mio carissimo amico che lavora da GameFreak mi ha raccontato delle cose sui nuovi giochi Pokémon, ve le scriverò qui sotto ma promettetemi che non lo direte ad altri. 
`,
  `Yo bro! leggi qui: 
`,
  `Mio Cuggino che lavora per Pokémon Magazine mi ha detto che in redazione sono arrivate delle copie beta dei nuovi giochi ed ogni relatore aveva diritto a portarsi a casa una cartuccia. Per questo quando sono andato a pranzo dai miei zii sono riuscito a giocare alla sua versione beta! ed ora vi racconterò tutte le novità che ancora non potete conoscere. 
`,
  `🤡 sono Riddler Khu!!! 🤡 ecco dei leak fatti lanciando una scatola di D20 🤡. 
`
];

const tipi=[
  "NORMALE",
  "LOTTA",
  "VOLANTE",
  "VELENO",
  "TERRA",
  "ROCCIA",
  "COLEOTTERO",
  "SPETTRO",
  "ACCIAIO",
  "FUOCO",
  "ACQUA",
  "ERBA",
  "ELETTRO",
  "PSICO",
  "GHIACCIO",
  "DRAGO",
  "BUIO",
  "FOLLETTO"
];

const rivale=[
  `- Il rivale sarà lo stesso professore che ci regalerà lo starter, perchè vorrà assicurarsi dei nostri progressi personalmente. 
`,
  `- Il rivale sarà colui che catturerà il leggendario opposto a quello di copertina a seconda della versione che staremo giocando. 
`,
  `- Il rivale sarà tale solo fino alla cattura dei leggendari, una volta catturato/sconfitto il leggendario di copertina, lo stesso rivale diventerà un nostro sostenitore aiutandoci a sconfiggere il campione della lega in uno scontro in doppio. 
`,
  `- Il rivale sarà un misterioso personaggio. Per tutta la prima parte del gioco lo accuseremo di essere il responsabile della morte di nostro padre, per poi scoprire che non è stato lui a uccidere nostro padre, lui è nostro padre. 
`
]


//-----------------actions---------------------------------------------------

bot.command("tuttodunfiato", (message) => {
  let messaggio_intro =randomItem(intro);
  let messaggio_rivale =randomItem(rivale);

  let tipo1Leggendario1=randomItem(tipi);
  let tipo2Leggendario1=randomItem(tipi);
  let tipo1Leggendario2=randomItem(tipi);
  let tipo2Leggendario2=randomItem(tipi);
  if ((tipo1Leggendario1==tipo2Leggendario1) && (tipo1Leggendario2==tipo2Leggendario2)) {
   var messaggio_leggendari=`- Il primo leggendario sarà di tipo `+tipo1Leggendario1+` puro, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+` puro.
   `;
  } else 
if (tipo1Leggendario1==tipo2Leggendario1) { 
  var messaggio_leggendari=`- Il primo leggendario sarà di tipo `+tipo1Leggendario1+` puro, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+`/`+tipo2Leggendario2+`.
  `;
} else 
if (tipo1Leggendario2==tipo2Leggendario2) {
  var messaggio_leggendari=`- Il primo leggendario sarà di tipo `+tipo1Leggendario1+`/`+tipo2Leggendario1+`, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+` puro.
  `;
} else {
  var messaggio_leggendari=`- Il primo leggendario sarà di tipo `+tipo1Leggendario1+`/`+tipo2Leggendario1+` mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+`/`+tipo2Leggendario2+`.
  `;
}
return message.reply(messaggio_intro+messaggio_rivale+messaggio_leggendari);
});


/*

bot.command("prefazione", (message) => {
  let messaggio_intro =randomItem(intro);
  return message.reply(messaggio_intro);
});

bot.command("rivale", (message) => {
  let messaggio_rivale =randomItem(rivale);
  return message.reply(messaggio_rivale);
});

bot.command("leggendari", (message) => {
let tipo1Leggendario1=randomItem(tipi);
let tipo2Leggendario1=randomItem(tipi);
let tipo1Leggendario2=randomItem(tipi);
let tipo2Leggendario2=randomItem(tipi);
if ((tipo1Leggendario1==tipo2Leggendario1) && (tipo1Leggendario2==tipo2Leggendario2)) {
  return message.reply(`Il primo leggendario sarà di tipo `+tipo1Leggendario1+` puro, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+` puro`);
} else 
if (tipo1Leggendario1==tipo2Leggendario1) { 
  return message.reply(`Il primo leggendario sarà di tipo `+tipo1Leggendario1+` puro, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+`/`+tipo2Leggendario2);
} else 
if (tipo1Leggendario2==tipo2Leggendario2) {
  return message.reply(`Il primo leggendario sarà di tipo `+tipo1Leggendario1+`/`+tipo2Leggendario1+`, mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+` puro`);
} else {
return message.reply(`Il primo leggendario sarà di tipo `+tipo1Leggendario1+`/`+tipo2Leggendario1+` mentre il secondo leggendario sarà di tipo `+tipo1Leggendario2+`/`+tipo2Leggendario2);
}
});
*/

//---------{ webhook: { domain, port: Number(process.env.PORT) } }
bot.launch();

