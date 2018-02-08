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

var vector
{
	
}

function dvdPlayer()
{
	ctx.clearRect(0,0, canvas.width, canvas.height)
	animation = window.requestAnimationFrame(dvdPlayer)
}

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
	animation = window.requestAnimationFrame(draw)
}

function drawCircle(x,y,radius)
{
	ctx.beginPath();
    ctx.arc(300,300, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'blue';
    ctx.fill();
}

document.getElementById('toggle').onclick = function()
{
	draw()
}
document.getElementById('pause').onclick = function()
{
	window.cancelAnimationFrame(animation)
}
document.getElementById('dvdplayer').onclick = function()
{
	window.cancelAnimationFrame(animation)
}


draw()