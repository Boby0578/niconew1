import { Verb } from '../../verbs';

const choir: Verb = {
  name: "choir",
  conjugations: {
    "indicatif présent": { "je": "chois", "tu": "chois", "il/elle": "choit" },
    "indicatif passé simple": { "je": "chus", "tu": "chus", "il/elle": "chut", "nous": "chûmes", "vous": "chûtes", "ils/elles": "churent" },
    "indicatif passé composé": { "je": "suis chu(e)", "tu": "es chu(e)", "il/elle": "est chu(e)", "nous": "sommes chu(e)s", "vous": "êtes chu(e)(s)", "ils/elles": "sont chu(e)s" },
    "indicatif futur simple": { "je": "cherrai", "tu": "cherras", "il/elle": "cherra", "nous": "cherrons", "vous": "cherrez", "ils/elles": "cherront" },
    "conditionnel présent": { "je": "cherrais", "tu": "cherrais", "il/elle": "cherrait", "nous": "cherrions", "vous": "cherriez", "ils/elles": "cherraient" },
    "infinitif présent": "choir",
    "participe passé": "chu"
  }
};

const ouir: Verb = {
  name: "ouïr",
  conjugations: {
    "indicatif passé simple": { "j'": "ouïs", "tu": "ouïs", "il/elle": "ouït", "nous": "ouïmes", "vous": "ouïtes", "ils/elles": "ouïrent" },
    "indicatif passé composé": { "j'": "ai ouï", "tu": "as ouï", "il/elle": "a ouï", "nous": "avons ouï", "vous": "avez ouï", "ils/elles": "ont ouï" },
    "subjonctif imparfait": { "je": "que j'ouïsse", "tu": "que tu ouïsses", "il/elle": "qu'il ouït", "nous": "que nous ouïssions", "vous": "que vous ouïssiez", "ils/elles": "qu'ils ouïssent" },
    "impératif présent": { "tu": "ois" },
    "infinitif présent": "ouïr",
    "participe passé": "ouï"
  }
};

const querir: Verb = {
  name: "quérir",
  conjugations: {
    "infinitif présent": "quérir"
  }
};

const raire: Verb = {
  name: "raire",
  conjugations: {
    "indicatif présent": { "il/elle": "rait", "ils/elles": "raient" },
    "indicatif imparfait": { "il/elle": "rayait", "ils/elles": "rayaient" },
    "indicatif futur simple": { "il/elle": "raira", "ils/elles": "rairont" },
    "conditionnel présent": { "il/elle": "rairait", "ils/elles": "rairaient" },
    "participe présent": "rayant",
    "infinitif présent": "raire"
  }
};

const sourdre: Verb = {
  name: "sourdre",
  conjugations: {
    "indicatif présent": { "il/elle": "sourd", "ils/elles": "sourdent" },
    "indicatif imparfait": { "il/elle": "sourdait", "ils/elles": "sourdaient" },
    "participe présent": "sourdant",
    "infinitif présent": "sourdre"
  }
};

const tistre: Verb = {
  name: "tistre",
  conjugations: {
    "participe passé": "tissu",
    "infinitif présent": "tistre"
  }
};

const ferir: Verb = {
  name: "férir",
  conjugations: {
    "infinitif présent": "férir"
  }
};

const messeoir: Verb = {
  name: "messeoir",
  conjugations: {
    "indicatif présent": { "il/elle": "messied", "ils/elles": "messiéent" },
    "indicatif imparfait": { "il/elle": "messeyait", "ils/elles": "messeyaient" },
    "indicatif futur simple": { "il/elle": "messiéra", "ils/elles": "messiéront" },
    "subjonctif présent": { "il/elle": "qu'il messiée", "ils/elles": "qu'ils messiéent" },
    "conditionnel présent": { "il/elle": "messiérait", "ils/elles": "messiéraient" },
    "participe présent": "messéant",
    "infinitif présent": "messeoir"
  }
};

const occire: Verb = {
  name: "occire",
  conjugations: {
    "indicatif passé simple": { "j'": "occis", "tu": "occis", "il/elle": "occit", "nous": "occîmes", "vous": "occîtes", "ils/elles": "occirent" },
    "indicatif passé composé": { "j'": "ai occis", "tu": "as occis", "il/elle": "a occis", "nous": "avons occis", "vous": "avez occis", "ils/elles": "ont occis" },
    "participe passé": "occis",
    "infinitif présent": "occire"
  }
};

const chaloir: Verb = {
  name: "chaloir",
  conjugations: {
    "indicatif présent": { "il/elle": "chaut" },
    "infinitif présent": "chaloir"
  }
};

export default {
  choir,
  ouir,
  querir,
  raire,
  sourdre,
  tistre,
  ferir,
  messeoir,
  occire,
  chaloir
};