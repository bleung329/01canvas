var canvas = document.getElementById('slate')
var ctx = canvas.getContext('2d')
var animation
var animation_running = 0
var circleSize = 0
var shrinking
var growthSpeed = 10

function draw()
{
	ctx.clearRect(0,0, canvas.width, canvas.height);
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
	drawCircle(circleSize)
	animation = window.requestAnimationFrame(draw)
}

function drawCircle(radius)
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

draw()