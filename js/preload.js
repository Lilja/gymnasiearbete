$(function(){
	var image = 
	{
		0:"img/hero1/attack1_hero1_left.png",
		1:"img/hero1/attack1_hero1_right.png",

		2:"img/hero1/attack2_hero1_left.png",
		3:"img/hero1/attack2_hero1_right.png",

		4:"img/hero1/attack3_hero1_left.png",
		5:"img/hero1/attack3_hero1_right.png",

		6:"img/hero1/attack1_hero1_left.png",
		7:"img/hero1/attack1_hero1_right.png",

		8:"img/hero1/dodge_hero1_left.png",
		9:"img/hero1/dodge_hero1_right.png",

		10:"img/hero1/walk_hero1_left.png",
		11:"img/hero1/walk_hero1_right.png",



		12:"img/hero2/attack1_hero2_left.png",
		13:"img/hero2/attack1_hero2_right.png",

		14:"img/hero2/attack2_hero2_left.png",
		15:"img/hero2/attack2_hero2_right.png",

		16:"img/hero2/attack3_hero2_left.png",
		17:"img/hero2/attack3_hero2_right.png",

		18:"img/hero2/dodge_hero2_left.png",
		19:"img/hero2/dodge_hero2_right.png",

		20:"img/hero2/walk_hero2_left.png",
		21:"img/hero2/walk_hero2_right.png"
	};

	jQuery.fn.preload = function()
	{
		for(var i = 0; i<image.length; i++)
		{
			$(".preload").html("<img src='" + image[i]+ "'>");
		}
}
});