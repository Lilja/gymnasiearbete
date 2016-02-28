//No instansiating! 

/*
Player
*/
function Player(player, model)
{
	this.Health;
	this.X = 50;
	this.Y = 50;

	this.Left;
	this.Right;

	this.Width;
	this.Height;

	this.Char;
	this.isJumping = false;
	this.isAttacking = false;

	if (player == "player2")
	{
		this.X = 400;
	}
	if (model === parseInt(model))
	{
		this.Char = model;
	}
	else 
	{
		alert("model is not an integer");//debug
	}
}
Player.prototype.moveLeft = function(playerClass, player)
{
	player.X -= 7;
	$(".window > " + playerClass).css("left", player.X);
	$(".debug").html(player.X);
}
Player.prototype.moveRight = function(playerClass, player)
{
	player.X += 7;
	$(".window > " + playerClass).css("left", player.X);
	$(".debug").html(player.X);
}
