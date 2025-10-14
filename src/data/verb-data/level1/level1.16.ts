import { Verb } from '../../verbs';

const sasseoir: Verb = {
  name: "s'asseoir",
  conjugations: {
    "indicatif présent": { "je": "m'assieds", "tu": "t'assieds", "il/elle": "s'assied", "nous": "nous asseyons", "vous": "vous asseyez", "ils/elles": "s'asseyent" },
    "indicatif imparfait": { "je": "m'asseyais", "tu": "t'asseyais", "il/elle": "s'asseyait", "nous": "nous asseyions", "vous": "vous asseyiez", "ils/elles": "s'asseyaient" },
    "indicatif passé simple": { "je": "m'assis", "tu": "t'assis", "il/elle": "s'assit", "nous": "nous assîmes", "vous": "vous assîtes", "ils/elles": "s'assirent" },
    "indicatif futur simple": { "je": "m'assiérai", "tu": "t'assiéras", "il/elle": "s'assiéra", "nous": "nous assiérons", "vous": "vous assiérez", "ils/elles": "s'assiéront" },
    "indicatif passé composé": { "je": "me suis assis(e)", "tu": "t'es assis(e)", "il/elle": "s'est assis(e)", "nous": "nous sommes assis(es)", "vous": "vous êtes assis(es)", "ils/elles": "se sont assis(es)" },
    "indicatif plus-que-parfait": { "je": "m'étais assis(e)", "tu": "t'étais assis(e)", "il/elle": "s'était assis(e)", "nous": "nous étions assis(es)", "vous": "vous étiez assis(es)", "ils/elles": "s'étaient assis(es)" },
    "indicatif passé antérieur": { "je": "me fus assis(e)", "tu": "te fus assis(e)", "il/elle": "se fut assis(e)", "nous": "nous fûmes assis(es)", "vous": "vous fûtes assis(es)", "ils/elles": "se furent assis(es)" },
    "indicatif futur antérieur": { "je": "me serai assis(e)", "tu": "te seras assis(e)", "il/elle": "se sera assis(e)", "nous": "nous serons assis(es)", "vous": "vous serez assis(es)", "ils/elles": "se seront assis(es)" },
    "subjonctif présent": { "je": "que je m'asseye", "tu": "que tu t'asseyes", "il/elle": "qu'il s'asseye", "nous": "que nous nous asseyions", "vous": "que vous vous asseyiez", "ils/elles": "qu'ils s'asseyent" },
    "subjonctif imparfait": { "je": "que je m'assisse", "tu": "que tu t'assisses", "il/elle": "qu'il s'assît", "nous": "que nous nous assissions", "vous": "que vous vous assissiez", "ils/elles": "qu'ils s'assissent" },
    "subjonctif passé": { "je": "que je me sois assis(e)", "tu": "que tu te sois assis(e)", "il/elle": "qu'il se soit assis(e)", "nous": "que nous nous soyons assis(es)", "vous": "que vous vous soyez assis(es)", "ils/elles": "qu'ils se soient assis(es)" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse assis(e)", "tu": "que tu te fusses assis(e)", "il/elle": "qu'il se fût assis(e)", "nous": "que nous nous fussions assis(es)", "vous": "que vous vous fussiez assis(es)", "ils/elles": "qu'ils se fussent assis(es)" },
    "conditionnel présent": { "je": "m'assiérais", "tu": "t'assiérais", "il/elle": "s'assiérait", "nous": "nous assiérions", "vous": "vous assiériez", "ils/elles": "s'assiéraient" },
    "conditionnel passé première forme": { "je": "me serais assis(e)", "tu": "te serais assis(e)", "il/elle": "se serait assis(e)", "nous": "nous serions assis(es)", "vous": "vous seriez assis(es)", "ils/elles": "se seraient assis(es)" },
    "conditionnel passé deuxième forme": { "je": "me fusse assis(e)", "tu": "te fusses assis(e)", "il/elle": "se fût assis(e)", "nous": "nous fussions assis(es)", "vous": "vous fussiez assis(es)", "ils/elles": "se fussent assis(es)" },
    "impératif présent": { "tu": "assieds-toi", "nous": "asseyons-nous", "vous": "asseyez-vous" },
    "impératif passé": { "tu": "sois-toi assis(e)", "nous": "soyons-nous assis(es)", "vous": "soyez-vous assis(es)" },
    "infinitif présent": "s'asseoir",
    "infinitif passé": "s'être assis(e)",
    "participe présent": "s'asseyant",
    "participe passé": "assis",
    "gérondif présent": "en s'asseyant",
    "gérondif passé": "en s'étant assis(e)"
  }
};

const prevoir: Verb = {
  name: "prévoir",
  conjugations: {
    "indicatif présent": { "je": "prévois", "tu": "prévois", "il/elle": "prévoit", "nous": "prévoyons", "vous": "prévoyez", "ils/elles": "prévoient" },
    "indicatif imparfait": { "je": "prévoyais", "tu": "prévoyais", "il/elle": "prévoyait", "nous": "prévoyions", "vous": "prévoyiez", "ils/elles": "prévoyaient" },
    "indicatif passé simple": { "je": "prévis", "tu": "prévis", "il/elle": "prévit", "nous": "prévîmes", "vous": "prévîtes", "ils/elles": "prévirent" },
    "indicatif futur simple": { "je": "prévoirai", "tu": "prévoiras", "il/elle": "prévoira", "nous": "prévoirons", "vous": "prévoirez", "ils/elles": "prévoiront" },
    "indicatif passé composé": { "je": "ai prévu", "tu": "as prévu", "il/elle": "a prévu", "nous": "avons prévu", "vous": "avez prévu", "ils/elles": "ont prévu" },
    "indicatif plus-que-parfait": { "je": "avais prévu", "tu": "avais prévu", "il/elle": "avait prévu", "nous": "avions prévu", "vous": "aviez prévu", "ils/elles": "avaient prévu" },
    "indicatif passé antérieur": { "je": "eus prévu", "tu": "eus prévu", "il/elle": "eut prévu", "nous": "eûmes prévu", "vous": "eûtes prévu", "ils/elles": "eurent prévu" },
    "indicatif futur antérieur": { "je": "aurai prévu", "tu": "auras prévu", "il/elle": "aura prévu", "nous": "aurons prévu", "vous": "aurez prévu", "ils/elles": "auront prévu" },
    "subjonctif présent": { "je": "que je prévoie", "tu": "que tu prévoies", "il/elle": "qu'il prévoie", "nous": "que nous prévoyions", "vous": "que vous prévoyiez", "ils/elles": "qu'ils prévoient" },
    "subjonctif imparfait": { "je": "que je prévisse", "tu": "que tu prévisses", "il/elle": "qu'il prévît", "nous": "que nous prévissions", "vous": "que vous prévissiez", "ils/elles": "qu'ils prévissent" },
    "subjonctif passé": { "je": "que j'aie prévu", "tu": "que tu aies prévu", "il/elle": "qu'il ait prévu", "nous": "que nous ayons prévu", "vous": "que vous ayez prévu", "ils/elles": "qu'ils aient prévu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse prévu", "tu": "que tu eusses prévu", "il/elle": "qu'il eût prévu", "nous": "que nous eussions prévu", "vous": "que vous eussiez prévu", "ils/elles": "qu'ils eussent prévu" },
    "conditionnel présent": { "je": "prévoirais", "tu": "prévoirais", "il/elle": "prévoirait", "nous": "prévoirions", "vous": "prévoiriez", "ils/elles": "prévoiraient" },
    "conditionnel passé première forme": { "je": "aurais prévu", "tu": "aurais prévu", "il/elle": "aurait prévu", "nous": "aurions prévu", "vous": "auriez prévu", "ils/elles": "auraient prévu" },
    "conditionnel passé deuxième forme": { "je": "eusse prévu", "tu": "eusses prévu", "il/elle": "eût prévu", "nous": "eussions prévu", "vous": "eussiez prévu", "ils/elles": "eussent prévu" },
    "impératif présent": { "tu": "prévois", "nous": "prévoyons", "vous": "prévoyez" },
    "impératif passé": { "tu": "aie prévu", "nous": "ayons prévu", "vous": "ayez prévu" },
    "infinitif présent": "prévoir",
    "infinitif passé": "avoir prévu",
    "participe présent": "prévoyant",
    "participe passé": "prévu",
    "gérondif présent": "en prévoyant",
    "gérondif passé": "en ayant prévu"
  }
};

const nettoyer: Verb = {
  name: "nettoyer",
  conjugations: {
    "indicatif présent": { "je": "nettoie", "tu": "nettoies", "il/elle": "nettoie", "nous": "nettoyons", "vous": "nettoyez", "ils/elles": "nettoient" },
    "indicatif imparfait": { "je": "nettoyais", "tu": "nettoyais", "il/elle": "nettoyait", "nous": "nettoyions", "vous": "nettoyiez", "ils/elles": "nettoyaient" },
    "indicatif passé simple": { "je": "nettoyai", "tu": "nettoyas", "il/elle": "nettoya", "nous": "nettoyâmes", "vous": "nettoyâtes", "ils/elles": "nettoyèrent" },
    "indicatif futur simple": { "je": "nettoierai", "tu": "nettoieras", "il/elle": "nettoiera", "nous": "nettoierons", "vous": "nettoierez", "ils/elles": "nettoieront" },
    "indicatif passé composé": { "je": "ai nettoyé", "tu": "as nettoyé", "il/elle": "a nettoyé", "nous": "avons nettoyé", "vous": "avez nettoyé", "ils/elles": "ont nettoyé" },
    "indicatif plus-que-parfait": { "je": "avais nettoyé", "tu": "avais nettoyé", "il/elle": "avait nettoyé", "nous": "avions nettoyé", "vous": "aviez nettoyé", "ils/elles": "avaient nettoyé" },
    "indicatif passé antérieur": { "je": "eus nettoyé", "tu": "eus nettoyé", "il/elle": "eut nettoyé", "nous": "eûmes nettoyé", "vous": "eûtes nettoyé", "ils/elles": "eurent nettoyé" },
    "indicatif futur antérieur": { "je": "aurai nettoyé", "tu": "auras nettoyé", "il/elle": "aura nettoyé", "nous": "aurons nettoyé", "vous": "aurez nettoyé", "ils/elles": "auront nettoyé" },
    "subjonctif présent": { "je": "que je nettoie", "tu": "que tu nettoies", "il/elle": "qu'il nettoie", "nous": "que nous nettoyions", "vous": "que vous nettoyiez", "ils/elles": "qu'ils nettoient" },
    "subjonctif imparfait": { "je": "que je nettoyasse", "tu": "que tu nettoyasses", "il/elle": "qu'il nettoyât", "nous": "que nous nettoyassions", "vous": "que vous nettoyassiez", "ils/elles": "qu'ils nettoyassent" },
    "subjonctif passé": { "je": "que j'aie nettoyé", "tu": "que tu aies nettoyé", "il/elle": "qu'il ait nettoyé", "nous": "que nous ayons nettoyé", "vous": "que vous ayez nettoyé", "ils/elles": "qu'ils aient nettoyé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse nettoyé", "tu": "que tu eusses nettoyé", "il/elle": "qu'il eût nettoyé", "nous": "que nous eussions nettoyé", "vous": "que vous eussiez nettoyé", "ils/elles": "qu'ils eussent nettoyé" },
    "conditionnel présent": { "je": "nettoierais", "tu": "nettoierais", "il/elle": "nettoierait", "nous": "nettoierions", "vous": "nettoieriez", "ils/elles": "nettoieraient" },
    "conditionnel passé première forme": { "je": "aurais nettoyé", "tu": "aurais nettoyé", "il/elle": "aurait nettoyé", "nous": "aurions nettoyé", "vous": "auriez nettoyé", "ils/elles": "auraient nettoyé" },
    "conditionnel passé deuxième forme": { "je": "eusse nettoyé", "tu": "eusses nettoyé", "il/elle": "eût nettoyé", "nous": "eussions nettoyé", "vous": "eussiez nettoyé", "ils/elles": "eussent nettoyé" },
    "impératif présent": { "tu": "nettoie", "nous": "nettoyons", "vous": "nettoyez" },
    "impératif passé": { "tu": "aie nettoyé", "nous": "ayons nettoyé", "vous": "ayez nettoyé" },
    "infinitif présent": "nettoyer",
    "infinitif passé": "avoir nettoyé",
    "participe présent": "nettoyant",
    "participe passé": "nettoyé",
    "gérondif présent": "en nettoyant",
    "gérondif passé": "en ayant nettoyé"
  }
};

const jeter: Verb = {
  name: "jeter",
  conjugations: {
    "indicatif présent": { "je": "jette", "tu": "jettes", "il/elle": "jette", "nous": "jetons", "vous": "jetez", "ils/elles": "jettent" },
    "indicatif imparfait": { "je": "jetais", "tu": "jetais", "il/elle": "jetait", "nous": "jetions", "vous": "jetiez", "ils/elles": "jetaient" },
    "indicatif passé simple": { "je": "jetai", "tu": "jetas", "il/elle": "jeta", "nous": "jetâmes", "vous": "jetâtes", "ils/elles": "jetèrent" },
    "indicatif futur simple": { "je": "jetterai", "tu": "jetteras", "il/elle": "jettera", "nous": "jetterons", "vous": "jetterez", "ils/elles": "jetteront" },
    "indicatif passé composé": { "je": "ai jeté", "tu": "as jeté", "il/elle": "a jeté", "nous": "avons jeté", "vous": "avez jeté", "ils/elles": "ont jeté" },
    "indicatif plus-que-parfait": { "je": "avais jeté", "tu": "avais jeté", "il/elle": "avait jeté", "nous": "avions jeté", "vous": "aviez jeté", "ils/elles": "avaient jeté" },
    "indicatif passé antérieur": { "je": "eus jeté", "tu": "eus jeté", "il/elle": "eut jeté", "nous": "eûmes jeté", "vous": "eûtes jeté", "ils/elles": "eurent jeté" },
    "indicatif futur antérieur": { "je": "aurai jeté", "tu": "auras jeté", "il/elle": "aura jeté", "nous": "aurons jeté", "vous": "aurez jeté", "ils/elles": "auront jeté" },
    "subjonctif présent": { "je": "que je jette", "tu": "que tu jettes", "il/elle": "qu'il jette", "nous": "que nous jetions", "vous": "que vous jetiez", "ils/elles": "qu'ils jettent" },
    "subjonctif imparfait": { "je": "que je jetasse", "tu": "que tu jetasses", "il/elle": "qu'il jetât", "nous": "que nous jetassions", "vous": "que vous jetassiez", "ils/elles": "qu'ils jetassent" },
    "subjonctif passé": { "je": "que j'aie jeté", "tu": "que tu aies jeté", "il/elle": "qu'il ait jeté", "nous": "que nous ayons jeté", "vous": "que vous ayez jeté", "ils/elles": "qu'ils aient jeté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse jeté", "tu": "que tu eusses jeté", "il/elle": "qu'il eût jeté", "nous": "que nous eussions jeté", "vous": "que vous eussiez jeté", "ils/elles": "qu'ils eussent jeté" },
    "conditionnel présent": { "je": "jetterais", "tu": "jetterais", "il/elle": "jetterait", "nous": "jetterions", "vous": "jetteriez", "ils/elles": "jetteraient" },
    "conditionnel passé première forme": { "je": "aurais jeté", "tu": "aurais jeté", "il/elle": "aurait jeté", "nous": "aurions jeté", "vous": "auriez jeté", "ils/elles": "auraient jeté" },
    "conditionnel passé deuxième forme": { "je": "eusse jeté", "tu": "eusses jeté", "il/elle": "eût jeté", "nous": "eussions jeté", "vous": "eussiez jeté", "ils/elles": "eussent jeté" },
    "impératif présent": { "tu": "jette", "nous": "jetons", "vous": "jetez" },
    "impératif passé": { "tu": "aie jeté", "nous": "ayons jeté", "vous": "ayez jeté" },
    "infinitif présent": "jeter",
    "infinitif passé": "avoir jeté",
    "participe présent": "jetant",
    "participe passé": "jeté",
    "gérondif présent": "en jetant",
    "gérondif passé": "en ayant jeté"
  }
};

const lever: Verb = {
  name: "lever",
  conjugations: {
    "indicatif présent": { "je": "lève", "tu": "lèves", "il/elle": "lève", "nous": "levons", "vous": "levez", "ils/elles": "lèvent" },
    "indicatif imparfait": { "je": "levais", "tu": "levais", "il/elle": "levait", "nous": "levions", "vous": "leviez", "ils/elles": "levaient" },
    "indicatif passé simple": { "je": "levai", "tu": "levas", "il/elle": "leva", "nous": "levâmes", "vous": "levâtes", "ils/elles": "levèrent" },
    "indicatif futur simple": { "je": "lèverai", "tu": "lèveras", "il/elle": "lèvera", "nous": "lèverons", "vous": "lèverez", "ils/elles": "lèveront" },
    "indicatif passé composé": { "je": "ai levé", "tu": "as levé", "il/elle": "a levé", "nous": "avons levé", "vous": "avez levé", "ils/elles": "ont levé" },
    "indicatif plus-que-parfait": { "je": "avais levé", "tu": "avais levé", "il/elle": "avait levé", "nous": "avions levé", "vous": "aviez levé", "ils/elles": "avaient levé" },
    "indicatif passé antérieur": { "je": "eus levé", "tu": "eus levé", "il/elle": "eut levé", "nous": "eûmes levé", "vous": "eûtes levé", "ils/elles": "eurent levé" },
    "indicatif futur antérieur": { "je": "aurai levé", "tu": "auras levé", "il/elle": "aura levé", "nous": "aurons levé", "vous": "aurez levé", "ils/elles": "auront levé" },
    "subjonctif présent": { "je": "que je lève", "tu": "que tu lèves", "il/elle": "qu'il lève", "nous": "que nous levions", "vous": "que vous leviez", "ils/elles": "qu'ils lèvent" },
    "subjonctif imparfait": { "je": "que je levasse", "tu": "que tu levasses", "il/elle": "qu'il levât", "nous": "que nous levassions", "vous": "que vous levassiez", "ils/elles": "qu'ils levassent" },
    "subjonctif passé": { "je": "que j'aie levé", "tu": "que tu aies levé", "il/elle": "qu'il ait levé", "nous": "que nous ayons levé", "vous": "que vous ayez levé", "ils/elles": "qu'ils aient levé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse levé", "tu": "que tu eusses levé", "il/elle": "qu'il eût levé", "nous": "que nous eussions levé", "vous": "que vous eussiez levé", "ils/elles": "qu'ils eussent levé" },
    "conditionnel présent": { "je": "lèverais", "tu": "lèverais", "il/elle": "lèverait", "nous": "lèverions", "vous": "lèveriez", "ils/elles": "lèveraient" },
    "conditionnel passé première forme": { "je": "aurais levé", "tu": "aurais levé", "il/elle": "aurait levé", "nous": "aurions levé", "vous": "auriez levé", "ils/elles": "auraient levé" },
    "conditionnel passé deuxième forme": { "je": "eusse levé", "tu": "eusses levé", "il/elle": "eût levé", "nous": "eussions levé", "vous": "eussiez levé", "ils/elles": "eussent levé" },
    "impératif présent": { "tu": "lève", "nous": "levons", "vous": "levez" },
    "impératif passé": { "tu": "aie levé", "nous": "ayons levé", "vous": "ayez levé" },
    "infinitif présent": "lever",
    "infinitif passé": "avoir levé",
    "participe présent": "levant",
    "participe passé": "levé",
    "gérondif présent": "en levant",
    "gérondif passé": "en ayant levé"
  }
};

const preferer: Verb = {
  name: "préférer",
  conjugations: {
    "indicatif présent": { "je": "préfère", "tu": "préfères", "il/elle": "préfère", "nous": "préférons", "vous": "préférez", "ils/elles": "préfèrent" },
    "indicatif imparfait": { "je": "préférais", "tu": "préférais", "il/elle": "préférait", "nous": "préférions", "vous": "préfériez", "ils/elles": "préféraient" },
    "indicatif passé simple": { "je": "préférai", "tu": "préféras", "il/elle": "préféra", "nous": "préférâmes", "vous": "préférâtes", "ils/elles": "préférèrent" },
    "indicatif futur simple": { "je": "préférerai", "tu": "préféreras", "il/elle": "préférera", "nous": "préférerons", "vous": "préférerez", "ils/elles": "préféreront" },
    "indicatif passé composé": { "je": "ai préféré", "tu": "as préféré", "il/elle": "a préféré", "nous": "avons préféré", "vous": "avez préféré", "ils/elles": "ont préféré" },
    "indicatif plus-que-parfait": { "je": "avais préféré", "tu": "avais préféré", "il/elle": "avait préféré", "nous": "avions préféré", "vous": "aviez préféré", "ils/elles": "avaient préféré" },
    "indicatif passé antérieur": { "je": "eus préféré", "tu": "eus préféré", "il/elle": "eut préféré", "nous": "eûmes préféré", "vous": "eûtes préféré", "ils/elles": "eurent préféré" },
    "indicatif futur antérieur": { "je": "aurai préféré", "tu": "auras préféré", "il/elle": "aura préféré", "nous": "aurons préféré", "vous": "aurez préféré", "ils/elles": "auront préféré" },
    "subjonctif présent": { "je": "que je préfère", "tu": "que tu préfères", "il/elle": "qu'il préfère", "nous": "que nous préférions", "vous": "que vous préfériez", "ils/elles": "qu'ils préfèrent" },
    "subjonctif imparfait": { "je": "que je préférasse", "tu": "que tu préférasses", "il/elle": "qu'il préférât", "nous": "que nous préférassions", "vous": "que vous préférassiez", "ils/elles": "qu'ils préférassent" },
    "subjonctif passé": { "je": "que j'aie préféré", "tu": "que tu aies préféré", "il/elle": "qu'il ait préféré", "nous": "que nous ayons préféré", "vous": "que vous ayez préféré", "ils/elles": "qu'ils aient préféré" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse préféré", "tu": "que tu eusses préféré", "il/elle": "qu'il eût préféré", "nous": "que nous eussions préféré", "vous": "que vous eussiez préféré", "ils/elles": "qu'ils eussent préféré" },
    "conditionnel présent": { "je": "préférerais", "tu": "préférerais", "il/elle": "préférerait", "nous": "préférerions", "vous": "préféreriez", "ils/elles": "préféreraient" },
    "conditionnel passé première forme": { "je": "aurais préféré", "tu": "aurais préféré", "il/elle": "aurait préféré", "nous": "aurions préféré", "vous": "auriez préféré", "ils/elles": "auraient préféré" },
    "conditionnel passé deuxième forme": { "je": "eusse préféré", "tu": "eusses préféré", "il/elle": "eût préféré", "nous": "eussions préféré", "vous": "eussiez préféré", "ils/elles": "eussent préféré" },
    "impératif présent": { "tu": "préfère", "nous": "préférons", "vous": "préférez" },
    "impératif passé": { "tu": "aie préféré", "nous": "ayons préféré", "vous": "ayez préféré" },
    "infinitif présent": "préférer",
    "infinitif passé": "avoir préféré",
    "participe présent": "préférant",
    "participe passé": "préféré",
    "gérondif présent": "en préférant",
    "gérondif passé": "en ayant préféré"
  }
};

const repeter: Verb = {
  name: "répéter",
  conjugations: {
    "indicatif présent": { "je": "répète", "tu": "répètes", "il/elle": "répète", "nous": "répétons", "vous": "répétez", "ils/elles": "répètent" },
    "indicatif imparfait": { "je": "répétais", "tu": "répétais", "il/elle": "répétait", "nous": "répétions", "vous": "répétiez", "ils/elles": "répétaient" },
    "indicatif passé simple": { "je": "répétai", "tu": "répétas", "il/elle": "répéta", "nous": "répétâmes", "vous": "répétâtes", "ils/elles": "répétèrent" },
    "indicatif futur simple": { "je": "répéterai", "tu": "répéteras", "il/elle": "répétera", "nous": "répéterons", "vous": "répéterez", "ils/elles": "répéteront" },
    "indicatif passé composé": { "je": "ai répété", "tu": "as répété", "il/elle": "a répété", "nous": "avons répété", "vous": "avez répété", "ils/elles": "ont répété" },
    "indicatif plus-que-parfait": { "je": "avais répété", "tu": "avais répété", "il/elle": "avait répété", "nous": "avions répété", "vous": "aviez répété", "ils/elles": "avaient répété" },
    "indicatif passé antérieur": { "je": "eus répété", "tu": "eus répété", "il/elle": "eut répété", "nous": "eûmes répété", "vous": "eûtes répété", "ils/elles": "eurent répété" },
    "indicatif futur antérieur": { "je": "aurai répété", "tu": "auras répété", "il/elle": "aura répété", "nous": "aurons répété", "vous": "aurez répété", "ils/elles": "auront répété" },
    "subjonctif présent": { "je": "que je répète", "tu": "que tu répètes", "il/elle": "qu'il répète", "nous": "que nous répétions", "vous": "que vous répétiez", "ils/elles": "qu'ils répètent" },
    "subjonctif imparfait": { "je": "que je répétasse", "tu": "que tu répétasses", "il/elle": "qu'il répétât", "nous": "que nous répétassions", "vous": "que vous répétassiez", "ils/elles": "qu'ils répétassent" },
    "subjonctif passé": { "je": "que j'aie répété", "tu": "que tu aies répété", "il/elle": "qu'il ait répété", "nous": "que nous ayons répété", "vous": "que vous ayez répété", "ils/elles": "qu'ils aient répété" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse répété", "tu": "que tu eusses répété", "il/elle": "qu'il eût répété", "nous": "que nous eussions répété", "vous": "que vous eussiez répété", "ils/elles": "qu'ils eussent répété" },
    "conditionnel présent": { "je": "répéterais", "tu": "répéterais", "il/elle": "répéterait", "nous": "répéterions", "vous": "répéteriez", "ils/elles": "répéteraient" },
    "conditionnel passé première forme": { "je": "aurais répété", "tu": "aurais répété", "il/elle": "aurait répété", "nous": "aurions répété", "vous": "auriez répété", "ils/elles": "auraient répété" },
    "conditionnel passé deuxième forme": { "je": "eusse répété", "tu": "eusses répété", "il/elle": "eût répété", "nous": "eussions répété", "vous": "eussiez répété", "ils/elles": "eussent répété" },
    "impératif présent": { "tu": "répète", "nous": "répétons", "vous": "répétez" },
    "impératif passé": { "tu": "aie répété", "nous": "ayons répété", "vous": "ayez répété" },
    "infinitif présent": "répéter",
    "infinitif passé": "avoir répété",
    "participe présent": "répétant",
    "participe passé": "répété",
    "gérondif présent": "en répétant",
    "gérondif passé": "en ayant répété"
  }
};

const proteger: Verb = {
  name: "protéger",
  conjugations: {
    "indicatif présent": { "je": "protège", "tu": "protèges", "il/elle": "protège", "nous": "protégeons", "vous": "protégez", "ils/elles": "protègent" },
    "indicatif imparfait": { "je": "protégeais", "tu": "protégeais", "il/elle": "protégeait", "nous": "protégions", "vous": "protégiez", "ils/elles": "protégeaient" },
    "indicatif passé simple": { "je": "protégeai", "tu": "protégeas", "il/elle": "protégea", "nous": "protégeâmes", "vous": "protégeâtes", "ils/elles": "protégèrent" },
    "indicatif futur simple": { "je": "protégerai", "tu": "protégeras", "il/elle": "protégera", "nous": "protégerons", "vous": "protégerez", "ils/elles": "protégeront" },
    "indicatif passé composé": { "je": "ai protégé", "tu": "as protégé", "il/elle": "a protégé", "nous": "avons protégé", "vous": "avez protégé", "ils/elles": "ont protégé" },
    "indicatif plus-que-parfait": { "je": "avais protégé", "tu": "avais protégé", "il/elle": "avait protégé", "nous": "avions protégé", "vous": "aviez protégé", "ils/elles": "avaient protégé" },
    "indicatif passé antérieur": { "je": "eus protégé", "tu": "eus protégé", "il/elle": "eut protégé", "nous": "eûmes protégé", "vous": "eûtes protégé", "ils/elles": "eurent protégé" },
    "indicatif futur antérieur": { "je": "aurai protégé", "tu": "auras protégé", "il/elle": "aura protégé", "nous": "aurons protégé", "vous": "aurez protégé", "ils/elles": "auront protégé" },
    "subjonctif présent": { "je": "que je protège", "tu": "que tu protèges", "il/elle": "qu'il protège", "nous": "que nous protégions", "vous": "que vous protégiez", "ils/elles": "qu'ils protègent" },
    "subjonctif imparfait": { "je": "que je protégeasse", "tu": "que tu protégeasses", "il/elle": "qu'il protégeât", "nous": "que nous protégeassions", "vous": "que vous protégeassiez", "ils/elles": "qu'ils protégeassent" },
    "subjonctif passé": { "je": "que j'aie protégé", "tu": "que tu aies protégé", "il/elle": "qu'il ait protégé", "nous": "que nous ayons protégé", "vous": "que vous ayez protégé", "ils/elles": "qu'ils aient protégé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse protégé", "tu": "que tu eusses protégé", "il/elle": "qu'il eût protégé", "nous": "que nous eussions protégé", "vous": "que vous eussiez protégé", "ils/elles": "qu'ils eussent protégé" },
    "conditionnel présent": { "je": "protégerais", "tu": "protégerais", "il/elle": "protégerait", "nous": "protégerions", "vous": "protégeriez", "ils/elles": "protégeraient" },
    "conditionnel passé première forme": { "je": "aurais protégé", "tu": "aurais protégé", "il/elle": "aurait protégé", "nous": "aurions protégé", "vous": "auriez protégé", "ils/elles": "auraient protégé" },
    "conditionnel passé deuxième forme": { "je": "eusse protégé", "tu": "eusses protégé", "il/elle": "eût protégé", "nous": "eussions protégé", "vous": "eussiez protégé", "ils/elles": "eussent protégé" },
    "impératif présent": { "tu": "protège", "nous": "protégeons", "vous": "protégez" },
    "impératif passé": { "tu": "aie protégé", "nous": "ayons protégé", "vous": "ayez protégé" },
    "infinitif présent": "protéger",
    "infinitif passé": "avoir protégé",
    "participe présent": "protégeant",
    "participe passé": "protégé",
    "gérondif présent": "en protégeant",
    "gérondif passé": "en ayant protégé"
  }
};

const placer: Verb = {
  name: "placer",
  conjugations: {
    "indicatif présent": { "je": "place", "tu": "places", "il/elle": "place", "nous": "plaçons", "vous": "placez", "ils/elles": "placent" },
    "indicatif imparfait": { "je": "plaçais", "tu": "plaçais", "il/elle": "plaçait", "nous": "placions", "vous": "placiez", "ils/elles": "plaçaient" },
    "indicatif passé simple": { "je": "plaçai", "tu": "plaças", "il/elle": "plaça", "nous": "plaçâmes", "vous": "plaçâtes", "ils/elles": "placèrent" },
    "indicatif futur simple": { "je": "placerai", "tu": "placeras", "il/elle": "placera", "nous": "placerons", "vous": "placerez", "ils/elles": "placeront" },
    "indicatif passé composé": { "je": "ai placé", "tu": "as placé", "il/elle": "a placé", "nous": "avons placé", "vous": "avez placé", "ils/elles": "ont placé" },
    "indicatif plus-que-parfait": { "je": "avais placé", "tu": "avais placé", "il/elle": "avait placé", "nous": "avions placé", "vous": "aviez placé", "ils/elles": "avaient placé" },
    "indicatif passé antérieur": { "je": "eus placé", "tu": "eus placé", "il/elle": "eut placé", "nous": "eûmes placé", "vous": "eûtes placé", "ils/elles": "eurent placé" },
    "indicatif futur antérieur": { "je": "aurai placé", "tu": "auras placé", "il/elle": "aura placé", "nous": "aurons placé", "vous": "aurez placé", "ils/elles": "auront placé" },
    "subjonctif présent": { "je": "que je place", "tu": "que tu places", "il/elle": "qu'il place", "nous": "que nous placions", "vous": "que vous placiez", "ils/elles": "qu'ils placent" },
    "subjonctif imparfait": { "je": "que je plaçasse", "tu": "que tu plaçasses", "il/elle": "qu'il plaçât", "nous": "que nous plaçassions", "vous": "que vous plaçassiez", "ils/elles": "qu'ils plaçassent" },
    "subjonctif passé": { "je": "que j'aie placé", "tu": "que tu aies placé", "il/elle": "qu'il ait placé", "nous": "que nous ayons placé", "vous": "que vous ayez placé", "ils/elles": "qu'ils aient placé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse placé", "tu": "que tu eusses placé", "il/elle": "qu'il eût placé", "nous": "que nous eussions placé", "vous": "que vous eussiez placé", "ils/elles": "qu'ils eussent placé" },
    "conditionnel présent": { "je": "placerais", "tu": "placerais", "il/elle": "placerait", "nous": "placerions", "vous": "placeriez", "ils/elles": "placeraient" },
    "conditionnel passé première forme": { "je": "aurais placé", "tu": "aurais placé", "il/elle": "aurait placé", "nous": "aurions placé", "vous": "auriez placé", "ils/elles": "auraient placé" },
    "conditionnel passé deuxième forme": { "je": "eusse placé", "tu": "eusses placé", "il/elle": "eût placé", "nous": "eussions placé", "vous": "eussiez placé", "ils/elles": "eussent placé" },
    "impératif présent": { "tu": "place", "nous": "plaçons", "vous": "placez" },
    "impératif passé": { "tu": "aie placé", "nous": "ayons placé", "vous": "ayez placé" },
    "infinitif présent": "placer",
    "infinitif passé": "avoir placé",
    "participe présent": "plaçant",
    "participe passé": "placé",
    "gérondif présent": "en plaçant",
    "gérondif passé": "en ayant placé"
  }
};

const avancer: Verb = {
  name: "avancer",
  conjugations: {
    "indicatif présent": { "je": "avance", "tu": "avances", "il/elle": "avance", "nous": "avançons", "vous": "avancez", "ils/elles": "avancent" },
    "indicatif imparfait": { "je": "avançais", "tu": "avançais", "il/elle": "avançait", "nous": "avancions", "vous": "avanciez", "ils/elles": "avançaient" },
    "indicatif passé simple": { "je": "avançai", "tu": "avanças", "il/elle": "avança", "nous": "avançâmes", "vous": "avançâtes", "ils/elles": "avancèrent" },
    "indicatif futur simple": { "je": "avancerai", "tu": "avanceras", "il/elle": "avancera", "nous": "avancerons", "vous": "avancerez", "ils/elles": "avanceront" },
    "indicatif passé composé": { "je": "ai avancé", "tu": "as avancé", "il/elle": "a avancé", "nous": "avons avancé", "vous": "avez avancé", "ils/elles": "ont avancé" },
    "indicatif plus-que-parfait": { "je": "avais avancé", "tu": "avais avancé", "il/elle": "avait avancé", "nous": "avions avancé", "vous": "aviez avancé", "ils/elles": "avaient avancé" },
    "indicatif passé antérieur": { "je": "eus avancé", "tu": "eus avancé", "il/elle": "eut avancé", "nous": "eûmes avancé", "vous": "eûtes avancé", "ils/elles": "eurent avancé" },
    "indicatif futur antérieur": { "je": "aurai avancé", "tu": "auras avancé", "il/elle": "aura avancé", "nous": "aurons avancé", "vous": "aurez avancé", "ils/elles": "auront avancé" },
    "subjonctif présent": { "je": "que j'avance", "tu": "que tu avances", "il/elle": "qu'il avance", "nous": "que nous avancions", "vous": "que vous avanciez", "ils/elles": "qu'ils avancent" },
    "subjonctif imparfait": { "je": "que j'avançasse", "tu": "que tu avançasses", "il/elle": "qu'il avançât", "nous": "que nous avançassions", "vous": "que vous avançassiez", "ils/elles": "qu'ils avançassent" },
    "subjonctif passé": { "je": "que j'aie avancé", "tu": "que tu aies avancé", "il/elle": "qu'il ait avancé", "nous": "que nous ayons avancé", "vous": "que vous ayez avancé", "ils/elles": "qu'ils aient avancé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse avancé", "tu": "que tu eusses avancé", "il/elle": "qu'il eût avancé", "nous": "que nous eussions avancé", "vous": "que vous eussiez avancé", "ils/elles": "qu'ils eussent avancé" },
    "conditionnel présent": { "je": "avancerais", "tu": "avancerais", "il/elle": "avancerait", "nous": "avancerions", "vous": "avanceriez", "ils/elles": "avanceraient" },
    "conditionnel passé première forme": { "je": "aurais avancé", "tu": "aurais avancé", "il/elle": "aurait avancé", "nous": "aurions avancé", "vous": "auriez avancé", "ils/elles": "auraient avancé" },
    "conditionnel passé deuxième forme": { "je": "eusse avancé", "tu": "eusses avancé", "il/elle": "eût avancé", "nous": "eussions avancé", "vous": "eussiez avancé", "ils/elles": "eussent avancé" },
    "impératif présent": { "tu": "avance", "nous": "avançons", "vous": "avancez" },
    "impératif passé": { "tu": "aie avancé", "nous": "ayons avancé", "vous": "ayez avancé" },
    "infinitif présent": "avancer",
    "infinitif passé": "avoir avancé",
    "participe présent": "avançant",
    "participe passé": "avancé",
    "gérondif présent": "en avançant",
    "gérondif passé": "en ayant avancé"
  }
};

export default {
  sasseoir,
  prevoir,
  nettoyer,
  jeter,
  lever,
  preferer,
  repeter,
  proteger,
  placer,
  avancer
};