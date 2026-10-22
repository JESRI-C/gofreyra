// Indhold er faktatjekket mod officielle kilder 22.10.2026. Redigér ikke tal uden kilde.
export type Source = { title: string; url: string };
export type Section = { h2: string; paragraphs: string[]; bullets: string[] };
export type Artikel = { slug: string; kind: "pillar" | "artikel"; cluster: string; h1: string; metaTitle: string; metaDescription: string; intro: string; sections: Section[]; faq: { q: string; a: string }[]; sources: Source[]; related: string[]; services: string[]; terms: string[]; updated: string };
export const artikler: Artikel[] = [
 {
  "slug": "groen-trepart",
  "kind": "pillar",
  "cluster": "Grøn Trepart",
  "h1": "Grøn Trepart: aftalen, målene og hvad den betyder lokalt",
  "metaTitle": "Grøn Trepart forklaret: mål, lokale treparter og MARS",
  "metaDescription": "Overblik over Aftale om et grønt Danmark: 250.000 ha skov, 140.000 ha lavbund, 23 lokale treparter og MARS. Med links til officielle kilder.",
  "intro": "Grøn Trepart er den aftale, der skal omlægge en stor del af det danske landbrugsareal til skov, natur og vådområder. Her er det vigtigste samlet, med henvisning til de officielle kilder, så du kan gå videre derfra.",
  "sections": [
   {
    "h2": "Hvad er Grøn Trepart?",
    "paragraphs": [
     "Aftale om et grønt Danmark blev indgået 24. juni 2024 mellem regeringen og parterne i den grønne trepart: Landbrug & Fødevarer, Danmarks Naturfredningsforening, Fødevareforbundet NNF, Dansk Metal, Dansk Industri og KL.",
     "Aftalen sætter rammen for omlægning af arealer og af fødevare- og landbrugsproduktionen. Den skal reducere udledningen af drivhusgasser og give bedre vilkår for natur, biodiversitet, vandmiljø og drikkevand."
    ],
    "bullets": []
   },
   {
    "h2": "De centrale mål",
    "paragraphs": [
     "Ifølge regeringens faktaark indeholder aftalen blandt andet disse elementer:"
    ],
    "bullets": [
     "Rejsning af 250.000 hektar skov.",
     "Udtagning af 140.000 hektar kulstofholdige lavbundsjorde inklusive randarealer.",
     "Et mål om mindst 20 pct. beskyttet natur.",
     "Etablering af Danmarks Grønne Arealfond med aktiviteter for omtrent 40 mia. kr.",
     "En CO2e-afgift på udledninger fra husdyr fra 2030.",
     "Arealomlægning som hovedmotor i kvælstofindsatsen for at nå målene i EU's vandrammedirektiv."
    ]
   },
   {
    "h2": "Kvælstof og vandområder",
    "paragraphs": [
     "SGAV oplyser, at målet med Aftale om implementering af et Grønt Danmark er at reducere kvælstofudledningen med aktuelt 13.800 ton. Indsatsbehovet fremgår af Vandplan 3-II og er fordelt på 108 delvandoplande, der er grupperet i 37 hydrologiske kystvandsgrupper.",
     "Fra og med 2027 gælder en skærpet miljøgaranti, og der indgår også akutindsatser i de mest udfordrede områder og en ny reguleringsmodel."
    ],
    "bullets": []
   },
   {
    "h2": "Fra national aftale til lokale projekter",
    "paragraphs": [
     "Indsatsen er lagt ud i 23 lokale grønne treparter, som i 2025 udarbejdede hver sin omlægningsplan. Kommunerne er myndighed for arealanvendelsen og har ansvaret for den del af planen, der ligger inden for kommunegrænsen. Selve projekterne udføres af kommuner, lodsejere, private aktører eller Naturstyrelsen.",
     "Planlægning, screening og status foregår i it-systemet MARS, som Danmarks Miljøportal har udviklet for Styrelsen for Grøn Arealomlægning og Vandmiljø (SGAV)."
    ],
    "bullets": []
   },
   {
    "h2": "Hvor langt er man?",
    "paragraphs": [
     "KL's statusrapport fra maj 2026 oplyser, at alle 23 omlægningsplaner blev principvedtaget inden udgangen af 2025, og at planerne rummer over 5.600 potentielle projekter. Ifølge et udtræk fra MARS 6. maj 2026 var 87.551 ha lavbundsjord igangsat mod målet på 140.000 ha. Tallene ændrer sig løbende, så se statusmodulet i MARS for de aktuelle tal."
    ],
    "bullets": []
   },
   {
    "h2": "Hvorfor dokumentation bliver vigtig",
    "paragraphs": [
     "Når tusindvis af projekter skal fra forundersøgelse til anlæg, skal mange parter kunne se, hvordan et areal så ud før, og hvad der er sket siden. Det gælder kommunen som myndighed, lodsejeren, fonde og de lokale treparter. En fast, dateret baseline gør det lettere at vise udviklingen senere og at svare på spørgsmål undervejs.",
     "Det er den opgave, Freyra løser: dronefotos, offentlige data og faglig vurdering samlet i én dokumentationskæde, der ligger ved siden af MARS og ikke erstatter det."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvornår blev Grøn Trepart-aftalen indgået?",
    "a": "Aftale om et grønt Danmark blev indgået 24. juni 2024."
   },
   {
    "q": "Hvor mange lokale treparter er der?",
    "a": "Der er 23 lokale grønne treparter, som hver har udarbejdet en omlægningsplan."
   },
   {
    "q": "Hvad er MARS?",
    "a": "MARS står for Multifunktionel Arealregistrering og er den online platform, hvor omlægningsplaner, screening og status for indsatsen samles."
   }
  ],
  "sources": [
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   },
   {
    "title": "Miljøministeriet: 390.000 hektar landbrug omlægges til skov og natur",
    "url": "https://mim.dk/nyheder/pressemeddelelser/2024/juni/nyt-groent-danmark-390000-hektar-landbrug-omlaegges-til-skov-og-natur"
   },
   {
    "title": "SGAV: Omlægningsplaner",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/omlaegningsplaner"
   },
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   },
   {
    "title": "KL: Status på den kommunale implementering af arealomlægningsindsatsen, maj 2026",
    "url": "https://www.kl.dk/media/00mhx3xi/status-paa-den-kommunale-implementering-af-arealomlaegningsindsatsen-i-groen-trepart.pdf"
   },
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   }
  ],
  "related": [
   "lokale-groenne-treparter",
   "omlaegningsplaner",
   "mars-guide",
   "lavbundsprojekter",
   "skovrejsning-groen-trepart"
  ],
  "services": [
   "datagrundlag",
   "dronefoerregistrering",
   "evidenspakke"
  ],
  "terms": [
   "groen-trepart",
   "lokal-groen-trepart",
   "omlaegningsplan",
   "mars",
   "danmarks-groenne-arealfond"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "lokale-groenne-treparter",
  "kind": "artikel",
  "cluster": "Grøn Trepart",
  "h1": "Lokale grønne treparter: hvem sidder med, og hvad laver de?",
  "metaTitle": "Lokale grønne treparter: sammensætning og opgaver",
  "metaDescription": "Hvem sidder i de 23 lokale grønne treparter, hvad er kommunens rolle, og hvordan arbejder de med udtagningskonsulenter og Naturstyrelsen?",
  "intro": "De 23 lokale grønne treparter er det sted, hvor Grøn Trepart bliver til konkrete arealer. Men de er ikke myndighed, og de udfører ikke selv projekterne. Her er rollefordelingen.",
  "sections": [
   {
    "h2": "Hvem sidder i en lokal trepart?",
    "paragraphs": [
     "Ifølge SGAV består deltagerkredsen i hver lokal trepart af:"
    ],
    "bullets": [
     "1-2 repræsentanter for hver af kommunerne i oplandet",
     "1-2 repræsentanter for lokale landbrugsorganisationer",
     "1-2 repræsentanter for lokale naturorganisationer",
     "1 repræsentant fra Naturstyrelsen"
    ]
   },
   {
    "h2": "Formands- og sekretariatskommune",
    "paragraphs": [
     "Kommunerne i hver trepart udpeger en formandskommune og en sekretariatskommune, som kan være den samme. Formandskommunen driver arbejdet og sikrer fremdrift. Sekretariatskommunen står for sekretariatsbetjening og koordinering. Treparterne samarbejder desuden i 10 tværkommunale samarbejder, der blev dannet i forbindelse med den faciliterende lavbundsindsats i 2024."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad treparten ikke gør",
    "paragraphs": [
     "Den lokale grønne trepart er et samarbejdsorgan. Den er ikke myndighed og træffer ikke afgørelser i konkrete sager, fx om tilskud. Projekterne realiseres af kommuner, lodsejere, private aktører eller Naturstyrelsen."
    ],
    "bullets": []
   },
   {
    "h2": "Udtagningskonsulenter og kystvandråd",
    "paragraphs": [
     "Udtagningskonsulenterne er lodsejernes primære kontakt i projekter, som lodsejerne selv kan søge tilskud til, og de hjælper med at facilitere større projekter med en kommune eller Naturstyrelsen som projektejer.",
     "De 17 kystvandråd er rådgivende partnerskaber, som kommunerne har ansvaret for. De bidrager med lokal viden om virkemidler og kan rådgive de lokale treparter."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad betyder det for dokumentationen?",
    "paragraphs": [
     "Fordi mange parter er involveret, skal grundlaget for et projekt kunne deles og forstås af alle. Et fælles, dateret billede af arealet før projektstart, med kilder og faglig vurdering, gør dialogen mellem kommune, lodsejer og trepart mere konkret."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er den lokale trepart en myndighed?",
    "a": "Nej. SGAV beskriver den som et samarbejdsorgan, der ikke træffer afgørelser i konkrete sager."
   },
   {
    "q": "Hvem udpeger natur- og landbrugsrepræsentanterne?",
    "a": "De udpeges centralt af Danmarks Naturfredningsforening og Landbrug & Fødevarers hovedorganisationer."
   }
  ],
  "sources": [
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   },
   {
    "title": "Ministeriet for Grøn Trepart: Faktaark om lokale treparter",
    "url": "https://mgtp.dk/Media/638798904396241133/Faktaark%20om%20lokale%20treparter.pdf"
   }
  ],
  "related": [
   "groen-trepart",
   "omlaegningsplaner",
   "kystvandraad"
  ],
  "services": [
   "datagrundlag",
   "evidenspakke"
  ],
  "terms": [
   "lokal-groen-trepart",
   "udtagningskonsulent",
   "kystvandraad",
   "naturstyrelsen"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "omlaegningsplaner",
  "kind": "artikel",
  "cluster": "Grøn Trepart",
  "h1": "Omlægningsplaner: hvad står der i dem, og hvem står på mål?",
  "metaTitle": "Omlægningsplaner i Grøn Trepart: indhold og ansvar",
  "metaDescription": "Hvad er en omlægningsplan, hvad omfatter den, og hvordan hænger den sammen med kvælstofindsatsbehovet og MARS? Kort forklaret med kilder.",
  "intro": "Hver lokal grøn trepart har udarbejdet en omlægningsplan. Planen viser, hvordan området kan nå sin del af kvælstof- og lavbundsmålene gennem arealomlægning.",
  "sections": [
   {
    "h2": "Hvad omfatter planen?",
    "paragraphs": [
     "Ifølge SGAV omfatter omlægningsindsatsen udtagning af kulstofrige lavbundsjorder, vådområder, skovrejsning, ekstensivering og andre arealbaserede indsatser, herunder bedre vilkår for natur og biodiversitet."
    ],
    "bullets": []
   },
   {
    "h2": "Kobling til kvælstof",
    "paragraphs": [
     "Planerne skal vise vejen til at indfri kvælstofindsatsbehovet via arealomlægning og dermed mindske behovet for markregulering. Effekten opgøres i MARS i 37 hydrologiske kystvandsgrupper."
    ],
    "bullets": []
   },
   {
    "h2": "Hvem har ansvaret?",
    "paragraphs": [
     "Kommunalbestyrelserne principvedtog ved udgangen af 2025 de dele af planerne, der i MARS er registreret inden for egen kommunegrænse. Da kommunerne er myndighed for arealanvendelsen, er de i sidste ende ansvarlige for deres del af planen."
    ],
    "bullets": []
   },
   {
    "h2": "Fra plan til projekt",
    "paragraphs": [
     "En plan er en række mulige projekter. Hvert projekt skal herefter undersøges, have lodsejertilslutning, søge tilskud og anlægges. Her er det en fordel at have dokumenteret arealets udgangspunkt tidligt, så de senere trin bygger på samme grundlag."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvor mange projekter rummer omlægningsplanerne?",
    "a": "KL's statusrapport fra maj 2026 oplyser over 5.600 potentielle projekter i de 23 planer."
   }
  ],
  "sources": [
   {
    "title": "SGAV: Omlægningsplaner",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/omlaegningsplaner"
   },
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   },
   {
    "title": "KL: Status på den kommunale implementering af arealomlægningsindsatsen, maj 2026",
    "url": "https://www.kl.dk/media/00mhx3xi/status-paa-den-kommunale-implementering-af-arealomlaegningsindsatsen-i-groen-trepart.pdf"
   }
  ],
  "related": [
   "groen-trepart",
   "mars-guide",
   "lavbundsprojekter"
  ],
  "services": [
   "datagrundlag",
   "beplantningsanalyse"
  ],
  "terms": [
   "omlaegningsplan",
   "kystvandsgruppe",
   "ekstensivering"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "mars-guide",
  "kind": "artikel",
  "cluster": "Offentlige data",
  "h1": "MARS: de fire moduler forklaret",
  "metaTitle": "MARS (Multifunktionel Arealregistrering) forklaret",
  "metaDescription": "Hvad kan MARS? Screening, planlægning, ansøgning og status. Hvem kræver login, og hvordan hænger MARS sammen med tilskud og WFS-data?",
  "intro": "MARS er den fælles platform for arealindsatserne i Grøn Trepart. Det er her, omlægningsplaner bliver til, og her mange tilskudsansøgninger starter.",
  "sections": [
   {
    "h2": "Hvad er MARS?",
    "paragraphs": [
     "MARS står for Multifunktionel Arealregistrering. Det er udviklet af SGAV med Danmarks Miljøportal som leverandør og samler information om arealbaserede indsatser for kvælstof, lavbund, skovrejsning og natur. Første version blev lanceret i januar 2025."
    ],
    "bullets": []
   },
   {
    "h2": "De fire moduler",
    "paragraphs": [
     "SGAV beskriver fire moduler:"
    ],
    "bullets": [
     "Screening: tegn et område og få vist potentialer og mulige konflikter. Kræver ikke login.",
     "Planlægning: bruges af lokale treparter og kommuner til omlægningsplaner og kvælstofberegninger. Kræver login.",
     "Ansøgning: en samlet indgang, der guider videre til de relevante ansøgningssystemer.",
     "Status: viser status for kvælstof, udtagning og skovrejsning på nationalt, kystvandgruppe-, trepart- og kommuneniveau. Kræver ikke login."
    ]
   },
   {
    "h2": "Data fra MARS i dit eget GIS",
    "paragraphs": [
     "Størstedelen af data i MARS udstilles offentligt via en WFS-service, så lagene kan bruges i fx QGIS eller ArcGIS."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad MARS ikke dækker",
    "paragraphs": [
     "MARS arbejder med kortlag og planer. Det dokumenterer ikke, hvordan et konkret areal ser ud på jorden en bestemt dag. Freyra lægger sig ved siden af MARS: dronefotos med position og tidspunkt, sammenholdt med de samme offentlige lag, og en faglig vurdering pr. punkt. Projektområdet indtegnes stadig i MARS."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Kræver MARS login?",
    "a": "Screening og status kræver ikke login. Planlægningsmodulet kræver login."
   },
   {
    "q": "Kan jeg hente MARS-data til QGIS?",
    "a": "Ja. Ifølge SGAV udstilles størstedelen af data via en offentlig WFS-service."
   }
  ],
  "sources": [
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   },
   {
    "title": "Danmarks Miljøportal: It-løsning til den grønne trepartsaftale lanceres (29.01.2025)",
    "url": "https://miljoeportal.dk/nyheder/2025/it-loesning-til-den-groenne-trepartsaftale-lanceres/"
   },
   {
    "title": "MARS (mars.sgav.dk)",
    "url": "https://mars.sgav.dk/"
   }
  ],
  "related": [
   "offentlige-data-natur",
   "tilskud-vaadomraader-lavbundsprojekter",
   "danmarks-arealinformation-guide"
  ],
  "services": [
   "datagrundlag"
  ],
  "terms": [
   "mars",
   "danmarks-miljoeportal",
   "sgav",
   "wfs"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "lavbundsprojekter",
  "kind": "pillar",
  "cluster": "Lavbund og vådområder",
  "h1": "Lavbundsprojekter og vådområder: fra idé til anlæg",
  "metaTitle": "Lavbundsprojekter og vådområder: guide til forløbet",
  "metaDescription": "Sådan forløber et lavbundsprojekt: formål, tilskudsordningen VLP, forundersøgelse, etablering, servitut og dokumentation før og efter.",
  "intro": "Udtagning af kulstofrige lavbundsjorder er en af de største opgaver i Grøn Trepart. Målet er 140.000 hektar inklusive randarealer. Her er forløbet fra idé til anlæg, og hvor dokumentationen kommer ind.",
  "sections": [
   {
    "h2": "Hvorfor lavbund?",
    "paragraphs": [
     "Formålet med lavbundsprojekter er ifølge Landbrugsstyrelsen at reducere udledningen af drivhusgasser fra kulstofrige lavbundsjorder. Projekterne kan også reducere udledningen af kvælstof til fjorde og kystvande. Vådgøring kan derudover øge arealets bufferkapacitet ved store vandmængder og have en positiv effekt på biodiversitet."
    ],
    "bullets": []
   },
   {
    "h2": "Tilskudsordningen VLP",
    "paragraphs": [
     "Vådområder og lavbundsprojekter (VLP) er den fælles ordning, der viderefører Vand- og klimaprojekter (VKP) og Klima-lavbundsprojekter (KLA). Den har seks indsatser: kvælstofvådområder, lavbund, fosforvådområder og restaurering af ådale under VKP samt kvælstofvådområder og lavbund under KLA."
    ],
    "bullets": []
   },
   {
    "h2": "Forløbet i hovedtræk",
    "paragraphs": [],
    "bullets": [
     "Idé og screening, typisk i MARS.",
     "Forundersøgelse, som munder ud i en ejendomsmæssig og en teknisk forundersøgelsesrapport.",
     "Etablering i spor 1 (EU-finansieret, VKP) eller spor 2 (nationalt finansieret, KLA).",
     "Kompensation af lodsejere og tinglysning af servitut om fastholdelse af projektet.",
     "Anlæg, udbetaling og efterfølgende dokumentationskrav."
    ]
   },
   {
    "h2": "Hvem kan søge?",
    "paragraphs": [
     "Kommuner kan søge til alle seks indsatser. Naturstyrelsen til tre VKP-indsatser. Private lodsejere, nationalparkfonde og fonde med almennyttige natur-, miljø- eller klimaformål kan søge til KLA-lavbund og KLA-kvælstofvådområder."
    ],
    "bullets": []
   },
   {
    "h2": "Dokumentation før og efter",
    "paragraphs": [
     "Forundersøgelsen skal blandt andet afdække effekter og mulige konsekvenser. Og efter projektet er der dokumentationskrav. Begge dele bliver lettere, hvis arealets tilstand er registreret tidligt og på en måde, der kan gentages. En droneflyvning med faste gentagelsespunkter, sammenholdt med ortofoto, højdemodel, §3-registrering og jordbundsdata, giver et udgangspunkt, man kan sammenligne med senere."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvem kan søge tilskud til lavbundsprojekter?",
    "a": "Kommuner, Naturstyrelsen, private lodsejere og visse fonde, afhængigt af indsatsen. Se Landbrugsstyrelsens tilskudsguide."
   },
   {
    "q": "Hvad er forskellen på spor 1 og spor 2?",
    "a": "Spor 1 er EU-finansierede VKP-etableringsprojekter med ansøgningsrunder. Spor 2 er nationalt finansierede KLA-projekter med løbende tilsagn efter først-til-mølle."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   },
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   }
  ],
  "related": [
   "tilskud-vaadomraader-lavbundsprojekter",
   "forundersoegelse-lavbundsprojekt",
   "baseline-foer-projektstart",
   "paragraf-3-natur"
  ],
  "services": [
   "dronefoerregistrering",
   "datagrundlag",
   "monitorering"
  ],
  "terms": [
   "kulstofrig-lavbundsjord",
   "vlp",
   "vaadomraade",
   "forundersoegelse",
   "servitut",
   "engangskompensation"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "tilskud-vaadomraader-lavbundsprojekter",
  "kind": "artikel",
  "cluster": "Lavbund og vådområder",
  "h1": "Tilskud til vådområder og lavbundsprojekter (VLP) 2026",
  "metaTitle": "VLP 2026: tilskud til vådområder og lavbundsprojekter",
  "metaDescription": "Frister, indsatser, ansøgere og finansiering i VLP 2026, opsummeret fra Landbrugsstyrelsens tilskudsguide. Tjek altid den officielle side.",
  "intro": "Her er hovedpunkterne i ordningen Vådområder og lavbundsprojekter 2026, som de fremgår af Landbrugsstyrelsens tilskudsguide pr. oktober 2026. Frister og regler kan ændre sig, så brug den officielle side som facit.",
  "sections": [
   {
    "h2": "Frister i 2026",
    "paragraphs": [],
    "bullets": [
     "Forundersøgelser: 12. august til 31. december 2026, løbende tilsagn efter først-til-mølle.",
     "Etablering spor 1, første runde: 12. august til 30. september 2026.",
     "Etablering spor 1, anden runde: 3. november 2026 til 23. februar 2027.",
     "Etablering spor 2: 12. august til 31. december 2026, løbende tilsagn efter først-til-mølle."
    ]
   },
   {
    "h2": "Tilskudsprocent og finansiering",
    "paragraphs": [
     "SGAV kan give tilsagn om tilskud til 100 pct. af de tilskudsberettigede udgifter. VKP-lavbundsprojekter i spor 1 finansieres 100 pct. af EU via ELFUL. De øvrige VKP-indsatser finansieres 80 pct. af EU og 20 pct. nationalt. Forundersøgelser og spor 2 finansieres nationalt."
    ],
    "bullets": []
   },
   {
    "h2": "Alt starter i MARS",
    "paragraphs": [
     "Alle ansøgninger starter i MARS, hvor projektområdet indtegnes. Det er beliggenheden af det indtegnede område, der afgør, hvad der kan undersøges. Et kvælstofvådområde skal fx ligge i et delopland med kvælstofindsatsbehov, og et lavbundsprojekt skal ligge på kulstofrig lavbundsjord."
    ],
    "bullets": []
   },
   {
    "h2": "Servitut og skiltning",
    "paragraphs": [
     "Før udbetaling skal der tinglyses en servitut om fastholdelse af projektet på alle ejendomme i projektområdet, med SGAV som påtaleberettiget. Har et spor 1-projekt samlede omkostninger over 3.600.000 kr., skal EU-finansieringen synliggøres med fysisk skiltning."
    ],
    "bullets": []
   },
   {
    "h2": "Hvor kan Freyra hjælpe?",
    "paragraphs": [
     "Freyra søger ikke tilskud for jer og laver ikke effektberegningerne. Vi leverer et dateret, sporbart billede af området før projektet, som kan indgå i forundersøgelsen og bruges som sammenligningsgrundlag ved den senere dokumentation."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvor stor er tilskudsprocenten?",
    "a": "Ifølge Landbrugsstyrelsen kan der gives tilsagn om tilskud til 100 pct. af de tilskudsberettigede udgifter."
   },
   {
    "q": "Hvor lang er sagsbehandlingstiden?",
    "a": "Landbrugsstyrelsen angiver en anslået sagsbehandlingstid på 90 dage."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "lavbundsprojekter",
   "forundersoegelse-lavbundsprojekt",
   "mars-guide"
  ],
  "services": [
   "dronefoerregistrering",
   "datagrundlag"
  ],
  "terms": [
   "vlp",
   "forundersoegelse",
   "etableringsprojekt",
   "servitut",
   "engangskompensation",
   "kvaelstofvaadomraade",
   "fosforvaadomraade"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "forundersoegelse-lavbundsprojekt",
  "kind": "artikel",
  "cluster": "Lavbund og vådområder",
  "h1": "Forundersøgelse af lavbunds- og vådområdeprojekter",
  "metaTitle": "Forundersøgelse af lavbundsprojekt: hvad skal afdækkes?",
  "metaDescription": "Hvad en forundersøgelse i VLP skal afdække, hvilke rapporter den giver, og hvordan en tidlig baseline med drone og offentlige data kan bruges.",
  "intro": "Forundersøgelsen afgør, om et lavbunds- eller vådområdeprojekt kan gennemføres. Den er grundlaget for ansøgningen om etablering.",
  "sections": [
   {
    "h2": "Hvad skal forundersøgelsen vise?",
    "paragraphs": [
     "Ifølge Landbrugsstyrelsen skal forundersøgelsen afdække realiseringspotentialet, blandt andet lodsejertilslutning, effekter og mulige konsekvenser. Den resulterer i en ejendomsmæssig og en teknisk forundersøgelsesrapport med bilag."
    ],
    "bullets": []
   },
   {
    "h2": "Effekter, der kan undersøges",
    "paragraphs": [],
    "bullets": [
     "kvælstof",
     "klimagasser",
     "fosfor",
     "fysisk forbedring af vandløb (restaurering af ådale)",
     "udvalgte naturtiltag"
    ]
   },
   {
    "h2": "Hvor en baseline passer ind",
    "paragraphs": [
     "Den tekniske forundersøgelse bygger typisk på opmåling, kortdata og besigtigelse. En baseline fra Freyra er ikke en opmåling og erstatter ikke rådgiverens arbejde. Den giver et dateret fotografisk og datamæssigt udgangspunkt: hvor billederne er taget, hvordan arealet så ud, hvilke offentlige lag der gjaldt på dagen, og hvad en fagperson har bekræftet."
    ],
    "bullets": []
   },
   {
    "h2": "Gode råd",
    "paragraphs": [],
    "bullets": [
     "Flyv tidligt, så den samme dag kan bruges som reference senere.",
     "Brug faste gentagelsespunkter, så efterflyvninger kan sammenlignes.",
     "Gem originalfiler med metadata, ikke kun nedskalerede rapportbilleder.",
     "Notér, hvilken version af de offentlige data der blev brugt."
    ]
   }
  ],
  "faq": [
   {
    "q": "Hvilke rapporter giver forundersøgelsen?",
    "a": "En ejendomsmæssig og en teknisk forundersøgelsesrapport med tilhørende bilag."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "lavbundsprojekter",
   "baseline-foer-projektstart",
   "dronefotos-gps-metadata"
  ],
  "services": [
   "dronefoerregistrering",
   "datagrundlag",
   "evidenspakke"
  ],
  "terms": [
   "forundersoegelse",
   "baseline",
   "gentagelsespunkt"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "dokumentation-af-naturprojekter",
  "kind": "pillar",
  "cluster": "Dokumentation og baseline",
  "h1": "Dokumentation af naturprojekter: baseline, monitorering og sporbarhed",
  "metaTitle": "Dokumentation af naturprojekter: baseline og sporbarhed",
  "metaDescription": "Sådan dokumenterer du et natur- eller arealprojekt, så det holder: baseline før start, faste punkter, kilder med dato, faglig vurdering og hash.",
  "intro": "Et naturprojekt bliver vurderet over mange år. Spørgsmålet er sjældent kun, hvordan arealet ser ud i dag, men hvordan det så ud før, og hvordan man ved det. God dokumentation besvarer begge dele.",
  "sections": [
   {
    "h2": "Hvad er en baseline?",
    "paragraphs": [
     "En baseline er en registrering af et areals tilstand på et bestemt tidspunkt, typisk før et projekt går i gang. Den bruges senere som sammenligningsgrundlag. Den skal være dateret, stedfæstet og så tydelig, at en anden kan gentage den."
    ],
    "bullets": []
   },
   {
    "h2": "Fem krav til dokumentation, der holder",
    "paragraphs": [],
    "bullets": [
     "Sted: hvert foto og hver måling har en position.",
     "Tid: dato og klokkeslæt fremgår, og vejret på dagen er noteret.",
     "Kilde: offentlige data er angivet med navn og hentedato.",
     "Vurdering: en navngiven fagperson har bekræftet eller afvist hvert punkt.",
     "Integritet: rapporten er låst i en version, fx med en SHA-256-hash, så senere ændringer kan ses."
    ]
   },
   {
    "h2": "Monitorering og efterflyvning",
    "paragraphs": [
     "Efter projektstart gentages registreringen fra de samme punkter. Det giver før/efter-billeder, der faktisk kan sammenlignes, frem for tilfældige fotos fra forskellige vinkler."
    ],
    "bullets": []
   },
   {
    "h2": "MRV og naturprojekter",
    "paragraphs": [
     "MRV står for Measurement, Reporting and Verification: måling, rapportering og verifikation. Begrebet bruges især om klimaeffekter. Freyra beregner ikke klima- eller kvælstofeffekter. Vi dokumenterer udgangspunktet og ændringerne, så de beregninger, der laves andre steder, har et fast grundlag."
    ],
    "bullets": []
   },
   {
    "h2": "Hvem bruger dokumentationen?",
    "paragraphs": [
     "Kommunen som myndighed og projektejer, lodsejeren, fonde, der skal se, hvad deres midler går til, og de lokale treparter, der følger fremdriften. Fordi de har forskellige behov, bør dokumentationen kunne læses uden specialværktøj, fx som PDF med kildeliste."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvad er forskellen på baseline og monitorering?",
    "a": "Baseline er registreringen af udgangspunktet. Monitorering er de gentagne registreringer bagefter, som sammenlignes med baseline."
   },
   {
    "q": "Beregner Freyra CO2- eller kvælstofeffekter?",
    "a": "Nej. Freyra dokumenterer arealets tilstand og udvikling. Effektberegninger laves med de officielle metoder og værktøjer."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "NIST FIPS 180-4: Secure Hash Standard",
    "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
   }
  ],
  "related": [
   "baseline-foer-projektstart",
   "dronefotos-gps-metadata",
   "sha-256-rapporter",
   "evidenspakke-til-fonde"
  ],
  "services": [
   "dronefoerregistrering",
   "monitorering",
   "evidenspakke"
  ],
  "terms": [
   "baseline",
   "mrv",
   "evidenskaede",
   "sha-256",
   "revisionsspor",
   "gentagelsespunkt"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "baseline-foer-projektstart",
  "kind": "artikel",
  "cluster": "Dokumentation og baseline",
  "h1": "Baseline før projektstart: sådan gør du det rigtigt",
  "metaTitle": "Baseline før projektstart i natur- og lavbundsprojekter",
  "metaDescription": "Hvorfor en baseline skal laves før de første gravemaskiner, hvad den bør indeholde, og hvordan den kan gentages ved senere efterflyvninger.",
  "intro": "Når et projekt først er gået i gang, kan udgangspunktet ikke registreres igen. Derfor er baseline det mest tidskritiske stykke dokumentation i et naturprojekt.",
  "sections": [
   {
    "h2": "Hvornår?",
    "paragraphs": [
     "Så tidligt som muligt, og senest før der ændres på arealet. Gerne i vækstsæsonen, hvor vegetationen viser mest, og på en dag med gode lysforhold. Notér vejret, så forskelle senere kan forklares."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad skal med?",
    "paragraphs": [],
    "bullets": [
     "Oversigtsfotos og faste gentagelsespunkter fra drone, med position fra billedets metadata.",
     "Ortofoto og højdemodel for området.",
     "Matrikler, vandløb, §3-registreringer og jordbunds- eller lavbundskort.",
     "En satellitscene fra en skyfri dag tæt på flyvningen.",
     "En faglig vurdering pr. punkt med navn og dato.",
     "En kildeliste med hentedato for hvert datasæt."
    ]
   },
   {
    "h2": "Undgå disse fejl",
    "paragraphs": [],
    "bullets": [
     "Kun at gemme nedskalerede billeder uden metadata.",
     "Ikke at notere, hvilke punkter der blev fotograferet.",
     "At blande vurdering og data, så man ikke kan se, hvem der har konkluderet hvad.",
     "At rette i en rapport efter den er sendt, uden ny version."
    ]
   },
   {
    "h2": "Sådan gør Freyra",
    "paragraphs": [
     "Freyra læser positionen direkte fra dronebillederne, henter de offentlige lag for området, viser foto og offentligt grundlag side om side og lader en fagperson bekræfte eller afvise hvert punkt. Resultatet låses i en versioneret rapport med SHA-256."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Kan man lave en baseline efter projektstart?",
    "a": "Man kan registrere tilstanden, men det er ikke længere udgangspunktet. Ældre ortofotos og satellitscener kan give et billede af tidligere tilstand, men med lavere detaljegrad."
   }
  ],
  "sources": [
   {
    "title": "Datafordeler: GeoDanmark Ortofoto",
    "url": "https://datafordeler.dk/dataoversigt/geodanmark-ortofoto/ortofoto-foraar-wms/"
   },
   {
    "title": "Dataforsyningen: Danmarks Højdemodel, terræn",
    "url": "https://dataforsyningen.dk/data/930"
   },
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "dokumentation-af-naturprojekter",
   "forundersoegelse-lavbundsprojekt",
   "droner-i-naturforvaltning"
  ],
  "services": [
   "dronefoerregistrering",
   "datagrundlag"
  ],
  "terms": [
   "baseline",
   "gentagelsespunkt",
   "ortofoto",
   "dhm",
   "sentinel-2"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "sha-256-rapporter",
  "kind": "artikel",
  "cluster": "Dokumentation og baseline",
  "h1": "Hvorfor en rapport med SHA-256 gør dokumentation stærkere",
  "metaTitle": "SHA-256 i rapporter: sådan beviser du, at intet er ændret",
  "metaDescription": "Hvad en SHA-256-hash er, hvorfor den gør det muligt at se, om en rapport er ændret, og hvordan versionering hænger sammen med revisionsspor.",
  "intro": "En rapport, der sendes rundt mellem kommune, lodsejer og fond, kan let findes i flere udgaver. En hash gør det muligt at fastslå, om to filer er præcis den samme.",
  "sections": [
   {
    "h2": "Hvad er SHA-256?",
    "paragraphs": [
     "SHA-256 er en kryptografisk hashfunktion, standardiseret af NIST i FIPS 180-4. Den laver et fingeraftryk af en fil. Ændres der blot ét tegn i filen, bliver fingeraftrykket et helt andet."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad bruges det til i praksis?",
    "paragraphs": [
     "Når en baseline-rapport låses, beregnes dens hash. Modtageren kan selv beregne hashen af den fil, de har fået, og sammenligne. Er de ens, er filen uændret."
    ],
    "bullets": []
   },
   {
    "h2": "Hash er ikke det samme som sandhed",
    "paragraphs": [
     "En hash viser, at en fil ikke er ændret. Den viser ikke, at indholdet er korrekt. Det er derfor, en baseline også skal have kilder, positioner og en navngiven faglig vurdering."
    ],
    "bullets": []
   },
   {
    "h2": "Versioner og revisionsspor",
    "paragraphs": [
     "Freyra gemmer hver rapport som en ny version med egen hash i stedet for at overskrive den gamle. Revisionssporet viser, hvem der gjorde hvad og hvornår."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Kan man selv tjekke en SHA-256-hash?",
    "a": "Ja. Både Windows, macOS og Linux har indbyggede værktøjer, der kan beregne SHA-256 af en fil."
   },
   {
    "q": "Bruger Freyra blockchain?",
    "a": "Nej. Freyra bruger almindelig versionering og SHA-256-hash."
   }
  ],
  "sources": [
   {
    "title": "NIST FIPS 180-4: Secure Hash Standard",
    "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
   }
  ],
  "related": [
   "dokumentation-af-naturprojekter",
   "evidenspakke-til-fonde"
  ],
  "services": [
   "evidenspakke"
  ],
  "terms": [
   "sha-256",
   "revisionsspor",
   "evidenskaede"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "offentlige-data-natur",
  "kind": "pillar",
  "cluster": "Offentlige data",
  "h1": "Offentlige data til natur- og arealprojekter: hvad findes der?",
  "metaTitle": "Offentlige data til naturprojekter: kort, højder, satellit",
  "metaDescription": "Overblik over de vigtigste offentlige datasæt til natur- og lavbundsprojekter: MARS, Danmarks Arealinformation, ortofoto, DHM og Sentinel-2.",
  "intro": "En stor del af grundlaget for et naturprojekt findes allerede som åbne, offentlige data. Udfordringen er at finde de rigtige lag, hente dem for netop dit areal og huske, hvilken version du brugte.",
  "sections": [
   {
    "h2": "MARS",
    "paragraphs": [
     "Platformen til Grøn Trepart med screening, planlægning, ansøgning og status. Størstedelen af data udstilles via en offentlig WFS-service."
    ],
    "bullets": []
   },
   {
    "h2": "Danmarks Arealinformation",
    "paragraphs": [
     "Danmarks Miljøportals kortløsning med lag om arealanvendelse, naturbeskyttelse og reguleringer, fx beskyttede naturtyper. Lagene tilføjes via lagvælgeren."
    ],
    "bullets": []
   },
   {
    "h2": "Ortofoto",
    "paragraphs": [
     "GeoDanmark Ortofoto er landsdækkende luftfotos, der er rettet op, så de kan bruges som kort. De udstilles via Datafordeleren."
    ],
    "bullets": []
   },
   {
    "h2": "Danmarks Højdemodel (DHM)",
    "paragraphs": [
     "DHM dækker hele Danmark og kan hentes via Dataforsyningen. Terrænmodellen er nyttig til at forstå, hvor vandet vil løbe og stå, når dræn og grøfter ændres."
    ],
    "bullets": []
   },
   {
    "h2": "Sentinel-2",
    "paragraphs": [
     "EU's Copernicus-satellitter Sentinel-2 leverer gratis billeder med op til 10 m opløsning i fire bånd. De giver tidsserier, der kan vise udviklingen i vegetation over sæsoner og år."
    ],
    "bullets": []
   },
   {
    "h2": "Vejr på flyvedagen",
    "paragraphs": [
     "Vejret påvirker både fotos og vegetation. Freyra noterer vejrdata fra DMI for flyvedagen, så forskelle mellem flyvninger kan forklares."
    ],
    "bullets": []
   },
   {
    "h2": "Husk hentedatoen",
    "paragraphs": [
     "Offentlige data opdateres. En registrering af §3-natur eller et lavbundskort kan ændre sig. Notér derfor altid datasæt og hentedato, så det er tydeligt, hvad en vurdering byggede på. Freyra viser status pr. kilde: hentet, delvist eller ikke tilgængelig."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er Danmarks Højdemodel gratis?",
    "a": "Ja. DHM kan hentes gratis via Dataforsyningen."
   },
   {
    "q": "Hvilken opløsning har Sentinel-2?",
    "a": "Sentinel-2 har fire bånd med 10 m opløsning, seks med 20 m og tre med 60 m."
   }
  ],
  "sources": [
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   },
   {
    "title": "Danmarks Miljøportal Help Center: Se beskyttet natur i Danmark",
    "url": "https://support.miljoeportal.dk/hc/da/articles/13657944382749-Danmarks-Arealinformation-Se-beskyttet-natur-i-Danmark"
   },
   {
    "title": "Datafordeler: GeoDanmark Ortofoto",
    "url": "https://datafordeler.dk/dataoversigt/geodanmark-ortofoto/ortofoto-foraar-wms/"
   },
   {
    "title": "Dataforsyningen: Danmarks Højdemodel, terræn",
    "url": "https://dataforsyningen.dk/data/930"
   },
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "mars-guide",
   "danmarks-arealinformation-guide",
   "sentinel-2-naturovervaagning",
   "paragraf-3-natur"
  ],
  "services": [
   "datagrundlag"
  ],
  "terms": [
   "danmarks-arealinformation",
   "ortofoto",
   "dhm",
   "sentinel-2",
   "ndvi",
   "wfs",
   "matrikel"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "danmarks-arealinformation-guide",
  "kind": "artikel",
  "cluster": "Offentlige data",
  "h1": "Danmarks Arealinformation: find §3-natur og lavbund på kortet",
  "metaTitle": "Danmarks Arealinformation: sådan finder du §3 og lavbund",
  "metaDescription": "Kort guide til Danmarks Arealinformation: tilføj kortlag som beskyttede naturtyper, se detaljer for et areal, og husk at tjekke status hos kommunen.",
  "intro": "Danmarks Arealinformation er det sted, de fleste starter, når de vil se, hvad der gælder for et areal. Her er de første skridt.",
  "sections": [
   {
    "h2": "Hvad er det?",
    "paragraphs": [
     "Danmarks Arealinformation er Danmarks Miljøportals kortløsning med data om arealanvendelse, naturbeskyttelse og reguleringer. Danmarks Miljøportal er et fællesoffentligt partnerskab ejet af staten, kommunerne og regionerne."
    ],
    "bullets": []
   },
   {
    "h2": "Sådan finder du beskyttet natur",
    "paragraphs": [
     "Ifølge Miljøportalens vejledning zoomer du ind på området, åbner lagvælgeren, vælger tilføj lag og søger efter beskyttede naturtyper. Klik på et areal for at se detaljer."
    ],
    "bullets": []
   },
   {
    "h2": "Vær opmærksom på",
    "paragraphs": [
     "Registreringen af § 3-natur er vejledende. Om et areal er beskyttet, afhænger af tilstanden på stedet, og den kan ændre sig. Tal med kommunen, hvis der er tvivl."
    ],
    "bullets": []
   },
   {
    "h2": "Fra kort til dokumentation",
    "paragraphs": [
     "Kortet viser, hvad der er registreret. Et dronefoto fra samme sted viser, hvad der faktisk står der i dag. Freyra lægger de to ved siden af hinanden pr. punkt, så forskelle bliver synlige og kan vurderes fagligt."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er § 3-kortet juridisk bindende?",
    "a": "Nej. Beskyttelsen følger af naturtilstanden på arealet. Registreringen på kortet er vejledende."
   }
  ],
  "sources": [
   {
    "title": "Danmarks Miljøportal Help Center: Se beskyttet natur i Danmark",
    "url": "https://support.miljoeportal.dk/hc/da/articles/13657944382749-Danmarks-Arealinformation-Se-beskyttet-natur-i-Danmark"
   },
   {
    "title": "Danmarks Miljøportal Help Center: Find og tilføj kortlag",
    "url": "https://support.miljoeportal.dk/hc/da/articles/13515181148573-Danmarks-Arealinformation-Find-og-tilf%C3%B8j-kortlag"
   },
   {
    "title": "Danmarks Miljøportal: Systemer",
    "url": "https://www.miljoeportal.dk/systemer"
   },
   {
    "title": "Retsinformation: Vejledning om naturbeskyttelseslovens § 3-beskyttede naturtyper",
    "url": "https://www.retsinformation.dk/eli/retsinfo/2019/10226"
   }
  ],
  "related": [
   "offentlige-data-natur",
   "paragraf-3-natur",
   "mars-guide"
  ],
  "services": [
   "datagrundlag"
  ],
  "terms": [
   "danmarks-arealinformation",
   "danmarks-miljoeportal",
   "paragraf-3-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "sentinel-2-naturovervaagning",
  "kind": "artikel",
  "cluster": "Offentlige data",
  "h1": "Sentinel-2 i naturprojekter: hvad kan satellitdata vise?",
  "metaTitle": "Sentinel-2 og NDVI i naturprojekter: muligheder og grænser",
  "metaDescription": "Hvad gratis Sentinel-2-data kan og ikke kan bruges til i natur- og lavbundsprojekter, herunder opløsning, skydække og NDVI.",
  "intro": "Satellitbilleder er gratis, dækker hele landet og går flere år tilbage. Det gør dem oplagte som supplement til droneflyvninger. Men opløsningen sætter grænser.",
  "sections": [
   {
    "h2": "Opløsning",
    "paragraphs": [
     "Sentinel-2 har fire bånd med 10 m opløsning, seks med 20 m og tre med 60 m. Et pixel i de skarpeste bånd dækker altså 100 m². Det er godt til at se udviklingen på et helt areal, men ikke til at se enkelte træer eller små vandhuller."
    ],
    "bullets": []
   },
   {
    "h2": "Skyer",
    "paragraphs": [
     "Optiske satellitter ser ikke gennem skyer. I Danmark kan der gå tid mellem skyfri optagelser, så det er normalt at bruge den nærmeste skyfri scene og angive datoen."
    ],
    "bullets": []
   },
   {
    "h2": "NDVI",
    "paragraphs": [
     "NDVI er et vegetationsindeks, der beregnes ud fra forskellen mellem nær-infrarødt og rødt lys. Høje værdier tyder på grøn, aktiv vegetation. NDVI er en indikator, ikke en måling af biodiversitet."
    ],
    "bullets": []
   },
   {
    "h2": "Drone og satellit sammen",
    "paragraphs": [
     "Dronefotos giver detaljen på få punkter. Satellit giver overblikket over tid. Sammen kan de vise både, hvad der er på stedet, og hvordan hele området udvikler sig."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er Sentinel-2-data gratis?",
    "a": "Ja. Copernicus-data er gratis tilgængelige for alle brugere."
   },
   {
    "q": "Kan NDVI måle biodiversitet?",
    "a": "Nej. NDVI siger noget om grøn vegetation, ikke om artsrigdom."
   }
  ],
  "sources": [
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "offentlige-data-natur",
   "droner-i-naturforvaltning",
   "monitorering-af-naturprojekter"
  ],
  "services": [
   "datagrundlag",
   "monitorering"
  ],
  "terms": [
   "sentinel-2",
   "ndvi",
   "ortofoto"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "droner-i-naturforvaltning",
  "kind": "pillar",
  "cluster": "Droner",
  "h1": "Droner i naturforvaltning: registrering, regler og sporbarhed",
  "metaTitle": "Droner i naturforvaltning: registrering og regler",
  "metaDescription": "Hvordan droner bruges til at registrere natur- og vandløbsarealer, hvilke regler der gælder, og hvordan billederne gøres sporbare.",
  "intro": "En drone kan på en time fotografere et areal, som det tager en dag at gå. Men billeder alene er ikke dokumentation. Det bliver de først, når sted, tid og vurdering hænger sammen.",
  "sections": [
   {
    "h2": "Hvad droner bruges til",
    "paragraphs": [],
    "bullets": [
     "Oversigtsfotos af projektområder og vandløbsstrækninger.",
     "Faste gentagelsespunkter, der fotograferes igen ved efterflyvning.",
     "Registrering af vegetation, bevoksning langs vandløb og tegn på vand.",
     "Billeder til dialog med lodsejere og politikere."
    ]
   },
   {
    "h2": "Regler for droneflyvning",
    "paragraphs": [
     "Droneregler i Danmark administreres af Trafikstyrelsen og er beskrevet på droneregler.dk. Ifølge droneregler.dk skal du registrere dig som droneoperatør hos Trafikstyrelsen, hvis dronen vejer over 250 g, eller hvis den vejer under 250 g og har en sensor som fx et kamera. Det teoretiske dronecertifikat A1/A3 tages ved en online-teoriprøve og gælder i fem år. Droneoperatøren skal også have en ansvarsforsikring. Tjek altid de gældende regler og lokale restriktioner før flyvning."
    ],
    "bullets": []
   },
   {
    "h2": "Billeder, der kan spores",
    "paragraphs": [
     "Moderne droner gemmer position og tidspunkt i billedfilens metadata (EXIF og XMP). Bevares originalfilerne, kan hvert billede placeres præcist på kortet bagefter. Nedskalerede billeder i en rapport har ofte mistet disse data."
    ],
    "bullets": []
   },
   {
    "h2": "Privatliv",
    "paragraphs": [
     "Dronefotos kan vise huse, biler og personer. Planlæg flyvningen, så du undgår det, og fjern eller slør det, der ikke er relevant, før billeder deles bredt."
    ],
    "bullets": []
   },
   {
    "h2": "Fra flyvning til rapport",
    "paragraphs": [
     "I Freyra uploades originalfotos, positionen læses automatisk, og de offentlige data for området hentes. Hvert punkt vurderes fagligt, og det hele samles i en versioneret baseline-rapport."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Skal jeg registreres for at flyve med drone?",
    "a": "Ifølge droneregler.dk skal du registreres som droneoperatør, hvis dronen vejer over 250 g, eller hvis den er lettere og har en sensor som fx et kamera."
   },
   {
    "q": "Hvorfor skal originalfilerne gemmes?",
    "a": "Fordi de indeholder position og tidspunkt i metadata. Det går ofte tabt, når billeder skaleres ned."
   }
  ],
  "sources": [
   {
    "title": "Droneregler.dk: Registrer dig som droneoperatør",
    "url": "https://www.droneregler.dk/fritidsdroneflyvning/registrer-dig-som-privat-droneoperatoer"
   },
   {
    "title": "Droneregler.dk: Overblik over dronecertifikaterne",
    "url": "https://www.droneregler.dk/dronecertifikat/overblik-over-dronecertifikaterne"
   },
   {
    "title": "Trafikstyrelsen: Den åbne kategori",
    "url": "https://www.trafikstyrelsen.dk/publikationsliste/luftfart-publikationer/2024/jan/den-aabne-kategori"
   }
  ],
  "related": [
   "dronefotos-gps-metadata",
   "baseline-foer-projektstart",
   "monitorering-af-naturprojekter"
  ],
  "services": [
   "dronefoerregistrering",
   "monitorering"
  ],
  "terms": [
   "exif",
   "gentagelsespunkt",
   "efterflyvning",
   "baseline"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "dronefotos-gps-metadata",
  "kind": "artikel",
  "cluster": "Droner",
  "h1": "Dronefotos med GPS: sådan bevarer du positionen i billederne",
  "metaTitle": "Dronefotos med GPS-metadata: EXIF, XMP og sporbarhed",
  "metaDescription": "Hvorfor positionen i dronefotos er afgørende for dokumentation, hvor den gemmes (EXIF/XMP), og hvordan du undgår at miste den.",
  "intro": "Et dronefoto uden position er et pænt billede. Med position og tidspunkt er det et datapunkt, der kan placeres på kortet og sammenlignes med senere flyvninger.",
  "sections": [
   {
    "h2": "Hvor gemmes positionen?",
    "paragraphs": [
     "De fleste droner gemmer bredde- og længdegrad, højde og tidspunkt i billedfilens EXIF-data. Mange gemmer også ekstra oplysninger i XMP, fx kameraets retning."
    ],
    "bullets": []
   },
   {
    "h2": "Hvordan mister man den?",
    "paragraphs": [],
    "bullets": [
     "Når billeder skaleres ned eller eksporteres fra visse programmer.",
     "Når billeder sendes via beskedtjenester, der fjerner metadata.",
     "Når billeder indsættes i dokumenter og hentes ud igen."
    ]
   },
   {
    "h2": "Sådan bevarer du den",
    "paragraphs": [],
    "bullets": [
     "Gem originalfilerne fra dronens hukommelseskort uændret.",
     "Upload originalerne til det system, der skal placere dem.",
     "Brug kun nedskalerede kopier til visning, og behold koblingen til originalen."
    ]
   },
   {
    "h2": "Når positionen skal fjernes",
    "paragraphs": [
     "Til offentlig brug, fx på en hjemmeside, kan det være rigtigt at fjerne positionen, så en lodsejers areal ikke kan findes. Gør det på en kopi, ikke på originalen."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvad er EXIF?",
    "a": "EXIF er en standard for metadata i billedfiler, fx kameramodel, tidspunkt og GPS-position."
   }
  ],
  "sources": [
   {
    "title": "Droneregler.dk: Registrer dig som droneoperatør",
    "url": "https://www.droneregler.dk/fritidsdroneflyvning/registrer-dig-som-privat-droneoperatoer"
   }
  ],
  "related": [
   "droner-i-naturforvaltning",
   "baseline-foer-projektstart"
  ],
  "services": [
   "dronefoerregistrering"
  ],
  "terms": [
   "exif",
   "gentagelsespunkt"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "monitorering-af-naturprojekter",
  "kind": "artikel",
  "cluster": "Dokumentation og baseline",
  "h1": "Monitorering af naturprojekter: før og efter fra samme punkt",
  "metaTitle": "Monitorering af naturprojekter med før/efter-fotos",
  "metaDescription": "Sådan planlægger du monitorering af et natur- eller lavbundsprojekt med faste gentagelsespunkter, så før og efter kan sammenlignes.",
  "intro": "De fleste har set før/efter-billeder, der ikke kan sammenlignes, fordi de er taget fra forskellige steder og på forskellige årstider. God monitorering handler om at gentage det samme.",
  "sections": [
   {
    "h2": "Faste gentagelsespunkter",
    "paragraphs": [
     "Udvælg punkter ved baseline, der dækker de vigtigste dele af arealet, fx vandløbets forløb, kanter mod mark og områder, der skal vådgøres. Fotografér fra samme position og retning hver gang."
    ],
    "bullets": []
   },
   {
    "h2": "Samme årstid",
    "paragraphs": [
     "Vegetation ændrer sig gennem året. Sammenlign derfor så vidt muligt flyvninger fra samme periode, og notér vejret."
    ],
    "bullets": []
   },
   {
    "h2": "Hvor ofte?",
    "paragraphs": [
     "Det afhænger af projektet og af de krav, der følger med tilskud eller fondsbevilling. Typisk efter anlæg og derefter med faste intervaller. Afklar kravene tidligt."
    ],
    "bullets": []
   },
   {
    "h2": "Satellit som supplement",
    "paragraphs": [
     "Mellem flyvningerne kan Sentinel-2-scener vise udviklingen på hele arealet i lavere opløsning."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvad er en efterflyvning?",
    "a": "En ny droneflyvning over et projektområde, hvor de samme gentagelsespunkter fotograferes, så de kan sammenlignes med baseline."
   }
  ],
  "sources": [
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "dokumentation-af-naturprojekter",
   "baseline-foer-projektstart",
   "sentinel-2-naturovervaagning"
  ],
  "services": [
   "monitorering",
   "dronefoerregistrering"
  ],
  "terms": [
   "efterflyvning",
   "gentagelsespunkt",
   "baseline",
   "sentinel-2"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "paragraf-3-natur",
  "kind": "artikel",
  "cluster": "Natur og lovgivning",
  "h1": "§ 3-beskyttet natur: hvad er beskyttet, og hvad betyder det?",
  "metaTitle": "§ 3-natur forklaret: naturtyper, 2.500 m² og forbud",
  "metaDescription": "Naturbeskyttelseslovens § 3 kort forklaret: hvilke naturtyper der er beskyttet, størrelsesgrænser, mosaikreglen og hvad det betyder for projekter.",
  "intro": "Naturbeskyttelseslovens § 3 er en af de vigtigste regler, når et areal skal omlægges. Den kan både stoppe et projekt og være en del af målet.",
  "sections": [
   {
    "h2": "Hvilke naturtyper er beskyttet?",
    "paragraphs": [
     "Ifølge naturbeskyttelsesloven må der ikke ændres i tilstanden af:"
    ],
    "bullets": [
     "naturlige søer over 100 m²",
     "vandløb, der er udpeget som beskyttede",
     "heder, moser og lignende, strandenge og strandsumpe samt ferske enge og biologiske overdrev, når de enkeltvis, tilsammen eller sammen med søer er større end 2.500 m² i sammenhængende areal",
     "moser under 2.500 m², når de ligger i forbindelse med en beskyttet sø eller et beskyttet vandløb"
    ]
   },
   {
    "h2": "Mosaikreglen",
    "paragraphs": [
     "Små biotoper under 2.500 m² er også beskyttet, hvis de støder op til eller indgår i andre beskyttede naturtyper, så det samlede areal er 2.500 m² eller mere. Det følger af vejledningen til § 3."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad må man ikke?",
    "paragraphs": [
     "På arealer omfattet af § 3, stk. 2 eller 3, må der efter § 4 som udgangspunkt ikke sprøjtes, gødes, omlægges, jordbehandles, sås eller plantes. Hidtidig lovlig benyttelse kan dog fortsætte. Ændringer kræver dispensation fra kommunen."
    ],
    "bullets": []
   },
   {
    "h2": "Betydning for skovrejsning og lavbund",
    "paragraphs": [
     "Ifølge SGAV må et skovrejsningsareal med tilskud ikke være § 3-beskyttet natur. I lavbundsprojekter kan § 3-arealer indgå, men ændringer i tilstanden kræver tilladelse. Derfor er det vigtigt at kende status tidligt."
    ],
    "bullets": []
   },
   {
    "h2": "Kort og virkelighed",
    "paragraphs": [
     "Kortlaget over beskyttede naturtyper er vejledende. Beskyttelsen følger af naturtilstanden. Et dronefoto fra i dag sammenholdt med kortet kan vise, om registreringen stadig passer, men den endelige vurdering er kommunens."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvor store skal § 3-arealer være?",
    "a": "Søer over 100 m². Heder, moser, strandenge, strandsumpe, ferske enge og overdrev over 2.500 m² i sammenhængende areal, med særregler for moser ved søer og vandløb."
   },
   {
    "q": "Hvem administrerer § 3?",
    "a": "Kommunen er myndighed og kan give dispensation."
   }
  ],
  "sources": [
   {
    "title": "Retsinformation: Bekendtgørelse af lov om naturbeskyttelse (LBK nr. 927 af 2024)",
    "url": "https://www.retsinformation.dk/eli/lta/2024/927"
   },
   {
    "title": "Retsinformation: Vejledning om naturbeskyttelseslovens § 3-beskyttede naturtyper",
    "url": "https://www.retsinformation.dk/eli/retsinfo/2019/10226"
   },
   {
    "title": "Danmarks Miljøportal Help Center: Se beskyttet natur i Danmark",
    "url": "https://support.miljoeportal.dk/hc/da/articles/13657944382749-Danmarks-Arealinformation-Se-beskyttet-natur-i-Danmark"
   },
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "danmarks-arealinformation-guide",
   "skovrejsning-groen-trepart",
   "lavbundsprojekter"
  ],
  "services": [
   "datagrundlag",
   "beplantningsanalyse"
  ],
  "terms": [
   "paragraf-3-natur",
   "mosaikbestemmelsen"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "skovrejsning-groen-trepart",
  "kind": "artikel",
  "cluster": "Skov og beplantning",
  "h1": "Skovrejsning i Grøn Trepart: mål, tilskud og krav til arealet",
  "metaTitle": "Skovrejsning i Grøn Trepart: mål, tilskud og arealkrav",
  "metaDescription": "250.000 ha ny skov frem mod 2045. Hvad gælder for tilskud til skovrejsning, hvilke arealer der er udelukket, og hvordan du screener.",
  "intro": "Skovrejsning er den største enkeltindsats i Grøn Trepart målt i areal. Her er målene og de vigtigste krav til arealet, som SGAV beskriver dem.",
  "sections": [
   {
    "h2": "Målene",
    "paragraphs": [
     "Aftalen indeholder rejsning af 250.000 hektar skov frem mod 2045. Ifølge Miljøministeriet bliver 80.000 hektar til privat urørt skov og 20.000 hektar til statslig urørt skov."
    ],
    "bullets": []
   },
   {
    "h2": "Tilskud til skovrejsning",
    "paragraphs": [
     "Ifølge SGAV er ordningen åben hele året, og der søges via MARS med MitID. Alle private og offentlige lodsejere kan søge, herunder kommuner, dog ikke Naturstyrelsen. SGAV angiver forventede tilskudssatser på 75.500 kr. pr. ha og 90.500 kr. pr. ha for skov, der udlægges som urørt. Arealet skal pålægges fredskovspligt. Tjek de aktuelle satser og krav hos SGAV."
    ],
    "bullets": []
   },
   {
    "h2": "Arealer, der ikke kan bruges",
    "paragraphs": [
     "SGAV oplyser blandt andet, at skovrejsningsarealet ikke må være § 3-beskyttet natur og ikke må være lavbundsjord med over 6 pct. organisk kulstof, dog med undtagelse for små arealer. Begge kortlag kan ses i MARS."
    ],
    "bullets": []
   },
   {
    "h2": "Beplantning langs vandløb",
    "paragraphs": [
     "Træer langs vandløb kan give skygge og stabilisere brinker, men effekten afhænger af stedet. Freyras beplantningsanalyse er en skitse: den markerer zoner på 10 og 20 m langs vandløbet, trækker § 3-natur og eksisterende skov fra og markerer lavbund. Arealer vises som egnet, betinget eller uegnet og skal altid valideres fagligt."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Kan kommuner søge tilskud til skovrejsning?",
    "a": "Ja. Ifølge SGAV kan alle private og offentlige lodsejere søge, herunder kommuner, men ikke Naturstyrelsen."
   },
   {
    "q": "Kan man rejse skov på lavbund?",
    "a": "Ikke med tilskud, hvis jorden har over 6 pct. organisk kulstof, ifølge SGAV, dog med undtagelse for små arealer."
   }
  ],
  "sources": [
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   },
   {
    "title": "Miljøministeriet: 390.000 hektar landbrug omlægges til skov og natur",
    "url": "https://mim.dk/nyheder/pressemeddelelser/2024/juni/nyt-groent-danmark-390000-hektar-landbrug-omlaegges-til-skov-og-natur"
   },
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   }
  ],
  "related": [
   "groen-trepart",
   "paragraf-3-natur",
   "beplantning-langs-vandloeb"
  ],
  "services": [
   "beplantningsanalyse",
   "datagrundlag"
  ],
  "terms": [
   "skovrejsning",
   "uroert-skov",
   "fredskovspligt",
   "kulstofrig-lavbundsjord"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "beplantning-langs-vandloeb",
  "kind": "artikel",
  "cluster": "Skov og beplantning",
  "h1": "Beplantning langs vandløb: sådan screener du egnede arealer",
  "metaTitle": "Beplantning langs vandløb: screening af egnede arealer",
  "metaDescription": "En praktisk metode til at screene, hvor træer langs et vandløb kan give mening: buffere, § 3, eksisterende skov, lavbund og faglig validering.",
  "intro": "Hvor kan man plante træer langs et vandløb, og hvor bør man lade være? En systematisk screening på offentlige data giver et godt første svar, før fagfolk og lodsejere tager stilling.",
  "sections": [
   {
    "h2": "Trin 1: buffer langs vandløbet",
    "paragraphs": [
     "Tegn zoner langs den officielle vandløbslinje, fx 10 og 20 m. Det er her, skygge og brinkstabilitet typisk har betydning."
    ],
    "bullets": []
   },
   {
    "h2": "Trin 2: træk det fra, der ikke skal plantes",
    "paragraphs": [],
    "bullets": [
     "§ 3-beskyttet natur, hvor beplantning som udgangspunkt ikke er tilladt.",
     "Eksisterende skov og trædække.",
     "Arealer med andre bindinger, som kommunen kender til."
    ]
   },
   {
    "h2": "Trin 3: markér lavbund",
    "paragraphs": [
     "Kulstofrig lavbund kan være bedre egnet til vådgøring end til skov, og skovrejsningstilskud er udelukket på lavbund over 6 pct. organisk kulstof ifølge SGAV. Markér den, så den kan vurderes særskilt."
    ],
    "bullets": []
   },
   {
    "h2": "Trin 4: klassificér",
    "paragraphs": [
     "Del de resterende arealer i egnet, betinget og uegnet, og opgør arealet pr. delstrækning. Det gør det let at prioritere i dialogen med lodsejerne."
    ],
    "bullets": []
   },
   {
    "h2": "Trin 5: valider fagligt",
    "paragraphs": [
     "En screening er en skitse. Jordbund, afvanding, adgang, lodsejerens ønsker og vandløbets tilstand skal vurderes på stedet. Effekter som skygge, kvælstof og fosfor bør kun angives som intervaller fra litteraturen med kildehenvisning."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er en screening nok til at plante?",
    "a": "Nej. Den viser, hvor det er værd at kigge nærmere. Den faglige vurdering og lodsejerens accept kommer bagefter."
   }
  ],
  "sources": [
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   },
   {
    "title": "Retsinformation: Bekendtgørelse af lov om naturbeskyttelse (LBK nr. 927 af 2024)",
    "url": "https://www.retsinformation.dk/eli/lta/2024/927"
   }
  ],
  "related": [
   "skovrejsning-groen-trepart",
   "paragraf-3-natur",
   "vandloebsrestaurering"
  ],
  "services": [
   "beplantningsanalyse"
  ],
  "terms": [
   "bufferzone-vandloeb",
   "paragraf-3-natur",
   "kulstofrig-lavbundsjord"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "vandloebsrestaurering",
  "kind": "artikel",
  "cluster": "Lavbund og vådområder",
  "h1": "Restaurering af ådale og vandløb: formål og dokumentation",
  "metaTitle": "Restaurering af ådale: formål, tilskud og dokumentation",
  "metaDescription": "Hvad restaurering af ådale er i VLP, hvad formålet er, og hvordan du dokumenterer vandløbets tilstand før og efter.",
  "intro": "Restaurering af ådale er en af de seks indsatser i ordningen Vådområder og lavbundsprojekter. Den handler om at genskabe sammenhængen mellem vandløbet og arealerne omkring det.",
  "sections": [
   {
    "h2": "Formål",
    "paragraphs": [
     "Ifølge Landbrugsstyrelsen er formålet at forbedre de fysiske forhold og bidrage til at opfylde miljømålene for udvalgte vandløbsstrækninger. Indsatsen kan også bidrage til at fjerne kvælstof og reducere udledningen af drivhusgasser."
    ],
    "bullets": []
   },
   {
    "h2": "Hvem kan søge?",
    "paragraphs": [
     "Restaurering af ådale hører under VKP-indsatserne i spor 1. Kommuner kan søge til alle seks indsatser i ordningen."
    ],
    "bullets": []
   },
   {
    "h2": "Hvad skal dokumenteres?",
    "paragraphs": [],
    "bullets": [
     "Vandløbets forløb og brinker før projektet.",
     "Bevoksning langs vandløbet.",
     "Arealerne i ådalen og deres anvendelse.",
     "Terræn fra højdemodellen, så ændringer i vandets vej kan vurderes."
    ]
   },
   {
    "h2": "Drone som supplement til opmåling",
    "paragraphs": [
     "Opmåling af vandløbets profil kræver landmåler eller rådgiver. Drone giver det visuelle overblik over hele strækningen og faste punkter, der kan gentages efter anlæg."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Er vandløbsrestaurering en del af VLP?",
    "a": "Ja. Restaurering af ådale er en af de fire VKP-indsatser i ordningen."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "Dataforsyningen: Danmarks Højdemodel, terræn",
    "url": "https://dataforsyningen.dk/data/930"
   }
  ],
  "related": [
   "lavbundsprojekter",
   "beplantning-langs-vandloeb",
   "monitorering-af-naturprojekter"
  ],
  "services": [
   "dronefoerregistrering",
   "monitorering",
   "beplantningsanalyse"
  ],
  "terms": [
   "aadalsrestaurering",
   "vlp",
   "dhm"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "kystvandraad",
  "kind": "artikel",
  "cluster": "Grøn Trepart",
  "h1": "Kystvandråd: hvad laver de, og hvordan spiller de sammen med treparterne?",
  "metaTitle": "Kystvandråd: rolle og samspil med lokale treparter",
  "metaDescription": "De 17 kystvandråd rådgiver om lokale virkemidler for sundere kystvand. Her er deres opgaver og samspil med de lokale grønne treparter.",
  "intro": "Kystvandrådene er mindre kendte end de lokale treparter, men de spiller en rolle i at finde vejen til renere fjorde og kystvande.",
  "sections": [
   {
    "h2": "Hvad er et kystvandråd?",
    "paragraphs": [
     "Ifølge SGAV er de 17 kystvandråd rådgivende partnerskaber på tværs af et eller flere vandoplande i områder med stort kvælstofindsatsbehov. Kommunerne har ansvaret for rådene og leder møderne."
    ],
    "bullets": []
   },
   {
    "h2": "Opgaver",
    "paragraphs": [],
    "bullets": [
     "Bidrage med lokal viden og forankring til vandområdeplaner og udtagningsprojekter.",
     "Analysere kystvandets væsentligste udfordringer i forhold til vandrammedirektivet.",
     "Rådgive om lokale virkemidler.",
     "Gennemføre lokalt forankrede analyser og forsøgsprojekter."
    ]
   },
   {
    "h2": "Samspil med treparterne",
    "paragraphs": [
     "Kystvandrådet kan være bidragende instans til de lokale treparters omlægningsplaner. Begge arbejder mod samme mål, men treparterne fokuserer på arealomlægning."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Hvor mange kystvandråd er der?",
    "a": "SGAV oplyser, at der er 17 kystvandråd."
   }
  ],
  "sources": [
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   }
  ],
  "related": [
   "lokale-groenne-treparter",
   "groen-trepart"
  ],
  "services": [
   "datagrundlag"
  ],
  "terms": [
   "kystvandraad",
   "lokal-groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "evidenspakke-til-fonde",
  "kind": "artikel",
  "cluster": "Dokumentation og baseline",
  "h1": "Dokumentation til fonde og bevillingsgivere i naturprojekter",
  "metaTitle": "Dokumentation til fonde i naturprojekter: hvad skal med?",
  "metaDescription": "Hvad en fond typisk vil kunne se om et naturprojekt, og hvordan en samlet evidenspakke med fotos, kilder og faglig vurdering gør det let.",
  "intro": "Fonde og bevillingsgivere vil vide, hvad pengene går til, og om projektet udvikler sig som lovet. Kravene varierer, så afklar dem altid med den konkrete fond. Her er de elementer, der går igen.",
  "sections": [
   {
    "h2": "Det, de fleste spørger om",
    "paragraphs": [],
    "bullets": [
     "Hvor ligger projektet, og hvad er afgrænsningen?",
     "Hvordan så arealet ud før?",
     "Hvem har vurderet det fagligt?",
     "Hvad er sket siden, og hvordan kan man se det?"
    ]
   },
   {
    "h2": "En evidenspakke",
    "paragraphs": [
     "En evidenspakke samler baseline, efterflyvninger, kildeliste, faglige vurderinger og revisionsspor i én PDF og et arkiv med originalfiler. Pakken er låst med SHA-256, så modtageren kan se, at intet er ændret."
    ],
    "bullets": []
   },
   {
    "h2": "Hold påstande og data adskilt",
    "paragraphs": [
     "Skriv tydeligt, hvad der er målt, hvad der er vurderet, og hvad der er forventet. Effekter som CO2 eller kvælstof bør henvise til de officielle beregninger eller angives som intervaller fra litteraturen."
    ],
    "bullets": []
   }
  ],
  "faq": [
   {
    "q": "Kan en fond søge tilskud til lavbundsprojekter?",
    "a": "Ja. Ifølge Landbrugsstyrelsen kan fonde med almennyttige natur-, miljø- eller klimaformål søge til KLA-lavbund og KLA-kvælstofvådområder."
   }
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "NIST FIPS 180-4: Secure Hash Standard",
    "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
   }
  ],
  "related": [
   "dokumentation-af-naturprojekter",
   "sha-256-rapporter",
   "monitorering-af-naturprojekter"
  ],
  "services": [
   "evidenspakke",
   "monitorering"
  ],
  "terms": [
   "evidenskaede",
   "sha-256",
   "baseline",
   "revisionsspor"
  ],
  "updated": "2026-10-22"
 }
];
