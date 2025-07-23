const sun = document.getElementById("sun");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");

const centerX = 100;
const centerY = 50;

var mercuryRot = 4.71238898038;
var venusRot = 4.71238898038;
var earthRot = 4.71238898038;
var marsRot = 4.71238898038;
var jupiterRot = 4.71238898038;
var saturnRot = 4.71238898038;
var uranusRot = 4.71238898038;
var neptuneRot = 4.71238898038;

function Rotate()
{
	sun.style.left = centerX + "vh";
	sun.style.top = centerY + "vh";
	
	mercuryRot = mercuryRot + 0.00568181818;
	mercury.style.left = (centerX + (Math.sin(mercuryRot)*10)) + "vh";
	mercury.style.top = (centerY + (Math.cos(mercuryRot)*10)) + "vh";
	
	venusRot = venusRot + 0.00196078431;
	venus.style.left = (centerX + (Math.sin(venusRot)*20)) + "vh";
	venus.style.top = (centerY + (Math.cos(venusRot)*20)) + "vh";
	
	earthRot = earthRot + 0.00136986301;
	earth.style.left = (centerX + (Math.sin(earthRot)*30)) + "vh";
	earth.style.top = (centerY + (Math.cos(earthRot)*30)) + "vh";
	
	marsRot = marsRot + 0.00072780203;
	mars.style.left = (centerX + (Math.sin(marsRot)*40)) + "vh";
	mars.style.top = (centerY + (Math.cos(marsRot)*40)) + "vh";
	
	jupiterRot = jupiterRot + 0.00011528706;
	jupiter.style.left = (centerX + (Math.sin(jupiterRot)*65)) + "vh";
	jupiter.style.top = (centerY + (Math.cos(jupiterRot)*65)) + "vh";
	if(centerY + (Math.cos(jupiterRot)*65)>100)
	{
		jupiterRot = jupiterRot + 0.1;
	}
	if(0 > centerY + (Math.cos(jupiterRot)*65))
	{
		jupiterRot = jupiterRot + 0.1;
	}
	
	saturnRot = saturnRot + 0.00004652461;
	saturn.style.left = (centerX + (Math.sin(saturnRot)*75)) + "vh";
	saturn.style.top = (centerY + (Math.cos(saturnRot)*75)) + "vh";
	if(centerY + (Math.cos(saturnRot)*75)>100)
	{
		saturnRot = saturnRot + 0.1;
	}
	if(0 > centerY + (Math.cos(saturnRot)*75))
	{
		saturnRot = saturnRot + 0.1;
	}
	
	uranusRot = uranusRot + 0.00001634574;
	uranus.style.left = (centerX + (Math.sin(uranusRot)*85)) + "vh";
	uranus.style.top = (centerY + (Math.cos(uranusRot)*85)) + "vh";
	if(centerY + (Math.cos(uranusRot)*85)>100)
	{
		uranusRot = uranusRot + 0.1;
	}
	if(0 > centerY + (Math.cos(uranusRot)*85))
	{
		uranusRot = uranusRot + 0.1;
	}
	
	neptuneRot = neptuneRot + 0.0000083612;
	neptune.style.left = (centerX + (Math.sin(neptuneRot)*95)) + "vh";
	neptune.style.top = (centerY + (Math.cos(neptuneRot)*95)) + "vh";
	if(centerY + (Math.cos(neptuneRot)*95) >100)
	{
		neptuneRot = neptuneRot + 0.1;
	}
	if(0 > centerY + (Math.cos(neptuneRot)*95))
	{
		neptuneRot = neptuneRot + 0.1;
	}
	
}

setInterval(Rotate,1);