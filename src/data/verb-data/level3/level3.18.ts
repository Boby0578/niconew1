import { Verb } from '../../verbs';

const seLever: Verb = {
  name: "se lever",
  conjugations: {
    "indicatif présent": { "je": "me lève", "tu": "te lèves", "il/elle": "se lève", "nous": "nous levons", "vous": "vous levez", "ils/elles": "se lèvent" },
    "indicatif imparfait": { "je": "me levais", "tu": "te levais", "il/elle": "se levait", "nous": "nous levions", "vous": "vous leviez", "ils/elles": "se levaient" },
    "indicatif passé simple": { "je": "me levai", "tu": "te levas", "il/elle": "se leva", "nous": "nous levâmes", "vous": "vous levâtes", "ils/elles": "se levèrent" },
    "indicatif futur simple": { "je": "me lèverai", "tu": "te lèveras", "il/elle": "se lèvera", "nous": "nous lèverons", "vous": "vous lèverez", "ils/elles": "se lèveront" },
    "indicatif passé composé": { "je": "me suis levé(e)", "tu": "t'es levé(e)", "il/elle": "s'est levé(e)", "nous": "nous sommes levé(e)s", "vous": "vous êtes levé(e)(s)", "ils/elles": "se sont levé(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais levé(e)", "tu": "t'étais levé(e)", "il/elle": "s'était levé(e)", "nous": "nous étions levé(e)s", "vous": "vous étiez levé(e)(s)", "ils/elles": "s'étaient levé(e)s" },
    "indicatif passé antérieur": { "je": "me fus levé(e)", "tu": "te fus levé(e)", "il/elle": "se fut levé(e)", "nous": "nous fûmes levé(e)s", "vous": "vous fûtes levé(e)(s)", "ils/elles": "se furent levé(e)s" },
    "indicatif futur antérieur": { "je": "me serai levé(e)", "tu": "te seras levé(e)", "il/elle": "se sera levé(e)", "nous": "nous serons levé(e)s", "vous": "vous serez levé(e)(s)", "ils/elles": "se seront levé(e)s" },
    "subjonctif présent": { "je": "que je me lève", "tu": "que tu te lèves", "il/elle": "qu'il se lève", "nous": "que nous nous levions", "vous": "que vous vous leviez", "ils/elles": "qu'ils se lèvent" },
    "subjonctif imparfait": { "je": "que je me levasse", "tu": "que tu te levasses", "il/elle": "qu'il se levât", "nous": "que nous nous levassions", "vous": "que vous vous levassiez", "ils/elles": "qu'ils se levassent" },
    "subjonctif passé": { "je": "que je me sois levé(e)", "tu": "que tu te sois levé(e)", "il/elle": "qu'il se soit levé(e)", "nous": "que nous nous soyons levé(e)s", "vous": "que vous vous soyez levé(e)(s)", "ils/elles": "qu'ils se soient levé(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse levé(e)", "tu": "que tu te fusses levé(e)", "il/elle": "qu'il se fût levé(e)", "nous": "que nous nous fussions levé(e)s", "vous": "que vous vous fussiez levé(e)(s)", "ils/elles": "qu'ils se fussent levé(e)s" },
    "conditionnel présent": { "je": "me lèverais", "tu": "te lèverais", "il/elle": "se lèverait", "nous": "nous lèverions", "vous": "vous lèveriez", "ils/elles": "se lèveraient" },
    "conditionnel passé première forme": { "je": "me serais levé(e)", "tu": "te serais levé(e)", "il/elle": "se serait levé(e)", "nous": "nous serions levé(e)s", "vous": "vous seriez levé(e)(s)", "ils/elles": "se seraient levé(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse levé(e)", "tu": "te fusses levé(e)", "il/elle": "se fût levé(e)", "nous": "nous fussions levé(e)s", "vous": "vous fussiez levé(e)(s)", "ils/elles": "se fussent levé(e)s" },
    "impératif présent": { "tu": "lève-toi", "nous": "levons-nous", "vous": "levez-vous" },
    "impératif passé": { "tu": "sois-toi levé(e)", "nous": "soyons-nous levé(e)s", "vous": "soyez-vous levé(e)(s)" },
    "infinitif présent": "se lever",
    "infinitif passé": "s'être levé(e)",
    "participe présent": "se levant",
    "participe passé": "levé",
    "gérondif présent": "en se levant",
    "gérondif passé": "en s'étant levé(e)"
  }
};

const seCoucher: Verb = {
  name: "se coucher",
  conjugations: {
    "indicatif présent": { "je": "me couche", "tu": "te couches", "il/elle": "se couche", "nous": "nous couchons", "vous": "vous couchez", "ils/elles": "se couchent" },
    "indicatif imparfait": { "je": "me couchais", "tu": "te couchais", "il/elle": "se couchait", "nous": "nous couchions", "vous": "vous couchiez", "ils/elles": "se couchaient" },
    "indicatif passé simple": { "je": "me couchai", "tu": "te couchas", "il/elle": "se coucha", "nous": "nous couchâmes", "vous": "vous couchâtes", "ils/elles": "se couchèrent" },
    "indicatif futur simple": { "je": "me coucherai", "tu": "te coucheras", "il/elle": "se couchera", "nous": "nous coucherons", "vous": "vous coucherez", "ils/elles": "se coucheront" },
    "indicatif passé composé": { "je": "me suis couché(e)", "tu": "t'es couché(e)", "il/elle": "s'est couché(e)", "nous": "nous sommes couché(e)s", "vous": "vous êtes couché(e)(s)", "ils/elles": "se sont couché(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais couché(e)", "tu": "t'étais couché(e)", "il/elle": "s'était couché(e)", "nous": "nous étions couché(e)s", "vous": "vous étiez couché(e)(s)", "ils/elles": "s'étaient couché(e)s" },
    "indicatif passé antérieur": { "je": "me fus couché(e)", "tu": "te fus couché(e)", "il/elle": "se fut couché(e)", "nous": "nous fûmes couché(e)s", "vous": "vous fûtes couché(e)(s)", "ils/elles": "se furent couché(e)s" },
    "indicatif futur antérieur": { "je": "me serai couché(e)", "tu": "te seras couché(e)", "il/elle": "se sera couché(e)", "nous": "nous serons couché(e)s", "vous": "vous serez couché(e)(s)", "ils/elles": "se seront couché(e)s" },
    "subjonctif présent": { "je": "que je me couche", "tu": "que tu te couches", "il/elle": "qu'il se couche", "nous": "que nous nous couchions", "vous": "que vous vous couchiez", "ils/elles": "qu'ils se couchent" },
    "subjonctif imparfait": { "je": "que je me couchasse", "tu": "que tu te couchasses", "il/elle": "qu'il se couchât", "nous": "que nous nous couchassions", "vous": "que vous vous couchassiez", "ils/elles": "qu'ils se couchassent" },
    "subjonctif passé": { "je": "que je me sois couché(e)", "tu": "que tu te sois couché(e)", "il/elle": "qu'il se soit couché(e)", "nous": "que nous nous soyons couché(e)s", "vous": "que vous vous soyez couché(e)(s)", "ils/elles": "qu'ils se soient couché(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse couché(e)", "tu": "que tu te fusses couché(e)", "il/elle": "qu'il se fût couché(e)", "nous": "que nous nous fussions couché(e)s", "vous": "que vous vous fussiez couché(e)(s)", "ils/elles": "qu'ils se fussent couché(e)s" },
    "conditionnel présent": { "je": "me coucherais", "tu": "te coucherais", "il/elle": "se coucherait", "nous": "nous coucherions", "vous": "vous coucheriez", "ils/elles": "se coucheraient" },
    "conditionnel passé première forme": { "je": "me serais couché(e)", "tu": "te serais couché(e)", "il/elle": "se serait couché(e)", "nous": "nous serions couché(e)s", "vous": "vous seriez couché(e)(s)", "ils/elles": "se seraient couché(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse couché(e)", "tu": "te fusses couché(e)", "il/elle": "se fût couché(e)", "nous": "nous fussions couché(e)s", "vous": "vous fussiez couché(e)(s)", "ils/elles": "se fussent couché(e)s" },
    "impératif présent": { "tu": "couche-toi", "nous": "couchons-nous", "vous": "couchez-vous" },
    "impératif passé": { "tu": "sois-toi couché(e)", "nous": "soyons-nous couché(e)s", "vous": "soyez-vous couché(e)(s)" },
    "infinitif présent": "se coucher",
    "infinitif passé": "s'être couché(e)",
    "participe présent": "se couchant",
    "participe passé": "couché",
    "gérondif présent": "en se couchant",
    "gérondif passé": "en s'étant couché(e)"
  }
};

const seLaver: Verb = {
  name: "se laver",
  conjugations: {
    "indicatif présent": { "je": "me lave", "tu": "te laves", "il/elle": "se lave", "nous": "nous lavons", "vous": "vous lavez", "ils/elles": "se lavent" },
    "indicatif imparfait": { "je": "me lavais", "tu": "te lavais", "il/elle": "se lavait", "nous": "nous lavions", "vous": "vous laviez", "ils/elles": "se lavaient" },
    "indicatif passé simple": { "je": "me lavai", "tu": "te lavas", "il/elle": "se lava", "nous": "nous lavâmes", "vous": "vous lavâtes", "ils/elles": "se lavèrent" },
    "indicatif futur simple": { "je": "me laverai", "tu": "te laveras", "il/elle": "se lavera", "nous": "nous laverons", "vous": "vous laverez", "ils/elles": "se laveront" },
    "indicatif passé composé": { "je": "me suis lavé(e)", "tu": "t'es lavé(e)", "il/elle": "s'est lavé(e)", "nous": "nous sommes lavé(e)s", "vous": "vous êtes lavé(e)(s)", "ils/elles": "se sont lavé(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais lavé(e)", "tu": "t'étais lavé(e)", "il/elle": "s'était lavé(e)", "nous": "nous étions lavé(e)s", "vous": "vous étiez lavé(e)(s)", "ils/elles": "s'étaient lavé(e)s" },
    "indicatif passé antérieur": { "je": "me fus lavé(e)", "tu": "te fus lavé(e)", "il/elle": "se fut lavé(e)", "nous": "nous fûmes lavé(e)s", "vous": "vous fûtes lavé(e)(s)", "ils/elles": "se furent lavé(e)s" },
    "indicatif futur antérieur": { "je": "me serai lavé(e)", "tu": "te seras lavé(e)", "il/elle": "se sera lavé(e)", "nous": "nous serons lavé(e)s", "vous": "vous serez lavé(e)(s)", "ils/elles": "se seront lavé(e)s" },
    "subjonctif présent": { "je": "que je me lave", "tu": "que tu te laves", "il/elle": "qu'il se lave", "nous": "que nous nous lavions", "vous": "que vous vous laviez", "ils/elles": "qu'ils se lavent" },
    "subjonctif imparfait": { "je": "que je me lavasse", "tu": "que tu te lavasses", "il/elle": "qu'il se lavât", "nous": "que nous nous lavassions", "vous": "que vous vous lavassiez", "ils/elles": "qu'ils se lavassent" },
    "subjonctif passé": { "je": "que je me sois lavé(e)", "tu": "que tu te sois lavé(e)", "il/elle": "qu'il se soit lavé(e)", "nous": "que nous nous soyons lavé(e)s", "vous": "que vous vous soyez lavé(e)(s)", "ils/elles": "qu'ils se soient lavé(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse lavé(e)", "tu": "que tu te fusses lavé(e)", "il/elle": "qu'il se fût lavé(e)", "nous": "que nous nous fussions lavé(e)s", "vous": "que vous vous fussiez lavé(e)(s)", "ils/elles": "qu'ils se fussent lavé(e)s" },
    "conditionnel présent": { "je": "me laverais", "tu": "te laverais", "il/elle": "se laverait", "nous": "nous laverions", "vous": "vous laveriez", "ils/elles": "se laveraient" },
    "conditionnel passé première forme": { "je": "me serais lavé(e)", "tu": "te serais lavé(e)", "il/elle": "se serait lavé(e)", "nous": "nous serions lavé(e)s", "vous": "vous seriez lavé(e)(s)", "ils/elles": "se seraient lavé(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse lavé(e)", "tu": "te fusses lavé(e)", "il/elle": "se fût lavé(e)", "nous": "nous fussions lavé(e)s", "vous": "vous fussiez lavé(e)(s)", "ils/elles": "se fussent lavé(e)s" },
    "impératif présent": { "tu": "lave-toi", "nous": "lavons-nous", "vous": "lavez-vous" },
    "impératif passé": { "tu": "sois-toi lavé(e)", "nous": "soyons-nous lavé(e)s", "vous": "soyez-vous lavé(e)(s)" },
    "infinitif présent": "se laver",
    "infinitif passé": "s'être lavé(e)",
    "participe présent": "se lavant",
    "participe passé": "lavé",
    "gérondif présent": "en se lavant",
    "gérondif passé": "en s'étant lavé(e)"
  }
};

const sePromener: Verb = {
  name: "se promener",
  conjugations: {
    "indicatif présent": { "je": "me promène", "tu": "te promènes", "il/elle": "se promène", "nous": "nous promenons", "vous": "vous promenez", "ils/elles": "se promènent" },
    "indicatif imparfait": { "je": "me promenais", "tu": "te promenais", "il/elle": "se promenait", "nous": "nous promenions", "vous": "vous promeniez", "ils/elles": "se promenaient" },
    "indicatif passé simple": { "je": "me promenai", "tu": "te promenas", "il/elle": "se promena", "nous": "nous promenâmes", "vous": "vous promenâtes", "ils/elles": "se promenèrent" },
    "indicatif futur simple": { "je": "me promènerai", "tu": "te promèneras", "il/elle": "se promènera", "nous": "nous promènerons", "vous": "vous promènerez", "ils/elles": "se promèneront" },
    "indicatif passé composé": { "je": "me suis promené(e)", "tu": "t'es promené(e)", "il/elle": "s'est promené(e)", "nous": "nous sommes promené(e)s", "vous": "vous êtes promené(e)(s)", "ils/elles": "se sont promené(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais promené(e)", "tu": "t'étais promené(e)", "il/elle": "s'était promené(e)", "nous": "nous étions promené(e)s", "vous": "vous étiez promené(e)(s)", "ils/elles": "s'étaient promené(e)s" },
    "indicatif passé antérieur": { "je": "me fus promené(e)", "tu": "te fus promené(e)", "il/elle": "se fut promené(e)", "nous": "nous fûmes promené(e)s", "vous": "vous fûtes promené(e)(s)", "ils/elles": "se furent promené(e)s" },
    "indicatif futur antérieur": { "je": "me serai promené(e)", "tu": "te seras promené(e)", "il/elle": "se sera promené(e)", "nous": "nous serons promené(e)s", "vous": "vous serez promené(e)(s)", "ils/elles": "se seront promené(e)s" },
    "subjonctif présent": { "je": "que je me promène", "tu": "que tu te promènes", "il/elle": "qu'il se promène", "nous": "que nous nous promenions", "vous": "que vous vous promeniez", "ils/elles": "qu'ils se promènent" },
    "subjonctif imparfait": { "je": "que je me promenasse", "tu": "que tu te promenasses", "il/elle": "qu'il se promenât", "nous": "que nous nous promenassions", "vous": "que vous vous promenassiez", "ils/elles": "qu'ils se promenassent" },
    "subjonctif passé": { "je": "que je me sois promené(e)", "tu": "que tu te sois promené(e)", "il/elle": "qu'il se soit promené(e)", "nous": "que nous nous soyons promené(e)s", "vous": "que vous vous soyez promené(e)(s)", "ils/elles": "qu'ils se soient promené(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse promené(e)", "tu": "que tu te fusses promené(e)", "il/elle": "qu'il se fût promené(e)", "nous": "que nous nous fussions promené(e)s", "vous": "que vous vous fussiez promené(e)(s)", "ils/elles": "qu'ils se fussent promené(e)s" },
    "conditionnel présent": { "je": "me promènerais", "tu": "te promènerais", "il/elle": "se promènerait", "nous": "nous promènerions", "vous": "vous promèneriez", "ils/elles": "se promèneraient" },
    "conditionnel passé première forme": { "je": "me serais promené(e)", "tu": "te serais promené(e)", "il/elle": "se serait promené(e)", "nous": "nous serions promené(e)s", "vous": "vous seriez promené(e)(s)", "ils/elles": "se seraient promené(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse promené(e)", "tu": "te fusses promené(e)", "il/elle": "se fût promené(e)", "nous": "nous fussions promené(e)s", "vous": "vous fussiez promené(e)(s)", "ils/elles": "se fussent promené(e)s" },
    "impératif présent": { "tu": "promène-toi", "nous": "promenons-nous", "vous": "promenez-vous" },
    "impératif passé": { "tu": "sois-toi promené(e)", "nous": "soyons-nous promené(e)s", "vous": "soyez-vous promené(e)(s)" },
    "infinitif présent": "se promener",
    "infinitif passé": "s'être promené(e)",
    "participe présent": "se promenant",
    "participe passé": "promené",
    "gérondif présent": "en se promenant",
    "gérondif passé": "en s'étant promené(e)"
  }
};

const seSouvenir: Verb = {
  name: "se souvenir",
  conjugations: {
    "indicatif présent": { "je": "me souviens", "tu": "te souviens", "il/elle": "se souvient", "nous": "nous souvenons", "vous": "vous souvenez", "ils/elles": "se souviennent" },
    "indicatif imparfait": { "je": "me souvenais", "tu": "te souvenais", "il/elle": "se souvenait", "nous": "nous souvenions", "vous": "vous souveniez", "ils/elles": "se souvenaient" },
    "indicatif passé simple": { "je": "me souvins", "tu": "te souvins", "il/elle": "se souvint", "nous": "nous souvînmes", "vous": "vous souvîntes", "ils/elles": "se souvinrent" },
    "indicatif futur simple": { "je": "me souviendrai", "tu": "te souviendras", "il/elle": "se souviendra", "nous": "nous souviendrons", "vous": "vous souviendrez", "ils/elles": "se souviendront" },
    "indicatif passé composé": { "je": "me suis souvenu(e)", "tu": "t'es souvenu(e)", "il/elle": "s'est souvenu(e)", "nous": "nous sommes souvenu(e)s", "vous": "vous êtes souvenu(e)(s)", "ils/elles": "se sont souvenu(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais souvenu(e)", "tu": "t'étais souvenu(e)", "il/elle": "s'était souvenu(e)", "nous": "nous étions souvenu(e)s", "vous": "vous étiez souvenu(e)(s)", "ils/elles": "s'étaient souvenu(e)s" },
    "indicatif passé antérieur": { "je": "me fus souvenu(e)", "tu": "te fus souvenu(e)", "il/elle": "se fut souvenu(e)", "nous": "nous fûmes souvenu(e)s", "vous": "vous fûtes souvenu(e)(s)", "ils/elles": "se furent souvenu(e)s" },
    "indicatif futur antérieur": { "je": "me serai souvenu(e)", "tu": "te seras souvenu(e)", "il/elle": "se sera souvenu(e)", "nous": "nous serons souvenu(e)s", "vous": "vous serez souvenu(e)(s)", "ils/elles": "se seront souvenu(e)s" },
    "subjonctif présent": { "je": "que je me souvienne", "tu": "que tu te souviennes", "il/elle": "qu'il se souvienne", "nous": "que nous nous souvenions", "vous": "que vous vous souveniez", "ils/elles": "qu'ils se souviennent" },
    "subjonctif imparfait": { "je": "que je me souvinsse", "tu": "que tu te souvinsses", "il/elle": "qu'il se souvînt", "nous": "que nous nous souvinssions", "vous": "que vous vous souvinssiez", "ils/elles": "qu'ils se souvinssent" },
    "subjonctif passé": { "je": "que je me sois souvenu(e)", "tu": "que tu te sois souvenu(e)", "il/elle": "qu'il se soit souvenu(e)", "nous": "que nous nous soyons souvenu(e)s", "vous": "que vous vous soyez souvenu(e)(s)", "ils/elles": "qu'ils se soient souvenu(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse souvenu(e)", "tu": "que tu te fusses souvenu(e)", "il/elle": "qu'il se fût souvenu(e)", "nous": "que nous nous fussions souvenu(e)s", "vous": "que vous vous fussiez souvenu(e)(s)", "ils/elles": "qu'ils se fussent souvenu(e)s" },
    "conditionnel présent": { "je": "me souviendrais", "tu": "te souviendrais", "il/elle": "se souviendrait", "nous": "nous souviendrions", "vous": "vous souviendriez", "ils/elles": "se souviendraient" },
    "conditionnel passé première forme": { "je": "me serais souvenu(e)", "tu": "te serais souvenu(e)", "il/elle": "se serait souvenu(e)", "nous": "nous serions souvenu(e)s", "vous": "vous seriez souvenu(e)(s)", "ils/elles": "se seraient souvenu(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse souvenu(e)", "tu": "te fusses souvenu(e)", "il/elle": "se fût souvenu(e)", "nous": "nous fussions souvenu(e)s", "vous": "vous fussiez souvenu(e)(s)", "ils/elles": "se fussent souvenu(e)s" },
    "impératif présent": { "tu": "souviens-toi", "nous": "souvenons-nous", "vous": "souvenez-vous" },
    "impératif passé": { "tu": "sois-toi souvenu(e)", "nous": "soyons-nous souvenu(e)s", "vous": "soyez-vous souvenu(e)(s)" },
    "infinitif présent": "se souvenir",
    "infinitif passé": "s'être souvenu(e)",
    "participe présent": "se souvenant",
    "participe passé": "souvenu",
    "gérondif présent": "en se souvenant",
    "gérondif passé": "en s'étant souvenu(e)"
  }
};

const seTaire: Verb = {
  name: "se taire",
  conjugations: {
    "indicatif présent": { "je": "me tais", "tu": "te tais", "il/elle": "se tait", "nous": "nous taisons", "vous": "vous taisez", "ils/elles": "se taisent" },
    "indicatif imparfait": { "je": "me taisais", "tu": "te taisais", "il/elle": "se taisait", "nous": "nous taisions", "vous": "vous taisiez", "ils/elles": "se taisaient" },
    "indicatif passé simple": { "je": "me tus", "tu": "te tus", "il/elle": "se tut", "nous": "nous tûmes", "vous": "vous tûtes", "ils/elles": "se turent" },
    "indicatif futur simple": { "je": "me tairai", "tu": "te tairas", "il/elle": "se taira", "nous": "nous tairons", "vous": "vous tairez", "ils/elles": "se tairont" },
    "indicatif passé composé": { "je": "me suis tu(e)", "tu": "t'es tu(e)", "il/elle": "s'est tu(e)", "nous": "nous sommes tu(e)s", "vous": "vous êtes tu(e)(s)", "ils/elles": "se sont tu(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais tu(e)", "tu": "t'étais tu(e)", "il/elle": "s'était tu(e)", "nous": "nous étions tu(e)s", "vous": "vous étiez tu(e)(s)", "ils/elles": "s'étaient tu(e)s" },
    "indicatif passé antérieur": { "je": "me fus tu(e)", "tu": "te fus tu(e)", "il/elle": "se fut tu(e)", "nous": "nous fûmes tu(e)s", "vous": "vous fûtes tu(e)(s)", "ils/elles": "se furent tu(e)s" },
    "indicatif futur antérieur": { "je": "me serai tu(e)", "tu": "te seras tu(e)", "il/elle": "se sera tu(e)", "nous": "nous serons tu(e)s", "vous": "vous serez tu(e)(s)", "ils/elles": "se seront tu(e)s" },
    "subjonctif présent": { "je": "que je me taise", "tu": "que tu te taises", "il/elle": "qu'il se taise", "nous": "que nous nous taisions", "vous": "que vous vous taisiez", "ils/elles": "qu'ils se taisent" },
    "subjonctif imparfait": { "je": "que je me tusse", "tu": "que tu te tusses", "il/elle": "qu'il se tût", "nous": "que nous nous tussions", "vous": "que vous vous tussiez", "ils/elles": "qu'ils se tussent" },
    "subjonctif passé": { "je": "que je me sois tu(e)", "tu": "que tu te sois tu(e)", "il/elle": "qu'il se soit tu(e)", "nous": "que nous nous soyons tu(e)s", "vous": "que vous vous soyez tu(e)(s)", "ils/elles": "qu'ils se soient tu(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse tu(e)", "tu": "que tu te fusses tu(e)", "il/elle": "qu'il se fût tu(e)", "nous": "que nous nous fussions tu(e)s", "vous": "que vous vous fussiez tu(e)(s)", "ils/elles": "qu'ils se fussent tu(e)s" },
    "conditionnel présent": { "je": "me tairais", "tu": "te tairais", "il/elle": "se tairait", "nous": "nous tairions", "vous": "vous tairiez", "ils/elles": "se tairaient" },
    "conditionnel passé première forme": { "je": "me serais tu(e)", "tu": "te serais tu(e)", "il/elle": "se serait tu(e)", "nous": "nous serions tu(e)s", "vous": "vous seriez tu(e)(s)", "ils/elles": "se seraient tu(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse tu(e)", "tu": "te fusses tu(e)", "il/elle": "se fût tu(e)", "nous": "nous fussions tu(e)s", "vous": "vous fussiez tu(e)(s)", "ils/elles": "se fussent tu(e)s" },
    "impératif présent": { "tu": "tais-toi", "nous": "taisons-nous", "vous": "taisez-vous" },
    "impératif passé": { "tu": "sois-toi tu(e)", "nous": "soyons-nous tu(e)s", "vous": "soyez-vous tu(e)(s)" },
    "infinitif présent": "se taire",
    "infinitif passé": "s'être tu(e)",
    "participe présent": "se taisant",
    "participe passé": "tu",
    "gérondif présent": "en se taisant",
    "gérondif passé": "en s'étant tu(e)"
  }
};

const sePlindre: Verb = {
  name: "se plaindre",
  conjugations: {
    "indicatif présent": { "je": "me plains", "tu": "te plains", "il/elle": "se plaint", "nous": "nous plaignons", "vous": "vous plaignez", "ils/elles": "se plaignent" },
    "indicatif imparfait": { "je": "me plaignais", "tu": "te plaignais", "il/elle": "se plaignait", "nous": "nous plaignions", "vous": "vous plaigniez", "ils/elles": "se plaignaient" },
    "indicatif passé simple": { "je": "me plaignis", "tu": "te plaignis", "il/elle": "se plaignit", "nous": "nous plaignîmes", "vous": "vous plaignîtes", "ils/elles": "se plaignirent" },
    "indicatif futur simple": { "je": "me plaindrai", "tu": "te plaindras", "il/elle": "se plaindra", "nous": "nous plaindrons", "vous": "vous plaindrez", "ils/elles": "se plaindront" },
    "indicatif passé composé": { "je": "me suis plaint(e)", "tu": "t'es plaint(e)", "il/elle": "s'est plaint(e)", "nous": "nous sommes plaint(e)s", "vous": "vous êtes plaint(e)(s)", "ils/elles": "se sont plaint(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais plaint(e)", "tu": "t'étais plaint(e)", "il/elle": "s'était plaint(e)", "nous": "nous étions plaint(e)s", "vous": "vous étiez plaint(e)(s)", "ils/elles": "s'étaient plaint(e)s" },
    "indicatif passé antérieur": { "je": "me fus plaint(e)", "tu": "te fus plaint(e)", "il/elle": "se fut plaint(e)", "nous": "nous fûmes plaint(e)s", "vous": "vous fûtes plaint(e)(s)", "ils/elles": "se furent plaint(e)s" },
    "indicatif futur antérieur": { "je": "me serai plaint(e)", "tu": "te seras plaint(e)", "il/elle": "se sera plaint(e)", "nous": "nous serons plaint(e)s", "vous": "vous serez plaint(e)(s)", "ils/elles": "se seront plaint(e)s" },
    "subjonctif présent": { "je": "que je me plaigne", "tu": "que tu te plaignes", "il/elle": "qu'il se plaigne", "nous": "que nous nous plaignions", "vous": "que vous vous plaigniez", "ils/elles": "qu'ils se plaignent" },
    "subjonctif imparfait": { "je": "que je me plaignisse", "tu": "que tu te plaignisses", "il/elle": "qu'il se plaignît", "nous": "que nous nous plaignissions", "vous": "que vous vous plaignissiez", "ils/elles": "qu'ils se plaignissent" },
    "subjonctif passé": { "je": "que je me sois plaint(e)", "tu": "que tu te sois plaint(e)", "il/elle": "qu'il se soit plaint(e)", "nous": "que nous nous soyons plaint(e)s", "vous": "que vous vous soyez plaint(e)(s)", "ils/elles": "qu'ils se soient plaint(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse plaint(e)", "tu": "que tu te fusses plaint(e)", "il/elle": "qu'il se fût plaint(e)", "nous": "que nous nous fussions plaint(e)s", "vous": "que vous vous fussiez plaint(e)(s)", "ils/elles": "qu'ils se fussent plaint(e)s" },
    "conditionnel présent": { "je": "me plaindrais", "tu": "te plaindrais", "il/elle": "se plaindrait", "nous": "nous plaindrions", "vous": "vous plaindriez", "ils/elles": "se plaindraient" },
    "conditionnel passé première forme": { "je": "me serais plaint(e)", "tu": "te serais plaint(e)", "il/elle": "se serait plaint(e)", "nous": "nous serions plaint(e)s", "vous": "vous seriez plaint(e)(s)", "ils/elles": "se seraient plaint(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse plaint(e)", "tu": "te fusses plaint(e)", "il/elle": "se fût plaint(e)", "nous": "nous fussions plaint(e)s", "vous": "vous fussiez plaint(e)(s)", "ils/elles": "se fussent plaint(e)s" },
    "impératif présent": { "tu": "plains-toi", "nous": "plaignons-nous", "vous": "plaignez-vous" },
    "impératif passé": { "tu": "sois-toi plaint(e)", "nous": "soyons-nous plaint(e)s", "vous": "soyez-vous plaint(e)(s)" },
    "infinitif présent": "se plaindre",
    "infinitif passé": "s'être plaint(e)",
    "participe présent": "se plaignant",
    "participe passé": "plaint",
    "gérondif présent": "en se plaignant",
    "gérondif passé": "en s'étant plaint(e)"
  }
};

const seServir: Verb = {
  name: "se servir",
  conjugations: {
    "indicatif présent": { "je": "me sers", "tu": "te sers", "il/elle": "se sert", "nous": "nous servons", "vous": "vous servez", "ils/elles": "se servent" },
    "indicatif imparfait": { "je": "me servais", "tu": "te servais", "il/elle": "se servait", "nous": "nous servions", "vous": "vous serviez", "ils/elles": "se servaient" },
    "indicatif passé simple": { "je": "me servis", "tu": "te servis", "il/elle": "se servit", "nous": "nous servîmes", "vous": "vous servîtes", "ils/elles": "se servirent" },
    "indicatif futur simple": { "je": "me servirai", "tu": "te serviras", "il/elle": "se servira", "nous": "nous servirons", "vous": "vous servirez", "ils/elles": "se serviront" },
    "indicatif passé composé": { "je": "me suis servi(e)", "tu": "t'es servi(e)", "il/elle": "s'est servi(e)", "nous": "nous sommes servi(e)s", "vous": "vous êtes servi(e)(s)", "ils/elles": "se sont servi(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais servi(e)", "tu": "t'étais servi(e)", "il/elle": "s'était servi(e)", "nous": "nous étions servi(e)s", "vous": "vous étiez servi(e)(s)", "ils/elles": "s'étaient servi(e)s" },
    "indicatif passé antérieur": { "je": "me fus servi(e)", "tu": "te fus servi(e)", "il/elle": "se fut servi(e)", "nous": "nous fûmes servi(e)s", "vous": "vous fûtes servi(e)(s)", "ils/elles": "se furent servi(e)s" },
    "indicatif futur antérieur": { "je": "me serai servi(e)", "tu": "te seras servi(e)", "il/elle": "se sera servi(e)", "nous": "nous serons servi(e)s", "vous": "vous serez servi(e)(s)", "ils/elles": "se seront servi(e)s" },
    "subjonctif présent": { "je": "que je me serve", "tu": "que tu te serves", "il/elle": "qu'il se serve", "nous": "que nous nous servions", "vous": "que vous vous serviez", "ils/elles": "qu'ils se servent" },
    "subjonctif imparfait": { "je": "que je me servisse", "tu": "que tu te servisses", "il/elle": "qu'il se servît", "nous": "que nous nous servissions", "vous": "que vous vous servissiez", "ils/elles": "qu'ils se servissent" },
    "subjonctif passé": { "je": "que je me sois servi(e)", "tu": "que tu te sois servi(e)", "il/elle": "qu'il se soit servi(e)", "nous": "que nous nous soyons servi(e)s", "vous": "que vous vous soyez servi(e)(s)", "ils/elles": "qu'ils se soient servi(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse servi(e)", "tu": "que tu te fusses servi(e)", "il/elle": "qu'il se fût servi(e)", "nous": "que nous nous fussions servi(e)s", "vous": "que vous vous fussiez servi(e)(s)", "ils/elles": "qu'ils se fussent servi(e)s" },
    "conditionnel présent": { "je": "me servirais", "tu": "te servirais", "il/elle": "se servirait", "nous": "nous servirions", "vous": "vous serviriez", "ils/elles": "se serviraient" },
    "conditionnel passé première forme": { "je": "me serais servi(e)", "tu": "te serais servi(e)", "il/elle": "se serait servi(e)", "nous": "nous serions servi(e)s", "vous": "vous seriez servi(e)(s)", "ils/elles": "se seraient servi(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse servi(e)", "tu": "te fusses servi(e)", "il/elle": "se fût servi(e)", "nous": "nous fussions servi(e)s", "vous": "vous fussiez servi(e)(s)", "ils/elles": "se fussent servi(e)s" },
    "impératif présent": { "tu": "sers-toi", "nous": "servons-nous", "vous": "servez-vous" },
    "impératif passé": { "tu": "sois-toi servi(e)", "nous": "soyons-nous servi(e)s", "vous": "soyez-vous servi(e)(s)" },
    "infinitif présent": "se servir",
    "infinitif passé": "s'être servi(e)",
    "participe présent": "se servant",
    "participe passé": "servi",
    "gérondif présent": "en se servant",
    "gérondif passé": "en s'étant servi(e)"
  }
};

const seDepecher: Verb = {
  name: "se dépêcher",
  conjugations: {
    "indicatif présent": { "je": "me dépêche", "tu": "te dépêches", "il/elle": "se dépêche", "nous": "nous dépêchons", "vous": "vous dépêchez", "ils/elles": "se dépêchent" },
    "indicatif imparfait": { "je": "me dépêchais", "tu": "te dépêchais", "il/elle": "se dépêchait", "nous": "nous dépêchions", "vous": "vous dépêchiez", "ils/elles": "se dépêchaient" },
    "indicatif passé simple": { "je": "me dépêchai", "tu": "te dépêchas", "il/elle": "se dépêcha", "nous": "nous dépêchâmes", "vous": "vous dépêchâtes", "ils/elles": "se dépêchèrent" },
    "indicatif futur simple": { "je": "me dépêcherai", "tu": "te dépêcheras", "il/elle": "se dépêchera", "nous": "nous dépêcherons", "vous": "vous dépêcherez", "ils/elles": "se dépêcheront" },
    "indicatif passé composé": { "je": "me suis dépêché(e)", "tu": "t'es dépêché(e)", "il/elle": "s'est dépêché(e)", "nous": "nous sommes dépêché(e)s", "vous": "vous êtes dépêché(e)(s)", "ils/elles": "se sont dépêché(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais dépêché(e)", "tu": "t'étais dépêché(e)", "il/elle": "s'était dépêché(e)", "nous": "nous étions dépêché(e)s", "vous": "vous étiez dépêché(e)(s)", "ils/elles": "s'étaient dépêché(e)s" },
    "indicatif passé antérieur": { "je": "me fus dépêché(e)", "tu": "te fus dépêché(e)", "il/elle": "se fut dépêché(e)", "nous": "nous fûmes dépêché(e)s", "vous": "vous fûtes dépêché(e)(s)", "ils/elles": "se furent dépêché(e)s" },
    "indicatif futur antérieur": { "je": "me serai dépêché(e)", "tu": "te seras dépêché(e)", "il/elle": "se sera dépêché(e)", "nous": "nous serons dépêché(e)s", "vous": "vous serez dépêché(e)(s)", "ils/elles": "se seront dépêché(e)s" },
    "subjonctif présent": { "je": "que je me dépêche", "tu": "que tu te dépêches", "il/elle": "qu'il se dépêche", "nous": "que nous nous dépêchions", "vous": "que vous vous dépêchiez", "ils/elles": "qu'ils se dépêchent" },
    "subjonctif imparfait": { "je": "que je me dépêchasse", "tu": "que tu te dépêchasses", "il/elle": "qu'il se dépêchât", "nous": "que nous nous dépêchassions", "vous": "que vous vous dépêchassiez", "ils/elles": "qu'ils se dépêchassent" },
    "subjonctif passé": { "je": "que je me sois dépêché(e)", "tu": "que tu te sois dépêché(e)", "il/elle": "qu'il se soit dépêché(e)", "nous": "que nous nous soyons dépêché(e)s", "vous": "que vous vous soyez dépêché(e)(s)", "ils/elles": "qu'ils se soient dépêché(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse dépêché(e)", "tu": "que tu te fusses dépêché(e)", "il/elle": "qu'il se fût dépêché(e)", "nous": "que nous nous fussions dépêché(e)s", "vous": "que vous vous fussiez dépêché(e)(s)", "ils/elles": "qu'ils se fussent dépêché(e)s" },
    "conditionnel présent": { "je": "me dépêcherais", "tu": "te dépêcherais", "il/elle": "se dépêcherait", "nous": "nous dépêcherions", "vous": "vous dépêcheriez", "ils/elles": "se dépêcheraient" },
    "conditionnel passé première forme": { "je": "me serais dépêché(e)", "tu": "te serais dépêché(e)", "il/elle": "se serait dépêché(e)", "nous": "nous serions dépêché(e)s", "vous": "vous seriez dépêché(e)(s)", "ils/elles": "se seraient dépêché(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse dépêché(e)", "tu": "te fusses dépêché(e)", "il/elle": "se fût dépêché(e)", "nous": "nous fussions dépêché(e)s", "vous": "vous fussiez dépêché(e)(s)", "ils/elles": "se fussent dépêché(e)s" },
    "impératif présent": { "tu": "dépêche-toi", "nous": "dépêchons-nous", "vous": "dépêchez-vous" },
    "impératif passé": { "tu": "sois-toi dépêché(e)", "nous": "soyons-nous dépêché(e)s", "vous": "soyez-vous dépêché(e)(s)" },
    "infinitif présent": "se dépêcher",
    "infinitif passé": "s'être dépêché(e)",
    "participe présent": "se dépêchant",
    "participe passé": "dépêché",
    "gérondif présent": "en se dépêchant",
    "gérondif passé": "en s'étant dépêché(e)"
  }
};

const sEnnuyer: Verb = {
  name: "s'ennuyer",
  conjugations: {
    "indicatif présent": { "je": "m'ennuie", "tu": "t'ennuies", "il/elle": "s'ennuie", "nous": "nous ennuyons", "vous": "vous ennuyez", "ils/elles": "s'ennuient" },
    "indicatif imparfait": { "je": "m'ennuyais", "tu": "t'ennuyais", "il/elle": "s'ennuyait", "nous": "nous ennuyions", "vous": "vous ennuyiez", "ils/elles": "s'ennuyaient" },
    "indicatif passé simple": { "je": "m'ennuyai", "tu": "t'ennuyas", "il/elle": "s'ennuya", "nous": "nous ennuyâmes", "vous": "vous ennuyâtes", "ils/elles": "s'ennuyèrent" },
    "indicatif futur simple": { "je": "m'ennuierai", "tu": "t'ennuieras", "il/elle": "s'ennuiera", "nous": "nous ennuierons", "vous": "vous ennuierez", "ils/elles": "s'ennuieront" },
    "indicatif passé composé": { "je": "me suis ennuyé(e)", "tu": "t'es ennuyé(e)", "il/elle": "s'est ennuyé(e)", "nous": "nous sommes ennuyé(e)s", "vous": "vous êtes ennuyé(e)(s)", "ils/elles": "se sont ennuyé(e)s" },
    "indicatif plus-que-parfait": { "je": "m'étais ennuyé(e)", "tu": "t'étais ennuyé(e)", "il/elle": "s'était ennuyé(e)", "nous": "nous étions ennuyé(e)s", "vous": "vous étiez ennuyé(e)(s)", "ils/elles": "s'étaient ennuyé(e)s" },
    "indicatif passé antérieur": { "je": "me fus ennuyé(e)", "tu": "te fus ennuyé(e)", "il/elle": "se fut ennuyé(e)", "nous": "nous fûmes ennuyé(e)s", "vous": "vous fûtes ennuyé(e)(s)", "ils/elles": "se furent ennuyé(e)s" },
    "indicatif futur antérieur": { "je": "me serai ennuyé(e)", "tu": "te seras ennuyé(e)", "il/elle": "se sera ennuyé(e)", "nous": "nous serons ennuyé(e)s", "vous": "vous serez ennuyé(e)(s)", "ils/elles": "se seront ennuyé(e)s" },
    "subjonctif présent": { "je": "que je m'ennuie", "tu": "que tu t'ennuies", "il/elle": "qu'il s'ennuie", "nous": "que nous nous ennuyions", "vous": "que vous vous ennuyiez", "ils/elles": "qu'ils s'ennuient" },
    "subjonctif imparfait": { "je": "que je m'ennuyasse", "tu": "que tu t'ennuyasses", "il/elle": "qu'il s'ennuyât", "nous": "que nous nous ennuyassions", "vous": "que vous vous ennuyassiez", "ils/elles": "qu'ils s'ennuyassent" },
    "subjonctif passé": { "je": "que je me sois ennuyé(e)", "tu": "que tu te sois ennuyé(e)", "il/elle": "qu'il se soit ennuyé(e)", "nous": "que nous nous soyons ennuyé(e)s", "vous": "que vous vous soyez ennuyé(e)(s)", "ils/elles": "qu'ils se soient ennuyé(e)s" },
    "subjonctif plus-que-parfait": { "je": "que je me fusse ennuyé(e)", "tu": "que tu te fusses ennuyé(e)", "il/elle": "qu'il se fût ennuyé(e)", "nous": "que nous nous fussions ennuyé(e)s", "vous": "que vous vous fussiez ennuyé(e)(s)", "ils/elles": "qu'ils se fussent ennuyé(e)s" },
    "conditionnel présent": { "je": "m'ennuierais", "tu": "t'ennuierais", "il/elle": "s'ennuierait", "nous": "nous ennuierions", "vous": "vous ennuieriez", "ils/elles": "s'ennuieraient" },
    "conditionnel passé première forme": { "je": "me serais ennuyé(e)", "tu": "te serais ennuyé(e)", "il/elle": "se serait ennuyé(e)", "nous": "nous serions ennuyé(e)s", "vous": "vous seriez ennuyé(e)(s)", "ils/elles": "se seraient ennuyé(e)s" },
    "conditionnel passé deuxième forme": { "je": "me fusse ennuyé(e)", "tu": "te fusses ennuyé(e)", "il/elle": "se fût ennuyé(e)", "nous": "nous fussions ennuyé(e)s", "vous": "vous fussiez ennuyé(e)(s)", "ils/elles": "se fussent ennuyé(e)s" },
    "impératif présent": { "tu": "ennuie-toi", "nous": "ennuyons-nous", "vous": "ennuyez-vous" },
    "impératif passé": { "tu": "sois-toi ennuyé(e)", "nous": "soyons-nous ennuyé(e)s", "vous": "soyez-vous ennuyé(e)(s)" },
    "infinitif présent": "s'ennuyer",
    "infinitif passé": "s'être ennuyé(e)",
    "participe présent": "s'ennuyant",
    "participe passé": "ennuyé",
    "gérondif présent": "en s'ennuyant",
    "gérondif passé": "en s'étant ennuyé(e)"
  }
};

export default {
  seLever,
  seCoucher,
  seLaver,
  sePromener,
  seSouvenir,
  seTaire,
  sePlindre,
  seServir,
  seDepecher,
  sEnnuyer
};