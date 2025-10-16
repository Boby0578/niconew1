import { Verb } from '../../verbs';

const revenir: Verb = {
  name: "revenir",
  conjugations: {
    "indicatif présent": { "je": "reviens", "tu": "reviens", "il/elle": "revient", "nous": "revenons", "vous": "revenez", "ils/elles": "reviennent" },
    "indicatif imparfait": { "je": "revenais", "tu": "revenais", "il/elle": "revenait", "nous": "revenions", "vous": "reveniez", "ils/elles": "revenaient" },
    "indicatif passé simple": { "je": "revins", "tu": "revins", "il/elle": "revint", "nous": "revînmes", "vous": "revîntes", "ils/elles": "revinrent" },
    "indicatif futur simple": { "je": "reviendrai", "tu": "reviendras", "il/elle": "reviendra", "nous": "reviendrons", "vous": "reviendrez", "ils/elles": "reviendront" },
    "indicatif passé composé": { "je": "suis revenu(e)", "tu": "es revenu(e)", "il/elle": "est revenu(e)", "nous": "sommes revenu(e)s", "vous": "êtes revenu(e)(s)", "ils/elles": "sont revenu(e)s" },
    "indicatif plus-que-parfait": { "je": "étais revenu(e)", "tu": "étais revenu(e)", "il/elle": "était revenu(e)", "nous": "étions revenu(e)s", "vous": "étiez revenu(e)(s)", "ils/elles": "étaient revenu(e)s" },
    "indicatif passé antérieur": { "je": "fus revenu(e)", "tu": "fus revenu(e)", "il/elle": "fut revenu(e)", "nous": "fûmes revenu(e)s", "vous": "fûtes revenu(e)(s)", "ils/elles": "furent revenu(e)s" },
    "indicatif futur antérieur": { "je": "serai revenu(e)", "tu": "seras revenu(e)", "il/elle": "sera revenu(e)", "nous": "serons revenu(e)s", "vous": "serez revenu(e)(s)", "ils/elles": "seront revenu(e)s" },
    "subjonctif présent": { "je": "que je revienne", "tu": "que tu reviennes", "il/elle": "qu'il revienne", "nous": "que nous revenions", "vous": "que vous reveniez", "ils/elles": "qu'ils reviennent" },
    "subjonctif imparfait": { "je": "que je revinsse", "tu": "que tu revinsses", "il/elle": "qu'il revînt", "nous": "que nous revinssions", "vous": "que vous revinssiez", "ils/elles": "qu'ils revinssent" },
    "subjonctif passé": { "je": "que je sois revenu(e)", "tu": "que tu sois revenu(e)", "il/elle": "qu'il soit revenu(e)", "nous": "que nous soyons revenu(e)s", "vous": "que vous soyez revenu(e)(s)", "ils/elles": "qu'ils soient revenu(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je fusse revenu(e)", "tu": "que tu fusses revenu(e)", "il/elle": "qu'il fût revenu(e)", "nous": "que nous fussions revenu(e)s", "vous": "que vous fussiez revenu(e)(s)", "ils/elles": "qu'ils fussent revenu(e)s" },
    "conditionnel présent": { "je": "reviendrais", "tu": "reviendrais", "il/elle": "reviendrait", "nous": "reviendrions", "vous": "reviendriez", "ils/elles": "reviendraient" },
    "conditionnel passé première forme": { "je": "serais revenu(e)", "tu": "serais revenu(e)", "il/elle": "serait revenu(e)", "nous": "serions revenu(e)s", "vous": "seriez revenu(e)(s)", "ils/elles": "seraient revenu(e)s" },
    "conditionnel passé deuxième forme": { "je": "fusse revenu(e)", "tu": "fusses revenu(e)", "il/elle": "fût revenu(e)", "nous": "fussions revenu(e)s", "vous": "fussiez revenu(e)(s)", "ils/elles": "fussent revenu(e)s" },
    "impératif présent": { "tu": "reviens", "nous": "revenons", "vous": "revenez" },
    "impératif passé": { "tu": "sois revenu(e)", "nous": "soyons revenu(e)s", "vous": "soyez revenu(e)(s)" },
    "infinitif présent": "revenir",
    "infinitif passé": "être revenu(e)",
    "participe présent": "revenant",
    "participe passé": "revenu",
    "gérondif présent": "en revenant",
    "gérondif passé": "en étant revenu(e)"
  }
};

const conduire: Verb = {
  name: "conduire",
  conjugations: {
    "indicatif présent": { "je": "conduis", "tu": "conduis", "il/elle": "conduit", "nous": "conduisons", "vous": "conduisez", "ils/elles": "conduisent" },
    "indicatif imparfait": { "je": "conduisais", "tu": "conduisais", "il/elle": "conduisait", "nous": "conduisions", "vous": "conduisiez", "ils/elles": "conduisaient" },
    "indicatif passé simple": { "je": "conduisis", "tu": "conduisis", "il/elle": "conduisit", "nous": "conduisîmes", "vous": "conduisîtes", "ils/elles": "conduisirent" },
    "indicatif futur simple": { "je": "conduirai", "tu": "conduiras", "il/elle": "conduira", "nous": "conduirons", "vous": "conduirez", "ils/elles": "conduiront" },
    "indicatif passé composé": { "je": "ai conduit", "tu": "as conduit", "il/elle": "a conduit", "nous": "avons conduit", "vous": "avez conduit", "ils/elles": "ont conduit" },
    "indicatif plus-que-parfait": { "je": "avais conduit", "tu": "avais conduit", "il/elle": "avait conduit", "nous": "avions conduit", "vous": "aviez conduit", "ils/elles": "avaient conduit" },
    "indicatif passé antérieur": { "je": "eus conduit", "tu": "eus conduit", "il/elle": "eut conduit", "nous": "eûmes conduit", "vous": "eûtes conduit", "ils/elles": "eurent conduit" },
    "indicatif futur antérieur": { "je": "aurai conduit", "tu": "auras conduit", "il/elle": "aura conduit", "nous": "aurons conduit", "vous": "aurez conduit", "ils/elles": "auront conduit" },
    "subjonctif présent": { "je": "que je conduise", "tu": "que tu conduises", "il/elle": "qu'il conduise", "nous": "que nous conduisions", "vous": "que vous conduisiez", "ils/elles": "qu'ils conduisent" },
    "subjonctif imparfait": { "je": "que je conduisisse", "tu": "que tu conduisisses", "il/elle": "qu'il conduisît", "nous": "que nous conduisissions", "vous": "que vous conduisissiez", "ils/elles": "qu'ils conduisissent" },
    "subjonctif passé": { "je": "que j'aie conduit", "tu": "que tu aies conduit", "il/elle": "qu'il ait conduit", "nous": "que nous ayons conduit", "vous": "que vous ayez conduit", "ils/elles": "qu'ils aient conduit" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse conduit", "tu": "que tu eusses conduit", "il/elle": "qu'il eût conduit", "nous": "que nous eussions conduit", "vous": "que vous eussiez conduit", "ils/elles": "qu'ils eussent conduit" },
    "conditionnel présent": { "je": "conduirais", "tu": "conduirais", "il/elle": "conduirait", "nous": "conduirions", "vous": "conduiriez", "ils/elles": "conduiraient" },
    "conditionnel passé première forme": { "je": "aurais conduit", "tu": "aurais conduit", "il/elle": "aurait conduit", "nous": "aurions conduit", "vous": "auriez conduit", "ils/elles": "auraient conduit" },
    "conditionnel passé deuxième forme": { "je": "eusse conduit", "tu": "eusses conduit", "il/elle": "eût conduit", "nous": "eussions conduit", "vous": "eussiez conduit", "ils/elles": "eussent conduit" },
    "impératif présent": { "tu": "conduis", "nous": "conduisons", "vous": "conduisez" },
    "impératif passé": { "tu": "aie conduit", "nous": "ayons conduit", "vous": "ayez conduit" },
    "infinitif présent": "conduire",
    "infinitif passé": "avoir conduit",
    "participe présent": "conduisant",
    "participe passé": "conduit",
    "gérondif présent": "en conduisant",
    "gérondif passé": "en ayant conduit"
  }
};

const craindre: Verb = {
  name: "craindre",
  conjugations: {
    "indicatif présent": { "je": "crains", "tu": "crains", "il/elle": "craint", "nous": "craignons", "vous": "craignez", "ils/elles": "craignent" },
    "indicatif imparfait": { "je": "craignais", "tu": "craignais", "il/elle": "craignait", "nous": "craignions", "vous": "craigniez", "ils/elles": "craignaient" },
    "indicatif passé simple": { "je": "craignis", "tu": "craignis", "il/elle": "craignit", "nous": "craignîmes", "vous": "craignîtes", "ils/elles": "craignirent" },
    "indicatif futur simple": { "je": "craindrai", "tu": "craindras", "il/elle": "craindra", "nous": "craindrons", "vous": "craindrez", "ils/elles": "craindront" },
    "indicatif passé composé": { "je": "ai craint", "tu": "as craint", "il/elle": "a craint", "nous": "avons craint", "vous": "avez craint", "ils/elles": "ont craint" },
    "indicatif plus-que-parfait": { "je": "avais craint", "tu": "avais craint", "il/elle": "avait craint", "nous": "avions craint", "vous": "aviez craint", "ils/elles": "avaient craint" },
    "indicatif passé antérieur": { "je": "eus craint", "tu": "eus craint", "il/elle": "eut craint", "nous": "eûmes craint", "vous": "eûtes craint", "ils/elles": "eurent craint" },
    "indicatif futur antérieur": { "je": "aurai craint", "tu": "auras craint", "il/elle": "aura craint", "nous": "aurons craint", "vous": "aurez craint", "ils/elles": "auront craint" },
    "subjonctif présent": { "je": "que je craigne", "tu": "que tu craignes", "il/elle": "qu'il craigne", "nous": "que nous craignions", "vous": "que vous craigniez", "ils/elles": "qu'ils craignent" },
    "subjonctif imparfait": { "je": "que je craignisse", "tu": "que tu craignisses", "il/elle": "qu'il craignît", "nous": "que nous craignissions", "vous": "que vous craignissiez", "ils/elles": "qu'ils craignissent" },
    "subjonctif passé": { "je": "que j'aie craint", "tu": "que tu aies craint", "il/elle": "qu'il ait craint", "nous": "que nous ayons craint", "vous": "que vous ayez craint", "ils/elles": "qu'ils aient craint" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse craint", "tu": "que tu eusses craint", "il/elle": "qu'il eût craint", "nous": "que nous eussions craint", "vous": "que vous eussiez craint", "ils/elles": "qu'ils eussent craint" },
    "conditionnel présent": { "je": "craindrais", "tu": "craindrais", "il/elle": "craindrait", "nous": "craindrions", "vous": "craindriez", "ils/elles": "craindraient" },
    "conditionnel passé première forme": { "je": "aurais craint", "tu": "aurais craint", "il/elle": "aurait craint", "nous": "aurions craint", "vous": "auriez craint", "ils/elles": "auraient craint" },
    "conditionnel passé deuxième forme": { "je": "eusse craint", "tu": "eusses craint", "il/elle": "eût craint", "nous": "eussions craint", "vous": "eussiez craint", "ils/elles": "eussent craint" },
    "impératif présent": { "tu": "crains", "nous": "craignons", "vous": "craignez" },
    "impératif passé": { "tu": "aie craint", "nous": "ayons craint", "vous": "ayez craint" },
    "infinitif présent": "craindre",
    "infinitif passé": "avoir craint",
    "participe présent": "craignant",
    "participe passé": "craint",
    "gérondif présent": "en craignant",
    "gérondif passé": "en ayant craint"
  }
};

const peindre: Verb = {
  name: "peindre",
  conjugations: {
    "indicatif présent": { "je": "peins", "tu": "peins", "il/elle": "peint", "nous": "peignons", "vous": "peignez", "ils/elles": "peignent" },
    "indicatif imparfait": { "je": "peignais", "tu": "peignais", "il/elle": "peignait", "nous": "peignions", "vous": "peigniez", "ils/elles": "peignaient" },
    "indicatif passé simple": { "je": "peignis", "tu": "peignis", "il/elle": "peignit", "nous": "peignîmes", "vous": "peignîtes", "ils/elles": "peignirent" },
    "indicatif futur simple": { "je": "peindrai", "tu": "peindras", "il/elle": "peindra", "nous": "peindrons", "vous": "peindrez", "ils/elles": "peindront" },
    "indicatif passé composé": { "je": "ai peint", "tu": "as peint", "il/elle": "a peint", "nous": "avons peint", "vous": "avez peint", "ils/elles": "ont peint" },
    "indicatif plus-que-parfait": { "je": "avais peint", "tu": "avais peint", "il/elle": "avait peint", "nous": "avions peint", "vous": "aviez peint", "ils/elles": "avaient peint" },
    "indicatif passé antérieur": { "je": "eus peint", "tu": "eus peint", "il/elle": "eut peint", "nous": "eûmes peint", "vous": "eûtes peint", "ils/elles": "eurent peint" },
    "indicatif futur antérieur": { "je": "aurai peint", "tu": "auras peint", "il/elle": "aura peint", "nous": "aurons peint", "vous": "aurez peint", "ils/elles": "auront peint" },
    "subjonctif présent": { "je": "que je peigne", "tu": "que tu peignes", "il/elle": "qu'il peigne", "nous": "que nous peignions", "vous": "que vous peigniez", "ils/elles": "qu'ils peignent" },
    "subjonctif imparfait": { "je": "que je peignisse", "tu": "que tu peignisses", "il/elle": "qu'il peignît", "nous": "que nous peignissions", "vous": "que vous peignissiez", "ils/elles": "qu'ils peignissent" },
    "subjonctif passé": { "je": "que j'aie peint", "tu": "que tu aies peint", "il/elle": "qu'il ait peint", "nous": "que nous ayons peint", "vous": "que vous ayez peint", "ils/elles": "qu'ils aient peint" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse peint", "tu": "que tu eusses peint", "il/elle": "qu'il eût peint", "nous": "que nous eussions peint", "vous": "que vous eussiez peint", "ils/elles": "qu'ils eussent peint" },
    "conditionnel présent": { "je": "peindrais", "tu": "peindrais", "il/elle": "peindrait", "nous": "peindrions", "vous": "peindriez", "ils/elles": "peindraient" },
    "conditionnel passé première forme": { "je": "aurais peint", "tu": "aurais peint", "il/elle": "aurait peint", "nous": "aurions peint", "vous": "auriez peint", "ils/elles": "auraient peint" },
    "conditionnel passé deuxième forme": { "je": "eusse peint", "tu": "eusses peint", "il/elle": "eût peint", "nous": "eussions peint", "vous": "eussiez peint", "ils/elles": "eussent peint" },
    "impératif présent": { "tu": "peins", "nous": "peignons", "vous": "peignez" },
    "impératif passé": { "tu": "aie peint", "nous": "ayons peint", "vous": "ayez peint" },
    "infinitif présent": "peindre",
    "infinitif passé": "avoir peint",
    "participe présent": "peignant",
    "participe passé": "peint",
    "gérondif présent": "en peignant",
    "gérondif passé": "en ayant peint"
  }
};

const joindre: Verb = {
  name: "joindre",
  conjugations: {
    "indicatif présent": { "je": "joins", "tu": "joins", "il/elle": "joint", "nous": "joignons", "vous": "joignez", "ils/elles": "joignent" },
    "indicatif imparfait": { "je": "joignais", "tu": "joignais", "il/elle": "joignait", "nous": "joignions", "vous": "joigniez", "ils/elles": "joignaient" },
    "indicatif passé simple": { "je": "joignis", "tu": "joignis", "il/elle": "joignit", "nous": "joignîmes", "vous": "joignîtes", "ils/elles": "joignirent" },
    "indicatif futur simple": { "je": "joindrai", "tu": "joindras", "il/elle": "joindra", "nous": "joindrons", "vous": "joindrez", "ils/elles": "joindront" },
    "indicatif passé composé": { "je": "ai joint", "tu": "as joint", "il/elle": "a joint", "nous": "avons joint", "vous": "avez joint", "ils/elles": "ont joint" },
    "indicatif plus-que-parfait": { "je": "avais joint", "tu": "avais joint", "il/elle": "avait joint", "nous": "avions joint", "vous": "aviez joint", "ils/elles": "avaient joint" },
    "indicatif passé antérieur": { "je": "eus joint", "tu": "eus joint", "il/elle": "eut joint", "nous": "eûmes joint", "vous": "eûtes joint", "ils/elles": "eurent joint" },
    "indicatif futur antérieur": { "je": "aurai joint", "tu": "auras joint", "il/elle": "aura joint", "nous": "aurons joint", "vous": "aurez joint", "ils/elles": "auront joint" },
    "subjonctif présent": { "je": "que je joigne", "tu": "que tu joignes", "il/elle": "qu'il joigne", "nous": "que nous joignions", "vous": "que vous joigniez", "ils/elles": "qu'ils joignent" },
    "subjonctif imparfait": { "je": "que je joignisse", "tu": "que tu joignisses", "il/elle": "qu'il joignît", "nous": "que nous joignissions", "vous": "que vous joignissiez", "ils/elles": "qu'ils joignissent" },
    "subjonctif passé": { "je": "que j'aie joint", "tu": "que tu aies joint", "il/elle": "qu'il ait joint", "nous": "que nous ayons joint", "vous": "que vous ayez joint", "ils/elles": "qu'ils aient joint" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse joint", "tu": "que tu eusses joint", "il/elle": "qu'il eût joint", "nous": "que nous eussions joint", "vous": "que vous eussiez joint", "ils/elles": "qu'ils eussent joint" },
    "conditionnel présent": { "je": "joindrais", "tu": "joindrais", "il/elle": "joindrait", "nous": "joindrions", "vous": "joindriez", "ils/elles": "joindraient" },
    "conditionnel passé première forme": { "je": "aurais joint", "tu": "aurais joint", "il/elle": "aurait joint", "nous": "aurions joint", "vous": "auriez joint", "ils/elles": "auraient joint" },
    "conditionnel passé deuxième forme": { "je": "eusse joint", "tu": "eusses joint", "il/elle": "eût joint", "nous": "eussions joint", "vous": "eussiez joint", "ils/elles": "eussent joint" },
    "impératif présent": { "tu": "joins", "nous": "joignons", "vous": "joignez" },
    "impératif passé": { "tu": "aie joint", "nous": "ayons joint", "vous": "ayez joint" },
    "infinitif présent": "joindre",
    "infinitif passé": "avoir joint",
    "participe présent": "joignant",
    "participe passé": "joint",
    "gérondif présent": "en joignant",
    "gérondif passé": "en ayant joint"
  }
};

const battre: Verb = {
  name: "battre",
  conjugations: {
    "indicatif présent": { "je": "bats", "tu": "bats", "il/elle": "bat", "nous": "battons", "vous": "battez", "ils/elles": "battent" },
    "indicatif imparfait": { "je": "battais", "tu": "battais", "il/elle": "battait", "nous": "battions", "vous": "battiez", "ils/elles": "battaient" },
    "indicatif passé simple": { "je": "battis", "tu": "battis", "il/elle": "battit", "nous": "battîmes", "vous": "battîtes", "ils/elles": "battirent" },
    "indicatif futur simple": { "je": "battrai", "tu": "battras", "il/elle": "battra", "nous": "battrons", "vous": "battrez", "ils/elles": "battront" },
    "indicatif passé composé": { "je": "ai battu", "tu": "as battu", "il/elle": "a battu", "nous": "avons battu", "vous": "avez battu", "ils/elles": "ont battu" },
    "indicatif plus-que-parfait": { "je": "avais battu", "tu": "avais battu", "il/elle": "avait battu", "nous": "avions battu", "vous": "aviez battu", "ils/elles": "avaient battu" },
    "indicatif passé antérieur": { "je": "eus battu", "tu": "eus battu", "il/elle": "eut battu", "nous": "eûmes battu", "vous": "eûtes battu", "ils/elles": "eurent battu" },
    "indicatif futur antérieur": { "je": "aurai battu", "tu": "auras battu", "il/elle": "aura battu", "nous": "aurons battu", "vous": "aurez battu", "ils/elles": "auront battu" },
    "subjonctif présent": { "je": "que je batte", "tu": "que tu battes", "il/elle": "qu'il batte", "nous": "que nous battions", "vous": "que vous battiez", "ils/elles": "qu'ils battent" },
    "subjonctif imparfait": { "je": "que je battisse", "tu": "que tu battisses", "il/elle": "qu'il battît", "nous": "que nous battissions", "vous": "que vous battissiez", "ils/elles": "qu'ils battissent" },
    "subjonctif passé": { "je": "que j'aie battu", "tu": "que tu aies battu", "il/elle": "qu'il ait battu", "nous": "que nous ayons battu", "vous": "que vous ayez battu", "ils/elles": "qu'ils aient battu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse battu", "tu": "que tu eusses battu", "il/elle": "qu'il eût battu", "nous": "que nous eussions battu", "vous": "que vous eussiez battu", "ils/elles": "qu'ils eussent battu" },
    "conditionnel présent": { "je": "battrais", "tu": "battrais", "il/elle": "battrait", "nous": "battrions", "vous": "battriez", "ils/elles": "battraient" },
    "conditionnel passé première forme": { "je": "aurais battu", "tu": "aurais battu", "il/elle": "aurait battu", "nous": "aurions battu", "vous": "auriez battu", "ils/elles": "auraient battu" },
    "conditionnel passé deuxième forme": { "je": "eusse battu", "tu": "eusses battu", "il/elle": "eût battu", "nous": "eussions battu", "vous": "eussiez battu", "ils/elles": "eussent battu" },
    "impératif présent": { "tu": "bats", "nous": "battons", "vous": "battez" },
    "impératif passé": { "tu": "aie battu", "nous": "ayons battu", "vous": "ayez battu" },
    "infinitif présent": "battre",
    "infinitif passé": "avoir battu",
    "participe présent": "battant",
    "participe passé": "battu",
    "gérondif présent": "en battant",
    "gérondif passé": "en ayant battu"
  }
};

const résoudre: Verb = {
  name: "résoudre",
  conjugations: {
    "indicatif présent": { "je": "résous", "tu": "résous", "il/elle": "résout", "nous": "résolvons", "vous": "résolvez", "ils/elles": "résolvent" },
    "indicatif imparfait": { "je": "résolvais", "tu": "résolvais", "il/elle": "résolvait", "nous": "résolvions", "vous": "résolviez", "ils/elles": "résolvaient" },
    "indicatif passé simple": { "je": "résolus", "tu": "résolus", "il/elle": "résolut", "nous": "résolûmes", "vous": "résolûtes", "ils/elles": "résolurent" },
    "indicatif futur simple": { "je": "résoudrai", "tu": "résoudras", "il/elle": "résoudra", "nous": "résoudrons", "vous": "résoudrez", "ils/elles": "résoudront" },
    "indicatif passé composé": { "je": "ai résolu", "tu": "as résolu", "il/elle": "a résolu", "nous": "avons résolu", "vous": "avez résolu", "ils/elles": "ont résolu" },
    "indicatif plus-que-parfait": { "je": "avais résolu", "tu": "avais résolu", "il/elle": "avait résolu", "nous": "avions résolu", "vous": "aviez résolu", "ils/elles": "avaient résolu" },
    "indicatif passé antérieur": { "je": "eus résolu", "tu": "eus résolu", "il/elle": "eut résolu", "nous": "eûmes résolu", "vous": "eûtes résolu", "ils/elles": "eurent résolu" },
    "indicatif futur antérieur": { "je": "aurai résolu", "tu": "auras résolu", "il/elle": "aura résolu", "nous": "aurons résolu", "vous": "aurez résolu", "ils/elles": "auront résolu" },
    "subjonctif présent": { "je": "que je résolve", "tu": "que tu résolves", "il/elle": "qu'il résolve", "nous": "que nous résolvions", "vous": "que vous résolviez", "ils/elles": "qu'ils résolvent" },
    "subjonctif imparfait": { "je": "que je résolusse", "tu": "que tu résolusses", "il/elle": "qu'il résolût", "nous": "que nous résolussions", "vous": "que vous résolussiez", "ils/elles": "qu'ils résolussent" },
    "subjonctif passé": { "je": "que j'aie résolu", "tu": "que tu aies résolu", "il/elle": "qu'il ait résolu", "nous": "que nous ayons résolu", "vous": "que vous ayez résolu", "ils/elles": "qu'ils aient résolu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse résolu", "tu": "que tu eusses résolu", "il/elle": "qu'il eût résolu", "nous": "que nous eussions résolu", "vous": "que vous eussiez résolu", "ils/elles": "qu'ils eussent résolu" },
    "conditionnel présent": { "je": "résoudrais", "tu": "résoudrais", "il/elle": "résoudrait", "nous": "résoudrions", "vous": "résoudriez", "ils/elles": "résoudraient" },
    "conditionnel passé première forme": { "je": "aurais résolu", "tu": "aurais résolu", "il/elle": "aurait résolu", "nous": "aurions résolu", "vous": "auriez résolu", "ils/elles": "auraient résolu" },
    "conditionnel passé deuxième forme": { "je": "eusse résolu", "tu": "eusses résolu", "il/elle": "eût résolu", "nous": "eussions résolu", "vous": "eussiez résolu", "ils/elles": "eussent résolu" },
    "impératif présent": { "tu": "résous", "nous": "résolvons", "vous": "résolvez" },
    "impératif passé": { "tu": "aie résolu", "nous": "ayons résolu", "vous": "ayez résolu" },
    "infinitif présent": "résoudre",
    "infinitif passé": "avoir résolu",
    "participe présent": "résolvant",
    "participe passé": "résolu",
    "gérondif présent": "en résolvant",
    "gérondif passé": "en ayant résolu"
  }
};

const fuir: Verb = {
  name: "fuir",
  conjugations: {
    "indicatif présent": { "je": "fuis", "tu": "fuis", "il/elle": "fuit", "nous": "fuyons", "vous": "fuyez", "ils/elles": "fuient" },
    "indicatif imparfait": { "je": "fuyais", "tu": "fuyais", "il/elle": "fuyait", "nous": "fuyions", "vous": "fuyiez", "ils/elles": "fuyaient" },
    "indicatif passé simple": { "je": "fuis", "tu": "fuis", "il/elle": "fuit", "nous": "fuîmes", "vous": "fuîtes", "ils/elles": "fuirent" },
    "indicatif futur simple": { "je": "fuirai", "tu": "fuiras", "il/elle": "fuira", "nous": "fuirons", "vous": "fuirez", "ils/elles": "fuiront" },
    "indicatif passé composé": { "je": "ai fui", "tu": "as fui", "il/elle": "a fui", "nous": "avons fui", "vous": "avez fui", "ils/elles": "ont fui" },
    "indicatif plus-que-parfait": { "je": "avais fui", "tu": "avais fui", "il/elle": "avait fui", "nous": "avions fui", "vous": "aviez fui", "ils/elles": "avaient fui" },
    "indicatif passé antérieur": { "je": "eus fui", "tu": "eus fui", "il/elle": "eut fui", "nous": "eûmes fui", "vous": "eûtes fui", "ils/elles": "eurent fui" },
    "indicatif futur antérieur": { "je": "aurai fui", "tu": "auras fui", "il/elle": "aura fui", "nous": "aurons fui", "vous": "aurez fui", "ils/elles": "auront fui" },
    "subjonctif présent": { "je": "que je fuie", "tu": "que tu fuies", "il/elle": "qu'il fuie", "nous": "que nous fuyions", "vous": "que vous fuyiez", "ils/elles": "qu'ils fuient" },
    "subjonctif imparfait": { "je": "que je fuisse", "tu": "que tu fuisses", "il/elle": "qu'il fuît", "nous": "que nous fuissions", "vous": "que vous fuissiez", "ils/elles": "qu'ils fuissent" },
    "subjonctif passé": { "je": "que j'aie fui", "tu": "que tu aies fui", "il/elle": "qu'il ait fui", "nous": "que nous ayons fui", "vous": "que vous ayez fui", "ils/elles": "qu'ils aient fui" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse fui", "tu": "que tu eusses fui", "il/elle": "qu'il eût fui", "nous": "que nous eussions fui", "vous": "que vous eussiez fui", "ils/elles": "qu'ils eussent fui" },
    "conditionnel présent": { "je": "fuirais", "tu": "fuirais", "il/elle": "fuirait", "nous": "fuirions", "vous": "fuiriez", "ils/elles": "fuiraient" },
    "conditionnel passé première forme": { "je": "aurais fui", "tu": "aurais fui", "il/elle": "aurait fui", "nous": "aurions fui", "vous": "auriez fui", "ils/elles": "auraient fui" },
    "conditionnel passé deuxième forme": { "je": "eusse fui", "tu": "eusses fui", "il/elle": "eût fui", "nous": "eussions fui", "vous": "eussiez fui", "ils/elles": "eussent fui" },
    "impératif présent": { "tu": "fuis", "nous": "fuyons", "vous": "fuyez" },
    "impératif passé": { "tu": "aie fui", "nous": "ayons fui", "vous": "ayez fui" },
    "infinitif présent": "fuir",
    "infinitif passé": "avoir fui",
    "participe présent": "fuyant",
    "participe passé": "fui",
    "gérondif présent": "en fuyant",
    "gérondif passé": "en ayant fui"
  }
};

const haïr: Verb = {
  name: "haïr",
  conjugations: {
    "indicatif présent": { "je": "hais", "tu": "hais", "il/elle": "hait", "nous": "haïssons", "vous": "haïssez", "ils/elles": "haïssent" },
    "indicatif imparfait": { "je": "haïssais", "tu": "haïssais", "il/elle": "haïssait", "nous": "haïssions", "vous": "haïssiez", "ils/elles": "haïssaient" },
    "indicatif passé simple": { "je": "haïs", "tu": "haïs", "il/elle": "haït", "nous": "haïmes", "vous": "haïtes", "ils/elles": "haïrent" },
    "indicatif futur simple": { "je": "haïrai", "tu": "haïras", "il/elle": "haïra", "nous": "haïrons", "vous": "haïrez", "ils/elles": "haïront" },
    "indicatif passé composé": { "je": "ai haï", "tu": "as haï", "il/elle": "a haï", "nous": "avons haï", "vous": "avez haï", "ils/elles": "ont haï" },
    "indicatif plus-que-parfait": { "je": "avais haï", "tu": "avais haï", "il/elle": "avait haï", "nous": "avions haï", "vous": "aviez haï", "ils/elles": "avaient haï" },
    "indicatif passé antérieur": { "je": "eus haï", "tu": "eus haï", "il/elle": "eut haï", "nous": "eûmes haï", "vous": "eûtes haï", "ils/elles": "eurent haï" },
    "indicatif futur antérieur": { "je": "aurai haï", "tu": "auras haï", "il/elle": "aura haï", "nous": "aurons haï", "vous": "aurez haï", "ils/elles": "auront haï" },
    "subjonctif présent": { "je": "que je haïsse", "tu": "que tu haïsses", "il/elle": "qu'il haïsse", "nous": "que nous haïssions", "vous": "que vous haïssiez", "ils/elles": "qu'ils haïssent" },
    "subjonctif imparfait": { "je": "que je haïsse", "tu": "que tu haïsses", "il/elle": "qu'il haït", "nous": "que nous haïssions", "vous": "que vous haïssiez", "ils/elles": "qu'ils haïssent" },
    "subjonctif passé": { "je": "que j'aie haï", "tu": "que tu aies haï", "il/elle": "qu'il ait haï", "nous": "que nous ayons haï", "vous": "que vous ayez haï", "ils/elles": "qu'ils aient haï" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse haï", "tu": "que tu eusses haï", "il/elle": "qu'il eût haï", "nous": "que nous eussions haï", "vous": "que vous eussiez haï", "ils/elles": "qu'ils eussent haï" },
    "conditionnel présent": { "je": "haïrais", "tu": "haïrais", "il/elle": "haïrait", "nous": "haïrions", "vous": "haïriez", "ils/elles": "haïraient" },
    "conditionnel passé première forme": { "je": "aurais haï", "tu": "aurais haï", "il/elle": "aurait haï", "nous": "aurions haï", "vous": "auriez haï", "ils/elles": "auraient haï" },
    "conditionnel passé deuxième forme": { "je": "eusse haï", "tu": "eusses haï", "il/elle": "eût haï", "nous": "eussions haï", "vous": "eussiez haï", "ils/elles": "eussent haï" },
    "impératif présent": { "tu": "hais", "nous": "haïssons", "vous": "haïssez" },
    "impératif passé": { "tu": "aie haï", "nous": "ayons haï", "vous": "ayez haï" },
    "infinitif présent": "haïr",
    "infinitif passé": "avoir haï",
    "participe présent": "haïssant",
    "participe passé": "haï",
    "gérondif présent": "en haïssant",
    "gérondif passé": "en ayant haï"
  }
};

const vêtir: Verb = {
  name: "vêtir",
  conjugations: {
    "indicatif présent": { "je": "vêts", "tu": "vêts", "il/elle": "vêt", "nous": "vêtons", "vous": "vêtez", "ils/elles": "vêtent" },
    "indicatif imparfait": { "je": "vêtais", "tu": "vêtais", "il/elle": "vêtait", "nous": "vêtions", "vous": "vêtiez", "ils/elles": "vêtaient" },
    "indicatif passé simple": { "je": "vêtis", "tu": "vêtis", "il/elle": "vêtit", "nous": "vêtîmes", "vous": "vêtîtes", "ils/elles": "vêtirent" },
    "indicatif futur simple": { "je": "vêtirai", "tu": "vêtiras", "il/elle": "vêtira", "nous": "vêtirons", "vous": "vêtirez", "ils/elles": "vêtiront" },
    "indicatif passé composé": { "je": "ai vêtu", "tu": "as vêtu", "il/elle": "a vêtu", "nous": "avons vêtu", "vous": "avez vêtu", "ils/elles": "ont vêtu" },
    "indicatif plus-que-parfait": { "je": "avais vêtu", "tu": "avais vêtu", "il/elle": "avait vêtu", "nous": "avions vêtu", "vous": "aviez vêtu", "ils/elles": "avaient vêtu" },
    "indicatif passé antérieur": { "je": "eus vêtu", "tu": "eus vêtu", "il/elle": "eut vêtu", "nous": "eûmes vêtu", "vous": "eûtes vêtu", "ils/elles": "eurent vêtu" },
    "indicatif futur antérieur": { "je": "aurai vêtu", "tu": "auras vêtu", "il/elle": "aura vêtu", "nous": "aurons vêtu", "vous": "aurez vêtu", "ils/elles": "auront vêtu" },
    "subjonctif présent": { "je": "que je vête", "tu": "que tu vêtes", "il/elle": "qu'il vête", "nous": "que nous vêtions", "vous": "que vous vêtiez", "ils/elles": "qu'ils vêtent" },
    "subjonctif imparfait": { "je": "que je vêtisse", "tu": "que tu vêtisses", "il/elle": "qu'il vêtît", "nous": "que nous vêtissions", "vous": "que vous vêtissiez", "ils/elles": "qu'ils vêtissent" },
    "subjonctif passé": { "je": "que j'aie vêtu", "tu": "que tu aies vêtu", "il/elle": "qu'il ait vêtu", "nous": "que nous ayons vêtu", "vous": "que vous ayez vêtu", "ils/elles": "qu'ils aient vêtu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse vêtu", "tu": "que tu eusses vêtu", "il/elle": "qu'il eût vêtu", "nous": "que nous eussions vêtu", "vous": "que vous eussiez vêtu", "ils/elles": "qu'ils eussent vêtu" },
    "conditionnel présent": { "je": "vêtirais", "tu": "vêtirais", "il/elle": "vêtirait", "nous": "vêtirions", "vous": "vêtiriez", "ils/elles": "vêtiraient" },
    "conditionnel passé première forme": { "je": "aurais vêtu", "tu": "aurais vêtu", "il/elle": "aurait vêtu", "nous": "aurions vêtu", "vous": "auriez vêtu", "ils/elles": "auraient vêtu" },
    "conditionnel passé deuxième forme": { "je": "eusse vêtu", "tu": "eusses vêtu", "il/elle": "eût vêtu", "nous": "eussions vêtu", "vous": "eussiez vêtu", "ils/elles": "eussent vêtu" },
    "impératif présent": { "tu": "vêts", "nous": "vêtons", "vous": "vêtez" },
    "impératif passé": { "tu": "aie vêtu", "nous": "ayons vêtu", "vous": "ayez vêtu" },
    "infinitif présent": "vêtir",
    "infinitif passé": "avoir vêtu",
    "participe présent": "vêtant",
    "participe passé": "vêtu",
    "gérondif présent": "en vêtant",
    "gérondif passé": "en ayant vêtu"
  }
};

export default {
  revenir,
  conduire,
  craindre,
  peindre,
  joindre,
  battre,
  résoudre,
  fuir,
  haïr,
  vêtir
};