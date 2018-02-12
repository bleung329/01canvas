/*
Brian Leung
SoftDev PD 7 
MyFirstAnimation
*/

var canvas = document.getElementById('slate')
var ctx = canvas.getContext('2d')
var animation

//For the shrinking and growing circles
var circleSize = 0
var shrinking
var growthSpeed = 10

//For the dvd player
var dvdX = 10
var dvdY = 10
var color
//Vector and the helper functions
var vector = {x:2,y:3}

function reflectVert()
{
	vector.y = -1 * vector.y
	color = getRandomColor() 
}
function reflectSide()
{
	vector.x = -1 * vector.x
	color = getRandomColor()
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function dvdPlayer()
{
	ctx.clearRect(0,0, canvas.width, canvas.height)
	drawCircle(dvdX,dvdY,20,color)
	dvdX += vector.x
	dvdY += vector.y
	
	if (dvdX>=600 || dvdX<=0)
	{
		reflectSide()
	}
	if (dvdY>=600 || dvdY<=0)
	{
		reflectVert()
	}
	animation = window.requestAnimationFrame(dvdPlayer)
}

//Growing and shrinking circle function
function growCircle()
{
	ctx.clearRect(0,0, canvas.width, canvas.height)
	if (shrinking)
	{
		circleSize -= growthSpeed
	}
	else
	{
		circleSize += growthSpeed
	}
	if (circleSize >= 300)
	{
		shrinking = 1
	}
	if (circleSize <= 0)
	{
		shrinking = 0
	}
	drawCircle(300,300,circleSize,'blue')
	animation = window.requestAnimationFrame(growCircle)
}


//For drawing circle, used in both animations
function drawCircle(x,y,radius,colour)
{
	ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = colour;
    ctx.fill();
}


//Attaching functions to buttons
document.getElementById('toggle').onclick = function()
{
	growCircle()
}
document.getElementById('dvdplayer').onclick = function()
{
	dvdPlayer()
}
document.getElementById('pause').onclick = function()
{
	window.cancelAnimationFrame(animation)
}


logo.src = "dvd.jpg"
var logo = new Image();
logo.width = 
growCircle()