/*
39 högerpil
37 vänsterpil
67 v
86 c
81 q
87 w
69 e
103 num7
104 num8
105 num9
96 num0
88 x
*/
$(document).keydown(function(e)
{
  e.stopPropagation();
  e.preventDefault();
	var code = e.which;
	if(mapMove[code] === false)
	{
		mapMove[code] = true;
    interval[code] = setInterval(function()
    {
      switch(code)
      {
        case 39://Högerpil
          if (!player2.moveDisabler)
          {
            if(!mapMove[37])
            {
              if(player2.X + player2.Width < windowObj.Right)
              {
                game.playerCollision(player1.X, player2.X, player1.Width, player2.Width)
                $(".ptwo").removeClass("hero2Idleright");
                $(".ptwo").removeClass("hero2Idleleft");
                player2.Facing = "right";
                player2.moveRight(".ptwo", player2);
                $(".ptwo").addClass(player2.Char + "Walk" + player2.Facing);
              }
            }
          }
        break;
        case 37://vänsterpil
          if (!player2.moveDisabler)
          {
            if(!mapMove[39])
            {
              if(player2.X  > windowObj.Left)
              {
                game.playerCollision(player1.X, player2.X, player1.Width, player2.Width)
                $(".ptwo").removeClass("hero2Idleright");
                $(".ptwo").removeClass("hero2Idleleft");
                player2.Facing = "left";
                player2.moveLeft(".ptwo", player2);
                $(".ptwo").addClass(player2.Char + "Walk" + player2.Facing);
              }
            }
          }
        break;
        case 86://V
          if (!player1.moveDisabler)
          {
            if (!mapMove[67])
            {
              if(player1.X + player2.Width < windowObj.Right)
              {
                  game.playerCollision(player1.X, player2.X, player1.Width, player2.Width)
                  $(".pone").removeClass("hero1Idleright");
                  $(".pone").removeClass("hero1Idleleft");
                  player1.Facing = "right";
                  player1.moveRight(".pone", player1);
                  $(".pone").addClass(player1.Char + "Walk" + player1.Facing);
              }
            }
          }
        break;
        case 67://C
          if (!player1.moveDisabler)
          {
            if (!mapMove[86])
            {
              if(player1.X  > windowObj.Left)
              {
                  game.playerCollision(player1.X, player2.X, player1.Width, player2.Width)
                  $(".pone").removeClass("hero1Idleright");
                  $(".pone").removeClass("hero1Idleleft");
                  player1.Facing = "left";
                  player1.moveLeft(".pone", player1);
                  $(".pone").addClass(player1.Char + "Walk" + player1.Facing);
              }
            }
          }
        break;
      }//switch e.which
    }, 1000 / Game.fps);//setinterval
	}//if mapMove
	
});//keydown


$(document).keyup(function(e)
{
  e.stopPropagation();
  e.preventDefault();
  //console.log("keyup called");
  var code = e.which;
  if (mapMove[code] === true && interval[code])
  {
    clearInterval(interval[code]);
    interval[code] = null;
    mapMove[code] = false;
  }
});
$(".debug").click(function()
{
  game.stopGame();
});