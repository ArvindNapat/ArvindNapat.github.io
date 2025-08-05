const sun = document.querySelector("#sun");
const mercury = document.querySelector("#mercury");
const venus = document.querySelector("#venus");
const earth = document.querySelector("#earth");
const mars = document.querySelector("#mars");
const jupiter = document.querySelector("#jupiter");
const saturn = document.querySelector("#saturn");
const uranus = document.querySelector("#uranus");
const neptune = document.querySelector("#neptune");

const belt = document.querySelectorAll(".belt");

const Slider = document.querySelector("#slider");

const Facts = document.querySelectorAll(".content");


const start = document.querySelector("#gamestart");
const Rocket = document.querySelectorAll(".rocket");
const Ast = document.querySelectorAll(".ast");
const Coin = document.querySelectorAll(".coin");
const Blank = document.querySelectorAll(".blank");
const L = document.querySelectorAll(".left");
const C = document.querySelectorAll(".center");
const R = document.querySelectorAll(".right");

const ScoreC = document.querySelector("#scoC");
const SpeedC = document.querySelector("#spdC");


const centerX =48;
const centerY = 38 / window.innerWidth * window.innerHeight;

var mercuryRot = 4.71238898038;
var venusRot = 4.71238898038;
var earthRot = 4.71238898038;
var marsRot = 4.71238898038;
var jupiterRot = 4.71238898038;
var saturnRot = 4.71238898038;
var uranusRot = 4.71238898038;
var neptuneRot = 4.71238898038;

var beltRot = 4.71238898038;

var Speed = "1";

var ShowContent = "1";
var Contentmover = "1";

var content = "11";
var loadcontent = "";

var hover = "";
var enlarger = 4;

var facthover = "0";
var factopac = 0.01;

var Game = "0";
var pos = "0"
var playerpos = 10;

var Tick = "0";
var spd = 200;
var deathpos = "12";
var coinpos = "12";
var sco = 0;

function Rotate()
{	
	Speed = (parseInt(Slider.value));
	Speed = (Speed*Speed*Speed*Speed*Speed)

	sun.style.left = centerX + "vw";
	sun.style.top = centerY + "vw";
	
	mercuryRot = mercuryRot + Speed*(0.00568181818);
	mercury.style.left = (centerX + (Math.sin(mercuryRot)*5)) + "vw";
	mercury.style.top = (centerY + (Math.cos(mercuryRot)*5)) + "vw";
	
	venusRot = venusRot + Speed*(0.00196078431);
	venus.style.left = (centerX + (Math.sin(venusRot)*10)) + "vw";
	venus.style.top = (centerY + (Math.cos(venusRot)*10)) + "vw";
	
	earthRot = earthRot + Speed*(0.00136986301);
	earth.style.left = (centerX + (Math.sin(earthRot)*15)) + "vw";
	earth.style.top = (centerY + (Math.cos(earthRot)*15)) + "vw";
	
	marsRot = marsRot + Speed*(0.00072780203);
	mars.style.left = (centerX + (Math.sin(marsRot)*20)) + "vw";
	mars.style.top = (centerY + (Math.cos(marsRot)*20)) + "vw";
	
	jupiterRot = jupiterRot + Speed*(0.00011528706);
	jupiter.style.left = (centerX + (Math.sin(jupiterRot)*30)) + "vw";
	jupiter.style.top = (centerY + (Math.cos(jupiterRot)*30)) + "vw";
	
	saturnRot = saturnRot + Speed*(0.00004652461);
	saturn.style.left = (centerX + (Math.sin(saturnRot)*35)) + "vw";
	saturn.style.top = (centerY + (Math.cos(saturnRot)*35)) + "vw";

	uranusRot = uranusRot + Speed*(0.00001634574);
	uranus.style.left = (centerX + (Math.sin(uranusRot)*40)) + "vw";
	uranus.style.top = (centerY + (Math.cos(uranusRot)*40)) + "vw";

	neptuneRot = neptuneRot + Speed*(0.0000083612);
	neptune.style.left = (centerX + (Math.sin(neptuneRot)*45)) + "vw";
	neptune.style.top = (centerY + (Math.cos(neptuneRot)*45)) + "vw";
	
	beltRot = beltRot + Speed*(0.005);
	for(let Asteroid of belt)
	{
		Asteroid.style.left = (centerX + (Math.sin(beltRot)*25)) + "vw";
		Asteroid.style.top = (centerY + (Math.cos(beltRot)*25)) + "vw";
		beltRot = beltRot + 0.19634954084;
		Asteroid.addEventListener("click",function(){changepg(10)});
	}
	
	ShowContent = ShowContent * Contentmover;

	
	if(ShowContent>0.99)
	{
		ShowContent = 1;
		Contentmover = 1;
	
	}
	
	if(ShowContent<0.01)
	{
		ShowContent = 0.01;
		Contentmover = 1.05;
		content = loadcontent;
		loadcontent = "";
	}
	
	displaypg();
	
	if(content == 10)
	{
		if(Game==1)
		{
			if (Tick > spd)
			{
				Tick = 0;
				if(deathpos==12)
				{
					coinpos = parseInt(Math.round(Math.random()*2));
					deathpos = coinpos + parseInt(Math.round(Math.random()))+1;
					if (deathpos > 2)
					{
						deathpos = deathpos -3;
					}
				}
				else if (deathpos > 8)
				{
					coinpos = 12;
					deathpos = 12;
				}
				else
				{
					coinpos = coinpos+3;
					deathpos = deathpos+3;
				}
				
				if(spd > 15)
				{
					spd = spd-1;
				}
				else
				{
					spd = 15;
					sco = sco+1;
				}
				sco = sco+1;
			}
			Tick = Tick + 1;
		}
		else
		{
			deathpos = 12;
			coinpos = 12
			console.log(coinpos);
			Tick = 0;
		}
		RenBoard();
	}
	else
	{
		Game=0;
	}
	
}

function RenBoard()
{
	pos = 0;
	for(let tile of Coin)
	{
		if (coinpos == pos)
		{
			if (coinpos == playerpos)
			{
				tile.style.display = "none";
				sco = sco+100;
				coinpos = 12;
			}
			else
			{
				tile.style.display = "block";
			}
		}
		else
		{
			tile.style.display = "none";
		}
		pos = pos+1;
	}
	
	pos = 0;
	for(let tile of Ast)
	{
		if (deathpos == pos)
		{
			if (deathpos == playerpos)
			{
				playerpos=12;
				Game=0;
			}
				tile.style.display = "block";
		}
		else
		{
			tile.style.display = "none";
		}
		pos = pos+1;
	}
	
	pos = 0;
	for(let tile of Blank)
	{
		tile.style.display = "block";
		if (playerpos == pos)
		{
			tile.style.display = "none";
		}
		if (deathpos == pos)
		{
			tile.style.display = "none";
		}
		if (coinpos == pos)
		{
			tile.style.display = "none";
		}
		pos = pos+1;
	}
	pos = 0;
	for(let tile of Rocket)
	{
		if (playerpos == pos)
		{
			tile.style.display = "block";
		}
		else
		{
			tile.style.display = "none";
		}
		pos = pos+1;
	}
	
	
	
	
	for(let tile of L)
	{
		tile.addEventListener("mouseover",function(){move(9)});
	}
	
	for(let tile of C)
	{
		tile.addEventListener("mouseover",function(){move(10)});
	}
	
	for(let tile of R)
	{
		tile.addEventListener("mouseover",function(){move(11)});
	}
	
	SpeedC.innerHTML="<h1>"+"Speed"+"<br/>"+ (201 - spd) +"</h1>";
	ScoreC.innerHTML="<h1>"+"Score"+"<br/>"+ sco +"</h1>";
	
	
}

function move(loc)
{
	playerpos =loc;
}

function HideFacts()
{
	for(let page of Facts)
	{
		page.style.display = "none";
	}
}


function displaypg()
{
	HideFacts()
	let LoadedPage = document.querySelector("#Fact"+content);
	LoadedPage.style.left = (104-42*(ShowContent)) + "vw";
	LoadedPage.style.top = "0vw";
	LoadedPage.style.display = "block";
	let ScreenSize = parseInt(window.innerWidth);
	if (ScreenSize < 600)
	{
		LoadedPage.style.left = "0vw";
		LoadedPage.style.top = (175-100*(ShowContent)) + "vw";
	}
	if (content == 10)
	{
		LoadedPage.style.opacity = "1";
		var Game = "0";
	}
	else
	{
		var Game = "0";
	}
	
}

function changepg(type)
{
	if(type != content)
	{
		loadcontent = type;
		Contentmover = 0.95;
	}
}

function opas()
{
	facthover=1;
	console.log("hi");
}

function startgame()
{
	Game=1;
	sco=0;
	spd=200;
}

sun.addEventListener("click",function(){changepg(1)});

mercury.addEventListener("click",function(){changepg(2)});

venus.addEventListener("click",function(){changepg(3)});

earth.addEventListener("click",function(){changepg(4)});

mars.addEventListener("click",function(){changepg(5)});

jupiter.addEventListener("click",function(){changepg(6)});

saturn.addEventListener("click",function(){changepg(7)});

uranus.addEventListener("click",function(){changepg(8)});

neptune.addEventListener("click",function(){changepg(9)});



start.addEventListener("click",function(){startgame()});

setInterval(Rotate,1);
