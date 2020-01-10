
import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';

export default class DocApi extends Component {
  render() {
    return (



      <div>
 

        <div className="content-section implementation">

          <TabView>




            <TabPanel header="AUTHENTIFICATION">
              <div>
                <Fieldset legend="Development standards">
                  <p>     
                    
                  GIC will be developed on standard PC and will run in a computer center (CC in2p3 is foreseen) (GIC_OR_001).
                   Running in a computer center will allow to fulfill GIC_FR_001, GIC_OR_002 and GIC_OR_001 requirements. 
                                                           
                    
                     </p> </Fieldset>
                  <Fieldset legend="PROCESSUS">
                  <p>
                    ENTREE<br />
                    <br />
                    
                     Un processus indépendant capable de recevoir des données de TCS-GP1 selon une structure de fichier bien définie et de les insérer dans DB. <br />
Les données sont les suivantes: données d'état Colibri, horaires, images d'étalonnage. Transport<br />
 La couche entre TCS-GP1 et GIC utilise rsync.<br />

A process providing automated data input management. (GIC_SR_001)<br />
Mainly dedicated to GIC/CC interface [RD1]. Data go through FileSync [RD6]<br />

Tasks:<br />
Read data from file on FileSync notification<br />
Parse and verify data consistency (GIC_AR_003)<br />
Store data in database<br />
Reports to Web Interface so it can process data<br />
<br />
SORTIE<br />
Un processus indépendant capable de fournir des stratégies d'observation et des images d'étalonnage de référence TCS-GP1 et FSC-GP2 sont également fournis l’etat des données et une planification pour FSC-GP2.<br />

A process providing automated data output. <br />
Dedicated to GIC/CC interface [RD1] and GIC/GP2 interface [RD2]. Data go through FileSync [RD6] (GIC_SR_002)<br />
Tasks:<br />
Write data to be exported in files located in dedicated FileSync area. (GIC_AR_011, GIC_AR_012)<br />
     </p> </Fieldset>
                  <Fieldset legend="DB">
                  <p>  Une base de données indépendante dans laquelle nous stockons des données de statut, des calendriers, des stratégies et des liens d’images de calibration.
Cette base de données doit sauvegarder toutes les données sur la durée de vie du télescope.

Telescope status data : environement, dome, ddragos, cagire
Strategies : all available strategies will be stored 
Calibration : only available calibration files will be stored

DB design will be in accordance with input data and web interface needs. A particular attention will be paid to DB administration tools (GIC_AR_001)    </p> </Fieldset>
                  <Fieldset legend="la mise en œuvre">

                  <p>     
                  GIC will be developed on standard PC and will run in a computer center (CC in2p3 is foreseen) (GIC_OR_001). Running in a computer center will allow to fulfill GIC_FR_001, GIC_OR_002 and GIC_OR_001 requirements.<br />
Développé avec python / django, les 3 processus présentés ci-dessus seront empaquetés et exécutés dans le même centre informatique.<br />
Actuellement, la base de données fonctionne localement, vu son importance, elle peut être localisée et gérée indépendamment.<br />

                    
                     </p> </Fieldset>
                  <Fieldset legend="Statut actuel">
                  <p>   
                    
                  Actuellement, le processus de saisie est terminé; cela inclut la définition et la mise en œuvre des couche de transport de données, vérification des données et insertion dans la base de données.<br />
Les fichiers JSON contiennent toutes les données d'état horodatées. Celles-ci sont accumulées dans un fichier synchronisé avec point de terminaison en France toutes les 5 minutes avec l’outil rsync.<br />
La modélisation de la base de données est effectuée dans ce processus. La modélisation de la base de données concerne les données du PLC et, en partie, ceux du télescope.<br />
 Plusieurs données d'état sont manquantes, notamment celles du télescope et des détecteurs.<br />
                    
                    
                    
                    
                    
                       </p> </Fieldset>
                  <Fieldset legend="Application">
                  <p>     Nous parlons ici de données à transporter entre TCS et GIC. Toutes les données sont envoyées par entité TCS et reçu en un point en France. GIC doit accéder à ce point depuis n’importe quel lieu en France.<br />
 images de calibration<br />
Les images de calibration sont produites par TCS et envoyées à la CDB, les liens vers ces fichiers d’images étant envoyés à
CPG dans un fichier JSON. CPG a besoin de ces liens pour accéder aux images de calibration afin de valider<br />
leur.
 Les fichiers JSON contiennent des données d'état provenant de:<br />
o PLC. Les fichiers JSON sont créés par un automate. Dans ce cas, TCS ne fait que collecter et envoyer les fichiers.<br />
o Télescope, GP1, détecteurs. TCS récupère les données de ces pièces et crée des fichiers JSON avec
ces données et les envoie.<br />
o Liens vers des images d'étalonnage. Comme décrit ci-dessus.<br />
 </p> </Fieldset>
                  <Fieldset legend="Implications pour l'accès aux données du CPG">
                  <p>     
                  Le CPG doit avoir accès:<br />
  au point de terminaison de la couche transport pour tous les fichiers d'état JSON <br />
 la CDB pour obtenir des images d'étalonnage <br />
 le GIC-DB situé à proximité du CPG ou à distance.<br />

                    
                     </p> </Fieldset>
                  <Fieldset legend=" Définitions attendues ">
                  <p>    
                  Description des formulaires de tendance <br />
Toutes les données d'état du télescope, données significatives attendues<br />
Données d'état des détecteurs, données significatives attendues<br />
 Définition des stratégies d'observation à partir de la partie planificateur <br />

                    
                    
                      </p> </Fieldset>
                  <Fieldset legend="Description des formes de tendance à long terme">
                  <p>    
                   Niveau de biais: tracés du niveau de biais (médiane de plusieurs images) pour chaque tracé de canal de l'écart type (nouveau - réf) pour chaque image de biais <br />
 Flat: tracés du niveau uniforme, uniformité (médiane de plusieurs images) pour chaque canal et pour chaque bande tracés de l'écart type (nouveau - réf) pour chaque bande<br />
  Dark level: tracés du niveau sombre (médiane de plusieurs images) pour chaque canal et pour 2 expositions (long / court) des tracés de l'écart type (nouveau - réf) pour chaque image (Autre monit oring plots for CAGIRE?)<br />
  zero offset: tracés de l'évolution temporelle de la magnitude pour chaque bande <br />
 Seing: tracés de l'évolution temporelle pour chaque canal<br />
  Main weather sensors: tracés de l'évolution temporelle (nuage, température, vent, humidité…)<br />
  Possibilité de tracer toute variable en fonction de toute autre variable + temps. <br />
 Création d'une stratégie d'observation Les images :<br />

Bias, Flat et Dark sont prises par TCS et transférées en France pour stockage et validation. <br />
 Les valeurs zéro et d'observation sont calculées à la 1ère étape de la GP1 (réduction des données)<br />
 Valeurs météo + environnement: proviennent directement de l'automate et des détecteurs. <br />

                      </p> </Fieldset>
                  <Fieldset legend="Plan à court terme">
                  <p>     
                  Etudier la possibilité de déporter la base de données pour GIC Etudier ensemble le schéma proposé pour le transport de données  <br />
Faire évoluer le modèle de base de données conformément aux nouvelles définitions de données d'état du détecteur et du télescope <br />
Avoir une configuration de travail minimale pour septembre prochain <br />

                    
                     </p> </Fieldset>
                  <Fieldset legend=" interface Web">
                  <p>   Un moteur d'interface Web proposant des formulaires pour montrer les tendances à long terme, faire, mettre à jour l'observation validation des stratégies et des images de calibration. <br />
A process interacting with operators, providing tools for automated or manual operations on scientific data [scientific data definition in RD5] <br />
Tasks: <br />
Interface with user (Instrument Scientist or Administrator) (GIC_OR_006) <br />
Strategies production and update (GIC_SR_003, GIC_AR_004) <br />
Calibration files validation. These files will be validated automatically or manually by IE (GIC_SR_004, GIC_AR_005, GIC_AR_006). Validation rules, see URD_GIC §5.5. <br />
Monitor long term scientific and technical data (see §5 in this document) <br />
<br />
Main rules: <br />
A part of this process will be dedicated to GIC administrator (GIC_AR_010) <br />
Access rights will be granted depending on user group: “Instrument Expert”, “Administrator” (GIC_AR_009) <br />
For automated interfaces, all messages will be authenticated and encrypted. (GIC_AR_002) <br />
For human interfaces, a login procedure will be used. <br />
<br />
Main pages: <br />
A dash board summarizing all choices you may have (admin, status, strategies, calibration), displaying all important live parameters such as local meteo, recent telescope activities. <br />
A page for status data analyse offering trends, statistics. <br />
A page for strategies update. Proposed actions are: new, edit, delete. See §5 in this document. <br />
A page for calibration files validation displaying current available calibration files. This page is there to manually validate new calibration files or to verify automatic validation. <br />
<br />
monitoring tasks <br />
Monitoring tasks are an important part of GIC: <br />
Status monitoring <br />
Monitoring is intended to show long term behavior of environmental parameters, telescope and instruments. Temporal trends of any parameter and statistics will be provided. (GIC_AR_007). <br />
Schedule monitoring <br />
Information concerning ongoing planning are received every time a new planning is executed while information on really executed observations are received in status file. Only SVOM part of this information is transmitted to GP2 in FSC for BA use. <br />
At any time this information may be monitored and adapted statistic tools will be available. <br />
<br />
strategies tasks <br />
GIC is intended to provide a list strategies. Tools to create, edit, copy and remove strategies will be available. <br />
See below an illustrious preliminary sketch. <br />


   </p> </Fieldset>
   <Fieldset legend="problemes">
                  <p>     
                  Logging and reporting of any software problem will be provided. (GIC_AR_008)

                    
                     </p> </Fieldset>
              </div>
            </TabPanel>





          </TabView>

        </div>
      </div>


    )
  }
}

