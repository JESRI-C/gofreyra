// German (formal Sie) translation of src/data/ydelser.ts. Danish original is authoritative.
import type { Ydelse } from "../ydelser";
export const YDELSER_DE: Ydelse[] = [
 {
  "slug": "dronefoerregistrering",
  "title": "Drohnenbasierte Vorabaufnahme und Baseline für Fließgewässer und Flächen",
  "short": "Drohnenbefliegung, öffentliche Daten und fachliche Überprüfung in einer versionierten Baseline zusammengeführt.",
  "intro": "Eine Vorabaufnahme dokumentiert den Zustand des Gebiets vor Projektbeginn. Wir befliegen das Gebiet mit einer Drohne, beschaffen die relevanten öffentlichen Daten und führen alles in einer versionierten Baseline zusammen, die sowohl der Kommune als auch den Grundeigentümern und den Beteiligten der Grünen Dreiparteienvereinbarung (Grøn Trepart) als gemeinsame Grundlage dient.",
  "gets": [
   "Drohnenbefliegung des Gebiets mit GPS-georeferenziertem Bildmaterial",
   "Teilabschnitte und Wiederholungsaufnahmepunkte mit erfassten Positionen",
   "Referenzfotos für erneute Begehungen",
   "Versionierter Baseline-Bericht als PDF und Nachweispaket"
  ],
  "when": "Wenn ein Projekt beginnen soll und Ihnen eine dokumentierte Ausgangsbasis fehlt, die sowohl der Kommune als auch den Grundeigentümern und den Beteiligten der Grünen Dreiparteienvereinbarung als gemeinsame Grundlage dient.",
  "needs": [
   "Eine Abgrenzung des Gebiets, beispielsweise als Kartenausschnitt oder anhand von Flurstücksnummern",
   "Zugang zum Gelände und Genehmigungen für die Drohnenbefliegung",
   "Eine Ansprechperson, die das Gebiet und das Projekt kennt"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Klärung",
    "d": "Wir stimmen das Gebiet, den Zweck und die vorgesehenen Verwendungsmöglichkeiten der Baseline ab."
   },
   {
    "n": "02",
    "t": "Befliegung",
    "d": "Wir befliegen das Gebiet und erfassen Teilabschnitte und Wiederholungsaufnahmepunkte."
   },
   {
    "n": "03",
    "t": "Überprüfung",
    "d": "Die Drohnenfotos werden mit öffentlichen Daten verglichen und fachlich bewertet."
   },
   {
    "n": "04",
    "t": "Baseline",
    "d": "Sie erhalten einen versionierten Bericht und ein direkt nutzbares Nachweispaket."
   }
  ],
  "price": "Preis nach Vereinbarung",
  "related": [
   "datagrundlag",
   "monitorering"
  ]
 },
 {
  "slug": "datagrundlag",
  "title": "Datengrundlage und Screening anhand öffentlicher Daten",
  "short": "Karten-, Boden-, Wetter- und Satellitendaten, für die konkrete Fläche abgerufen und zusammengeführt.",
  "intro": "Bevor Sie in Feldarbeit investieren, lässt sich vieles anhand öffentlicher Daten eingrenzen. Wir rufen die relevanten Datenebenen von Dataforsyningen (dänisches Geodatenportal), Danmarks Arealinformation (dänisches Flächeninformationsportal), GEUS (Geologischer Dienst für Dänemark und Grönland), DMI (Dänisches Meteorologisches Institut) und Copernicus Sentinel-2 ab und führen sie für Ihre Fläche mit Quellenangabe und Abrufdatum zusammen.",
  "gets": [
   "Orthofoto, Kataster und Höhenmodell von Dataforsyningen",
   "Nach § 3 registrierte Naturflächen und Schutzgebiete aus Danmarks Arealinformation",
   "Bodenart und Niederungsflächen von GEUS, Wetterdaten vom DMI, Satellitendaten von Copernicus Sentinel-2",
   "Zusammengeführte Quellenübersicht mit Status je Datenebene"
  ],
  "when": "Zu Beginn des Prozesses, bevor Sie in Feldarbeit investieren, oder wenn Sie mehrere Flächen prüfen und priorisieren möchten, wo eine Weiterverfolgung sinnvoll ist.",
  "needs": [
   "Eine Abgrenzung der zu prüfenden Fläche oder Flächen",
   "Eine kurze Beschreibung des Verwendungszwecks des Screenings",
   "Eine Ansprechperson für Rückfragen im Verlauf"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Abgrenzung",
    "d": "Wir stimmen die Flächen und die Fragen ab, die das Screening beantworten soll."
   },
   {
    "n": "02",
    "t": "Abruf",
    "d": "Die relevanten Datenebenen werden automatisch aus den öffentlichen Quellen abgerufen."
   },
   {
    "n": "03",
    "t": "Zusammenführung",
    "d": "Die Daten werden für die Fläche mit Quelle und Abrufdatum je Datenebene zusammengeführt."
   },
   {
    "n": "04",
    "t": "Bereitstellung",
    "d": "Sie erhalten eine Übersicht mit Status je Datenebene und unserer Einschätzung."
   }
  ],
  "price": "Preis nach Vereinbarung",
  "related": [
   "dronefoerregistrering",
   "beplantningsanalyse"
  ]
 },
 {
  "slug": "monitorering",
  "title": "Wiederholtes Monitoring und Folgebefliegung (Vorher/Nachher)",
  "short": "Wiederkehrende Aufnahmepunkte und Vorher-Nachher-Dokumentation, um die Entwicklung im Zeitverlauf zu verfolgen.",
  "intro": "Sobald ein Projekt angelaufen ist, stellt sich die Frage: Was hat die Maßnahme verändert? Wir fliegen erneut von denselben Aufnahmepunkten wie bei der Ausgangserfassung, damit sich Vorher und Nachher direkt vergleichen lassen.",
  "gets": [
   "Folgebefliegung von denselben Aufnahmepunkten wie bei der Ausgangserfassung",
   "Direkt vergleichbare Vorher-Nachher-Fotos",
   "Aktualisiertes Nachweispaket nach jedem erneuten Vor-Ort-Termin",
   "Grundlage für Statusberichte gegenüber Förderfonds und der Grünen Dreiparteienvereinbarung (Grøn Trepart)"
  ],
  "when": "Wenn ein Projekt angelaufen ist und Sie zeigen müssen, was die Maßnahme verändert hat, etwa gegenüber einem Förderfonds oder dem lokalen Gremium der Grünen Dreiparteienvereinbarung (Grøn Trepart).",
  "needs": [
   "Eine bestehende Ausgangserfassung oder eine Vereinbarung, diese durchzuführen",
   "Zugang und Genehmigungen für eine erneute Drohnenbefliegung",
   "Eine Ansprechperson, die den Projektstand kennt"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Planung",
    "d": "Wir vereinbaren Zeitpunkt und Umfang der Folgebefliegung."
   },
   {
    "n": "02",
    "t": "Befliegung",
    "d": "Wir fliegen von denselben Aufnahmepunkten wie beim letzten Mal."
   },
   {
    "n": "03",
    "t": "Vergleich",
    "d": "Vorher und Nachher werden nebeneinandergestellt und bewertet."
   },
   {
    "n": "04",
    "t": "Aktualisierung",
    "d": "Das Nachweispaket wird als neue Version aktualisiert."
   }
  ],
  "price": "Preis nach Vereinbarung",
  "related": [
   "dronefoerregistrering",
   "evidenspakke"
  ]
 },
 {
  "slug": "beplantningsanalyse",
  "title": "Eignungsanalyse für Bepflanzung und Naturmaßnahmen (Entwurf zur fachlichen Validierung)",
  "short": "Regelbasierte Bewertung, wo Bepflanzung geeignet, bedingt geeignet oder ungeeignet ist.",
  "intro": "Wir erstellen eine regelbasierte Bewertung, wo Bepflanzung und Naturmaßnahmen geeignet, bedingt geeignet oder ungeeignet sind. Das Ergebnis ist ein Entwurf mit Begründungen und Quellenangaben, den Ihr Berater fachlich validieren kann.",
  "gets": [
   "Eignungskarte mit Flächenangaben in Hektar: geeignet, bedingt geeignet, ungeeignet",
   "Begründung je Fläche mit Quellenangabe",
   "Wirkungen als Bandbreiten aus der Forschungsliteratur dargestellt, nicht als Versprechen",
   "Entwurf zur fachlichen Validierung durch Ihren Berater"
  ],
  "when": "Wenn Sie Bepflanzung oder Naturmaßnahmen in Betracht ziehen und einen strukturierten Entwurf benötigen, den eine Fachperson beurteilen kann.",
  "needs": [
   "Eine Abgrenzung der zu bewertenden Flächen",
   "Informationen zu Ihren Überlegungen, z. B. Bepflanzung oder Feuchtgebiete",
   "Einen Berater oder eine Fachperson, der bzw. die den Entwurf validieren kann"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Datengrundlage",
    "d": "Daten zu Bodenart, Niederungsflächen, Höhenlage und Schutzgebieten werden für die Fläche zusammengeführt."
   },
   {
    "n": "02",
    "t": "Regeln",
    "d": "Wir wenden dokumentierte Regeln zur Eignung jeder Fläche an."
   },
   {
    "n": "03",
    "t": "Entwurf",
    "d": "Sie erhalten eine Eignungskarte mit Begründung und Quellenangaben je Fläche."
   },
   {
    "n": "04",
    "t": "Validierung",
    "d": "Ihr Berater prüft den Entwurf fachlich und gibt ihn frei."
   }
  ],
  "price": "Preis nach Vereinbarung",
  "related": [
   "datagrundlag",
   "evidenspakke"
  ]
 },
 {
  "slug": "evidenspakke",
  "title": "Evidenzpaket für Stiftungen, Anträge und die lokale Dreiparteienrunde",
  "short": "Eine gebündelte, überprüfbare Grundlage, bei der sich jede Aussage bis zu ihrer Quelle zurückverfolgen lässt.",
  "intro": "Ein Evidenzpaket bündelt Drohnenaufnahmen, Kartendaten und Bewertungen an einem Ort, mit einem Quellenverweis zu jeder Aussage. Das Paket wird versioniert und mit einem SHA-256-Fingerabdruck versehen, sodass seine Unverändertheit nachgewiesen werden kann.",
  "gets": [
   "Gebündeltes Paket mit Drohnenaufnahmen, Kartendaten und Bewertungen",
   "Quellenverweis zu jeder Aussage",
   "Versionierung und SHA-256-Fingerabdruck, sodass die Unverändertheit des Pakets nachgewiesen werden kann",
   "Bereit zur Weitergabe an Stiftungen und die lokale Dreiparteienrunde sowie zur Verwendung in Anträgen"
  ],
  "when": "Wenn Sie Fördermittel beantragen, einen Antrag einreichen oder der Dreiparteienrunde ein Projekt vorstellen möchten und die Grundlage überprüfbar sein muss.",
  "needs": [
   "Das Material, auf dem das Paket aufbauen soll, beispielsweise eine Erfassung des Ausgangszustands",
   "Angaben dazu, wem das Paket vorgelegt werden soll",
   "Eine Ansprechperson für fachliche Fragen"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Inhalt",
    "d": "Wir vereinbaren, was das Paket enthalten soll und an wen es sich richtet."
   },
   {
    "n": "02",
    "t": "Zusammenstellung",
    "d": "Fotos, Daten und Bewertungen werden mit Quellenverweisen zusammengestellt."
   },
   {
    "n": "03",
    "t": "Versionierung",
    "d": "Das Paket wird versioniert und mit einem SHA-256-Fingerabdruck versehen."
   },
   {
    "n": "04",
    "t": "Lieferung",
    "d": "Sie erhalten das Paket als PDF und ZIP, bereit zur Weitergabe."
   }
  ],
  "price": "Preis nach Vereinbarung",
  "related": [
   "monitorering",
   "pilot"
  ]
 },
 {
  "slug": "pilot",
  "title": "Pilotprojekt und Projekt-/Portfoliolizenz für Evidence Workspace (ab 125.000 DKK)",
  "short": "Ein klar abgegrenztes Projekt, das die gesamte Nachweiskette auf Ihrer eigenen Fläche in der Praxis zeigt.",
  "intro": "Ein Pilotprojekt ist eine klar abgegrenzte Leistung auf Ihrer eigenen Fläche, bei der Sie die gesamte Nachweiskette vom Drohnenfoto bis zur versionierten Baseline erhalten. Anschließend haben Sie eine konkrete Bewertungsgrundlage, bevor Sie sich zu weiteren Schritten verpflichten.",
  "gets": [
   "Ein klar abgegrenztes Projekt auf Ihrer eigenen Fläche",
   "Die gesamte Nachweiskette vom Drohnenfoto bis zur versionierten Baseline",
   "Zugang zum Freyra Evidence Workspace für Ihr Team",
   "Besprechung des Ergebnisses und Plan für die weitere Nutzung"
  ],
  "when": "Wenn Sie den Nutzen in der Praxis sehen möchten, bevor Sie sich zu weiteren Schritten verpflichten. Ein Pilotprojekt bietet Ihnen eine vollständige Leistung als Bewertungsgrundlage.",
  "needs": [
   "Eine konkrete Fläche, die sich für ein klar abgegrenztes Projekt eignet",
   "Zugang zur Fläche und Genehmigungen für Drohnenflüge",
   "Eine Kontaktperson und ein kleines Team, das Zugang erhalten soll"
  ],
  "steps": [
   {
    "n": "01",
    "t": "Vereinbarung",
    "d": "Wir vereinbaren Fläche, Umfang und Preis, bevor wir beginnen."
   },
   {
    "n": "02",
    "t": "Durchführung",
    "d": "Drohnenflug, Datenabruf, Verifizierung und Baseline."
   },
   {
    "n": "03",
    "t": "Zugang",
    "d": "Ihr Team erhält Zugang zum Evidence Workspace."
   },
   {
    "n": "04",
    "t": "Auswertung",
    "d": "Wir besprechen das Ergebnis und erstellen einen Plan für die weitere Nutzung."
   }
  ],
  "price": "Ab 125.000 DKK",
  "related": [
   "dronefoerregistrering",
   "evidenspakke"
  ]
 }
];
