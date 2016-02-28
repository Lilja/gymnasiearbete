function Player(player, facing)
{
	this.Health = 100;
	this.X = 50;
	this.Y = 50;

	this.Amplifier = 0;
	this.moveDisabler = false;

	this.Facing = facing;

	this.Width = 100;
	this.Height = 150;

	this.Char = player;

	this.TimesWon = 0;
	if(player === "hero2")
	{
		this.Width = 150;
	}
	this.isDodging = false;
	this.isAttacking = false;

}
Player.prototype.moveLeft = function(playerClass, player)
{
	player.X--;
}
Player.prototype.moveRight = function(playerClass, player)
{
	player.X++;
}
Player.prototype.Kick = function(playerAttack, Victim, victimP, attackerDisabler)
{
	var tempX = 250;//how much to move when kicked
	if(Victim.X  > windowObj.Left && Victim.X + Victim.Width < windowObj.Right)
	{
		if (Victim.X - tempX > windowObj.Left && Victim.X + tempX + Victim.Width < windowObj.Right)
		{
			Victim.moveDisabler = true;
			if (Victim.Facing === "right")
			{	
				$(victimP).animate({
					"left": Victim.X - tempX,
					easing: 'easeOutExpo'
				}, 500, function()
				{
					Victim.X = Victim.X - tempX;
					Victim.moveDisabler = false;
				});
			}
			else if (Victim.Facing === "left")
			{
				$(victimP).animate({
					"left": Victim.X + tempX,
					 easing: 'easeOutExpo'
				}, 500, function()
				{
					Victim.X = Victim.X + tempX;
					Victim.moveDisabler = false;
				});
			}
		}//if victim + 200
		else if(!(Victim.X + tempX + Victim.Width < windowObj.Right))
		{
			Victim.moveDisabler = true;
			$(victimP).animate({
				"left": windowObj.Right-Victim.Width,
				 easing: 'easeOutExpo'
			}, 500, function()
			{
				Victim.X = windowObj.Right - Victim.Width;
				Victim.moveDisabler = false;
			});
		}
		else if(!(Victim.X - tempX > windowObj.Left))
		{
			Victim.moveDisabler = true;
			$(victimP).animate({
				"left": windowObj.Left,
				 easing: 'easeOutExpo'
			}, 500, function()
			{
				Victim.X = windowObj.Left;
				Victim.moveDisabler = false;
			});

		}
	}//if bara vicitm
	
}//metod