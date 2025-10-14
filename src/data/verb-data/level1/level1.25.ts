import { Verb } from '../../verbs';

const ajouter: Verb = {
  name: "ajouter",
  conjugations: {
    "indicatif présent": { "je": "ajoute", "tu": "ajoutes", "il/elle": "ajoute", "nous": "ajoutons", "vous": "ajoutez", "ils/elles": "ajoutent" },
    "indicatif imparfait": { "je": "ajoutais", "tu": "ajoutais", "il/elle": "ajoutait", "nous": "ajoutions", "vous": "ajoutiez", "ils/elles": "ajoutaient" },
    "indicatif passé simple": { "je": "ajoutai", "tu": "ajoutas", "il/elle": "ajouta", "nous": "ajoutâmes", "vous": "ajoutâtes", "ils/elles": "ajoutèrent" },
    "indicatif futur simple": { "je": "ajouterai", "tu": "ajouteras", "il/elle": "ajoutera", "nous": "ajouterons", "vous": "ajouterez", "ils/elles": "ajouteront" },
    "indicatif passé composé": { "je": "ai ajouté", "tu": "as ajouté", "il/elle": "a ajouté", "nous": "avons ajouté", "vous": "avez ajouté", "ils/elles": "ont ajouté" },
    "indicatif plus-que-parfait": { "je": "avais ajouté", "tu": "avais ajouté", "il/elle": "avait ajouté", "nous": "avions ajouté", "vous": "aviez ajouté", "ils/elles": "avaient ajouté" },
    "indicatif passé antérieur": { "je": "eus ajouté", "tu": "eus ajouté", "il/elle": "eut ajouté", "nous": "eûmes ajouté", "vous": "eûtes ajouté", "ils/elles": "eurent ajouté" },
    "indicatif futur antérieur": { "je": "aurai ajouté", "tu": "auras ajouté", "il/elle": "aura ajouté", "nous": "aurons ajouté", "vous": "aurez ajouté", "ils/elles": "auront ajouté" },
    "subjonctif présent": { "je": "que j'ajoute", "tu": "que tu ajoutes", "il/elle": "qu'il ajoute", "nous": "que nous ajoutions", "vous": "que vous ajoutiez", "ils/elles": "qu'ils ajoutent" },
    "subjonctif imparfait": { "je": "que j'ajoutasse", "tu": "que tu ajoutasses", "il/elle": "qu'il ajoutât", "nous": "que nous ajoutassions", "vous": "que vous ajoutassiez", "ils/elles": "qu'ils ajoutassent" },
    "subjonctif passé": { "je": "que j'aie ajouté", "tu": "que tu aies ajouté", "il/elle": "qu'il ait ajouté", "nous": "que nous ayons ajouté", "vous": "que vous ayez ajouté", "ils/elles": "qu'ils aient ajouté" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse ajouté", "tu": "que tu eusses ajouté", "il/elle": "qu'il eût ajouté", "nous": "que nous eussions ajouté", "vous": "que vous eussiez ajouté", "ils/elles": "qu'ils eussent ajouté" },
    "conditionnel présent": { "je": "ajouterais", "tu": "ajouterais", "il/elle": "ajouterait", "nous": "ajouterions", "vous": "ajouteriez", "ils/elles": "ajouteraient" },
    "conditionnel passé première forme": { "je": "aurais ajouté", "tu": "aurais ajouté", "il/elle": "aurait ajouté", "nous": "aurions ajouté", "vous": "auriez ajouté", "ils/elles": "auraient ajouté" },
    "conditionnel passé deuxième forme": { "je": "eusse ajouté", "tu": "eusses ajouté", "il/elle": "eût ajouté", "nous": "eussions ajouté", "vous": "eussiez ajouté", "ils/elles": "eussent ajouté" },
    "impératif présent": { "tu": "ajoute", "nous": "ajoutons", "vous": "ajoutez" },
    "impératif passé": { "tu": "aie ajouté", "nous": "ayons ajouté", "vous": "ayez ajouté" },
    "infinitif présent": "ajouter",
    "infinitif passé": "avoir ajouté",
    "participe présent": "ajoutant",
    "participe passé": "ajouté",
    "gérondif présent": "en ajoutant",
    "gérondif passé": "en ayant ajouté"
  }
};

const gerer: Verb = {
  name: "gérer",
  conjugations: {
    "indicatif présent": { "je": "gère", "tu": "gères", "il/elle": "gère", "nous": "gérons", "vous": "gérez", "ils/elles": "gèrent" },
    "indicatif imparfait": { "je": "gérais", "tu": "gérais", "il/elle": "gérait", "nous": "gérions", "vous": "gériez", "ils/elles": "géraient" },
    "indicatif passé simple": { "je": "gérai", "tu": "géras", "il/elle": "géra", "nous": "gérâmes", "vous": "gérâtes", "ils/elles": "gérèrent" },
    "indicatif futur simple": { "je": "gérerai", "tu": "géreras", "il/elle": "gérera", "nous": "gérerons", "vous": "gérerez", "ils/elles": "géreront" },
    "indicatif passé composé": { "je": "ai géré", "tu": "as géré", "il/elle": "a géré", "nous": "avons géré", "vous": "avez géré", "ils/elles": "ont géré" },
    "indicatif plus-que-parfait": { "je": "avais géré", "tu": "avais géré", "il/elle": "avait géré", "nous": "avions géré", "vous": "aviez géré", "ils/elles": "avaient géré" },
    "indicatif passé antérieur": { "je": "eus géré", "tu": "eus géré", "il/elle": "eut géré", "nous": "eûmes géré", "vous": "eûtes géré", "ils/elles": "eurent géré" },
    "indicatif futur antérieur": { "je": "aurai géré", "tu": "auras géré", "il/elle": "aura géré", "nous": "aurons géré", "vous": "aurez géré", "ils/elles": "auront géré" },
    "subjonctif présent": { "je": "que je gère", "tu": "que tu gères", "il/elle": "qu'il gère", "nous": "que nous gérions", "vous": "que vous gériez", "ils/elles": "qu'ils gèrent" },
    "subjonctif imparfait": { "je": "que je gérasse", "tu": "que tu gérasses", "il/elle": "qu'il gérât", "nous": "que nous gérassions", "vous": "que vous gérassiez", "ils/elles": "qu'ils gérassent" },
    "subjonctif passé": { "je": "que j'aie géré", "tu": "que tu aies géré", "il/elle": "qu'il ait géré", "nous": "que nous ayons géré", "vous": "que vous ayez géré", "ils/elles": "qu'ils aient géré" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse géré", "tu": "que tu eusses géré", "il/elle": "qu'il eût géré", "nous": "que nous eussions géré", "vous": "que vous eussiez géré", "ils/elles": "qu'ils eussent géré" },
    "conditionnel présent": { "je": "gérerais", "tu": "gérerais", "il/elle": "gérerait", "nous": "gérerions", "vous": "géreriez", "ils/elles": "géreraient" },
    "conditionnel passé première forme": { "je": "aurais géré", "tu": "aurais géré", "il/elle": "aurait géré", "nous": "aurions géré", "vous": "auriez géré", "ils/elles": "auraient géré" },
    "conditionnel passé deuxième forme": { "je": "eusse géré", "tu": "eusses géré", "il/elle": "eût géré", "nous": "eussions géré", "vous": "eussiez géré", "ils/elles": "eussent géré" },
    "impératif présent": { "tu": "gère", "nous": "gérons", "vous": "gérez" },
    "impératif passé": { "tu": "aie géré", "nous": "ayons géré", "vous": "ayez géré" },
    "infinitif présent": "gérer",
    "infinitif passé": "avoir géré",
    "participe présent": "gérant",
    "participe passé": "géré",
    "gérondif présent": "en gérant",
    "gérondif passé": "en ayant géré"
  }
};

const creer: Verb = {
  name: "créer",
  conjugations: {
    "indicatif présent": { "je": "crée", "tu": "crées", "il/elle": "crée", "nous": "créons", "vous": "créez", "ils/elles": "créent" },
    "indicatif imparfait": { "je": "créais", "tu": "créais", "il/elle": "créait", "nous": "créions", "vous": "créiez", "ils/elles": "créaient" },
    "indicatif passé simple": { "je": "créai", "tu": "créas", "il/elle": "créa", "nous": "créâmes", "vous": "créâtes", "ils/elles": "créèrent" },
    "indicatif futur simple": { "je": "créerai", "tu": "créeras", "il/elle": "créera", "nous": "créerons", "vous": "créerez", "ils/elles": "créeront" },
    "indicatif passé composé": { "je": "ai créé", "tu": "as créé", "il/elle": "a créé", "nous": "avons créé", "vous": "avez créé", "ils/elles": "ont créé" },
    "indicatif plus-que-parfait": { "je": "avais créé", "tu": "avais créé", "il/elle": "avait créé", "nous": "avions créé", "vous": "aviez créé", "ils/elles": "avaient créé" },
    "indicatif passé antérieur": { "je": "eus créé", "tu": "eus créé", "il/elle": "eut créé", "nous": "eûmes créé", "vous": "eûtes créé", "ils/elles": "eurent créé" },
    "indicatif futur antérieur": { "je": "aurai créé", "tu": "auras créé", "il/elle": "aura créé", "nous": "aurons créé", "vous": "aurez créé", "ils/elles": "auront créé" },
    "subjonctif présent": { "je": "que je crée", "tu": "que tu crées", "il/elle": "qu'il crée", "nous": "que nous créions", "vous": "que vous créiez", "ils/elles": "qu'ils créent" },
    "subjonctif imparfait": { "je": "que je créasse", "tu": "que tu créasses", "il/elle": "qu'il créât", "nous": "que nous créassions", "vous": "que vous créassiez", "ils/elles": "qu'ils créassent" },
    "subjonctif passé": { "je": "que j'aie créé", "tu": "que tu aies créé", "il/elle": "qu'il ait créé", "nous": "que nous ayons créé", "vous": "que vous ayez créé", "ils/elles": "qu'ils aient créé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse créé", "tu": "que tu eusses créé", "il/elle": "qu'il eût créé", "nous": "que nous eussions créé", "vous": "que vous eussiez créé", "ils/elles": "qu'ils eussent créé" },
    "conditionnel présent": { "je": "créerais", "tu": "créerais", "il/elle": "créerait", "nous": "créerions", "vous": "créeriez", "ils/elles": "créeraient" },
    "conditionnel passé première forme": { "je": "aurais créé", "tu": "aurais créé", "il/elle": "aurait créé", "nous": "aurions créé", "vous": "auriez créé", "ils/elles": "auraient créé" },
    "conditionnel passé deuxième forme": { "je": "eusse créé", "tu": "eusses créé", "il/elle": "eût créé", "nous": "eussions créé", "vous": "eussiez créé", "ils/elles": "eussent créé" },
    "impératif présent": { "tu": "crée", "nous": "créons", "vous": "créez" },
    "impératif passé": { "tu": "aie créé", "nous": "ayons créé", "vous": "ayez créé" },
    "infinitif présent": "créer",
    "infinitif passé": "avoir créé",
    "participe présent": "créant",
    "participe passé": "créé",
    "gérondif présent": "en créant",
    "gérondif passé": "en ayant créé"
  }
};

const utiliser: Verb = {
  name: "utiliser",
  conjugations: {
    "indicatif présent": { "je": "utilise", "tu": "utilises", "il/elle": "utilise", "nous": "utilisons", "vous": "utilisez", "ils/elles": "utilisent" },
    "indicatif imparfait": { "je": "utilisais", "tu": "utilisais", "il/elle": "utilisait", "nous": "utilisions", "vous": "utilisiez", "ils/elles": "utilisaient" },
    "indicatif passé simple": { "je": "utilisai", "tu": "utilisas", "il/elle": "utilisa", "nous": "utilisâmes", "vous": "utilisâtes", "ils/elles": "utilisèrent" },
    "indicatif futur simple": { "je": "utiliserai", "tu": "utiliseras", "il/elle": "utilisera", "nous": "utiliserons", "vous": "utiliserez", "ils/elles": "utiliseront" },
    "indicatif passé composé": { "je": "ai utilisé", "tu": "as utilisé", "il/elle": "a utilisé", "nous": "avons utilisé", "vous": "avez utilisé", "ils/elles": "ont utilisé" },
    "indicatif plus-que-parfait": { "je": "avais utilisé", "tu": "avais utilisé", "il/elle": "avait utilisé", "nous": "avions utilisé", "vous": "aviez utilisé", "ils/elles": "avaient utilisé" },
    "indicatif passé antérieur": { "je": "eus utilisé", "tu": "eus utilisé", "il/elle": "eut utilisé", "nous": "eûmes utilisé", "vous": "eûtes utilisé", "ils/elles": "eurent utilisé" },
    "indicatif futur antérieur": { "je": "aurai utilisé", "tu": "auras utilisé", "il/elle": "aura utilisé", "nous": "aurons utilisé", "vous": "aurez utilisé", "ils/elles": "auront utilisé" },
    "subjonctif présent": { "je": "que j'utilise", "tu": "que tu utilises", "il/elle": "qu'il utilise", "nous": "que nous utilisions", "vous": "que vous utilisiez", "ils/elles": "qu'ils utilisent" },
    "subjonctif imparfait": { "je": "que j'utilisasse", "tu": "que tu utilisasses", "il/elle": "qu'il utilisât", "nous": "que nous utilisassions", "vous": "que vous utilisassiez", "ils/elles": "qu'ils utilisassent" },
    "subjonctif passé": { "je": "que j'aie utilisé", "tu": "que tu aies utilisé", "il/elle": "qu'il ait utilisé", "nous": "que nous ayons utilisé", "vous": "que vous ayez utilisé", "ils/elles": "qu'ils aient utilisé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse utilisé", "tu": "que tu eusses utilisé", "il/elle": "qu'il eût utilisé", "nous": "que nous eussions utilisé", "vous": "que vous eussiez utilisé", "ils/elles": "qu'ils eussent utilisé" },
    "conditionnel présent": { "je": "utiliserais", "tu": "utiliserais", "il/elle": "utiliserait", "nous": "utiliserions", "vous": "utiliseriez", "ils/elles": "utiliseraient" },
    "conditionnel passé première forme": { "je": "aurais utilisé", "tu": "aurais utilisé", "il/elle": "aurait utilisé", "nous": "aurions utilisé", "vous": "auriez utilisé", "ils/elles": "auraient utilisé" },
    "conditionnel passé deuxième forme": { "je": "eusse utilisé", "tu": "eusses utilisé", "il/elle": "eût utilisé", "nous": "eussions utilisé", "vous": "eussiez utilisé", "ils/elles": "eussent utilisé" },
    "impératif présent": { "tu": "utilise", "nous": "utilisons", "vous": "utilisez" },
    "impératif passé": { "tu": "aie utilisé", "nous": "ayons utilisé", "vous": "ayez utilisé" },
    "infinitif présent": "utiliser",
    "infinitif passé": "avoir utilisé",
    "participe présent": "utilisant",
    "participe passé": "utilisé",
    "gérondif présent": "en utilisant",
    "gérondif passé": "en ayant utilisé"
  }
};

const bouillir: Verb = {
  name: "bouillir",
  conjugations: {
    "indicatif présent": { "je": "bous", "tu": "bous", "il/elle": "bout", "nous": "bouillons", "vous": "bouillez", "ils/elles": "bouillent" },
    "indicatif imparfait": { "je": "bouillais", "tu": "bouillais", "il/elle": "bouillait", "nous": "bouillions", "vous": "bouilliez", "ils/elles": "bouillaient" },
    "indicatif passé simple": { "je": "bouillis", "tu": "bouillis", "il/elle": "bouillit", "nous": "bouillîmes", "vous": "bouillîtes", "ils/elles": "bouillirent" },
    "indicatif futur simple": { "je": "bouillirai", "tu": "bouilliras", "il/elle": "bouillira", "nous": "bouillirons", "vous": "bouillirez", "ils/elles": "bouilliront" },
    "indicatif passé composé": { "je": "ai bouilli", "tu": "as bouilli", "il/elle": "a bouilli", "nous": "avons bouilli", "vous": "avez bouilli", "ils/elles": "ont bouilli" },
    "indicatif plus-que-parfait": { "je": "avais bouilli", "tu": "avais bouilli", "il/elle": "avait bouilli", "nous": "avions bouilli", "vous": "aviez bouilli", "ils/elles": "avaient bouilli" },
    "indicatif passé antérieur": { "je": "eus bouilli", "tu": "eus bouilli", "il/elle": "eut bouilli", "nous": "eûmes bouilli", "vous": "eûtes bouilli", "ils/elles": "eurent bouilli" },
    "indicatif futur antérieur": { "je": "aurai bouilli", "tu": "auras bouilli", "il/elle": "aura bouilli", "nous": "aurons bouilli", "vous": "aurez bouilli", "ils/elles": "auront bouilli" },
    "subjonctif présent": { "je": "que je bouille", "tu": "que tu bouilles", "il/elle": "qu'il bouille", "nous": "que nous bouillions", "vous": "que vous bouilliez", "ils/elles": "qu'ils bouillent" },
    "subjonctif imparfait": { "je": "que je bouillisse", "tu": "que tu bouillisses", "il/elle": "qu'il bouillît", "nous": "que nous bouillissions", "vous": "que vous bouillissiez", "ils/elles": "qu'ils bouillissent" },
    "subjonctif passé": { "je": "que j'aie bouilli", "tu": "que tu aies bouilli", "il/elle": "qu'il ait bouilli", "nous": "que nous ayons bouilli", "vous": "que vous ayez bouilli", "ils/elles": "qu'ils aient bouilli" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse bouilli", "tu": "que tu eusses bouilli", "il/elle": "qu'il eût bouilli", "nous": "que nous eussions bouilli", "vous": "que vous eussiez bouilli", "ils/elles": "qu'ils eussent bouilli" },
    "conditionnel présent": { "je": "bouillirais", "tu": "bouillirais", "il/elle": "bouillirait", "nous": "bouillirions", "vous": "bouilliriez", "ils/elles": "bouilliraient" },
    "conditionnel passé première forme": { "je": "aurais bouilli", "tu": "aurais bouilli", "il/elle": "aurait bouilli", "nous": "aurions bouilli", "vous": "auriez bouilli", "ils/elles": "auraient bouilli" },
    "conditionnel passé deuxième forme": { "je": "eusse bouilli", "tu": "eusses bouilli", "il/elle": "eût bouilli", "nous": "eussions bouilli", "vous": "eussiez bouilli", "ils/elles": "eussent bouilli" },
    "impératif présent": { "tu": "bous", "nous": "bouillons", "vous": "bouillez" },
    "impératif passé": { "tu": "aie bouilli", "nous": "ayons bouilli", "vous": "ayez bouilli" },
    "infinitif présent": "bouillir",
    "infinitif passé": "avoir bouilli",
    "participe présent": "bouillant",
    "participe passé": "bouilli",
    "gérondif présent": "en bouillant",
    "gérondif passé": "en ayant bouilli"
  }
};

const rejoindre: Verb = {
  name: "rejoindre",
  conjugations: {
    "indicatif présent": { "je": "rejoins", "tu": "rejoins", "il/elle": "rejoint", "nous": "rejoignons", "vous": "rejoignez", "ils/elles": "rejoignent" },
    "indicatif imparfait": { "je": "rejoignais", "tu": "rejoignais", "il/elle": "rejoignait", "nous": "rejoignions", "vous": "rejoigniez", "ils/elles": "rejoignaient" },
    "indicatif passé simple": { "je": "rejoignis", "tu": "rejoignis", "il/elle": "rejoignit", "nous": "rejoignîmes", "vous": "rejoignîtes", "ils/elles": "rejoignirent" },
    "indicatif futur simple": { "je": "rejoindrai", "tu": "rejoindras", "il/elle": "rejoindra", "nous": "rejoindrons", "vous": "rejoindrez", "ils/elles": "rejoindront" },
    "indicatif passé composé": { "je": "ai rejoint", "tu": "as rejoint", "il/elle": "a rejoint", "nous": "avons rejoint", "vous": "avez rejoint", "ils/elles": "ont rejoint" },
    "indicatif plus-que-parfait": { "je": "avais rejoint", "tu": "avais rejoint", "il/elle": "avait rejoint", "nous": "avions rejoint", "vous": "aviez rejoint", "ils/elles": "avaient rejoint" },
    "indicatif passé antérieur": { "je": "eus rejoint", "tu": "eus rejoint", "il/elle": "eut rejoint", "nous": "eûmes rejoint", "vous": "eûtes rejoint", "ils/elles": "eurent rejoint" },
    "indicatif futur antérieur": { "je": "aurai rejoint", "tu": "auras rejoint", "il/elle": "aura rejoint", "nous": "aurons rejoint", "vous": "aurez rejoint", "ils/elles": "auront rejoint" },
    "subjonctif présent": { "je": "que je rejoigne", "tu": "que tu rejoignes", "il/elle": "qu'il rejoigne", "nous": "que nous rejoignions", "vous": "que vous rejoigniez", "ils/elles": "qu'ils rejoignent" },
    "subjonctif imparfait": { "je": "que je rejoignisse", "tu": "que tu rejoignisses", "il/elle": "qu'il rejoignît", "nous": "que nous rejoignissions", "vous": "que vous rejoignissiez", "ils/elles": "qu'ils rejoignissent" },
    "subjonctif passé": { "je": "que j'aie rejoint", "tu": "que tu aies rejoint", "il/elle": "qu'il ait rejoint", "nous": "que nous ayons rejoint", "vous": "que vous ayez rejoint", "ils/elles": "qu'ils aient rejoint" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse rejoint", "tu": "que tu eusses rejoint", "il/elle": "qu'il eût rejoint", "nous": "que nous eussions rejoint", "vous": "que vous eussiez rejoint", "ils/elles": "qu'ils eussent rejoint" },
    "conditionnel présent": { "je": "rejoindrais", "tu": "rejoindrais", "il/elle": "rejoindrait", "nous": "rejoindrions", "vous": "rejoindriez", "ils/elles": "rejoindraient" },
    "conditionnel passé première forme": { "je": "aurais rejoint", "tu": "aurais rejoint", "il/elle": "aurait rejoint", "nous": "aurions rejoint", "vous": "auriez rejoint", "ils/elles": "auraient rejoint" },
    "conditionnel passé deuxième forme": { "je": "eusse rejoint", "tu": "eusses rejoint", "il/elle": "eût rejoint", "nous": "eussions rejoint", "vous": "eussiez rejoint", "ils/elles": "eussent rejoint" },
    "impératif présent": { "tu": "rejoins", "nous": "rejoignons", "vous": "rejoignez" },
    "impératif passé": { "tu": "aie rejoint", "nous": "ayons rejoint", "vous": "ayez rejoint" },
    "infinitif présent": "rejoindre",
    "infinitif passé": "avoir rejoint",
    "participe présent": "rejoignant",
    "participe passé": "rejoint",
    "gérondif présent": "en rejoignant",
    "gérondif passé": "en ayant rejoint"
  }
};

const peser: Verb = {
  name: "peser",
  conjugations: {
    "indicatif présent": { "je": "pèse", "tu": "pèses", "il/elle": "pèse", "nous": "pesons", "vous": "pesez", "ils/elles": "pèsent" },
    "indicatif imparfait": { "je": "pesais", "tu": "pesais", "il/elle": "pesait", "nous": "pesions", "vous": "pesiez", "ils/elles": "pesaient" },
    "indicatif passé simple": { "je": "pesai", "tu": "pesas", "il/elle": "pesa", "nous": "pesâmes", "vous": "pesâtes", "ils/elles": "pesèrent" },
    "indicatif futur simple": { "je": "pèserai", "tu": "pèseras", "il/elle": "pèsera", "nous": "pèserons", "vous": "pèserez", "ils/elles": "pèseront" },
    "indicatif passé composé": { "je": "ai pesé", "tu": "as pesé", "il/elle": "a pesé", "nous": "avons pesé", "vous": "avez pesé", "ils/elles": "ont pesé" },
    "indicatif plus-que-parfait": { "je": "avais pesé", "tu": "avais pesé", "il/elle": "avait pesé", "nous": "avions pesé", "vous": "aviez pesé", "ils/elles": "avaient pesé" },
    "indicatif passé antérieur": { "je": "eus pesé", "tu": "eus pesé", "il/elle": "eut pesé", "nous": "eûmes pesé", "vous": "eûtes pesé", "ils/elles": "eurent pesé" },
    "indicatif futur antérieur": { "je": "aurai pesé", "tu": "auras pesé", "il/elle": "aura pesé", "nous": "aurons pesé", "vous": "aurez pesé", "ils/elles": "auront pesé" },
    "subjonctif présent": { "je": "que je pèse", "tu": "que tu pèses", "il/elle": "qu'il pèse", "nous": "que nous pesions", "vous": "que vous pesiez", "ils/elles": "qu'ils pèsent" },
    "subjonctif imparfait": { "je": "que je pesasse", "tu": "que tu pesasses", "il/elle": "qu'il pesât", "nous": "que nous pesassions", "vous": "que vous pesassiez", "ils/elles": "qu'ils pesassent" },
    "subjonctif passé": { "je": "que j'aie pesé", "tu": "que tu aies pesé", "il/elle": "qu'il ait pesé", "nous": "que nous ayons pesé", "vous": "que vous ayez pesé", "ils/elles": "qu'ils aient pesé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse pesé", "tu": "que tu eusses pesé", "il/elle": "qu'il eût pesé", "nous": "que nous eussions pesé", "vous": "que vous eussiez pesé", "ils/elles": "qu'ils eussent pesé" },
    "conditionnel présent": { "je": "pèserais", "tu": "pèserais", "il/elle": "pèserait", "nous": "pèserions", "vous": "pèseriez", "ils/elles": "pèseraient" },
    "conditionnel passé première forme": { "je": "aurais pesé", "tu": "aurais pesé", "il/elle": "aurait pesé", "nous": "aurions pesé", "vous": "auriez pesé", "ils/elles": "auraient pesé" },
    "conditionnel passé deuxième forme": { "je": "eusse pesé", "tu": "eusses pesé", "il/elle": "eût pesé", "nous": "eussions pesé", "vous": "eussiez pesé", "ils/elles": "eussent pesé" },
    "impératif présent": { "tu": "pèse", "nous": "pesons", "vous": "pesez" },
    "impératif passé": { "tu": "aie pesé", "nous": "ayons pesé", "vous": "ayez pesé" },
    "infinitif présent": "peser",
    "infinitif passé": "avoir pesé",
    "participe présent": "pesant",
    "participe passé": "pesé",
    "gérondif présent": "en pesant",
    "gérondif passé": "en ayant pesé"
  }
};

const mener: Verb = {
  name: "mener",
  conjugations: {
    "indicatif présent": { "je": "mène", "tu": "mènes", "il/elle": "mène", "nous": "menons", "vous": "menez", "ils/elles": "mènent" },
    "indicatif imparfait": { "je": "menais", "tu": "menais", "il/elle": "menait", "nous": "menions", "vous": "meniez", "ils/elles": "menaient" },
    "indicatif passé simple": { "je": "menai", "tu": "menas", "il/elle": "mena", "nous": "menâmes", "vous": "menâtes", "ils/elles": "menèrent" },
    "indicatif futur simple": { "je": "mènerai", "tu": "mèneras", "il/elle": "mènera", "nous": "mènerons", "vous": "mènerez", "ils/elles": "mèneront" },
    "indicatif passé composé": { "je": "ai mené", "tu": "as mené", "il/elle": "a mené", "nous": "avons mené", "vous": "avez mené", "ils/elles": "ont mené" },
    "indicatif plus-que-parfait": { "je": "avais mené", "tu": "avais mené", "il/elle": "avait mené", "nous": "avions mené", "vous": "aviez mené", "ils/elles": "avaient mené" },
    "indicatif passé antérieur": { "je": "eus mené", "tu": "eus mené", "il/elle": "eut mené", "nous": "eûmes mené", "vous": "eûtes mené", "ils/elles": "eurent mené" },
    "indicatif futur antérieur": { "je": "aurai mené", "tu": "auras mené", "il/elle": "aura mené", "nous": "aurons mené", "vous": "aurez mené", "ils/elles": "auront mené" },
    "subjonctif présent": { "je": "que je mène", "tu": "que tu mènes", "il/elle": "qu'il mène", "nous": "que nous menions", "vous": "que vous meniez", "ils/elles": "qu'ils mènent" },
    "subjonctif imparfait": { "je": "que je menasse", "tu": "que tu menasses", "il/elle": "qu'il menât", "nous": "que nous menassions", "vous": "que vous menassiez", "ils/elles": "qu'ils menassent" },
    "subjonctif passé": { "je": "que j'aie mené", "tu": "que tu aies mené", "il/elle": "qu'il ait mené", "nous": "que nous ayons mené", "vous": "que vous ayez mené", "ils/elles": "qu'ils aient mené" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse mené", "tu": "que tu eusses mené", "il/elle": "qu'il eût mené", "nous": "que nous eussions mené", "vous": "que vous eussiez mené", "ils/elles": "qu'ils eussent mené" },
    "conditionnel présent": { "je": "mènerais", "tu": "mènerais", "il/elle": "mènerait", "nous": "mènerions", "vous": "mèneriez", "ils/elles": "mèneraient" },
    "conditionnel passé première forme": { "je": "aurais mené", "tu": "aurais mené", "il/elle": "aurait mené", "nous": "aurions mené", "vous": "auriez mené", "ils/elles": "auraient mené" },
    "conditionnel passé deuxième forme": { "je": "eusse mené", "tu": "eusses mené", "il/elle": "eût mené", "nous": "eussions mené", "vous": "eussiez mené", "ils/elles": "eussent mené" },
    "impératif présent": { "tu": "mène", "nous": "menons", "vous": "menez" },
    "impératif passé": { "tu": "aie mené", "nous": "ayons mené", "vous": "ayez mené" },
    "infinitif présent": "mener",
    "infinitif passé": "avoir mené",
    "participe présent": "menant",
    "participe passé": "mené",
    "gérondif présent": "en menant",
    "gérondif passé": "en ayant mené"
  }
};

const ceder: Verb = {
  name: "céder",
  conjugations: {
    "indicatif présent": { "je": "cède", "tu": "cèdes", "il/elle": "cède", "nous": "cédons", "vous": "cédez", "ils/elles": "cèdent" },
    "indicatif imparfait": { "je": "cédais", "tu": "cédais", "il/elle": "cédait", "nous": "cédions", "vous": "cédiez", "ils/elles": "cédaient" },
    "indicatif passé simple": { "je": "cédai", "tu": "cédas", "il/elle": "céda", "nous": "cédâmes", "vous": "cédâtes", "ils/elles": "cédèrent" },
    "indicatif futur simple": { "je": "céderai", "tu": "céderas", "il/elle": "cédera", "nous": "céderons", "vous": "céderez", "ils/elles": "céderont" },
    "indicatif passé composé": { "je": "ai cédé", "tu": "as cédé", "il/elle": "a cédé", "nous": "avons cédé", "vous": "avez cédé", "ils/elles": "ont cédé" },
    "indicatif plus-que-parfait": { "je": "avais cédé", "tu": "avais cédé", "il/elle": "avait cédé", "nous": "avions cédé", "vous": "aviez cédé", "ils/elles": "avaient cédé" },
    "indicatif passé antérieur": { "je": "eus cédé", "tu": "eus cédé", "il/elle": "eut cédé", "nous": "eûmes cédé", "vous": "eûtes cédé", "ils/elles": "eurent cédé" },
    "indicatif futur antérieur": { "je": "aurai cédé", "tu": "auras cédé", "il/elle": "aura cédé", "nous": "aurons cédé", "vous": "aurez cédé", "ils/elles": "auront cédé" },
    "subjonctif présent": { "je": "que je cède", "tu": "que tu cèdes", "il/elle": "qu'il cède", "nous": "que nous cédions", "vous": "que vous cédiez", "ils/elles": "qu'ils cèdent" },
    "subjonctif imparfait": { "je": "que je cédasse", "tu": "que tu cédasses", "il/elle": "qu'il cédât", "nous": "que nous cédassions", "vous": "que vous cédassiez", "ils/elles": "qu'ils cédassent" },
    "subjonctif passé": { "je": "que j'aie cédé", "tu": "que tu aies cédé", "il/elle": "qu'il ait cédé", "nous": "que nous ayons cédé", "vous": "que vous ayez cédé", "ils/elles": "qu'ils aient cédé" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse cédé", "tu": "que tu eusses cédé", "il/elle": "qu'il eût cédé", "nous": "que nous eussions cédé", "vous": "que vous eussiez cédé", "ils/elles": "qu'ils eussent cédé" },
    "conditionnel présent": { "je": "céderais", "tu": "céderais", "il/elle": "céderait", "nous": "céderions", "vous": "céderiez", "ils/elles": "céderaient" },
    "conditionnel passé première forme": { "je": "aurais cédé", "tu": "aurais cédé", "il/elle": "aurait cédé", "nous": "aurions cédé", "vous": "auriez cédé", "ils/elles": "auraient cédé" },
    "conditionnel passé deuxième forme": { "je": "eusse cédé", "tu": "eusses cédé", "il/elle": "eût cédé", "nous": "eussions cédé", "vous": "eussiez cédé", "ils/elles": "eussent cédé" },
    "impératif présent": { "tu": "cède", "nous": "cédons", "vous": "cédez" },
    "impératif passé": { "tu": "aie cédé", "nous": "ayons cédé", "vous": "ayez cédé" },
    "infinitif présent": "céder",
    "infinitif passé": "avoir cédé",
    "participe présent": "cédant",
    "participe passé": "cédé",
    "gérondif présent": "en cédant",
    "gérondif passé": "en ayant cédé"
  }
};

const celebrer: Verb = {
  name: "célébrer",
  conjugations: {
    "indicatif présent": { "je": "célèbre", "tu": "célèbres", "il/elle": "célèbre", "nous": "célébrons", "vous": "célébrez", "ils/elles": "célèbrent" },
    "indicatif imparfait": { "je": "célébrais", "tu": "célébrais", "il/elle": "célébrait", "nous": "célébrions", "vous": "célébriez", "ils/elles": "célébraient" },
    "indicatif passé simple": { "je": "célébrai", "tu": "célébras", "il/elle": "célébra", "nous": "célébrâmes", "vous": "célébrâtes", "ils/elles": "célébrèrent" },
    "indicatif futur simple": { "je": "célébrerai", "tu": "célébreras", "il/elle": "célébrera", "nous": "célébrerons", "vous": "célébrerez", "ils/elles": "célébreront" },
    "indicatif passé composé": { "je": "ai célébré", "tu": "as célébré", "il/elle": "a célébré", "nous": "avons célébré", "vous": "avez célébré", "ils/elles": "ont célébré" },
    "indicatif plus-que-parfait": { "je": "avais célébré", "tu": "avais célébré", "il/elle": "avait célébré", "nous": "avions célébré", "vous": "aviez célébré", "ils/elles": "avaient célébré" },
    "indicatif passé antérieur": { "je": "eus célébré", "tu": "eus célébré", "il/elle": "eut célébré", "nous": "eûmes célébré", "vous": "eûtes célébré", "ils/elles": "eurent célébré" },
    "indicatif futur antérieur": { "je": "aurai célébré", "tu": "auras célébré", "il/elle": "aura célébré", "nous": "aurons célébré", "vous": "aurez célébré", "ils/elles": "auront célébré" },
    "subjonctif présent": { "je": "que je célèbre", "tu": "que tu célèbres", "il/elle": "qu'il célèbre", "nous": "que nous célébrions", "vous": "que vous célébriez", "ils/elles": "qu'ils célèbrent" },
    "subjonctif imparfait": { "je": "que je célébrasse", "tu": "que tu célébrasses", "il/elle": "qu'il célébrât", "nous": "que nous célébrassions", "vous": "que vous célébrassiez", "ils/elles": "qu'ils célébrassent" },
    "subjonctif passé": { "je": "que j'aie célébré", "tu": "que tu aies célébré", "il/elle": "qu'il ait célébré", "nous": "que nous ayons célébré", "vous": "que vous ayez célébré", "ils/elles": "qu'ils aient célébré" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse célébré", "tu": "que tu eusses célébré", "il/elle": "qu'il eût célébré", "nous": "que nous eussions célébré", "vous": "que vous eussiez célébré", "ils/elles": "qu'ils eussent célébré" },
    "conditionnel présent": { "je": "célébrerais", "tu": "célébrerais", "il/elle": "célébrerait", "nous": "célébrerions", "vous": "célébreriez", "ils/elles": "célébreraient" },
    "conditionnel passé première forme": { "je": "aurais célébré", "tu": "aurais célébré", "il/elle": "aurait célébré", "nous": "aurions célébré", "vous": "auriez célébré", "ils/elles": "auraient célébré" },
    "conditionnel passé deuxième forme": { "je": "eusse célébré", "tu": "eusses célébré", "il/elle": "eût célébré", "nous": "eussions célébré", "vous": "eussiez célébré", "ils/elles": "eussent célébré" },
    "impératif présent": { "tu": "célèbre", "nous": "célébrons", "vous": "célébrez" },
    "impératif passé": { "tu": "aie célébré", "nous": "ayons célébré", "vous": "ayez célébré" },
    "infinitif présent": "célébrer",
    "infinitif passé": "avoir célébré",
    "participe présent": "célébrant",
    "participe passé": "célébré",
    "gérondif présent": "en célébrant",
    "gérondif passé": "en ayant célébré"
  }
};

export default {
  ajouter,
  gerer,
  creer,
  utiliser,
  bouillir,
  rejoindre,
  peser,
  mener,
  ceder,
  celebrer
};