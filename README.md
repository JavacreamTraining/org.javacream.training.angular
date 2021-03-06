# org.javacream.training.angular

## Organisatorisches

* Referent: Rainer Sawitzki, eMail: training@rainer-sawitzki.de

* Seminarzeiten
  * 12 Unterrichtseinheiten mit jeweils 90 Minuten
  * jeweils 9:00 - 16:15
  * Mittagspause 45’ (12:15-13:00)
  * Kaffeepausen 10:30 - 10:45 und 14:30 - 14:45

## Installation

* Teilnehmerrechner Installation: 
  * node (https://nodejs.org/en/download/)
  * Angular CLI (https://cli.angular.io/)
  * Entwicklungsumgebung bevorzugt Visual Studio Code. 
* Check
  * node -v
    * Ausgabe z.B. v12.18.3
  * npm -v 
    * Ausgabe z.B. 6.14.6
  * ng v
    * Ausgabe z.B. Angular CLI: 10.0.4
  * Anlegen eines Test-Projekts 
    * In einem beliebigen Verzeichnis  
      * ng new first
      * cd first
      * ng serve --open
        * Im Standard-Browser des Systes wird eine Seite angezeigt
## RDWeb

Falls Sie die obige Installation nicht auf Ihrem Arbeitsrechner durchführen können oder wollen steht Ihnen ein Integrata-Rechner zur Verfügung:

* Aufruf im Browser mit https://rdweb.integrata-cegos.de/rdweb/webclient
* Anmeldung mit student_m040<i>i</i>@integrata-cegos.de (i = 2 - 12), Password wird im Kurs mitgeteilt
 * Die Zuordnung der Nummern an die Teilnehmer wird im Seminar durchgeführt
 * BM = 2, SG = 3, JH = 4, AF = 5, K = 6
* Anschließend Anmeldung am Linux-Rechner, User root, Password wird im Kurs mitgeteilt
 * Falls Sie mit Windows arbeiten möchten muss der Rechner neu gebootet werden:
   * grub2-set-default 2
   * init 6

## Durchführung des Seminars

* Beispiele
  * https://github.com/Javacream/org.javacream.training.angular

* Digitales Flipchart
  * https://docs.google.com/presentation/d/1RU_S7xZjT4JkLw_fuat_TWQ5XoTw40_VTwQgc1fya4A/edit?usp=sharing

## REST Server

### Remote

* browse to http://h2908727.stratoserver.net:8080/people, you will see some data
* REST-API supports CRUD on endpoint /people, supported mediatype is JSON
  * Swagger UI available at http://h2908727.stratoserver.net:8080/swagger-ui.html

### Local
* Download executable artefact from resources
* start executable java -jar org.javacream.training.rest.people.server-1.0.jar
* web server will startup using port 8080 and embedded database
  * change port using --server.port=
* browse to localhost:8080/people, you will see some data
* REST-API supports CRUD on endpoint /people, supported mediatype is JSON
  * Swagger UI available at http://localhost:8080/swagger-ui.html
