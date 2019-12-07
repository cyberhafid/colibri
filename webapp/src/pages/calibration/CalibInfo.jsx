import React from 'react';
import { Fieldset } from 'primereact/fieldset';


function CalibInfo(){

return(
<div>
         <Fieldset legend="Comment marche un capteur">
         <p> Capteur est composé de Photosit,<br />
            Les photosiste sont sensible au photo de la lumiere<br />
            Quand les photons arrive sur un photosite, il libere de la lumiere, qui sera capturer<br />
            PS cumul jusqu’à saturation, a la fin du temps de pose de la photo,<br />
            les electrons seront dechargé, lors de la lecture du capteur,<br />
            cette valeur sera transformé en valeur numerique , qui correspondra a la valeur d’un pixel sur l’image<br />

            BASE<br />
            S/N Signale/Bruit = max de signale/min parasite = bon rapport<br />

            Signal de bias est indesirable<br />

            Le master bias est un signal de lecture, qui est cree lors de la lecture de l’image<br />
            C’est une image donnée au pixel des images pour éviter les valeurs negatives,<br />
            Ce sont des gris très très foncés</p>


              </Fieldset>
         <Fieldset legend="Offset">
           <p>Pour créer un offset mettre la camera dans le noir le plsu total <br />
Temps de pose minimum, apn meme iso que photo,<br />
Combien d’offset ?
             </p> </Fieldset>
         <Fieldset legend="Dark">
           <p>
           Meme temps de pose que les images<br />
Signal thermique.<br />
Sur une image longue pose.<br />
Des petits points blancs vont se créer (pixels chaud)<br />
la matière du photosite vas etre agité : les atomes vont être agités et vont même libérer des électrons que<br />
le potosiites vas stocker, Donc arrivés a saturation ils vont créer des points blancs
             </p> </Fieldset>


             <Fieldset legend="FLAT">
           <p>
 
             </p> </Fieldset>


             <Fieldset legend="Intervenants">
           <p>
           INTERVENANTS ensemble complexe CNES ANOC ANOC FSC CEA FSC FPOC FPOC CNES LAM<br />
https://slideplayer.fr/slide/13591963/ Structure, Organisation, Calendrier, Mise en pratique<br />
FSC<br />
CNES<br />
COLIBRI<br />
GIC = Group french télescope<br />
LAM = Laboratoire de saint Jérôme, voir possibilité de travailler avec eux.<br />
LAM SIP = service qui s’occupe du reseau entre FR et MX, VPN<br />
             </p> </Fieldset>
             <Fieldset legend="Technique">
           <p>
           EIC, Eclairs Instrument Center,<br />


ToO =Target of opportunity https://indico.in2p3.fr/event/14321/contributions/17842/attachments/14748/18075/SVOM_TS2020_Cordier.pdf
             </p> </Fieldset>














       </div>
)

}
export default CalibInfo;

















         