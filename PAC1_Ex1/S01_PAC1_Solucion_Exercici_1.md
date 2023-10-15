# EXERCICIS TEORIA

1.	L'aparició de HTML5/CSS3/JS ha suposat el naixement del desenvolupament front-end modern. (0.75 punts)

- Quin és l'avantatge d'utilitzar etiquetes semàntiques? Anomena i explica com a mínim 3 d'aquests avantatges.

Les etiquetes estructuren la pàgina web i fa que siguin més accessibles i més fàcils de comprendre per als lectors de pantalla que empren persones amb discapacitats visuals. 
També ajuda a que sigui més comprensible el codi per la resta dels desenvolupadors que hi hagin de treballar.
Els motors de cerca també se’n beneficien d’aquestes etiquetes, ja que mitjançant un correcte ús del header, nav, footer o article, es pot indicar a aquests motors el contingut de la pàgina i poder-la classificar correctament.

- Cita almenys 3 APIs HTML5 i explica breument la seva funcionalitat.

API de detecció de pantalla. Permet que els desenvolupadors consultin les característiques del dispositiu de l’usuari per tal de poder fer una web que s’ajusti a les diferents pantalles.
API de geolocalització. Permet a les webs accedir a la ubicació aproximada de l’usuari per tal de poder personalitzar els continguts.
WebStorage API. Emmagatzema dades al navegador de l’usuari com a local storage o sesion storage. D’aquesta manera es pot desar informació com preferències, seleccions...

- Cita quina opció ofereix CSS3 per aconseguir que s'apliquin diferents estils CSS sobre el mateix element en la visualització en diferents dispositius (diferents mides de pantalla).

La opció que ofereix CSS és MediaQuery. Permet aplicar estils CSS diferents basats en les característiques de la pantalla en la que s’està visualitat la web.

- Cita almenys 4 de les característiques principals de TypeScript (important superset de JavaScript que tractarem al següent capítol).

Té classes i interfícies  Ofereix suport per a la programació orientada a objectes.
Inferència de tipus  Per deduir els tipus de les variables no especificats.
Tipat estàtic opcional  Permet que els tipus de dades es defineixin per a les variables i paràmetres de les funcions per detectar errors de tipus al compilar.
Compatibilitat amb últimes característiques de JS  Permet que s’emprin les funcionalitats més modernes de JS.

2.	El llenguatge CSS és molt rígid, poc pràctic i endreçat a l'hora de programar. Per evitar aquest problema s'han creat els preprocessadors CSS, que ofereixen avantatges evidents (0.5 punts)
- Citeu almenys 2 d'aquests preprocessadors.

Lass i SASS.
 -  Cita almenys 4 avantatges que ofereixen aquests preprocessadors.

Nesting per organitzar millor el codi, ús de variables per emmagatzemar valors, mixins per definir quins fragments del codi CSS es poden emprar en diferents parts de l’estil i millor modularitat del codi, ja que es pot fragmentar el CSS en diferents fitxers i importar-los quan calgui.

- Explica breument en què consisteixen els sourcemaps.

Són fitxers de codi JS generat amb codi font original. Permet que es depurin i rastregin errors en el codi original enlloc del codi generat, millorant d’aquesta manera el seu desenvolupament.

- Explica què és un transpilador.

És una eina que converteix el codi font escrit en un llenguatge de programació  que pot ser interpretat o compilat per una altra plataforma.

3.	El flux de treball professional a front-end fa indispensable l'ús d'eines com a controls de versions i eines de gestió de mòduls (0.75 punts).
- Cita almenys dos sistemes de control de versions i dues eines de gestió de mòduls.

Sistemes de control de versions: GIT i SVN.
Eines de gestió de mòduls:npm i yarn

- Cita i explica almenys 3 ordres de Git.

Git clone + url: crea una còpia local d’un repositori git remot.
Git add + fitxer: Afegeix canvis específics d’un fitxer al staging area.
Git commit – m + missatge: Es registren les modificacions i es crea un nou commit amb el missatge proporcionat.

- Cita i explica breument les característiques més definitòries de WebPack.

Webpack és una eina de creació de paquets que agrupa recursos com JS, CSS i imatges en fitxers únics.. Això facilita la gestió de dependències, la minificació i la recàrrega en temps real durant el desenvolupament.
