// Indhold er faktatjekket mod officielle kilder 22.10.2026. Redigér ikke tal uden kilde.
import type { Source } from "./viden";
export type Term = { slug: string; term: string; metaTitle: string; metaDescription: string; short: string; body: string[]; sources: Source[]; related: string[]; articles: string[]; updated: string };
export const ordbog: Term[] = [
 {
  "slug": "groen-trepart",
  "term": "Grøn Trepart",
  "metaTitle": "Grøn Trepart: hvad betyder det?",
  "metaDescription": "Grøn Trepart er betegnelsen for Aftale om et grønt Danmark fra 24. juni 2024 mellem regeringen og parterne i den grønne trepart.",
  "short": "Grøn Trepart er betegnelsen for Aftale om et grønt Danmark fra 24. juni 2024 mellem regeringen og parterne i den grønne trepart.",
  "body": [
   "Parterne er Landbrug & Fødevarer, Danmarks Naturfredningsforening, Fødevareforbundet NNF, Dansk Metal, Dansk Industri og KL. Aftalen omfatter blandt andet rejsning af 250.000 ha skov, udtagning af 140.000 ha kulstofholdige lavbundsjorde inklusive randarealer og en CO2e-afgift på husdyr.",
   "Implementeringen sker lokalt gennem 23 lokale grønne treparter og deres omlægningsplaner."
  ],
  "sources": [
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   },
   {
    "title": "Miljøministeriet: 390.000 hektar landbrug omlægges til skov og natur",
    "url": "https://mim.dk/nyheder/pressemeddelelser/2024/juni/nyt-groent-danmark-390000-hektar-landbrug-omlaegges-til-skov-og-natur"
   }
  ],
  "related": [
   "lokal-groen-trepart",
   "omlaegningsplan",
   "danmarks-groenne-arealfond"
  ],
  "articles": [
   "groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "lokal-groen-trepart",
  "term": "Lokal grøn trepart",
  "metaTitle": "Lokal grøn trepart: hvad betyder det?",
  "metaDescription": "En lokal grøn trepart er et samarbejdsorgan, der koordinerer arealomlægningen i et vandopland. Der er 23 af dem.",
  "short": "En lokal grøn trepart er et samarbejdsorgan, der koordinerer arealomlægningen i et vandopland. Der er 23 af dem.",
  "body": [
   "Hver lokal trepart består af repræsentanter for kommunerne i oplandet, lokale landbrugs- og naturorganisationer og Naturstyrelsen. Kommunerne udpeger en formands- og en sekretariatskommune.",
   "Den lokale trepart er ikke myndighed og træffer ikke afgørelser i konkrete sager. Projekterne realiseres af kommuner, lodsejere, private aktører eller Naturstyrelsen."
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
   "omlaegningsplan",
   "udtagningskonsulent"
  ],
  "articles": [
   "lokale-groenne-treparter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "omlaegningsplan",
  "term": "Omlægningsplan",
  "metaTitle": "Omlægningsplan: hvad betyder det?",
  "metaDescription": "En omlægningsplan viser, hvordan en lokal grøn trepart vil nå sin del af kvælstofindsatsbehovet og lavbundsmålet gennem arealomlægning.",
  "short": "En omlægningsplan viser, hvordan en lokal grøn trepart vil nå sin del af kvælstofindsatsbehovet og lavbundsmålet gennem arealomlægning.",
  "body": [
   "Planerne omfatter udtagning af kulstofrige lavbundsjorder, vådområder, skovrejsning, ekstensivering og andre arealbaserede indsatser. De 23 planer blev udarbejdet i 2025 og principvedtaget af kommunalbestyrelserne for den del, der ligger i egen kommune.",
   "Planerne udarbejdes og følges i MARS."
  ],
  "sources": [
   {
    "title": "SGAV: Omlægningsplaner",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/omlaegningsplaner"
   },
   {
    "title": "KL: Status på den kommunale implementering af arealomlægningsindsatsen, maj 2026",
    "url": "https://www.kl.dk/media/00mhx3xi/status-paa-den-kommunale-implementering-af-arealomlaegningsindsatsen-i-groen-trepart.pdf"
   }
  ],
  "related": [
   "lokal-groen-trepart",
   "mars",
   "ekstensivering"
  ],
  "articles": [
   "omlaegningsplaner"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "mars",
  "term": "MARS",
  "metaTitle": "MARS: hvad betyder det?",
  "metaDescription": "MARS står for Multifunktionel Arealregistrering og er platformen for arealindsatserne i Grøn Trepart.",
  "short": "MARS står for Multifunktionel Arealregistrering og er platformen for arealindsatserne i Grøn Trepart.",
  "body": [
   "MARS er udviklet af Styrelsen for Grøn Arealomlægning og Vandmiljø med Danmarks Miljøportal som leverandør. Den har fire moduler: screening, planlægning, ansøgning og status. Screening og status kræver ikke login.",
   "Mange tilskudsansøgninger, fx til vådområder, lavbund og skovrejsning, starter med at projektområdet indtegnes i MARS."
  ],
  "sources": [
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   },
   {
    "title": "MARS (mars.sgav.dk)",
    "url": "https://mars.sgav.dk/"
   }
  ],
  "related": [
   "danmarks-miljoeportal",
   "sgav",
   "omlaegningsplan"
  ],
  "articles": [
   "mars-guide"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "danmarks-groenne-arealfond",
  "term": "Danmarks Grønne Arealfond",
  "metaTitle": "Danmarks Grønne Arealfond: hvad betyder det?",
  "metaDescription": "Danmarks Grønne Arealfond er den fond, der etableres med Grøn Trepart for at drive omlægningen af landarealet.",
  "short": "Danmarks Grønne Arealfond er den fond, der etableres med Grøn Trepart for at drive omlægningen af landarealet.",
  "body": [
   "Ifølge regeringen skal fonden omfatte indsatser som skovrejsning, udtagning af lavbundsjorde og strategisk jordopkøb, herunder med henblik på kvælstofreduktioner. Aktiviteterne udgør omtrent 40 mia. kr."
  ],
  "sources": [
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   }
  ],
  "related": [
   "groen-trepart",
   "skovrejsning"
  ],
  "articles": [
   "groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "udtagningskonsulent",
  "term": "Udtagningskonsulent",
  "metaTitle": "Udtagningskonsulent: hvad betyder det?",
  "metaDescription": "En udtagningskonsulent hjælper lodsejere og projektejere med at realisere arealomlægningsprojekter.",
  "short": "En udtagningskonsulent hjælper lodsejere og projektejere med at realisere arealomlægningsprojekter.",
  "body": [
   "Ifølge SGAV har udtagningskonsulenterne to roller: de er lodsejernes primære kontakt i projekter, som lodsejerne selv kan søge tilskud til, og de bidrager til at facilitere større projekter, hvor en kommune eller Naturstyrelsen er projektejer. De arbejder tæt sammen med de lokale treparter."
  ],
  "sources": [
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   }
  ],
  "related": [
   "lokal-groen-trepart",
   "naturstyrelsen"
  ],
  "articles": [
   "lokale-groenne-treparter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "kystvandraad",
  "term": "Kystvandråd",
  "metaTitle": "Kystvandråd: hvad betyder det?",
  "metaDescription": "Et kystvandråd er et rådgivende partnerskab, der arbejder for sundere kystvand i et eller flere vandoplande.",
  "short": "Et kystvandråd er et rådgivende partnerskab, der arbejder for sundere kystvand i et eller flere vandoplande.",
  "body": [
   "Der er 17 kystvandråd i områder med stort kvælstofindsatsbehov. Kommunerne har ansvaret for rådene. De bidrager med lokal viden om virkemidler og kan rådgive de lokale treparter."
  ],
  "sources": [
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   }
  ],
  "related": [
   "lokal-groen-trepart",
   "kystvandsgruppe"
  ],
  "articles": [
   "kystvandraad"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "naturstyrelsen",
  "term": "Naturstyrelsen",
  "metaTitle": "Naturstyrelsen: hvad betyder det?",
  "metaDescription": "Naturstyrelsen er statens forvalter af skov- og naturarealer og en central projektejer i arealomlægningen.",
  "short": "Naturstyrelsen er statens forvalter af skov- og naturarealer og en central projektejer i arealomlægningen.",
  "body": [
   "Naturstyrelsen har en repræsentant i hver lokal grøn trepart og er projektejer på mange arealomlægningsprojekter. I ordningen for vådområder og lavbundsprojekter kan Naturstyrelsen søge til tre VKP-indsatser. Naturstyrelsen kan ikke søge tilskudsordningen til skovrejsning."
  ],
  "sources": [
   {
    "title": "SGAV: De 23 lokale grønne treparter",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/de-23-lokale-groenne-treparter"
   },
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "lokal-groen-trepart",
   "vlp"
  ],
  "articles": [
   "lokale-groenne-treparter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "kystvandsgruppe",
  "term": "Hydrologisk kystvandsgruppe",
  "metaTitle": "Hydrologisk kystvandsgruppe: hvad betyder det?",
  "metaDescription": "En hydrologisk kystvandsgruppe er en gruppe af delvandoplande, som kvælstofeffekten af omlægningsplanerne opgøres i.",
  "short": "En hydrologisk kystvandsgruppe er en gruppe af delvandoplande, som kvælstofeffekten af omlægningsplanerne opgøres i.",
  "body": [
   "Ifølge SGAV er kvælstofindsatsbehovet fra Vandplan 3-II fordelt på 108 delvandoplande, der er grupperet i 37 hydrologiske kystvandsgrupper. MARS opgør effekten af de 23 omlægningsplaner i disse grupper."
  ],
  "sources": [
   {
    "title": "SGAV: Omlægningsplaner",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/omlaegningsplaner"
   }
  ],
  "related": [
   "omlaegningsplan",
   "kvaelstofvaadomraade"
  ],
  "articles": [
   "omlaegningsplaner"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "ekstensivering",
  "term": "Ekstensivering",
  "metaTitle": "Ekstensivering: hvad betyder det?",
  "metaDescription": "Ekstensivering betyder, at et areal drives mindre intensivt, fx med mindre gødning eller som vedvarende græs.",
  "short": "Ekstensivering betyder, at et areal drives mindre intensivt, fx med mindre gødning eller som vedvarende græs.",
  "body": [
   "Ekstensivering er en af de arealbaserede indsatser i omlægningsplanerne. SGAV nævner, at målopfyldelse sker ved arealomlægning i samspil med markregulering, herunder fx ved ekstensivering, så behovet for markregulering begrænses."
  ],
  "sources": [
   {
    "title": "SGAV: Omlægningsplaner",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/omlaegningsplaner"
   }
  ],
  "related": [
   "omlaegningsplan"
  ],
  "articles": [
   "omlaegningsplaner"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "danmarks-miljoeportal",
  "term": "Danmarks Miljøportal",
  "metaTitle": "Danmarks Miljøportal: hvad betyder det?",
  "metaDescription": "Danmarks Miljøportal er et fællesoffentligt partnerskab ejet af staten, kommunerne og regionerne, der understøtter digital miljøforvaltning.",
  "short": "Danmarks Miljøportal er et fællesoffentligt partnerskab ejet af staten, kommunerne og regionerne, der understøtter digital miljøforvaltning.",
  "body": [
   "Miljøportalen driver blandt andet Danmarks Arealinformation og er leverandør af MARS."
  ],
  "sources": [
   {
    "title": "Danmarks Miljøportal: Systemer",
    "url": "https://www.miljoeportal.dk/systemer"
   },
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   }
  ],
  "related": [
   "danmarks-arealinformation",
   "mars"
  ],
  "articles": [
   "danmarks-arealinformation-guide"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "sgav",
  "term": "SGAV",
  "metaTitle": "SGAV: hvad betyder det?",
  "metaDescription": "SGAV er Styrelsen for Grøn Arealomlægning og Vandmiljø, som administrerer store dele af arealindsatsen i Grøn Trepart.",
  "short": "SGAV er Styrelsen for Grøn Arealomlægning og Vandmiljø, som administrerer store dele af arealindsatsen i Grøn Trepart.",
  "body": [
   "SGAV står bag MARS og administrerer blandt andet tilskud til vådområder og lavbundsprojekter og til skovrejsning. Styrelsen er påtaleberettiget i de servitutter, der tinglyses i VLP-projekter."
  ],
  "sources": [
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   },
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "mars",
   "vlp",
   "servitut"
  ],
  "articles": [
   "mars-guide"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "wfs",
  "term": "WFS",
  "metaTitle": "WFS: hvad betyder det?",
  "metaDescription": "WFS (Web Feature Service) er en standard for at hente geografiske vektordata over nettet, fx til QGIS eller ArcGIS.",
  "short": "WFS (Web Feature Service) er en standard for at hente geografiske vektordata over nettet, fx til QGIS eller ArcGIS.",
  "body": [
   "Ifølge SGAV udstilles størstedelen af data i MARS via en offentlig WFS-service, så lagene kan bruges i eget GIS."
  ],
  "sources": [
   {
    "title": "SGAV: MARS",
    "url": "https://sgav.dk/groen-trepart/lokale-treparter/mars"
   }
  ],
  "related": [
   "mars",
   "danmarks-arealinformation"
  ],
  "articles": [
   "offentlige-data-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "kulstofrig-lavbundsjord",
  "term": "Kulstofrig lavbundsjord",
  "metaTitle": "Kulstofrig lavbundsjord: hvad betyder det?",
  "metaDescription": "Kulstofrig lavbundsjord er jord med et højt indhold af organisk kulstof, typisk i ådale og tidligere moser, der udleder drivhusgasser, når den er drænet.",
  "short": "Kulstofrig lavbundsjord er jord med et højt indhold af organisk kulstof, typisk i ådale og tidligere moser, der udleder drivhusgasser, når den er drænet.",
  "body": [
   "Grøn Trepart sigter mod udtagning af 140.000 ha kulstofholdige lavbundsjorde inklusive randarealer. Formålet med lavbundsprojekter er ifølge Landbrugsstyrelsen at reducere udledningen af drivhusgasser fra disse jorder.",
   "I ordningen for skovrejsning bruger SGAV en grænse på over 6 pct. organisk kulstof for lavbundsjord, der som udgangspunkt ikke kan tilplantes med tilskud. Kortet kan ses i MARS."
  ],
  "sources": [
   {
    "title": "Regeringen.dk: Aftale om et grønt Danmark (24.06.2024)",
    "url": "https://regeringen.dk/aktuelt/nyheder/2024/regeringen-og-parterne-i-groen-trepart-indgaar-historisk-aftale-om-et-groent-danmark/"
   },
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   },
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "vlp",
   "vaadomraade",
   "skovrejsning"
  ],
  "articles": [
   "lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "vlp",
  "term": "VLP (Vådområder og lavbundsprojekter)",
  "metaTitle": "VLP (Vådområder og lavbundsprojekter): hvad betyder det?",
  "metaDescription": "VLP er den fælles tilskudsordning for vådområder og lavbundsprojekter, der viderefører VKP og KLA.",
  "short": "VLP er den fælles tilskudsordning for vådområder og lavbundsprojekter, der viderefører VKP og KLA.",
  "body": [
   "Ordningen har seks indsatser: VKP-kvælstofvådområder, VKP-lavbund, VKP-fosforvådområder, VKP-restaurering af ådale, KLA-kvælstofvådområder og KLA-lavbund. Der kan gives tilskud til forundersøgelser og etablering, op til 100 pct. af de tilskudsberettigede udgifter."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "forundersoegelse",
   "etableringsprojekt",
   "kvaelstofvaadomraade"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "vaadomraade",
  "term": "Vådområde",
  "metaTitle": "Vådområde: hvad betyder det?",
  "metaDescription": "Et vådområde er et areal, hvor vandstanden er hævet, så jorden er våd det meste af året.",
  "short": "Et vådområde er et areal, hvor vandstanden er hævet, så jorden er våd det meste af året.",
  "body": [
   "I Grøn Trepart bruges vådområder især til at fjerne kvælstof, før det når fjorde og kystvande, og til at reducere udledningen af drivhusgasser fra lavbundsjord. Vådgøring kan også øge arealets bufferkapacitet ved store vandmængder."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "kvaelstofvaadomraade",
   "fosforvaadomraade",
   "kulstofrig-lavbundsjord"
  ],
  "articles": [
   "lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "kvaelstofvaadomraade",
  "term": "Kvælstofvådområde",
  "metaTitle": "Kvælstofvådområde: hvad betyder det?",
  "metaDescription": "Et kvælstofvådområde er et vådområde, der skal reducere udledningen af kvælstof til fjorde og kystvande.",
  "short": "Et kvælstofvådområde er et vådområde, der skal reducere udledningen af kvælstof til fjorde og kystvande.",
  "body": [
   "Ifølge Landbrugsstyrelsen er kvælstofvådområder typisk placeret kystnært og skal ligge i et delopland med et kvælstofindsatsbehov."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "vaadomraade",
   "vlp",
   "kystvandsgruppe"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "fosforvaadomraade",
  "term": "Fosforvådområde",
  "metaTitle": "Fosforvådområde: hvad betyder det?",
  "metaDescription": "Et fosforvådområde skal reducere udledningen af fosfor til søer.",
  "short": "Et fosforvådområde skal reducere udledningen af fosfor til søer.",
  "body": [
   "Ifølge Landbrugsstyrelsen placeres fosforvådområder opstrøms søer med et fosforindsatsbehov. Indsatsen hører under VKP i spor 1."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "vaadomraade",
   "vlp"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "forundersoegelse",
  "term": "Forundersøgelse",
  "metaTitle": "Forundersøgelse: hvad betyder det?",
  "metaDescription": "En forundersøgelse afklarer, om et vådområde- eller lavbundsprojekt kan gennemføres, før der søges om etablering.",
  "short": "En forundersøgelse afklarer, om et vådområde- eller lavbundsprojekt kan gennemføres, før der søges om etablering.",
  "body": [
   "Forundersøgelsen skal afdække realiseringspotentialet, blandt andet lodsejertilslutning, effekter og mulige konsekvenser. Den resulterer i en ejendomsmæssig og en teknisk forundersøgelsesrapport. I VLP 2026 kan der søges løbende efter først-til-mølle-princippet."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "vlp",
   "etableringsprojekt",
   "baseline"
  ],
  "articles": [
   "forundersoegelse-lavbundsprojekt"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "etableringsprojekt",
  "term": "Etableringsprojekt",
  "metaTitle": "Etableringsprojekt: hvad betyder det?",
  "metaDescription": "Et etableringsprojekt er den del af et vådområde- eller lavbundsprojekt, hvor projektet faktisk anlægges.",
  "short": "Et etableringsprojekt er den del af et vådområde- eller lavbundsprojekt, hvor projektet faktisk anlægges.",
  "body": [
   "I VLP sker etablering i spor 1 (EU-finansierede VKP-projekter med ansøgningsrunder) eller spor 2 (nationalt finansierede KLA-projekter med løbende tilsagn). Resultatet af forundersøgelsen afgør, hvilket spor der er relevant."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "forundersoegelse",
   "servitut",
   "engangskompensation"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "engangskompensation",
  "term": "Engangskompensation",
  "metaTitle": "Engangskompensation: hvad betyder det?",
  "metaDescription": "Engangskompensation er en kompensation til lodsejere, der beholder deres arealer i et vådområde- eller lavbundsprojekt.",
  "short": "Engangskompensation er en kompensation til lodsejere, der beholder deres arealer i et vådområde- eller lavbundsprojekt.",
  "body": [
   "I spor 2 kompenseres lodsejere via engangskompensation efter faste satser i bekendtgørelsen. I spor 1 kan der også kompenseres via jordfordeling, opkøb eller værditabskompensation."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "etableringsprojekt",
   "servitut"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "servitut",
  "term": "Servitut om fastholdelse",
  "metaTitle": "Servitut om fastholdelse: hvad betyder det?",
  "metaDescription": "En servitut om fastholdelse er en tinglyst rådighedsindskrænkning, der sikrer, at et vådområde eller lavbundsprojekt bliver bevaret.",
  "short": "En servitut om fastholdelse er en tinglyst rådighedsindskrænkning, der sikrer, at et vådområde eller lavbundsprojekt bliver bevaret.",
  "body": [
   "I VLP er det et krav før udbetaling, at der tinglyses en servitut på alle ejendomme med arealer i projektområdet, med SGAV som påtaleberettiget."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "etableringsprojekt",
   "engangskompensation",
   "sgav"
  ],
  "articles": [
   "tilskud-vaadomraader-lavbundsprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "aadalsrestaurering",
  "term": "Restaurering af ådale",
  "metaTitle": "Restaurering af ådale: hvad betyder det?",
  "metaDescription": "Restaurering af ådale genskaber sammenhængen mellem et vandløb og de vandløbsnære arealer.",
  "short": "Restaurering af ådale genskaber sammenhængen mellem et vandløb og de vandløbsnære arealer.",
  "body": [
   "Formålet er at forbedre de fysiske forhold og bidrage til miljømålene for udvalgte vandløbsstrækninger. Indsatsen kan også fjerne kvælstof og reducere drivhusgasudledning. Den er en af VKP-indsatserne i VLP."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "vlp",
   "bufferzone-vandloeb"
  ],
  "articles": [
   "vandloebsrestaurering"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "paragraf-3-natur",
  "term": "§ 3-natur",
  "metaTitle": "§ 3-natur: hvad betyder det?",
  "metaDescription": "§ 3-natur er naturtyper, der er beskyttet efter naturbeskyttelseslovens § 3, så deres tilstand ikke må ændres uden dispensation.",
  "short": "§ 3-natur er naturtyper, der er beskyttet efter naturbeskyttelseslovens § 3, så deres tilstand ikke må ændres uden dispensation.",
  "body": [
   "Beskyttelsen omfatter naturlige søer over 100 m², udpegede vandløb samt heder, moser, strandenge, strandsumpe, ferske enge og biologiske overdrev over 2.500 m² i sammenhængende areal. Moser under 2.500 m² er beskyttet, når de ligger i forbindelse med en beskyttet sø eller et beskyttet vandløb.",
   "Kommunen er myndighed. Kortlaget over beskyttede naturtyper er vejledende."
  ],
  "sources": [
   {
    "title": "Retsinformation: Bekendtgørelse af lov om naturbeskyttelse (LBK nr. 927 af 2024)",
    "url": "https://www.retsinformation.dk/eli/lta/2024/927"
   },
   {
    "title": "Retsinformation: Vejledning om naturbeskyttelseslovens § 3-beskyttede naturtyper",
    "url": "https://www.retsinformation.dk/eli/retsinfo/2019/10226"
   }
  ],
  "related": [
   "mosaikbestemmelsen",
   "danmarks-arealinformation"
  ],
  "articles": [
   "paragraf-3-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "mosaikbestemmelsen",
  "term": "Mosaikbestemmelsen",
  "metaTitle": "Mosaikbestemmelsen: hvad betyder det?",
  "metaDescription": "Mosaikbestemmelsen betyder, at små naturarealer under 2.500 m² også er § 3-beskyttede, når de sammen med andre beskyttede naturtyper udgør mindst 2.500 m².",
  "short": "Mosaikbestemmelsen betyder, at små naturarealer under 2.500 m² også er § 3-beskyttede, når de sammen med andre beskyttede naturtyper udgør mindst 2.500 m².",
  "body": [
   "Det fremgår af vejledningen til naturbeskyttelseslovens § 3. Søer under 100 m² er også beskyttet, når de ligger i en beskyttet naturtype, og det samlede område er mindst 2.500 m²."
  ],
  "sources": [
   {
    "title": "Retsinformation: Vejledning om naturbeskyttelseslovens § 3-beskyttede naturtyper",
    "url": "https://www.retsinformation.dk/eli/retsinfo/2019/10226"
   }
  ],
  "related": [
   "paragraf-3-natur"
  ],
  "articles": [
   "paragraf-3-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "skovrejsning",
  "term": "Skovrejsning",
  "metaTitle": "Skovrejsning: hvad betyder det?",
  "metaDescription": "Skovrejsning er etablering af ny skov på arealer, der ikke tidligere var skov, typisk landbrugsjord.",
  "short": "Skovrejsning er etablering af ny skov på arealer, der ikke tidligere var skov, typisk landbrugsjord.",
  "body": [
   "Grøn Trepart indeholder rejsning af 250.000 ha skov frem mod 2045. Tilskud søges via MARS, og arealet skal pålægges fredskovspligt. Ifølge SGAV må arealet ikke være § 3-natur og som udgangspunkt ikke lavbundsjord med over 6 pct. organisk kulstof."
  ],
  "sources": [
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   },
   {
    "title": "Miljøministeriet: 390.000 hektar landbrug omlægges til skov og natur",
    "url": "https://mim.dk/nyheder/pressemeddelelser/2024/juni/nyt-groent-danmark-390000-hektar-landbrug-omlaegges-til-skov-og-natur"
   }
  ],
  "related": [
   "fredskovspligt",
   "uroert-skov",
   "paragraf-3-natur"
  ],
  "articles": [
   "skovrejsning-groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "uroert-skov",
  "term": "Urørt skov",
  "metaTitle": "Urørt skov: hvad betyder det?",
  "metaDescription": "Urørt skov er skov, der overlades til naturlig udvikling uden almindelig skovdrift.",
  "short": "Urørt skov er skov, der overlades til naturlig udvikling uden almindelig skovdrift.",
  "body": [
   "Ifølge Miljøministeriet skal 80.000 ha af den nye skov i Grøn Trepart være privat urørt skov og 20.000 ha statslig urørt skov. SGAV angiver en højere forventet tilskudssats for skovrejsning, der udlægges som urørt skov."
  ],
  "sources": [
   {
    "title": "Miljøministeriet: 390.000 hektar landbrug omlægges til skov og natur",
    "url": "https://mim.dk/nyheder/pressemeddelelser/2024/juni/nyt-groent-danmark-390000-hektar-landbrug-omlaegges-til-skov-og-natur"
   },
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "skovrejsning",
   "fredskovspligt"
  ],
  "articles": [
   "skovrejsning-groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "fredskovspligt",
  "term": "Fredskovspligt",
  "metaTitle": "Fredskovspligt: hvad betyder det?",
  "metaDescription": "Fredskovspligt er en binding efter skovloven, der betyder, at et areal skal forblive skov.",
  "short": "Fredskovspligt er en binding efter skovloven, der betyder, at et areal skal forblive skov.",
  "body": [
   "Det er et krav i SGAV's tilskudsordning til skovrejsning, at arealet pålægges fredskovspligt."
  ],
  "sources": [
   {
    "title": "SGAV: Tilskud til skovrejsning",
    "url": "https://sgavmst.dk/tilskud/tilskud-til-skov-og-naturprojekter/skovrejsning"
   }
  ],
  "related": [
   "skovrejsning",
   "uroert-skov"
  ],
  "articles": [
   "skovrejsning-groen-trepart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "bufferzone-vandloeb",
  "term": "Bufferzone langs vandløb",
  "metaTitle": "Bufferzone langs vandløb: hvad betyder det?",
  "metaDescription": "En bufferzone er et bælte langs et vandløb, hvor arealanvendelsen vurderes særskilt, fx til beplantning eller ekstensiv drift.",
  "short": "En bufferzone er et bælte langs et vandløb, hvor arealanvendelsen vurderes særskilt, fx til beplantning eller ekstensiv drift.",
  "body": [
   "I Freyras beplantningsanalyse bruges zoner på 10 og 20 m langs den officielle vandløbslinje som udgangspunkt for at screene, hvor træer kan give skygge og stabile brinker. Det er en screening, ikke en juridisk zone."
  ],
  "sources": [],
  "related": [
   "paragraf-3-natur",
   "aadalsrestaurering"
  ],
  "articles": [
   "beplantning-langs-vandloeb"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "baseline",
  "term": "Baseline",
  "metaTitle": "Baseline: hvad betyder det?",
  "metaDescription": "En baseline er en dateret registrering af et areals tilstand, som senere ændringer sammenlignes med.",
  "short": "En baseline er en dateret registrering af et areals tilstand, som senere ændringer sammenlignes med.",
  "body": [
   "I natur- og lavbundsprojekter laves baseline helst før arealet ændres. Den bør have positioner, dato, kilder med hentedato og en faglig vurdering. Freyra låser baseline i en versioneret rapport med SHA-256."
  ],
  "sources": [],
  "related": [
   "gentagelsespunkt",
   "efterflyvning",
   "mrv"
  ],
  "articles": [
   "baseline-foer-projektstart"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "gentagelsespunkt",
  "term": "Gentagelsespunkt",
  "metaTitle": "Gentagelsespunkt: hvad betyder det?",
  "metaDescription": "Et gentagelsespunkt er en fast position, der fotograferes ved hver flyvning, så billederne kan sammenlignes over tid.",
  "short": "Et gentagelsespunkt er en fast position, der fotograferes ved hver flyvning, så billederne kan sammenlignes over tid.",
  "body": [
   "Punkterne vælges ved baseline og dækker de vigtigste dele af projektområdet. Samme position, retning og helst samme årstid gør før/efter-billeder sammenlignelige."
  ],
  "sources": [],
  "related": [
   "baseline",
   "efterflyvning",
   "exif"
  ],
  "articles": [
   "monitorering-af-naturprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "efterflyvning",
  "term": "Efterflyvning",
  "metaTitle": "Efterflyvning: hvad betyder det?",
  "metaDescription": "En efterflyvning er en ny droneflyvning over et projektområde efter baseline, hvor de samme punkter fotograferes igen.",
  "short": "En efterflyvning er en ny droneflyvning over et projektområde efter baseline, hvor de samme punkter fotograferes igen.",
  "body": [
   "Efterflyvninger bruges til at dokumentere udviklingen, fx efter anlæg af et vådområde eller beplantning."
  ],
  "sources": [],
  "related": [
   "baseline",
   "gentagelsespunkt"
  ],
  "articles": [
   "monitorering-af-naturprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "mrv",
  "term": "MRV",
  "metaTitle": "MRV: hvad betyder det?",
  "metaDescription": "MRV står for Measurement, Reporting and Verification, altså måling, rapportering og verifikation af effekter.",
  "short": "MRV står for Measurement, Reporting and Verification, altså måling, rapportering og verifikation af effekter.",
  "body": [
   "Begrebet bruges mest om klimaeffekter. I naturprojekter handler det om at kunne vise, hvad der er gjort, og hvad der er sket. Freyra beregner ikke effekter, men dokumenterer udgangspunkt og udvikling."
  ],
  "sources": [],
  "related": [
   "baseline",
   "evidenskaede"
  ],
  "articles": [
   "dokumentation-af-naturprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "evidenskaede",
  "term": "Evidenskæde",
  "metaTitle": "Evidenskæde: hvad betyder det?",
  "metaDescription": "En evidenskæde er en sammenhængende dokumentation, hvor hvert led kan spores: hvor data kommer fra, hvem der har vurderet dem, og hvornår.",
  "short": "En evidenskæde er en sammenhængende dokumentation, hvor hvert led kan spores: hvor data kommer fra, hvem der har vurderet dem, og hvornår.",
  "body": [
   "I Freyra går kæden fra dronefoto med position over offentlige data og faglig vurdering til en låst rapport med revisionsspor."
  ],
  "sources": [],
  "related": [
   "sha-256",
   "revisionsspor",
   "baseline"
  ],
  "articles": [
   "dokumentation-af-naturprojekter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "sha-256",
  "term": "SHA-256",
  "metaTitle": "SHA-256: hvad betyder det?",
  "metaDescription": "SHA-256 er en kryptografisk hashfunktion, der laver et unikt fingeraftryk af en fil.",
  "short": "SHA-256 er en kryptografisk hashfunktion, der laver et unikt fingeraftryk af en fil.",
  "body": [
   "Funktionen er standardiseret af NIST i FIPS 180-4. Ændres filen, ændres fingeraftrykket. Det gør det muligt at kontrollere, at en rapport er uændret."
  ],
  "sources": [
   {
    "title": "NIST FIPS 180-4: Secure Hash Standard",
    "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
   }
  ],
  "related": [
   "evidenskaede",
   "revisionsspor"
  ],
  "articles": [
   "sha-256-rapporter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "revisionsspor",
  "term": "Revisionsspor",
  "metaTitle": "Revisionsspor: hvad betyder det?",
  "metaDescription": "Et revisionsspor er en log over, hvem der har gjort hvad og hvornår i en sag.",
  "short": "Et revisionsspor er en log over, hvem der har gjort hvad og hvornår i en sag.",
  "body": [
   "I Freyra logges fx uploads, faglige bekræftelser og afvisninger og nye rapportversioner, så forløbet kan efterprøves."
  ],
  "sources": [],
  "related": [
   "evidenskaede",
   "sha-256"
  ],
  "articles": [
   "sha-256-rapporter"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "ortofoto",
  "term": "Ortofoto",
  "metaTitle": "Ortofoto: hvad betyder det?",
  "metaDescription": "Et ortofoto er et luftfoto, der er rettet op geometrisk, så det kan bruges som et målfast kort.",
  "short": "Et ortofoto er et luftfoto, der er rettet op geometrisk, så det kan bruges som et målfast kort.",
  "body": [
   "GeoDanmark Ortofoto er landsdækkende og udstilles via Datafordeleren. Ortofotos er et godt referencelag for dronefotos, men viser tilstanden på optagelsesdagen."
  ],
  "sources": [
   {
    "title": "Datafordeler: GeoDanmark Ortofoto",
    "url": "https://datafordeler.dk/dataoversigt/geodanmark-ortofoto/ortofoto-foraar-wms/"
   }
  ],
  "related": [
   "dhm",
   "sentinel-2"
  ],
  "articles": [
   "offentlige-data-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "dhm",
  "term": "Danmarks Højdemodel (DHM)",
  "metaTitle": "Danmarks Højdemodel (DHM): hvad betyder det?",
  "metaDescription": "Danmarks Højdemodel er den landsdækkende model af terræn og overflade, som kan hentes gratis via Dataforsyningen.",
  "short": "Danmarks Højdemodel er den landsdækkende model af terræn og overflade, som kan hentes gratis via Dataforsyningen.",
  "body": [
   "Terrænmodellen bruges i naturprojekter til at forstå lavninger, fald og hvor vand vil samle sig."
  ],
  "sources": [
   {
    "title": "Dataforsyningen: Danmarks Højdemodel, terræn",
    "url": "https://dataforsyningen.dk/data/930"
   }
  ],
  "related": [
   "ortofoto",
   "kulstofrig-lavbundsjord"
  ],
  "articles": [
   "offentlige-data-natur"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "sentinel-2",
  "term": "Sentinel-2",
  "metaTitle": "Sentinel-2: hvad betyder det?",
  "metaDescription": "Sentinel-2 er EU's Copernicus-satellitter, der leverer gratis optiske billeder af hele jorden.",
  "short": "Sentinel-2 er EU's Copernicus-satellitter, der leverer gratis optiske billeder af hele jorden.",
  "body": [
   "Sentinel-2 har fire bånd med 10 m opløsning, seks med 20 m og tre med 60 m. Data bruges til at følge vegetation over tid, fx med NDVI."
  ],
  "sources": [
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "ndvi",
   "ortofoto"
  ],
  "articles": [
   "sentinel-2-naturovervaagning"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "ndvi",
  "term": "NDVI",
  "metaTitle": "NDVI: hvad betyder det?",
  "metaDescription": "NDVI (Normalized Difference Vegetation Index) er et indeks for grøn vegetation beregnet ud fra nær-infrarødt og rødt lys.",
  "short": "NDVI (Normalized Difference Vegetation Index) er et indeks for grøn vegetation beregnet ud fra nær-infrarødt og rødt lys.",
  "body": [
   "Formlen er (NIR minus rød) divideret med (NIR plus rød). Høje værdier tyder på grøn, aktiv vegetation. NDVI er en indikator og ikke en måling af biodiversitet."
  ],
  "sources": [
   {
    "title": "Copernicus Data Space Ecosystem: Sentinel-2",
    "url": "https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2"
   }
  ],
  "related": [
   "sentinel-2"
  ],
  "articles": [
   "sentinel-2-naturovervaagning"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "exif",
  "term": "EXIF",
  "metaTitle": "EXIF: hvad betyder det?",
  "metaDescription": "EXIF er en standard for metadata i billedfiler, fx tidspunkt, kamera og GPS-position.",
  "short": "EXIF er en standard for metadata i billedfiler, fx tidspunkt, kamera og GPS-position.",
  "body": [
   "Droner gemmer typisk position i EXIF og ekstra oplysninger i XMP. Metadata går ofte tabt, når billeder skaleres ned eller sendes via beskedtjenester."
  ],
  "sources": [],
  "related": [
   "gentagelsespunkt",
   "baseline"
  ],
  "articles": [
   "dronefotos-gps-metadata"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "danmarks-arealinformation",
  "term": "Danmarks Arealinformation",
  "metaTitle": "Danmarks Arealinformation: hvad betyder det?",
  "metaDescription": "Danmarks Arealinformation er Danmarks Miljøportals kortløsning med data om arealanvendelse, naturbeskyttelse og reguleringer.",
  "short": "Danmarks Arealinformation er Danmarks Miljøportals kortløsning med data om arealanvendelse, naturbeskyttelse og reguleringer.",
  "body": [
   "Her kan man fx tilføje kortlaget over beskyttede naturtyper og se detaljer for et areal."
  ],
  "sources": [
   {
    "title": "Danmarks Miljøportal Help Center: Se beskyttet natur i Danmark",
    "url": "https://support.miljoeportal.dk/hc/da/articles/13657944382749-Danmarks-Arealinformation-Se-beskyttet-natur-i-Danmark"
   },
   {
    "title": "Danmarks Miljøportal: Systemer",
    "url": "https://www.miljoeportal.dk/systemer"
   }
  ],
  "related": [
   "danmarks-miljoeportal",
   "paragraf-3-natur"
  ],
  "articles": [
   "danmarks-arealinformation-guide"
  ],
  "updated": "2026-10-22"
 },
 {
  "slug": "matrikel",
  "term": "Matrikel",
  "metaTitle": "Matrikel: hvad betyder det?",
  "metaDescription": "En matrikel er et registreret jordstykke i matriklen, det officielle register over fast ejendom i Danmark.",
  "short": "En matrikel er et registreret jordstykke i matriklen, det officielle register over fast ejendom i Danmark.",
  "body": [
   "I naturprojekter bruges matrikelkortet til at se, hvilke ejendomme og lodsejere et projektområde berører. VLP kræver fx en oversigt med lodsejere og matrikler ved ansøgning om forundersøgelse."
  ],
  "sources": [
   {
    "title": "Landbrugsstyrelsen: Vådområder og lavbundsprojekter 2026",
    "url": "https://lbst.dk/tilskud/tilskudsguide/2023-og-senere/vaadomraader-og-lavbundsprojekter-2026"
   }
  ],
  "related": [
   "servitut",
   "ortofoto"
  ],
  "articles": [
   "offentlige-data-natur"
  ],
  "updated": "2026-10-22"
 }
];
