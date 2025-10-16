import { Verb } from '../../verbs';

const commettre: Verb = {
  name: "commettre",
  conjugations: {
    "indicatif présent": { "je": "commets", "tu": "commets", "il/elle": "commet", "nous": "commettons", "vous": "commettez", "ils/elles": "commettent" },
    "indicatif imparfait": { "je": "commettais", "tu": "commettais", "il/elle": "commettait", "nous": "commettions", "vous": "commettiez", "ils/elles": "commettaient" },
    "indicatif passé simple": { "je": "commis", "tu": "commis", "il/elle": "commit", "nous": "commîmes", "vous": "commîtes", "ils/elles": "commirent" },
    "indicatif futur simple": { "je": "commettrai", "tu": "commettras", "il/elle": "commettra", "nous": "commettrons", "vous": "commettrez", "ils/elles": "commettront" },
    "indicatif passé composé": { "je": "ai commis", "tu": "as commis", "il/elle": "a commis", "nous": "avons commis", "vous": "avez commis", "ils/elles": "ont commis" },
    "indicatif plus-que-parfait": { "je": "avais commis", "tu": "avais commis", "il/elle": "avait commis", "nous": "avions commis", "vous": "aviez commis", "ils/elles": "avaient commis" },
    "indicatif passé antérieur": { "je": "eus commis", "tu": "eus commis", "il/elle": "eut commis", "nous": "eûmes commis", "vous": "eûtes commis", "ils/elles": "eurent commis" },
    "indicatif futur antérieur": { "je": "aurai commis", "tu": "auras commis", "il/elle": "aura commis", "nous": "aurons commis", "vous": "aurez commis", "ils/elles": "auront commis" },
    "subjonctif présent": { "je": "que je commette", "tu": "que tu commettes", "il/elle": "qu'il commette", "nous": "que nous commettions", "vous": "que vous commettiez", "ils/elles": "qu'ils commettent" },
    "subjonctif imparfait": { "je": "que je commisse", "tu": "que tu commisses", "il/elle": "qu'il commît", "nous": "que nous commissions", "vous": "que vous commissiez", "ils/elles": "qu'ils commissent" },
    "subjonctif passé": { "je": "que j'aie commis", "tu": "que tu aies commis", "il/elle": "qu'il ait commis", "nous": "que nous ayons commis", "vous": "que vous ayez commis", "ils/elles": "qu'ils aient commis" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse commis", "tu": "que tu eusses commis", "il/elle": "qu'il eût commis", "nous": "que nous eussions commis", "vous": "que vous eussiez commis", "ils/elles": "qu'ils eussent commis" },
    "conditionnel présent": { "je": "commettrais", "tu": "commettrais", "il/elle": "commettrait", "nous": "commettrions", "vous": "commettriez", "ils/elles": "commettraient" },
    "conditionnel passé première forme": { "je": "aurais commis", "tu": "aurais commis", "il/elle": "aurait commis", "nous": "aurions commis", "vous": "auriez commis", "ils/elles": "auraient commis" },
    "conditionnel passé deuxième forme": { "je": "eusse commis", "tu": "eusses commis", "il/elle": "eût commis", "nous": "eussions commis", "vous": "eussiez commis", "ils/elles": "eussent commis" },
    "impératif présent": { "tu": "commets", "nous": "commettons", "vous": "commettez" },
    "impératif passé": { "tu": "aie commis", "nous": "ayons commis", "vous": "ayez commis" },
    "infinitif présent": "commettre",
    "infinitif passé": "avoir commis",
    "participe présent": "commettant",
    "participe passé": "commis",
    "gérondif présent": "en commettant",
    "gérondif passé": "en ayant commis"
  }
};

const entreprendre: Verb = {
  name: "entreprendre",
  conjugations: {
    "indicatif présent": { "j'": "entreprends", "tu": "entreprends", "il/elle": "entreprend", "nous": "entreprenons", "vous": "entreprenez", "ils/elles": "entreprennent" },
    "indicatif imparfait": { "j'": "entreprenais", "tu": "entreprenais", "il/elle": "entreprenait", "nous": "entreprenions", "vous": "entrepreniez", "ils/elles": "entreprenaient" },
    "indicatif passé simple": { "j'": "entrepris", "tu": "entrepris", "il/elle": "entreprit", "nous": "entreprîmes", "vous": "entreprîtes", "ils/elles": "entreprirent" },
    "indicatif futur simple": { "j'": "entreprendrai", "tu": "entreprendras", "il/elle": "entreprendra", "nous": "entreprendrons", "vous": "entreprendrez", "ils/elles": "entreprendront" },
    "indicatif passé composé": { "j'": "ai entrepris", "tu": "as entrepris", "il/elle": "a entrepris", "nous": "avons entrepris", "vous": "avez entrepris", "ils/elles": "ont entrepris" },
    "indicatif plus-que-parfait": { "j'": "avais entrepris", "tu": "avais entrepris", "il/elle": "avait entrepris", "nous": "avions entrepris", "vous": "aviez entrepris", "ils/elles": "avaient entrepris" },
    "indicatif passé antérieur": { "j'": "eus entrepris", "tu": "eus entrepris", "il/elle": "eut entrepris", "nous": "eûmes entrepris", "vous": "eûtes entrepris", "ils/elles": "eurent entrepris" },
    "indicatif futur antérieur": { "j'": "aurai entrepris", "tu": "auras entrepris", "il/elle": "aura entrepris", "nous": "aurons entrepris", "vous": "aurez entrepris", "ils/elles": "auront entrepris" },
    "subjonctif présent": { "je": "que j'entreprenne", "tu": "que tu entreprennes", "il/elle": "qu'il entreprenne", "nous": "que nous entreprenions", "vous": "que vous entrepreniez", "ils/elles": "qu'ils entreprennent" },
    "subjonctif imparfait": { "je": "que j'entreprisse", "tu": "que tu entreprisses", "il/elle": "qu'il entreprît", "nous": "que nous entreprissions", "vous": "que vous entreprissiez", "ils/elles": "qu'ils entreprissent" },
    "subjonctif passé": { "je": "que j'aie entrepris", "tu": "que tu aies entrepris", "il/elle": "qu'il ait entrepris", "nous": "que nous ayons entrepris", "vous": "que vous ayez entrepris", "ils/elles": "qu'ils aient entrepris" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse entrepris", "tu": "que tu eusses entrepris", "il/elle": "qu'il eût entrepris", "nous": "que nous eussions entrepris", "vous": "que vous eussiez entrepris", "ils/elles": "qu'ils eussent entrepris" },
    "conditionnel présent": { "j'": "entreprendrais", "tu": "entreprendrais", "il/elle": "entreprendrait", "nous": "entreprendrions", "vous": "entreprendriez", "ils/elles": "entreprendraient" },
    "conditionnel passé première forme": { "j'": "aurais entrepris", "tu": "aurais entrepris", "il/elle": "aurait entrepris", "nous": "aurions entrepris", "vous": "auriez entrepris", "ils/elles": "auraient entrepris" },
    "conditionnel passé deuxième forme": { "j'": "eusse entrepris", "tu": "eusses entrepris", "il/elle": "eût entrepris", "nous": "eussions entrepris", "vous": "eussiez entrepris", "ils/elles": "eussent entrepris" },
    "impératif présent": { "tu": "entreprends", "nous": "entreprenons", "vous": "entreprenez" },
    "impératif passé": { "tu": "aie entrepris", "nous": "ayons entrepris", "vous": "ayez entrepris" },
    "infinitif présent": "entreprendre",
    "infinitif passé": "avoir entrepris",
    "participe présent": "entreprenant",
    "participe passé": "entrepris",
    "gérondif présent": "en entreprenant",
    "gérondif passé": "en ayant entrepris"
  }
};

const corrompre: Verb = {
  name: "corrompre",
  conjugations: {
    "indicatif présent": { "je": "corromps", "tu": "corromps", "il/elle": "corrompt", "nous": "corrompons", "vous": "corrompez", "ils/elles": "corrompent" },
    "indicatif imparfait": { "je": "corrompais", "tu": "corrompais", "il/elle": "corrompait", "nous": "corrompions", "vous": "corrompiez", "ils/elles": "corrompaient" },
    "indicatif passé simple": { "je": "corrompis", "tu": "corrompis", "il/elle": "corrompit", "nous": "corrompîmes", "vous": "corrompîtes", "ils/elles": "corrompirent" },
    "indicatif futur simple": { "je": "corromprai", "tu": "corrompras", "il/elle": "corrompra", "nous": "corromprons", "vous": "corromprez", "ils/elles": "corrompront" },
    "indicatif passé composé": { "je": "ai corrompu", "tu": "as corrompu", "il/elle": "a corrompu", "nous": "avons corrompu", "vous": "avez corrompu", "ils/elles": "ont corrompu" },
    "indicatif plus-que-parfait": { "je": "avais corrompu", "tu": "avais corrompu", "il/elle": "avait corrompu", "nous": "avions corrompu", "vous": "aviez corrompu", "ils/elles": "avaient corrompu" },
    "indicatif passé antérieur": { "je": "eus corrompu", "tu": "eus corrompu", "il/elle": "eut corrompu", "nous": "eûmes corrompu", "vous": "eûtes corrompu", "ils/elles": "eurent corrompu" },
    "indicatif futur antérieur": { "je": "aurai corrompu", "tu": "auras corrompu", "il/elle": "aura corrompu", "nous": "aurons corrompu", "vous": "aurez corrompu", "ils/elles": "auront corrompu" },
    "subjonctif présent": { "je": "que je corrompe", "tu": "que tu corrompes", "il/elle": "qu'il corrompe", "nous": "que nous corrompions", "vous": "que vous corrompiez", "ils/elles": "qu'ils corrompent" },
    "subjonctif imparfait": { "je": "que je corrompisse", "tu": "que tu corrompisses", "il/elle": "qu'il corrompît", "nous": "que nous corrompissions", "vous": "que vous corrompissiez", "ils/elles": "qu'ils corrompissent" },
    "subjonctif passé": { "je": "que j'aie corrompu", "tu": "que tu aies corrompu", "il/elle": "qu'il ait corrompu", "nous": "que nous ayons corrompu", "vous": "que vous ayez corrompu", "ils/elles": "qu'ils aient corrompu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse corrompu", "tu": "que tu eusses corrompu", "il/elle": "qu'il eût corrompu", "nous": "que nous eussions corrompu", "vous": "que vous eussiez corrompu", "ils/elles": "qu'ils eussent corrompu" },
    "conditionnel présent": { "je": "corromprais", "tu": "corromprais", "il/elle": "corromprait", "nous": "corromprions", "vous": "corrompriez", "ils/elles": "corrompraient" },
    "conditionnel passé première forme": { "je": "aurais corrompu", "tu": "aurais corrompu", "il/elle": "aurait corrompu", "nous": "aurions corrompu", "vous": "auriez corrompu", "ils/elles": "auraient corrompu" },
    "conditionnel passé deuxième forme": { "je": "eusse corrompu", "tu": "eusses corrompu", "il/elle": "eût corrompu", "nous": "eussions corrompu", "vous": "eussiez corrompu", "ils/elles": "eussent corrompu" },
    "impératif présent": { "tu": "corromps", "nous": "corrompons", "vous": "corrompez" },
    "impératif passé": { "tu": "aie corrompu", "nous": "ayons corrompu", "vous": "ayez corrompu" },
    "infinitif présent": "corrompre",
    "infinitif passé": "avoir corrompu",
    "participe présent": "corrompant",
    "participe passé": "corrompu",
    "gérondif présent": "en corrompant",
    "gérondif passé": "en ayant corrompu"
  }
};

const relire: Verb = {
  name: "relire",
  conjugations: {
    "indicatif présent": { "je": "relis", "tu": "relis", "il/elle": "relit", "nous": "relisons", "vous": "relisez", "ils/elles": "relisent" },
    "indicatif imparfait": { "je": "relisais", "tu": "relisais", "il/elle": "relisait", "nous": "relisions", "vous": "relisiez", "ils/elles": "relisaient" },
    "indicatif passé simple": { "je": "relus", "tu": "relus", "il/elle": "relut", "nous": "relûmes", "vous": "relûtes", "ils/elles": "relurent" },
    "indicatif futur simple": { "je": "relirai", "tu": "reliras", "il/elle": "relira", "nous": "relirons", "vous": "relirez", "ils/elles": "reliront" },
    "indicatif passé composé": { "je": "ai relu", "tu": "as relu", "il/elle": "a relu", "nous": "avons relu", "vous": "avez relu", "ils/elles": "ont relu" },
    "indicatif plus-que-parfait": { "je": "avais relu", "tu": "avais relu", "il/elle": "avait relu", "nous": "avions relu", "vous": "aviez relu", "ils/elles": "avaient relu" },
    "indicatif passé antérieur": { "je": "eus relu", "tu": "eus relu", "il/elle": "eut relu", "nous": "eûmes relu", "vous": "eûtes relu", "ils/elles": "eurent relu" },
    "indicatif futur antérieur": { "je": "aurai relu", "tu": "auras relu", "il/elle": "aura relu", "nous": "aurons relu", "vous": "aurez relu", "ils/elles": "auront relu" },
    "subjonctif présent": { "je": "que je relise", "tu": "que tu relises", "il/elle": "qu'il relise", "nous": "que nous relisions", "vous": "que vous relisiez", "ils/elles": "qu'ils relisent" },
    "subjonctif imparfait": { "je": "que je relusse", "tu": "que tu relusses", "il/elle": "qu'il relût", "nous": "que nous relussions", "vous": "que vous relussiez", "ils/elles": "qu'ils relussent" },
    "subjonctif passé": { "je": "que j'aie relu", "tu": "que tu aies relu", "il/elle": "qu'il ait relu", "nous": "que nous ayons relu", "vous": "que vous ayez relu", "ils/elles": "qu'ils aient relu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse relu", "tu": "que tu eusses relu", "il/elle": "qu'il eût relu", "nous": "que nous eussions relu", "vous": "que vous eussiez relu", "ils/elles": "qu'ils eussent relu" },
    "conditionnel présent": { "je": "relirais", "tu": "relirais", "il/elle": "relirait", "nous": "relirions", "vous": "reliriez", "ils/elles": "reliraient" },
    "conditionnel passé première forme": { "je": "aurais relu", "tu": "aurais relu", "il/elle": "aurait relu", "nous": "aurions relu", "vous": "auriez relu", "ils/elles": "auraient relu" },
    "conditionnel passé deuxième forme": { "je": "eusse relu", "tu": "eusses relu", "il/elle": "eût relu", "nous": "eussions relu", "vous": "eussiez relu", "ils/elles": "eussent relu" },
    "impératif présent": { "tu": "relis", "nous": "relisons", "vous": "relisez" },
    "impératif passé": { "tu": "aie relu", "nous": "ayons relu", "vous": "ayez relu" },
    "infinitif présent": "relire",
    "infinitif passé": "avoir relu",
    "participe présent": "relisant",
    "participe passé": "relu",
    "gérondif présent": "en relisant",
    "gérondif passé": "en ayant relu"
  }
};

const contredire: Verb = {
  name: "contredire",
  conjugations: {
    "indicatif présent": { "je": "contredis", "tu": "contredis", "il/elle": "contredit", "nous": "contredisons", "vous": "contredisez", "ils/elles": "contredisent" },
    "indicatif imparfait": { "je": "contredisais", "tu": "contredisais", "il/elle": "contredisait", "nous": "contredisions", "vous": "contredisiez", "ils/elles": "contredisaient" },
    "indicatif passé simple": { "je": "contredis", "tu": "contredis", "il/elle": "contredit", "nous": "contredîmes", "vous": "contredîtes", "ils/elles": "contredirent" },
    "indicatif futur simple": { "je": "contredirai", "tu": "contrediras", "il/elle": "contredira", "nous": "contredirons", "vous": "contredirez", "ils/elles": "contrediront" },
    "indicatif passé composé": { "je": "ai contredit", "tu": "as contredit", "il/elle": "a contredit", "nous": "avons contredit", "vous": "avez contredit", "ils/elles": "ont contredit" },
    "indicatif plus-que-parfait": { "je": "avais contredit", "tu": "avais contredit", "il/elle": "avait contredit", "nous": "avions contredit", "vous": "aviez contredit", "ils/elles": "avaient contredit" },
    "indicatif passé antérieur": { "je": "eus contredit", "tu": "eus contredit", "il/elle": "eut contredit", "nous": "eûmes contredit", "vous": "eûtes contredit", "ils/elles": "eurent contredit" },
    "indicatif futur antérieur": { "je": "aurai contredit", "tu": "auras contredit", "il/elle": "aura contredit", "nous": "aurons contredit", "vous": "aurez contredit", "ils/elles": "auront contredit" },
    "subjonctif présent": { "je": "que je contredise", "tu": "que tu contredises", "il/elle": "qu'il contredise", "nous": "que nous contredisions", "vous": "que vous contredisiez", "ils/elles": "qu'ils contredisent" },
    "subjonctif imparfait": { "je": "que je contredisse", "tu": "que tu contredisses", "il/elle": "qu'il contredît", "nous": "que nous contredissions", "vous": "que vous contredissiez", "ils/elles": "qu'ils contredissent" },
    "subjonctif passé": { "je": "que j'aie contredit", "tu": "que tu aies contredit", "il/elle": "qu'il ait contredit", "nous": "que nous ayons contredit", "vous": "que vous ayez contredit", "ils/elles": "qu'ils aient contredit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse contredit", "tu": "que tu eusses contredit", "il/elle": "qu'il eût contredit", "nous": "que nous eussions contredit", "vous": "que vous eussiez contredit", "ils/elles": "qu'ils eussent contredit" },
    "conditionnel présent": { "je": "contredirais", "tu": "contredirais", "il/elle": "contredirait", "nous": "contredirions", "vous": "contrediriez", "ils/elles": "contrediraient" },
    "conditionnel passé première forme": { "je": "aurais contredit", "tu": "aurais contredit", "il/elle": "aurait contredit", "nous": "aurions contredit", "vous": "auriez contredit", "ils/elles": "auraient contredit" },
    "conditionnel passé deuxième forme": { "je": "eusse contredit", "tu": "eusses contredit", "il/elle": "eût contredit", "nous": "eussions contredit", "vous": "eussiez contredit", "ils/elles": "eussent contredit" },
    "impératif présent": { "tu": "contredis", "nous": "contredisons", "vous": "contredisez" },
    "impératif passé": { "tu": "aie contredit", "nous": "ayons contredit", "vous": "ayez contredit" },
    "infinitif présent": "contredire",
    "infinitif passé": "avoir contredit",
    "participe présent": "contredisant",
    "participe passé": "contredit",
    "gérondif présent": "en contredisant",
    "gérondif passé": "en ayant contredit"
  }
};

const prédire: Verb = {
  name: "prédire",
  conjugations: {
    "indicatif présent": { "je": "prédis", "tu": "prédis", "il/elle": "prédit", "nous": "prédisons", "vous": "prédisez", "ils/elles": "prédisent" },
    "indicatif imparfait": { "je": "prédisais", "tu": "prédisais", "il/elle": "prédisait", "nous": "prédisions", "vous": "prédisiez", "ils/elles": "prédisaient" },
    "indicatif passé simple": { "je": "prédis", "tu": "prédis", "il/elle": "prédit", "nous": "prédîmes", "vous": "prédîtes", "ils/elles": "prédirent" },
    "indicatif futur simple": { "je": "prédirai", "tu": "prédiras", "il/elle": "prédira", "nous": "prédirons", "vous": "prédirez", "ils/elles": "prédiront" },
    "indicatif passé composé": { "je": "ai prédit", "tu": "as prédit", "il/elle": "a prédit", "nous": "avons prédit", "vous": "avez prédit", "ils/elles": "ont prédit" },
    "indicatif plus-que-parfait": { "je": "avais prédit", "tu": "avais prédit", "il/elle": "avait prédit", "nous": "avions prédit", "vous": "aviez prédit", "ils/elles": "avaient prédit" },
    "indicatif passé antérieur": { "je": "eus prédit", "tu": "eus prédit", "il/elle": "eut prédit", "nous": "eûmes prédit", "vous": "eûtes prédit", "ils/elles": "eurent prédit" },
    "indicatif futur antérieur": { "je": "aurai prédit", "tu": "auras prédit", "il/elle": "aura prédit", "nous": "aurons prédit", "vous": "aurez prédit", "ils/elles": "auront prédit" },
    "subjonctif présent": { "je": "que je prédise", "tu": "que tu prédises", "il/elle": "qu'il prédise", "nous": "que nous prédisions", "vous": "que vous prédisiez", "ils/elles": "qu'ils prédisent" },
    "subjonctif imparfait": { "je": "que je prédisse", "tu": "que tu prédisses", "il/elle": "qu'il prédît", "nous": "que nous prédissions", "vous": "que vous prédissiez", "ils/elles": "qu'ils prédissent" },
    "subjonctif passé": { "je": "que j'aie prédit", "tu": "que tu aies prédit", "il/elle": "qu'il ait prédit", "nous": "que nous ayons prédit", "vous": "que vous ayez prédit", "ils/elles": "qu'ils aient prédit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse prédit", "tu": "que tu eusses prédit", "il/elle": "qu'il eût prédit", "nous": "que nous eussions prédit", "vous": "que vous eussiez prédit", "ils/elles": "qu'ils eussent prédit" },
    "conditionnel présent": { "je": "prédirais", "tu": "prédirais", "il/elle": "prédirait", "nous": "prédirions", "vous": "prédiriez", "ils/elles": "prédiraient" },
    "conditionnel passé première forme": { "je": "aurais prédit", "tu": "aurais prédit", "il/elle": "aurait prédit", "nous": "aurions prédit", "vous": "auriez prédit", "ils/elles": "auraient prédit" },
    "conditionnel passé deuxième forme": { "je": "eusse prédit", "tu": "eusses prédit", "il/elle": "eût prédit", "nous": "eussions prédit", "vous": "eussiez prédit", "ils/elles": "eussent prédit" },
    "impératif présent": { "tu": "prédis", "nous": "prédisons", "vous": "prédisez" },
    "impératif passé": { "tu": "aie prédit", "nous": "ayons prédit", "vous": "ayez prédit" },
    "infinitif présent": "prédire",
    "infinitif passé": "avoir prédit",
    "participe présent": "prédisant",
    "participe passé": "prédit",
    "gérondif présent": "en prédisant",
    "gérondif passé": "en ayant prédit"
  }
};

const décrire: Verb = {
  name: "décrire",
  conjugations: {
    "indicatif présent": { "je": "décris", "tu": "décris", "il/elle": "décrit", "nous": "décrivons", "vous": "décrivez", "ils/elles": "décrivent" },
    "indicatif imparfait": { "je": "décrivais", "tu": "décrivais", "il/elle": "décrivait", "nous": "décrivions", "vous": "décriviez", "ils/elles": "décrivaient" },
    "indicatif passé simple": { "je": "décrivis", "tu": "décrivis", "il/elle": "décrivit", "nous": "décrivîmes", "vous": "décrivîtes", "ils/elles": "décrivirent" },
    "indicatif futur simple": { "je": "décrirai", "tu": "décriras", "il/elle": "décrira", "nous": "décrirons", "vous": "décrirez", "ils/elles": "décriront" },
    "indicatif passé composé": { "je": "ai décrit", "tu": "as décrit", "il/elle": "a décrit", "nous": "avons décrit", "vous": "avez décrit", "ils/elles": "ont décrit" },
    "indicatif plus-que-parfait": { "je": "avais décrit", "tu": "avais décrit", "il/elle": "avait décrit", "nous": "avions décrit", "vous": "aviez décrit", "ils/elles": "avaient décrit" },
    "indicatif passé antérieur": { "je": "eus décrit", "tu": "eus décrit", "il/elle": "eut décrit", "nous": "eûmes décrit", "vous": "eûtes décrit", "ils/elles": "eurent décrit" },
    "indicatif futur antérieur": { "je": "aurai décrit", "tu": "auras décrit", "il/elle": "aura décrit", "nous": "aurons décrit", "vous": "aurez décrit", "ils/elles": "auront décrit" },
    "subjonctif présent": { "je": "que je décrive", "tu": "que tu décrives", "il/elle": "qu'il décrive", "nous": "que nous décrivions", "vous": "que vous décriviez", "ils/elles": "qu'ils décrivent" },
    "subjonctif imparfait": { "je": "que je décrivisse", "tu": "que tu décrivisses", "il/elle": "qu'il décrivît", "nous": "que nous décrivissions", "vous": "que vous décrivissiez", "ils/elles": "qu'ils décrivissent" },
    "subjonctif passé": { "je": "que j'aie décrit", "tu": "que tu aies décrit", "il/elle": "qu'il ait décrit", "nous": "que nous ayons décrit", "vous": "que vous ayez décrit", "ils/elles": "qu'ils aient décrit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse décrit", "tu": "que tu eusses décrit", "il/elle": "qu'il eût décrit", "nous": "que nous eussions décrit", "vous": "que vous eussiez décrit", "ils/elles": "qu'ils eussent décrit" },
    "conditionnel présent": { "je": "décrirais", "tu": "décrirais", "il/elle": "décrirait", "nous": "décririons", "vous": "décririez", "ils/elles": "décriraient" },
    "conditionnel passé première forme": { "je": "aurais décrit", "tu": "aurais décrit", "il/elle": "aurait décrit", "nous": "aurions décrit", "vous": "auriez décrit", "ils/elles": "auraient décrit" },
    "conditionnel passé deuxième forme": { "je": "eusse décrit", "tu": "eusses décrit", "il/elle": "eût décrit", "nous": "eussions décrit", "vous": "eussiez décrit", "ils/elles": "eussent décrit" },
    "impératif présent": { "tu": "décris", "nous": "décrivons", "vous": "décrivez" },
    "impératif passé": { "tu": "aie décrit", "nous": "ayons décrit", "vous": "ayez décrit" },
    "infinitif présent": "décrire",
    "infinitif passé": "avoir décrit",
    "participe présent": "décrivant",
    "participe passé": "décrit",
    "gérondif présent": "en décrivant",
    "gérondif passé": "en ayant décrit"
  }
};

const inscrire: Verb = {
  name: "inscrire",
  conjugations: {
    "indicatif présent": { "j'": "inscris", "tu": "inscris", "il/elle": "inscrit", "nous": "inscrivons", "vous": "inscrivez", "ils/elles": "inscrivent" },
    "indicatif imparfait": { "j'": "inscrivais", "tu": "inscrivais", "il/elle": "inscrivait", "nous": "inscrivions", "vous": "inscriviez", "ils/elles": "inscrivaient" },
    "indicatif passé simple": { "j'": "inscrivis", "tu": "inscrivis", "il/elle": "inscrivit", "nous": "inscrivîmes", "vous": "inscrivîtes", "ils/elles": "inscrivirent" },
    "indicatif futur simple": { "j'": "inscrirai", "tu": "inscriras", "il/elle": "inscrira", "nous": "inscrirons", "vous": "inscrirez", "ils/elles": "inscriront" },
    "indicatif passé composé": { "j'": "ai inscrit", "tu": "as inscrit", "il/elle": "a inscrit", "nous": "avons inscrit", "vous": "avez inscrit", "ils/elles": "ont inscrit" },
    "indicatif plus-que-parfait": { "j'": "avais inscrit", "tu": "avais inscrit", "il/elle": "avait inscrit", "nous": "avions inscrit", "vous": "aviez inscrit", "ils/elles": "avaient inscrit" },
    "indicatif passé antérieur": { "j'": "eus inscrit", "tu": "eus inscrit", "il/elle": "eut inscrit", "nous": "eûmes inscrit", "vous": "eûtes inscrit", "ils/elles": "eurent inscrit" },
    "indicatif futur antérieur": { "j'": "aurai inscrit", "tu": "auras inscrit", "il/elle": "aura inscrit", "nous": "aurons inscrit", "vous": "aurez inscrit", "ils/elles": "auront inscrit" },
    "subjonctif présent": { "je": "que j'inscrive", "tu": "que tu inscrives", "il/elle": "qu'il inscrive", "nous": "que nous inscrivions", "vous": "que vous inscriviez", "ils/elles": "qu'ils inscrivent" },
    "subjonctif imparfait": { "je": "que j'inscrivisse", "tu": "que tu inscrivisses", "il/elle": "qu'il inscrivît", "nous": "que nous inscrivissions", "vous": "que vous inscrivissiez", "ils/elles": "qu'ils inscrivissent" },
    "subjonctif passé": { "je": "que j'aie inscrit", "tu": "que tu aies inscrit", "il/elle": "qu'il ait inscrit", "nous": "que nous ayons inscrit", "vous": "que vous ayez inscrit", "ils/elles": "qu'ils aient inscrit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse inscrit", "tu": "que tu eusses inscrit", "il/elle": "qu'il eût inscrit", "nous": "que nous eussions inscrit", "vous": "que vous eussiez inscrit", "ils/elles": "qu'ils eussent inscrit" },
    "conditionnel présent": { "j'": "inscrirais", "tu": "inscrirais", "il/elle": "inscrirait", "nous": "inscririons", "vous": "inscririez", "ils/elles": "inscriraient" },
    "conditionnel passé première forme": { "j'": "aurais inscrit", "tu": "aurais inscrit", "il/elle": "aurait inscrit", "nous": "aurions inscrit", "vous": "auriez inscrit", "ils/elles": "auraient inscrit" },
    "conditionnel passé deuxième forme": { "j'": "eusse inscrit", "tu": "eusses inscrit", "il/elle": "eût inscrit", "nous": "eussions inscrit", "vous": "eussiez inscrit", "ils/elles": "eussent inscrit" },
    "impératif présent": { "tu": "inscris", "nous": "inscrivons", "vous": "inscrivez" },
    "impératif passé": { "tu": "aie inscrit", "nous": "ayons inscrit", "vous": "ayez inscrit" },
    "infinitif présent": "inscrire",
    "infinitif passé": "avoir inscrit",
    "participe présent": "inscrivant",
    "participe passé": "inscrit",
    "gérondif présent": "en inscrivant",
    "gérondif passé": "en ayant inscrit"
  }
};

const défaire: Verb = {
  name: "défaire",
  conjugations: {
    "indicatif présent": { "je": "défais", "tu": "défais", "il/elle": "défait", "nous": "défaisons", "vous": "défaites", "ils/elles": "défont" },
    "indicatif imparfait": { "je": "défaisais", "tu": "défaisais", "il/elle": "défaisait", "nous": "défaisions", "vous": "défaisiez", "ils/elles": "défaisaient" },
    "indicatif passé simple": { "je": "défis", "tu": "défis", "il/elle": "défit", "nous": "défîmes", "vous": "défîtes", "ils/elles": "défirent" },
    "indicatif futur simple": { "je": "déferai", "tu": "déferas", "il/elle": "défera", "nous": "déferons", "vous": "déferez", "ils/elles": "déferont" },
    "indicatif passé composé": { "je": "ai défait", "tu": "as défait", "il/elle": "a défait", "nous": "avons défait", "vous": "avez défait", "ils/elles": "ont défait" },
    "indicatif plus-que-parfait": { "je": "avais défait", "tu": "avais défait", "il/elle": "avait défait", "nous": "avions défait", "vous": "aviez défait", "ils/elles": "avaient défait" },
    "indicatif passé antérieur": { "je": "eus défait", "tu": "eus défait", "il/elle": "eut défait", "nous": "eûmes défait", "vous": "eûtes défait", "ils/elles": "eurent défait" },
    "indicatif futur antérieur": { "je": "aurai défait", "tu": "auras défait", "il/elle": "aura défait", "nous": "aurons défait", "vous": "aurez défait", "ils/elles": "auront défait" },
    "subjonctif présent": { "je": "que je défasse", "tu": "que tu défasses", "il/elle": "qu'il défasse", "nous": "que nous défassions", "vous": "que vous défassiez", "ils/elles": "qu'ils défassent" },
    "subjonctif imparfait": { "je": "que je défisse", "tu": "que tu défisses", "il/elle": "qu'il défît", "nous": "que nous défissions", "vous": "que vous défissiez", "ils/elles": "qu'ils défissent" },
    "subjonctif passé": { "je": "que j'aie défait", "tu": "que tu aies défait", "il/elle": "qu'il ait défait", "nous": "que nous ayons défait", "vous": "que vous ayez défait", "ils/elles": "qu'ils aient défait" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse défait", "tu": "que tu eusses défait", "il/elle": "qu'il eût défait", "nous": "que nous eussions défait", "vous": "que vous eussiez défait", "ils/elles": "qu'ils eussent défait" },
    "conditionnel présent": { "je": "déferais", "tu": "déferais", "il/elle": "déferait", "nous": "déferions", "vous": "déferez", "ils/elles": "déferaient" },
    "conditionnel passé première forme": { "je": "aurais défait", "tu": "aurais défait", "il/elle": "aurait défait", "nous": "aurions défait", "vous": "auriez défait", "ils/elles": "auraient défait" },
    "conditionnel passé deuxième forme": { "je": "eusse défait", "tu": "eusses défait", "il/elle": "eût défait", "nous": "eussions défait", "vous": "eussiez défait", "ils/elles": "eussent défait" },
    "impératif présent": { "tu": "défais", "nous": "défaisons", "vous": "défaites" },
    "impératif passé": { "tu": "aie défait", "nous": "ayons défait", "vous": "ayez défait" },
    "infinitif présent": "défaire",
    "infinitif passé": "avoir défait",
    "participe présent": "défaisant",
    "participe passé": "défait",
    "gérondif présent": "en défaisant",
    "gérondif passé": "en ayant défait"
  }
};

const satisfaire: Verb = {
  name: "satisfaire",
  conjugations: {
    "indicatif présent": { "je": "satisfais", "tu": "satisfais", "il/elle": "satisfait", "nous": "satisfaisons", "vous": "satisfaites", "ils/elles": "satisfont" },
    "indicatif imparfait": { "je": "satisfaisais", "tu": "satisfaisais", "il/elle": "satisfaisait", "nous": "satisfaisions", "vous": "satisfaisiez", "ils/elles": "satisfaisaient" },
    "indicatif passé simple": { "je": "satisfis", "tu": "satisfis", "il/elle": "satisfit", "nous": "satisfîmes", "vous": "satisfîtes", "ils/elles": "satisfirent" },
    "indicatif futur simple": { "je": "satisferai", "tu": "satisferas", "il/elle": "satisfera", "nous": "satisferons", "vous": "satisferez", "ils/elles": "satisferont" },
    "indicatif passé composé": { "je": "ai satisfait", "tu": "as satisfait", "il/elle": "a satisfait", "nous": "avons satisfait", "vous": "avez satisfait", "ils/elles": "ont satisfait" },
    "indicatif plus-que-parfait": { "je": "avais satisfait", "tu": "avais satisfait", "il/elle": "avait satisfait", "nous": "avions satisfait", "vous": "aviez satisfait", "ils/elles": "avaient satisfait" },
    "indicatif passé antérieur": { "je": "eus satisfait", "tu": "eus satisfait", "il/elle": "eut satisfait", "nous": "eûmes satisfait", "vous": "eûtes satisfait", "ils/elles": "eurent satisfait" },
    "indicatif futur antérieur": { "je": "aurai satisfait", "tu": "auras satisfait", "il/elle": "aura satisfait", "nous": "aurons satisfait", "vous": "aurez satisfait", "ils/elles": "auront satisfait" },
    "subjonctif présent": { "je": "que je satisfasse", "tu": "que tu satisfasses", "il/elle": "qu'il satisfasse", "nous": "que nous satisfassions", "vous": "que vous satisfassiez", "ils/elles": "qu'ils satisfassent" },
    "subjonctif imparfait": { "je": "que je satisfisse", "tu": "que tu satisfisses", "il/elle": "qu'il satisfît", "nous": "que nous satisfissions", "vous": "que vous satisfissiez", "ils/elles": "qu'ils satisfissent" },
    "subjonctif passé": { "je": "que j'aie satisfait", "tu": "que tu aies satisfait", "il/elle": "qu'il ait satisfait", "nous": "que nous ayons satisfait", "vous": "que vous ayez satisfait", "ils/elles": "qu'ils aient satisfait" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse satisfait", "tu": "que tu eusses satisfait", "il/elle": "qu'il eût satisfait", "nous": "que nous eussions satisfait", "vous": "que vous eussiez satisfait", "ils/elles": "qu'ils eussent satisfait" },
    "conditionnel présent": { "je": "satisferais", "tu": "satisferais", "il/elle": "satisferait", "nous": "satisferions", "vous": "satisferez", "ils/elles": "satisferaient" },
    "conditionnel passé première forme": { "je": "aurais satisfait", "tu": "aurais satisfait", "il/elle": "aurait satisfait", "nous": "aurions satisfait", "vous": "auriez satisfait", "ils/elles": "auraient satisfait" },
    "conditionnel passé deuxième forme": { "je": "eusse satisfait", "tu": "eusses satisfait", "il/elle": "eût satisfait", "nous": "eussions satisfait", "vous": "eussiez satisfait", "ils/elles": "eussent satisfait" },
    "impératif présent": { "tu": "satisfais", "nous": "satisfaisons", "vous": "satisfaites" },
    "impératif passé": { "tu": "aie satisfait", "nous": "ayons satisfait", "vous": "ayez satisfait" },
    "infinitif présent": "satisfaire",
    "infinitif passé": "avoir satisfait",
    "participe présent": "satisfaisant",
    "participe passé": "satisfait",
    "gérondif présent": "en satisfaisant",
    "gérondif passé": "en ayant satisfait"
  }
};

const cuire: Verb = {
  name: "cuire",
  conjugations: {
    "indicatif présent": { "je": "cuis", "tu": "cuis", "il/elle": "cuit", "nous": "cuisons", "vous": "cuisez", "ils/elles": "cuisent" },
    "indicatif imparfait": { "je": "cuisais", "tu": "cuisais", "il/elle": "cuisait", "nous": "cuisions", "vous": "cuisiez", "ils/elles": "cuisaient" },
    "indicatif passé simple": { "je": "cuisis", "tu": "cuisis", "il/elle": "cuisit", "nous": "cuisîmes", "vous": "cuisîtes", "ils/elles": "cuisirent" },
    "indicatif futur simple": { "je": "cuirai", "tu": "cuiras", "il/elle": "cuira", "nous": "cuirons", "vous": "cuirez", "ils/elles": "cuiront" },
    "indicatif passé composé": { "je": "ai cuit", "tu": "as cuit", "il/elle": "a cuit", "nous": "avons cuit", "vous": "avez cuit", "ils/elles": "ont cuit" },
    "indicatif plus-que-parfait": { "je": "avais cuit", "tu": "avais cuit", "il/elle": "avait cuit", "nous": "avions cuit", "vous": "aviez cuit", "ils/elles": "avaient cuit" },
    "indicatif passé antérieur": { "je": "eus cuit", "tu": "eus cuit", "il/elle": "eut cuit", "nous": "eûmes cuit", "vous": "eûtes cuit", "ils/elles": "eurent cuit" },
    "indicatif futur antérieur": { "je": "aurai cuit", "tu": "auras cuit", "il/elle": "aura cuit", "nous": "aurons cuit", "vous": "aurez cuit", "ils/elles": "auront cuit" },
    "subjonctif présent": { "je": "que je cuise", "tu": "que tu cuises", "il/elle": "qu'il cuise", "nous": "que nous cuisions", "vous": "que vous cuisiez", "ils/elles": "qu'ils cuisent" },
    "subjonctif imparfait": { "je": "que je cuisisse", "tu": "que tu cuisisses", "il/elle": "qu'il cuisît", "nous": "que nous cuisissions", "vous": "que vous cuisissiez", "ils/elles": "qu'ils cuisissent" },
    "subjonctif passé": { "je": "que j'aie cuit", "tu": "que tu aies cuit", "il/elle": "qu'il ait cuit", "nous": "que nous ayons cuit", "vous": "que vous ayez cuit", "ils/elles": "qu'ils aient cuit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse cuit", "tu": "que tu eusses cuit", "il/elle": "qu'il eût cuit", "nous": "que nous eussions cuit", "vous": "que vous eussiez cuit", "ils/elles": "qu'ils eussent cuit" },
    "conditionnel présent": { "je": "cuirais", "tu": "cuirais", "il/elle": "cuirait", "nous": "cuirions", "vous": "cuiriez", "ils/elles": "cuiraient" },
    "conditionnel passé première forme": { "je": "aurais cuit", "tu": "aurais cuit", "il/elle": "aurait cuit", "nous": "aurions cuit", "vous": "auriez cuit", "ils/elles": "auraient cuit" },
    "conditionnel passé deuxième forme": { "je": "eusse cuit", "tu": "eusses cuit", "il/elle": "eût cuit", "nous": "eussions cuit", "vous": "eussiez cuit", "ils/elles": "eussent cuit" },
    "impératif présent": { "tu": "cuis", "nous": "cuisons", "vous": "cuisez" },
    "impératif passé": { "tu": "aie cuit", "nous": "ayons cuit", "vous": "ayez cuit" },
    "infinitif présent": "cuire",
    "infinitif passé": "avoir cuit",
    "participe présent": "cuisant",
    "participe passé": "cuit",
    "gérondif présent": "en cuisant",
    "gérondif passé": "en ayant cuit"
  }
};

export default {
  commettre,
  entreprendre,
  corrompre,
  relire,
  contredire,
  prédire,
  décrire,
  inscrire,
  défaire,
  satisfaire,
  cuire
};