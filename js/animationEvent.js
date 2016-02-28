$(document).ready(function()
{

$(document).keydown(function(e)
{
e.stopPropagation();
e.preventDefault();
var code = e.which;
if (mapAnimate[code] === false)
{
	switch(code)
	{

		/* ATTACKS */

		case 81://Q
		//animation för Q för spelare 1
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".pone").addClass("attacking");
				$(".pone").removeClass("hero1Idleright");
			 	$(".pone").removeClass("hero1Idleleft");
				$(".pone").addClass(player1.Char + "Attack1" + player1.Facing);
			}
		break;
		case 87://W
			//animation för W för spelare 1
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".pone").addClass("attacking");
				$(".pone").removeClass("hero1Idleright");
			 	$(".pone").removeClass("hero1Idleleft");
				$(".pone").addClass(player1.Char + "Attack2" + player1.Facing);
			}
		break;
		case 69://E
			//animation för E för spelare 1
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".pone").addClass("attacking");
				$(".pone").removeClass("hero1Idleright");
			 	$(".pone").removeClass("hero1Idleleft");
				$(".pone").addClass(player1.Char + "Attack3" + player1.Facing);
			}
		break;
		case 103://num7
			//animation för num7 för spelare 2
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".ptwo").addClass("attacking");
				$(".ptwo").removeClass("hero2Idleright");
	            $(".ptwo").removeClass("hero2Idleleft");
				$(".ptwo").addClass(player2.Char + "Attack1" + player2.Facing);
			};

		break;
		case 104://num8
			//animation för num8 för spelare 2
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".ptwo").addClass("attacking");
				$(".ptwo").removeClass("hero2Idleright");
	            $(".ptwo").removeClass("hero2Idleleft");
				$(".ptwo").addClass(player2.Char + "Attack2" + player2.Facing);
			}

		break;
		case 105://num9
			//animation för num9 för spelare 2
			if (attackAllowed[code] === true)
			{
				mapAnimate[code] = true;
				$(".ptwo").addClass("attacking");
				$(".ptwo").removeClass("hero2Idleright");
	            $(".ptwo").removeClass("hero2Idleleft");
				$(".ptwo").addClass(player2.Char + "Attack3" + player2.Facing);
			}

		break;

		/* MOVE */

		case 39://högerpil
			mapAnimate[code] = true;
		break;
		case 37: //vänsterpil
			mapAnimate[code] = true;
		break;
		case 67://c
			mapAnimate[code] = true;
		break;
		case 86://v
			mapAnimate[code] = true;
		break;


		/* DODGE */

		case 88: //x
			mapAnimate[code] = true;
			$(".pone").removeClass("hero1Idleright");
		 	$(".pone").removeClass("hero1Idleleft");
			$(".pone").addClass(player1.Char + "Dodge" + player1.Facing);
		break;
		case 96: //num 0
			mapAnimate[code] = true;
			$(".ptwo").removeClass("hero2Idleright");
		 	$(".ptwo").removeClass("hero2Idleleft");
			$(".ptwo").addClass(player2.Char + "Dodge" + player2.Facing);
		break;
	}
}

});//keydown
$(document).keyup(function(e)
{
	code = e.which;
	e.stopPropagation();
  	e.preventDefault();
	if (mapAnimate[code] === true)
	{
		switch(code)
		{
			case 81:
				//animation för Q för spelare 1
				mapAnimate[code] = false;
			break;
			case 87:
				//animation för W för spelare 1
				mapAnimate[code] = false;
			break;
			case 69:
				//animation för E för spelare 1
				mapAnimate[code] = false;
			break;
			case 103:
				//animation för num7 för spelare 2
				mapAnimate[code] = false;
			break;
			case 104:
				//animation för num8 för spelare 2
				mapAnimate[code] = false;
			break;
			case 105:
				//animation för num9 för spelare 2
				mapAnimate[code] = false;
			break;

			case 67://c
				mapAnimate[code] = false;
			break;
			case 86://v
				mapAnimate[code] = false;
			break;
			
			case 39://högerpil
				mapAnimate[code] = false;
			break;
			case 37: //vänsterpil
				mapAnimate[code] = false;
			break;
			case 88:
				mapAnimate[code] = false;
				$(".pone").removeClass("hero1Dodgeright");
				$(".pone").removeClass("hero1Dodgeleft");
				$(".pone").addClass("hero1Idle" + player1.Facing);
			break;
			case 96:
				mapAnimate[code] = false;
				$(".ptwo").removeClass("hero2Dodgeright");
				$(".ptwo").removeClass("hero2Dodgeleft");
				$(".ptwo").addClass("hero2Idle" + player2.Facing);
			break;
		}
	}
});//keyup
});//ready
