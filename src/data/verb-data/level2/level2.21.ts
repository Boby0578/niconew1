import { Verb } from '../../verbs';

const appartenir: Verb = {
  name: "appartenir",
  conjugations: {
    "indicatif présent": { "j'": "appartiens", "tu": "appartiens", "il/elle": "appartient", "nous": "appartenons", "vous": "appartenez", "ils/elles": "appartiennent" },
    "indicatif imparfait": { "j'": "appartenais", "tu": "appartenais", "il/elle": "appartenait", "nous": "appartenions", "vous": "apparteniez", "ils/elles": "appartenaient" },
    "indicatif passé simple": { "j'": "appartins", "tu": "appartins", "il/elle": "appartint", "nous": "appartînmes", "vous": "appartîntes", "ils/elles": "appartinrent" },
    "indicatif futur simple": { "j'": "appartiendrai", "tu": "appartiendras", "il/elle": "appartiendra", "nous": "appartiendrons", "vous": "appartiendrez", "ils/elles": "appartiendront" },
    "indicatif passé composé": { "j'": "ai appartenu", "tu": "as appartenu", "il/elle": "a appartenu", "nous": "avons appartenu", "vous": "avez appartenu", "ils/elles": "ont appartenu" },
    "indicatif plus-que-parfait": { "j'": "avais appartenu", "tu": "avais appartenu", "il/elle": "avait appartenu", "nous": "avions appartenu", "vous": "aviez appartenu", "ils/elles": "avaient appartenu" },
    "indicatif passé antérieur": { "j'": "eus appartenu", "tu": "eus appartenu", "il/elle": "eut appartenu", "nous": "eûmes appartenu", "vous": "eûtes appartenu", "ils/elles": "eurent appartenu" },
    "indicatif futur antérieur": { "j'": "aurai appartenu", "tu": "auras appartenu", "il/elle": "aura appartenu", "nous": "aurons appartenu", "vous": "aurez appartenu", "ils/elles": "auront appartenu" },
    "subjonctif présent": { "je": "que j'appartienne", "tu": "que tu appartiennes", "il/elle": "qu'il appartienne", "nous": "que nous appartenions", "vous": "que vous apparteniez", "ils/elles": "qu'ils appartiennent" },
    "subjonctif imparfait": { "je": "que j'appartinsse", "tu": "que tu appartinsses", "il/elle": "qu'il appartînt", "nous": "que nous appartinssions", "vous": "que vous appartinssiez", "ils/elles": "qu'ils appartinssent" },
    "subjonctif passé": { "je": "que j'aie appartenu", "tu": "que tu aies appartenu", "il/elle": "qu'il ait appartenu", "nous": "que nous ayons appartenu", "vous": "que vous ayez appartenu", "ils/elles": "qu'ils aient appartenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse appartenu", "tu": "que tu eusses appartenu", "il/elle": "qu'il eût appartenu", "nous": "que nous eussions appartenu", "vous": "que vous eussiez appartenu", "ils/elles": "qu'ils eussent appartenu" },
    "conditionnel présent": { "je": "appartiendrais", "tu": "appartiendrais", "il/elle": "appartiendrait", "nous": "appartiendrions", "vous": "appartiendriez", "ils/elles": "appartiendraient" },
    "conditionnel passé première forme": { "je": "aurais appartenu", "tu": "aurais appartenu", "il/elle": "aurait appartenu", "nous": "aurions appartenu", "vous": "auriez appartenu", "ils/elles": "auraient appartenu" },
    "conditionnel passé deuxième forme": { "je": "eusse appartenu", "tu": "eusses appartenu", "il/elle": "eût appartenu", "nous": "eussions appartenu", "vous": "eussiez appartenu", "ils/elles": "eussent appartenu" },
    "impératif présent": { "tu": "appartiens", "nous": "appartenons", "vous": "appartenez" },
    "impératif passé": { "tu": "aie appartenu", "nous": "ayons appartenu", "vous": "ayez appartenu" },
    "infinitif présent": "appartenir",
    "infinitif passé": "avoir appartenu",
    "participe présent": "appartenant",
    "participe passé": "appartenu",
    "gérondif présent": "en appartenant",
    "gérondif passé": "en ayant appartenu"
  }
};

const contenir: Verb = {
  name: "contenir",
  conjugations: {
    "indicatif présent": { "je": "contiens", "tu": "contiens", "il/elle": "contient", "nous": "contenons", "vous": "contenez", "ils/elles": "contiennent" },
    "indicatif imparfait": { "je": "contenais", "tu": "contenais", "il/elle": "contenait", "nous": "contenions", "vous": "conteniez", "ils/elles": "contenaient" },
    "indicatif passé simple": { "je": "contins", "tu": "contins", "il/elle": "contint", "nous": "contînmes", "vous": "contîntes", "ils/elles": "continrent" },
    "indicatif futur simple": { "je": "contiendrai", "tu": "contiendras", "il/elle": "contiendra", "nous": "contiendrons", "vous": "contiendrez", "ils/elles": "contiendront" },
    "indicatif passé composé": { "je": "ai contenu", "tu": "as contenu", "il/elle": "a contenu", "nous": "avons contenu", "vous": "avez contenu", "ils/elles": "ont contenu" },
    "indicatif plus-que-parfait": { "je": "avais contenu", "tu": "avais contenu", "il/elle": "avait contenu", "nous": "avions contenu", "vous": "aviez contenu", "ils/elles": "avaient contenu" },
    "indicatif passé antérieur": { "je": "eus contenu", "tu": "eus contenu", "il/elle": "eut contenu", "nous": "eûmes contenu", "vous": "eûtes contenu", "ils/elles": "eurent contenu" },
    "indicatif futur antérieur": { "je": "aurai contenu", "tu": "auras contenu", "il/elle": "aura contenu", "nous": "aurons contenu", "vous": "aurez contenu", "ils/elles": "auront contenu" },
    "subjonctif présent": { "je": "que je contienne", "tu": "que tu contiennes", "il/elle": "qu'il contienne", "nous": "que nous contenions", "vous": "que vous conteniez", "ils/elles": "qu'ils contiennent" },
    "subjonctif imparfait": { "je": "que je continsse", "tu": "que tu continsses", "il/elle": "qu'il contînt", "nous": "que nous continssions", "vous": "que vous continssiez", "ils/elles": "qu'ils continssent" },
    "subjonctif passé": { "je": "que j'aie contenu", "tu": "que tu aies contenu", "il/elle": "qu'il ait contenu", "nous": "que nous ayons contenu", "vous": "que vous ayez contenu", "ils/elles": "qu'ils aient contenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse contenu", "tu": "que tu eusses contenu", "il/elle": "qu'il eût contenu", "nous": "que nous eussions contenu", "vous": "que vous eussiez contenu", "ils/elles": "qu'ils eussent contenu" },
    "conditionnel présent": { "je": "contiendrai", "tu": "contiendrai", "il/elle": "contiendrai", "nous": "contiendrai", "vous": "contiendrai", "ils/elles": "contiendraient" },
    "conditionnel passé première forme": { "je": "aurais contenu", "tu": "aurais contenu", "il/elle": "aurait contenu", "nous": "aurions contenu", "vous": "auriez contenu", "ils/elles": "auraient contenu" },
    "conditionnel passé deuxième forme": { "je": "eusse contenu", "tu": "eusses contenu", "il/elle": "eût contenu", "nous": "eussions contenu", "vous": "eussiez contenu", "ils/elles": "eussent contenu" },
    "impératif présent": { "tu": "contiens", "nous": "contenons", "vous": "contenez" },
    "impératif passé": { "tu": "aie contenu", "nous": "ayons contenu", "vous": "ayez contenu" },
    "infinitif présent": "contenir",
    "infinitif passé": "avoir contenu",
    "participe présent": "contenant",
    "participe passé": "contenu",
    "gérondif présent": "en contenant",
    "gérondif passé": "en ayant contenu"
  }
};

const maintenir: Verb = {
  name: "maintenir",
  conjugations: {
    "indicatif présent": { "je": "maintiens", "tu": "maintiens", "il/elle": "maintient", "nous": "maintenons", "vous": "maintenez", "ils/elles": "maintiennent" },
    "indicatif imparfait": { "je": "maintenais", "tu": "maintenais", "il/elle": "maintenait", "nous": "maintenions", "vous": "mainteniez", "ils/elles": "maintenaient" },
    "indicatif passé simple": { "je": "maintins", "tu": "maintins", "il/elle": "maintint", "nous": "maintînmes", "vous": "maintîntes", "ils/elles": "maintinrent" },
    "indicatif futur simple": { "je": "maintiendrai", "tu": "maintiendras", "il/elle": "maintiendra", "nous": "maintiendrons", "vous": "maintiendrez", "ils/elles": "maintiendront" },
    "indicatif passé composé": { "je": "ai maintenu", "tu": "as maintenu", "il/elle": "a maintenu", "nous": "avons maintenu", "vous": "avez maintenu", "ils/elles": "ont maintenu" },
    "indicatif plus-que-parfait": { "je": "avais maintenu", "tu": "avais maintenu", "il/elle": "avait maintenu", "nous": "avions maintenu", "vous": "aviez maintenu", "ils/elles": "avaient maintenu" },
    "indicatif passé antérieur": { "je": "eus maintenu", "tu": "eus maintenu", "il/elle": "eut maintenu", "nous": "eûmes maintenu", "vous": "eûtes maintenu", "ils/elles": "eurent maintenu" },
    "indicatif futur antérieur": { "je": "aurai maintenu", "tu": "auras maintenu", "il/elle": "aura maintenu", "nous": "aurons maintenu", "vous": "aurez maintenu", "ils/elles": "auront maintenu" },
    "subjonctif présent": { "je": "que je maintienne", "tu": "que tu maintiennes", "il/elle": "qu'il maintienne", "nous": "que nous maintenions", "vous": "que vous mainteniez", "ils/elles": "qu'ils maintiennent" },
    "subjonctif imparfait": { "je": "que je maintinsse", "tu": "que tu maintinsses", "il/elle": "qu'il maintînt", "nous": "que nous maintinssions", "vous": "que vous maintinssiez", "ils/elles": "qu'ils maintinssent" },
    "subjonctif passé": { "je": "que j'aie maintenu", "tu": "que tu aies maintenu", "il/elle": "qu'il ait maintenu", "nous": "que nous ayons maintenu", "vous": "que vous ayez maintenu", "ils/elles": "qu'ils aient maintenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse maintenu", "tu": "que tu eusses maintenu", "il/elle": "qu'il eût maintenu", "nous": "que nous eussions maintenu", "vous": "que vous eussiez maintenu", "ils/elles": "qu'ils eussent maintenu" },
    "conditionnel présent": { "je": "maintiendrais", "tu": "maintiendrais", "il/elle": "maintiendrait", "nous": "maintiendrions", "vous": "maintiendriez", "ils/elles": "maintiendraient" },
    "conditionnel passé première forme": { "je": "aurais maintenu", "tu": "aurais maintenu", "il/elle": "aurait maintenu", "nous": "aurions maintenu", "vous": "auriez maintenu", "ils/elles": "auraient maintenu" },
    "conditionnel passé deuxième forme": { "je": "eusse maintenu", "tu": "eusses maintenu", "il/elle": "eût maintenu", "nous": "eussions maintenu", "vous": "eussiez maintenu", "ils/elles": "eussent maintenu" },
    "impératif présent": { "tu": "maintiens", "nous": "maintenons", "vous": "maintenez" },
    "impératif passé": { "tu": "aie maintenu", "nous": "ayons maintenu", "vous": "ayez maintenu" },
    "infinitif présent": "maintenir",
    "infinitif passé": "avoir maintenu",
    "participe présent": "maintenant",
    "participe passé": "maintenu",
    "gérondif présent": "en maintenant",
    "gérondif passé": "en ayant maintenu"
  }
};

const obtenir: Verb = {
  name: "obtenir",
  conjugations: {
    "indicatif présent": { "j'": "obtiens", "tu": "obtiens", "il/elle": "obtient", "nous": "obtenons", "vous": "obtenez", "ils/elles": "obtiennent" },
    "indicatif imparfait": { "j'": "obtenais", "tu": "obtenais", "il/elle": "obtenait", "nous": "obtenions", "vous": "obteniez", "ils/elles": "obtenaient" },
    "indicatif passé simple": { "j'": "obtins", "tu": "obtins", "il/elle": "obtint", "nous": "obtînmes", "vous": "obtîntes", "ils/elles": "obtinrent" },
    "indicatif futur simple": { "j'": "obtiendrai", "tu": "obtiendras", "il/elle": "obtiendra", "nous": "obtiendrons", "vous": "obtiendrez", "ils/elles": "obtiendront" },
    "indicatif passé composé": { "j'": "ai obtenu", "tu": "as obtenu", "il/elle": "a obtenu", "nous": "avons obtenu", "vous": "avez obtenu", "ils/elles": "ont obtenu" },
    "indicatif plus-que-parfait": { "j'": "avais obtenu", "tu": "avais obtenu", "il/elle": "avait obtenu", "nous": "avions obtenu", "vous": "aviez obtenu", "ils/elles": "avaient obtenu" },
    "indicatif passé antérieur": { "j'": "eus obtenu", "tu": "eus obtenu", "il/elle": "eut obtenu", "nous": "eûmes obtenu", "vous": "eûtes obtenu", "ils/elles": "eurent obtenu" },
    "indicatif futur antérieur": { "j'": "aurai obtenu", "tu": "auras obtenu", "il/elle": "aura obtenu", "nous": "aurons obtenu", "vous": "aurez obtenu", "ils/elles": "auront obtenu" },
    "subjonctif présent": { "je": "que j'obtienne", "tu": "que tu obtiennes", "il/elle": "qu'il obtienne", "nous": "que nous obtenions", "vous": "que vous obteniez", "ils/elles": "qu'ils obtiennent" },
    "subjonctif imparfait": { "je": "que j'obtinsse", "tu": "que tu obtinsses", "il/elle": "qu'il obtînt", "nous": "que nous obtinssions", "vous": "que vous obtinssiez", "ils/elles": "qu'ils obtinssent" },
    "subjonctif passé": { "je": "que j'aie obtenu", "tu": "que tu aies obtenu", "il/elle": "qu'il ait obtenu", "nous": "que nous ayons obtenu", "vous": "que vous ayez obtenu", "ils/elles": "qu'ils aient obtenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse obtenu", "tu": "que tu eusses obtenu", "il/elle": "qu'il eût obtenu", "nous": "que nous eussions obtenu", "vous": "que vous eussiez obtenu", "ils/elles": "qu'ils eussent obtenu" },
    "conditionnel présent": { "j'": "obtiendrais", "tu": "obtiendrais", "il/elle": "obtiendrait", "nous": "obtiendrions", "vous": "obtiendriez", "ils/elles": "obtiendraient" },
    "conditionnel passé première forme": { "j'": "aurais obtenu", "tu": "aurais obtenu", "il/elle": "aurait obtenu", "nous": "aurions obtenu", "vous": "auriez obtenu", "ils/elles": "auraient obtenu" },
    "conditionnel passé deuxième forme": { "j'": "eusse obtenu", "tu": "eusses obtenu", "il/elle": "eût obtenu", "nous": "eussions obtenu", "vous": "eussiez obtenu", "ils/elles": "eussent obtenu" },
    "impératif présent": { "tu": "obtiens", "nous": "obtenons", "vous": "obtenez" },
    "impératif passé": { "tu": "aie obtenu", "nous": "ayons obtenu", "vous": "ayez obtenu" },
    "infinitif présent": "obtenir",
    "infinitif passé": "avoir obtenu",
    "participe présent": "obtenant",
    "participe passé": "obtenu",
    "gérondif présent": "en obtenant",
    "gérondif passé": "en ayant obtenu"
  }
};

const soutenir: Verb = {
  name: "soutenir",
  conjugations: {
    "indicatif présent": { "je": "soutiens", "tu": "soutiens", "il/elle": "soutient", "nous": "soutenons", "vous": "soutenez", "ils/elles": "soutiennent" },
    "indicatif imparfait": { "je": "soutenais", "tu": "soutenais", "il/elle": "soutenait", "nous": "soutenions", "vous": "souteniez", "ils/elles": "soutenaient" },
    "indicatif passé simple": { "je": "soutins", "tu": "soutins", "il/elle": "soutint", "nous": "soutînmes", "vous": "soutîntes", "ils/elles": "soutinrent" },
    "indicatif futur simple": { "je": "soutiendrai", "tu": "soutiendrai", "il/elle": "soutiendrai", "nous": "soutiendrons", "vous": "soutiendrez", "ils/elles": "soutiendront" },
    "indicatif passé composé": { "je": "ai soutenu", "tu": "as soutenu", "il/elle": "a soutenu", "nous": "avons soutenu", "vous": "avez soutenu", "ils/elles": "ont soutenu" },
    "indicatif plus-que-parfait": { "je": "avais soutenu", "tu": "avais soutenu", "il/elle": "avait soutenu", "nous": "avions soutenu", "vous": "aviez soutenu", "ils/elles": "avaient soutenu" },
    "indicatif passé antérieur": { "je": "eus soutenu", "tu": "eus soutenu", "il/elle": "eut soutenu", "nous": "eûmes soutenu", "vous": "eûtes soutenu", "ils/elles": "eurent soutenu" },
    "indicatif futur antérieur": { "je": "aurai soutenu", "tu": "auras soutenu", "il/elle": "aura soutenu", "nous": "aurons soutenu", "vous": "aurez soutenu", "ils/elles": "auront soutenu" },
    "subjonctif présent": { "je": "que je soutienne", "tu": "que tu soutiennes", "il/elle": "qu'il soutienne", "nous": "que nous soutenions", "vous": "que vous souteniez", "ils/elles": "qu'ils soutiennent" },
    "subjonctif imparfait": { "je": "que je soutinsse", "tu": "que tu soutinsses", "il/elle": "qu'il soutînt", "nous": "que nous soutinssions", "vous": "que vous soutinssiez", "ils/elles": "qu'ils soutinssent" },
    "subjonctif passé": { "je": "que j'aie soutenu", "tu": "que tu aies soutenu", "il/elle": "qu'il ait soutenu", "nous": "que nous ayons soutenu", "vous": "que vous ayez soutenu", "ils/elles": "qu'ils aient soutenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse soutenu", "tu": "que tu eusses soutenu", "il/elle": "qu'il eût soutenu", "nous": "que nous eussions soutenu", "vous": "que vous eussiez soutenu", "ils/elles": "qu'ils eussent soutenu" },
    "conditionnel présent": { "je": "soutiendrais", "tu": "soutiendrais", "il/elle": "soutiendrait", "nous": "soutiendrions", "vous": "soutiendriez", "ils/elles": "soutiendraient" },
    "conditionnel passé première forme": { "je": "aurais soutenu", "tu": "aurais soutenu", "il/elle": "aurait soutenu", "nous": "aurions soutenu", "vous": "auriez soutenu", "ils/elles": "auraient soutenu" },
    "conditionnel passé deuxième forme": { "je": "eusse soutenu", "tu": "eusses soutenu", "il/elle": "eût soutenu", "nous": "eussions soutenu", "vous": "eussiez soutenu", "ils/elles": "eussent soutenu" },
    "impératif présent": { "tu": "soutiens", "nous": "soutenons", "vous": "soutenez" },
    "impératif passé": { "tu": "aie soutenu", "nous": "ayons soutenu", "vous": "ayez soutenu" },
    "infinitif présent": "soutenir",
    "infinitif passé": "avoir soutenu",
    "participe présent": "soutenant",
    "participe passé": "soutenu",
    "gérondif présent": "en soutenant",
    "gérondif passé": "en ayant soutenu"
  }
};

const parvenir: Verb = {
  name: "parvenir",
  conjugations: {
    "indicatif présent": { "je": "parviens", "tu": "parviens", "il/elle": "parvient", "nous": "parvenons", "vous": "parvenez", "ils/elles": "parviennent" },
    "indicatif imparfait": { "je": "parvenais", "tu": "parvenais", "il/elle": "parvenait", "nous": "parvenions", "vous": "parveniez", "ils/elles": "parvenaient" },
    "indicatif passé simple": { "je": "parvins", "tu": "parvins", "il/elle": "parvint", "nous": "parvînmes", "vous": "parvîntes", "ils/elles": "parvinrent" },
    "indicatif futur simple": { "je": "parviendrai", "tu": "parviendras", "il/elle": "parviendra", "nous": "parviendrons", "vous": "parviendrez", "ils/elles": "parviendront" },
    "indicatif passé composé": { "je": "suis parvenu(e)", "tu": "es parvenu(e)", "il/elle": "est parvenu(e)", "nous": "sommes parvenu(e)s", "vous": "êtes parvenu(e)(s)", "ils/elles": "sont parvenu(e)s" },
    "indicatif plus-que-parfait": { "je": "étais parvenu(e)", "tu": "étais parvenu(e)", "il/elle": "était parvenu(e)", "nous": "étions parvenu(e)s", "vous": "étiez parvenu(e)(s)", "ils/elles": "étaient parvenu(e)s" },
    "indicatif passé antérieur": { "je": "fus parvenu(e)", "tu": "fus parvenu(e)", "il/elle": "fut parvenu(e)", "nous": "fûmes parvenu(e)s", "vous": "fûtes parvenu(e)(s)", "ils/elles": "furent parvenu(e)s" },
    "indicatif futur antérieur": { "je": "serai parvenu(e)", "tu": "seras parvenu(e)", "il/elle": "sera parvenu(e)", "nous": "serons parvenu(e)s", "vous": "serez parvenu(e)(s)", "ils/elles": "seront parvenu(e)s" },
    "subjonctif présent": { "je": "que je parvienne", "tu": "que tu parviennes", "il/elle": "qu'il parvienne", "nous": "que nous parvenions", "vous": "que vous parveniez", "ils/elles": "qu'ils parviennent" },
    "subjonctif imparfait": { "je": "que je parvinsse", "tu": "que tu parvinsses", "il/elle": "qu'il parvînt", "nous": "que nous parvinssions", "vous": "que vous parvinssiez", "ils/elles": "qu'ils parvinssent" },
    "subjonctif passé": { "je": "que je sois parvenu(e)", "tu": "que tu sois parvenu(e)", "il/elle": "qu'il soit parvenu(e)", "nous": "que nous soyons parvenu(e)s", "vous": "que vous soyez parvenu(e)(s)", "ils/elles": "qu'ils soient parvenu(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je fusse parvenu(e)", "tu": "que tu fusses parvenu(e)", "il/elle": "qu'il fût parvenu(e)", "nous": "que nous fussions parvenu(e)s", "vous": "que vous fussiez parvenu(e)(s)", "ils/elles": "qu'ils fussent parvenu(e)s" },
    "conditionnel présent": { "je": "parviendrais", "tu": "parviendrais", "il/elle": "parviendrait", "nous": "parviendrions", "vous": "parviendriez", "ils/elles": "parviendraient" },
    "conditionnel passé première forme": { "je": "serais parvenu(e)", "tu": "serais parvenu(e)", "il/elle": "serait parvenu(e)", "nous": "serions parvenu(e)s", "vous": "seriez parvenu(e)(s)", "ils/elles": "seraient parvenu(e)s" },
    "conditionnel passé deuxième forme": { "je": "fusse parvenu(e)", "tu": "fusses parvenu(e)", "il/elle": "fût parvenu(e)", "nous": "fussions parvenu(e)s", "vous": "fussiez parvenu(e)(s)", "ils/elles": "fussent parvenu(e)s" },
    "impératif présent": { "tu": "parviens", "nous": "parvenons", "vous": "parvenez" },
    "impératif passé": { "tu": "sois parvenu(e)", "nous": "soyons parvenu(e)s", "vous": "soyez parvenu(e)(s)" },
    "infinitif présent": "parvenir",
    "infinitif passé": "être parvenu(e)",
    "participe présent": "parvenant",
    "participe passé": "parvenu",
    "gérondif présent": "en parvenant",
    "gérondif passé": "en étant parvenu(e)"
  }
};

const prévenir: Verb = {
  name: "prévenir",
  conjugations: {
    "indicatif présent": { "je": "préviens", "tu": "préviens", "il/elle": "prévient", "nous": "prévenons", "vous": "prévenez", "ils/elles": "préviennent" },
    "indicatif imparfait": { "je": "prévenais", "tu": "prévenais", "il/elle": "prévenait", "nous": "prévenions", "vous": "préveniez", "ils/elles": "prévenaient" },
    "indicatif passé simple": { "je": "prévins", "tu": "prévins", "il/elle": "prévint", "nous": "prévînmes", "vous": "prévîntes", "ils/elles": "prévinrent" },
    "indicatif futur simple": { "je": "préviendrai", "tu": "préviendras", "il/elle": "préviendra", "nous": "préviendrons", "vous": "préviendrez", "ils/elles": "préviendront" },
    "indicatif passé composé": { "je": "ai prévenu", "tu": "as prévenu", "il/elle": "a prévenu", "nous": "avons prévenu", "vous": "avez prévenu", "ils/elles": "ont prévenu" },
    "indicatif plus-que-parfait": { "je": "avais prévenu", "tu": "avais prévenu", "il/elle": "avait prévenu", "nous": "avions prévenu", "vous": "aviez prévenu", "ils/elles": "avaient prévenu" },
    "indicatif passé antérieur": { "je": "eus prévenu", "tu": "eus prévenu", "il/elle": "eut prévenu", "nous": "eûmes prévenu", "vous": "eûtes prévenu", "ils/elles": "eurent prévenu" },
    "indicatif futur antérieur": { "je": "aurai prévenu", "tu": "auras prévenu", "il/elle": "aura prévenu", "nous": "aurons prévenu", "vous": "aurez prévenu", "ils/elles": "auront prévenu" },
    "subjonctif présent": { "je": "que je prévienne", "tu": "que tu préviennes", "il/elle": "qu'il prévienne", "nous": "que nous prévenions", "vous": "que vous préveniez", "ils/elles": "qu'ils préviennent" },
    "subjonctif imparfait": { "je": "que je prévinsse", "tu": "que tu prévinsses", "il/elle": "qu'il prévînt", "nous": "que nous prévinssions", "vous": "que vous prévinssiez", "ils/elles": "qu'ils prévinssent" },
    "subjonctif passé": { "je": "que j'aie prévenu", "tu": "que tu aies prévenu", "il/elle": "qu'il ait prévenu", "nous": "que nous ayons prévenu", "vous": "que vous ayez prévenu", "ils/elles": "qu'ils aient prévenu" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse prévenu", "tu": "que tu eusses prévenu", "il/elle": "qu'il eût prévenu", "nous": "que nous eussions prévenu", "vous": "que vous eussiez prévenu", "ils/elles": "qu'ils eussent prévenu" },
    "conditionnel présent": { "je": "préviendrais", "tu": "préviendrais", "il/elle": "préviendrait", "nous": "préviendrions", "vous": "préviendriez", "ils/elles": "préviendraient" },
    "conditionnel passé première forme": { "je": "aurais prévenu", "tu": "aurais prévenu", "il/elle": "aurait prévenu", "nous": "aurions prévenu", "vous": "auriez prévenu", "ils/elles": "auraient prévenu" },
    "conditionnel passé deuxième forme": { "je": "eusse prévenu", "tu": "eusses prévenu", "il/elle": "eût prévenu", "nous": "eussions prévenu", "vous": "eussiez prévenu", "ils/elles": "eussent prévenu" },
    "impératif présent": { "tu": "préviens", "nous": "prévenons", "vous": "prévenez" },
    "impératif passé": { "tu": "aie prévenu", "nous": "ayons prévenu", "vous": "ayez prévenu" },
    "infinitif présent": "prévenir",
    "infinitif passé": "avoir prévenu",
    "participe présent": "prévenant",
    "participe passé": "prévenu",
    "gérondif présent": "en prévenant",
    "gérondif passé": "en ayant prévenu"
  }
};

const intervenir: Verb = {
  name: "intervenir",
  conjugations: {
    "indicatif présent": { "j'": "interviens", "tu": "interviens", "il/elle": "intervient", "nous": "intervenons", "vous": "intervenez", "ils/elles": "interviennent" },
    "indicatif imparfait": { "j'": "intervenais", "tu": "intervenais", "il/elle": "intervenait", "nous": "intervenions", "vous": "interveniez", "ils/elles": "intervenaient" },
    "indicatif passé simple": { "j'": "intervins", "tu": "intervins", "il/elle": "intervint", "nous": "intervînmes", "vous": "intervîntes", "ils/elles": "intervinrent" },
    "indicatif futur simple": { "j'": "interviendrai", "tu": "interviendras", "il/elle": "interviendra", "nous": "interviendrons", "vous": "interviendrez", "ils/elles": "interviendront" },
    "indicatif passé composé": { "je": "suis intervenu(e)", "tu": "es intervenu(e)", "il/elle": "est intervenu(e)", "nous": "sommes intervenu(e)s", "vous": "êtes intervenu(e)(s)", "ils/elles": "sont intervenu(e)s" },
    "indicatif plus-que-parfait": { "je": "étais intervenu(e)", "tu": "étais intervenu(e)", "il/elle": "était intervenu(e)", "nous": "étions intervenu(e)s", "vous": "étiez intervenu(e)(s)", "ils/elles": "étaient intervenu(e)s" },
    "indicatif passé antérieur": { "je": "fus intervenu(e)", "tu": "fus intervenu(e)", "il/elle": "fut intervenu(e)", "nous": "fûmes intervenu(e)s", "vous": "fûtes intervenu(e)(s)", "ils/elles": "furent intervenu(e)s" },
    "indicatif futur antérieur": { "je": "serai intervenu(e)", "tu": "seras intervenu(e)", "il/elle": "sera intervenu(e)", "nous": "serons intervenu(e)s", "vous": "serez intervenu(e)(s)", "ils/elles": "seront intervenu(e)s" },
    "subjonctif présent": { "je": "que j'intervienne", "tu": "que tu interviennes", "il/elle": "qu'il intervienne", "nous": "que nous intervenions", "vous": "que vous interveniez", "ils/elles": "qu'ils interviennent" },
    "subjonctif imparfait": { "je": "que j'intervinsse", "tu": "que tu intervinsses", "il/elle": "qu'il intervînt", "nous": "que nous intervinssions", "vous": "que vous intervinssiez", "ils/elles": "qu'ils intervinssent" },
    "subjonctif passé": { "je": "que je sois intervenu(e)", "tu": "que tu sois intervenu(e)", "il/elle": "qu'il soit intervenu(e)", "nous": "que nous soyons intervenu(e)s", "vous": "que vous soyez intervenu(e)(s)", "ils/elles": "qu'ils soient intervenu(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je fusse intervenu(e)", "tu": "que tu fusses intervenu(e)", "il/elle": "qu'il fût intervenu(e)", "nous": "que nous fussions intervenu(e)s", "vous": "que vous fussiez intervenu(e)(s)", "ils/elles": "qu'ils fussent intervenu(e)s" },
    "conditionnel présent": { "j'": "interviendrais", "tu": "interviendrais", "il/elle": "interviendrait", "nous": "interviendrions", "vous": "interviendriez", "ils/elles": "interviendraient" },
    "conditionnel passé première forme": { "je": "serais intervenu(e)", "tu": "serais intervenu(e)", "il/elle": "serait intervenu(e)", "nous": "serions intervenu(e)s", "vous": "seriez intervenu(e)(s)", "ils/elles": "seraient intervenu(e)s" },
    "conditionnel passé deuxième forme": { "je": "fusse intervenu(e)", "tu": "fusses intervenu(e)", "il/elle": "fût intervenu(e)", "nous": "fussions intervenu(e)s", "vous": "fussiez intervenu(e)(s)", "ils/elles": "fussent intervenu(e)s" },
    "impératif présent": { "tu": "interviens", "nous": "intervenons", "vous": "intervenez" },
    "impératif passé": { "tu": "sois intervenu(e)", "nous": "soyons intervenu(e)s", "vous": "soyez intervenu(e)(s)" },
    "infinitif présent": "intervenir",
    "infinitif passé": "être intervenu(e)",
    "participe présent": "intervenant",
    "participe passé": "intervenu",
    "gérondif présent": "en intervenant",
    "gérondif passé": "en étant intervenu(e)"
  }
};

const découvrir: Verb = {
  name: "découvrir",
  conjugations: {
    "indicatif présent": { "je": "découvre", "tu": "découvres", "il/elle": "découvre", "nous": "découvrons", "vous": "découvrez", "ils/elles": "découvrent" },
    "indicatif imparfait": { "je": "découvrais", "tu": "découvrais", "il/elle": "découvrait", "nous": "découvrions", "vous": "découvriez", "ils/elles": "découvraient" },
    "indicatif passé simple": { "je": "découvris", "tu": "découvris", "il/elle": "découvrit", "nous": "découvrîmes", "vous": "découvrîtes", "ils/elles": "découvrirent" },
    "indicatif futur simple": { "je": "découvrirai", "tu": "découvriras", "il/elle": "découvrira", "nous": "découvrirons", "vous": "découvrirez", "ils/elles": "découvriront" },
    "indicatif passé composé": { "je": "ai découvert", "tu": "as découvert", "il/elle": "a découvert", "nous": "avons découvert", "vous": "avez découvert", "ils/elles": "ont découvert" },
    "indicatif plus-que-parfait": { "je": "avais découvert", "tu": "avais découvert", "il/elle": "avait découvert", "nous": "avions découvert", "vous": "aviez découvert", "ils/elles": "avaient découvert" },
    "indicatif passé antérieur": { "je": "eus découvert", "tu": "eus découvert", "il/elle": "eut découvert", "nous": "eûmes découvert", "vous": "eûtes découvert", "ils/elles": "eurent découvert" },
    "indicatif futur antérieur": { "je": "aurai découvert", "tu": "auras découvert", "il/elle": "aura découvert", "nous": "aurons découvert", "vous": "aurez découvert", "ils/elles": "auront découvert" },
    "subjonctif présent": { "je": "que je découvre", "tu": "que tu découvres", "il/elle": "qu'il découvre", "nous": "que nous découvrions", "vous": "que vous découvriez", "ils/elles": "qu'ils découvrent" },
    "subjonctif imparfait": { "je": "que je découvrisse", "tu": "que tu découvrisses", "il/elle": "qu'il découvrît", "nous": "que nous découvrissions", "vous": "que vous découvrissiez", "ils/elles": "qu'ils découvrissent" },
    "subjonctif passé": { "je": "que j'aie découvert", "tu": "que tu aies découvert", "il/elle": "qu'il ait découvert", "nous": "que nous ayons découvert", "vous": "que vous ayez découvert", "ils/elles": "qu'ils aient découvert" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse découvert", "tu": "que tu eusses découvert", "il/elle": "qu'il eût découvert", "nous": "que nous eussions découvert", "vous": "que vous eussiez découvert", "ils/elles": "qu'ils eussent découvert" },
    "conditionnel présent": { "je": "découvrirais", "tu": "découvrirais", "il/elle": "découvrirait", "nous": "découvririons", "vous": "découvririez", "ils/elles": "découvriraient" },
    "conditionnel passé première forme": { "je": "aurais découvert", "tu": "aurais découvert", "il/elle": "aurait découvert", "nous": "aurions découvert", "vous": "auriez découvert", "ils/elles": "auraient découvert" },
    "conditionnel passé deuxième forme": { "je": "eusse découvert", "tu": "eusses découvert", "il/elle": "eût découvert", "nous": "eussions découvert", "vous": "eussiez découvert", "ils/elles": "eussent découvert" },
    "impératif présent": { "tu": "découvre", "nous": "découvrons", "vous": "découvrez" },
    "impératif passé": { "tu": "aie découvert", "nous": "ayons découvert", "vous": "ayez découvert" },
    "infinitif présent": "découvrir",
    "infinitif passé": "avoir découvert",
    "participe présent": "découvrant",
    "participe passé": "découvert",
    "gérondif présent": "en découvrant",
    "gérondif passé": "en ayant découvert"
  }
};

const recouvrir: Verb = {
  name: "recouvrir",
  conjugations: {
    "indicatif présent": { "je": "recouvre", "tu": "recouvres", "il/elle": "recouvre", "nous": "recouvrons", "vous": "recouvrez", "ils/elles": "recouvrent" },
    "indicatif imparfait": { "je": "recouvrais", "tu": "recouvrais", "il/elle": "recouvrait", "nous": "recouvrions", "vous": "recouvriez", "ils/elles": "recouvraient" },
    "indicatif passé simple": { "je": "recouvris", "tu": "recouvris", "il/elle": "recouvrit", "nous": "recouvrîmes", "vous": "recouvrîtes", "ils/elles": "recouvrirent" },
    "indicatif futur simple": { "je": "recouvrirai", "tu": "recouvriras", "il/elle": "recouvrira", "nous": "recouvrirons", "vous": "recouvrirez", "ils/elles": "recouvriront" },
    "indicatif passé composé": { "je": "ai recouvert", "tu": "as recouvert", "il/elle": "a recouvert", "nous": "avons recouvert", "vous": "avez recouvert", "ils/elles": "ont recouvert" },
    "indicatif plus-que-parfait": { "je": "avais recouvert", "tu": "avais recouvert", "il/elle": "avait recouvert", "nous": "avions recouvert", "vous": "aviez recouvert", "ils/elles": "avaient recouvert" },
    "indicatif passé antérieur": { "je": "eus recouvert", "tu": "eus recouvert", "il/elle": "eut recouvert", "nous": "eûmes recouvert", "vous": "eûtes recouvert", "ils/elles": "eurent recouvert" },
    "indicatif futur antérieur": { "je": "aurai recouvert", "tu": "auras recouvert", "il/elle": "aura recouvert", "nous": "aurons recouvert", "vous": "aurez recouvert", "ils/elles": "auront recouvert" },
    "subjonctif présent": { "je": "que je recouvre", "tu": "que tu recouvres", "il/elle": "qu'il recouvre", "nous": "que nous recouvrions", "vous": "que vous recouvriez", "ils/elles": "qu'ils recouvrent" },
    "subjonctif imparfait": { "je": "que je recouvrisse", "tu": "que tu recouvrisses", "il/elle": "qu'il recouvrît", "nous": "que nous recouvrissions", "vous": "que vous recouvrissiez", "ils/elles": "qu'ils recouvrissent" },
    "subjonctif passé": { "je": "que j'aie recouvert", "tu": "que tu aies recouvert", "il/elle": "qu'il ait recouvert", "nous": "que nous ayons recouvert", "vous": "que vous ayez recouvert", "ils/elles": "qu'ils aient recouvert" },
    "subjonctif plus-que-parfait": { "je": "que j'eusse recouvert", "tu": "que tu eusses recouvert", "il/elle": "qu'il eût recouvert", "nous": "que nous eussions recouvert", "vous": "que vous eussiez recouvert", "ils/elles": "qu'ils eussent recouvert" },
    "conditionnel présent": { "je": "recouvrirais", "tu": "recouvrirais", "il/elle": "recouvrirait", "nous": "recouvririons", "vous": "recouvririez", "ils/elles": "recouvriraient" },
    "conditionnel passé première forme": { "je": "aurais recouvert", "tu": "aurais recouvert", "il/elle": "aurait recouvert", "nous": "aurions recouvert", "vous": "auriez recouvert", "ils/elles": "auraient recouvert" },
    "conditionnel passé deuxième forme": { "je": "eusse recouvert", "tu": "eusses recouvert", "il/elle": "eût recouvert", "nous": "eussions recouvert", "vous": "eussiez recouvert", "ils/elles": "eussent recouvert" },
    "impératif présent": { "tu": "recouvre", "nous": "recouvrons", "vous": "recouvrez" },
    "impératif passé": { "tu": "aie recouvert", "nous": "ayons recouvert", "vous": "ayez recouvert" },
    "infinitif présent": "recouvrir",
    "infinitif passé": "avoir recouvert",
    "participe présent": "recouvrant",
    "participe passé": "recouvert",
    "gérondif présent": "en recouvrant",
    "gérondif passé": "en ayant recouvert"
  }
};

export default {
  appartenir,
  contenir,
  maintenir,
  obtenir,
  soutenir,
  parvenir,
  prévenir,
  intervenir,
  découvrir,
  recouvrir
};