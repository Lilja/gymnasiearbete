$(function()
{
	$(document).keydown(function(e){
		var code = e.which;
		if (mapDodge[code] === false)
		{
			switch(code)
			{
				case 88:
					player1.isDodging = true;
					mapDodge[code] = true;
				break;
				case 96:
					player2.isDodging = true;
					mapDodge[code] = true;
				break;
			}
		}
	});
	$(document).keyup(function(e)
	{
		var code = e.which;
		if (mapDodge[code] === true)
		{
			switch(code)
			{
				case 88:
					player1.isDodging = false;
					mapDodge[code] = false;
				break;
				case 96:
					player2.isDodging = false;
					mapDodge[code] = false;
				break;
			}
		}
	});
});