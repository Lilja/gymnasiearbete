$(function(){
	$(".playAgain").click(function()
	{
		$(".winningScreen").animate({
			"top": "-50%"
		},1000, function()
		{
			game.ResetGame();
		});
	});
});