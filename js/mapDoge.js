$(document).keydown(function(e){
	var code = e.which;
	if (mapDodge[code] === false)
	{
		switch(code)
		{
			case 88:
			player1.isDodging;
			mapDodge[code] = true;
			break;
			case 96:
			player2.isDodging;
			mapDodge[code] = true;
			break;
		}
	}
});