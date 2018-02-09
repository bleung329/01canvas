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

//Vector and the helper functions
var vector = {x:2,y:3}

function reflectVert()
{
	vector.y = -1 * vector.y
}
function reflectSide()
{
	vector.x = -1 * vector.x
}

function dvdPlayer()
{
	ctx.clearRect(0,0, canvas.width, canvas.height)
	drawCircle(dvdX,dvdY,20)
	dvdX += vector.x
	dvdY += vector.y
	/*
	console.log("dvdX: "+dvdX)
	console.log("dvdY: "+dvdY)
	console.log(vector.x)
	*/
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
	drawCircle(300,300,circleSize)
	animation = window.requestAnimationFrame(growCircle)
}


//For drawing circle, used in both animations
function drawCircle(x,y,radius)
{
	ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'blue';
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

growCircle()