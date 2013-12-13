$(function()
{
	$(document).on('animationend webkitAnimationEnd oAnimationEnd',".pone",function()
	{
		$(".pone").removeClass("hero1Attack1right");
		$(".pone").removeClass("hero1Attack1left");

		$(".pone").removeClass("hero1Attack2right");
		$(".pone").removeClass("hero1Attack2left");

		$(".pone").removeClass("hero1Attack3right");
		$(".pone").removeClass("hero1Attack3left");

		$(".pone").removeClass("hero1Walkright");
		$(".pone").removeClass("hero1Walkleft");

		$(".pone").removeClass("hero1Dodgeright");
		$(".pone").removeClass("hero1Dodgeleft");

		$(".pone").addClass("hero1Idle"+ player1.Facing);
	});
	$(document).on('animationend webkitAnimationEnd oAnimationEnd',".ptwo", function()
	{
		$(".ptwo").removeClass("hero2Attack1right");
		$(".ptwo").removeClass("hero2Attack1left");

		$(".ptwo").removeClass("hero2Attack2right");
		$(".ptwo").removeClass("hero2Attack2left");

		$(".ptwo").removeClass("hero2Attack3right");
		$(".ptwo").removeClass("hero2Attack3left");

		$(".ptwo").removeClass("hero2Walkright");
		$(".ptwo").removeClass("hero2Walkleft");

		$(".ptwo").removeClass("hero2Dodgeright");
		$(".ptwo").removeClass("hero2Dodgeleft");

		$(".ptwo").addClass("hero2Idle"+ player2.Facing);
	});

});