var up = document.getElementById('kk1'); 
var down = document.getElementById('kk2');
var getQuote = document.getElementById('kk3');
  
var array1 = ["text 1", "text 2", "text 3", "text 4"];

var array2 = ["Si quieres vivir Feliz trágate tu dolor.   -ProverbioAlemán.",
"Nunca te rindas, nunca te rindas, grande, pequeño, alto, bajo... NUNCA TE RINDAS! -W.Churchill",
"DIOS nos dío las nueces pero no nos las cascó. -ProverbioAlemán.",
"No has entendido algo, hasta que no eres capas de explicarselo a tu abuela. -A.Einstein ",
"See the big picture, ambition can be made of anything, this is the history of H.A. --Undefined",
"Just Carpe Diem. -KR",
"El que obra mal, terminal mal. -BárbaraGonzalez.",
"Al descanso se llega cuando se vayan a morir, no antes. -Apu",
"El amor y el deseo son las alas del espíritu de las grandes hazañas. -Goethe",
"Alles hat ein Ende, nur die Wurst hat zwei. -ProverbioAlemán",
"Las razas laboriosas encuentran una gran molestia en soportar la ociosidad. -FriedrichNietzsche",
"Sólo conoce el amor quien ama sin esperanza. -FriedrichVonSchiller",
 "Las religiones, como las luciérnagas, necesitan de oscuridad para brillar. -ArthurSchopenhauer",
"Deberiamos usar el pasado como un trampolin, y no como un sofá. -HaroldMacmillan",
"No preguntemos si estamos plenamente de acuerdo, sino tan sólo si marchamos por el mismo camino -Goethe",
"El esfuerzo y la dedicación no sirven... sirven los resultados. -MG",
"Structure follows Strategy. -AC",
"La persistencia y la determinación son omnipotentes. Calvin Coolidge",
"Growth and comfort do not coexist. -GR",
"Mal de muchos, consuelo de tontos. -AG.",
"Trust, believe but always check. --SR",
"Invest your time in high leverage activities to take the journey, even if it's alone connecting your actions with your desires and always remember your Words make a big difference. --Undefined",
"Be patient, and fall in love with the process. --Undefined",
"No drama! --BB.",
"No le pidas a Dios que guíe tus pasos, cuando no estas dispuesto a mover los pies. M.G.",
"Law of serendipity: Lady Luck favors the one who tries. BarbaraOakley."]
  
up.innerHTML = "Click on the button to check the daily quote: " + " " ;
  
function random_text1() {
    getQuote.innerHTML = 
        array2[Math.floor(Math.random() * array2.length)];
}





