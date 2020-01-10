import React from 'react';
import { Fieldset } from 'primereact/fieldset';


function CalibCam(){

return(
<div>
         <Fieldset legend="Comment marche un capteur">
 
         <div className="p-grid ">
    <div className="p-col">4</div>
    <div className="p-col">VIS (DDRAGO)</div>
    <div className="p-col">NIR (CAGIRE)</div>


    <div className="p-col">Description</div>
    <div className="p-col">2 cameras : blue and red CCDs

spectral instruments e2v 231-84 CCDs 
</div>
    <div className="p-col">camera H2RG 

Exposure : from 30s max to 1.4s min
(mais ça pourrait déjà saturer au bout d’une dizaine de secondes…)
</div>



    <div className="p-col">Image Size

4000*4000*32/8/1024/1024
2000*2000*16/8/1024/1024
</div>
    <div className="p-col">4K x 4K encoded on 16 bits (mais stockées sur 32 bits...)

32 MB(1) with no compression (fits) 
TBD with compression (fits.gz)
</div>
    <div className="p-col">2K x 2K encoded on 16 bits

8MB (2) with no compression (fits)
6MB with compression (fits.gz)
</div>





    <div className="p-col">GRB ALERT Volume :

Observation during 5 days :

1st 30 mn (0-30mn) : 1 im/30s (40s with deadtime)




2nd 30mn (30-60mn)


2ème heure (60-120mn)

Then, the rest of the night (10h) : 6 image per hour

Then during 4 more days : 12 images per day

⇒ Total: ~40 Go per GRB alert

For 100 GRBs per year including under slew threshold alerts [25% with a full follow-up + 50% with partial follow-up (50% of observations)] => 4 TB per year</div>
    <div className="p-col">


2x45 images




2x30 images (1min exposure)


2x20 images (3 min exposure) 

10x2x6 images (3min) 


4x2x12 images (3 min)


410 images (à corriger)
</div>
    <div className="p-col">
45 images (for the brightest GRBs +200 images with 1.4s exposure)
Pour un GRB brillant, on récupère toutes les images individuelles alors que pour un faible, on se contente de l’image stockée (fin de la rampe)

60 images (30s exposure)


120 images (30s exposure)

2160 images (30s)
Rather it would be : 10x36 = 360 (AC)

Same as VIS


3000 images (to be fixed)</div>











    <div className="p-col">Volume WITHOUT ALERT (routine FR/MEX + SVOM)

At the Observatorio Astronomico National (OAN) at San Pedro Martir,  we assume 80% of  good nights, 290 nights per year

Per night,  we assume ~100 sequences of observations (moyenne TAROT). In a night of ~12h (720 min), minus 5% of deadtime (684 min)

In one night :


In one year :
So a reasonable volume of images is 50TB per year and in first approximation,  this corresponds to 15 TB for SVOM/MM data, 17.5 TB for French routine program and 17.5 TB for Mexican routine observations. 
=> To be transfered to the FSC, ~30 TB per year</div>
    <div className="p-col">
700 images (3) / camera (1mn exp)
(3) 1 image/mn pendant 700 mn




⇒ 67 GB
(=1400*48/1024)

⇒ 20 TB</div>
    <div className="p-col">~2000 images (30s exp)
Min : 1400 images (30s)
Max : 28000 images (1.4s)


⇒ 8.4-168 GB
(from 1400 to 28000)*6/1024

⇒ 2.5-50 TB</div>



</div>
























              </Fieldset>




       </div>
)

}
export default CalibCam;

















         