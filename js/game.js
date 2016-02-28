function Game()
{
this.fps = 40;

this.disabler = false;

this.poneDisabler;
this.ptwoDisabler;

this.gameStoped = false;
this.WinnerObject;
this.construct = function()
{
  this.poneDisabler = false;
  this.ptwoDisabler = false;
}

}
Game.prototype.initialize = function()
{
    player2.Width = $(".ptwo").width();
    player2.Height = $(".ptwo").height();

    player1.Width = $(".pone").width();
    player1.Height = $(".pone").height();

   	player2.Left = $(".ptwo").position().left;
   	player2.Right = $(".ptwo").position().left + player2.Width;

    player1.Left = $(".pone").position().left;
    player1.Right = $(".pone").position().left + player1.Width;

   	player2.X = windowObj.Right - 200;
   	player1.X = $(".pone").width();

    $(".pone").addClass("hero1Idle"+ player1.Facing);
    $(".ptwo").addClass("hero2Idle"+ player2.Facing);

    var widthA = $(".pone > .healthBar").width();
    var widthB = $(".pone > .healthBar > .bar").width();

    $(".ptwo > .healthBar").width(widthA);
    $(".ptwo > .healthBar > .bar").width(widthB);
}
Game.prototype.update = function(playerP)
{
  /*
    $(".p1 > .p1x").text("X: " + player1.X);
    $(".p1 > .p1l").text("Left: " + player1.Left);
    $(".p1 > .p1r").text("Right: " + player1.Right);
    $(".p1 > .p1f").text("Facing: " + player1.Facing);
    $(".p1 > .p1a").text("isAttacking: " + player1.isAttacking);
    $(".p1 > .p1hh").text("Health: " + player1.Health);
    $(".p2hea").text(player2.Health);
    $(".p1 > .p1d").text("isDodging: " + player1.isDodging);


  	$(".p2 > .p2x").text("X: " + player2.X);
    $(".p2 > .p2l").text("Left: " + player2.Left);
    $(".p2 > .p2r").text("Right: " + player2.Right);
    $(".p2 > .p2f").text("Facing: " + player2.Facing);
    $(".p2 > .p2a").text("isAttacking: " + player2.isAttacking);
    $(".p2 > .p2hh").text("Health: " + player2.Health);
    $(".p1hea").text(player1.Health);
    $(".p2 > .p2d").text("isDodging: " + player2.isDodging);


    $(".wLeft").text("Left: "+ windowObj.Left);
    $(".wRight").text("Right: "+ windowObj.Right);
  */
    $(".pone > .healthBar > .bar").css({
      'width': player1.Health + "px"
    });
    $(".ptwo > .healthBar > .bar").css({
      'width': player2.Health + "px"
    });

  if (player1.moveDisabler === true){}
  else if(player1.moveDisabler === false)
  {
    $(".pone").css("left", player1.X);
  }

  if (player2.moveDisabler === true){}
  else if(player2.moveDisabler === false)
  {
    $(".ptwo").css("left", player2.X);
  }
  
  if (player1.isAttacking === true)
  {
    $(".pone > p").css("backgroundColor", "red");
  }
  if (player2.isAttacking === true)
  {
    $(".ptwo > p").css("backgroundColor", "red");
  }
  if (player1.isAttacking === false)
  {
    $(".pone > p").css("backgroundColor", "green");
  }
  if (player2.isAttacking === false)
  {
    $(".ptwo > p").css("backgroundColor", "green");
  }
	/*<div class="p1">
            <h1>Player1</h1>
            <span class="p1x"></span>
            <span class="p1y"></span>
            <span class="p1c"></span>
            <span class="p1hh"></span>
            <span class="p1he"></span>
            <span class="p1wi"></span>
            <span class="p1j"></span>
            <span class="p1a"></span>
        </div>*/
  if (player1.Health <= 0 || player2.Health <= 0)
  {
    this.WinnerObject = game.WhoWon();
    game.stopGame();
    
  }
}//update

Game.prototype.draw = function()
{

}
Game.prototype.WhoWon = function()
{
  if (player1.Health > player2.Health)
  {//pone won!
    player1.TimesWon++;
    return{
            "vinnare": "spelare ett",
            "spelare": player1,
            "class": ".wPone"
          };
  }
  else if (player2.Health > player1.Health)
  {//ptwo won!
    player2.TimesWon++;
    return{
            "vinnare": "spelare två",
            "spelare": player2,
            "class": ".wPtwo"
          };
  }
}
Game.prototype.AfterGame = function(winner, cssClass, playerobject)
{
  $(".winningScreen > span.winner").text(" " + winner);
  $(cssClass).html(playerobject.TimesWon);

  $(".winningScreen").animate({
    "top": "40%",
    easing: "swing"
  },1000, function(){
  });
}
Game.prototype.run = function()
{
	game.draw();
	game.update();
}
Game.prototype.stopGame = function()
{
	clearInterval(t);
	console.log("game stoped");
  this.disabler = true;
  this.gameStoped = true;
  game.AfterGame(game.WinnerObject["vinnare"], game.WinnerObject["class"], game.WinnerObject["spelare"]);
}
Game.prototype.ResetGame = function()
{
  game.WinnerObject = undefined;

  player2.X = windowObj.Right - 200;
  player1.X = $(".pone").width();

  player1.Health = 100;
  player2.Health = 100;

  game.disabler = false;
  game.gameStoped = false;

  t = setInterval(game.run, 1000/this.fps);
}

Game.prototype.playerCollision = function(p1x, p2x, p1h, p2h)
{
  
  if (!((p1x + p1h) < (p2x) ||(p1x > (p2x + p2h))))
  {
    $(".ptwo > .healthBar").css(
    {
      "position": "absolute",
      "top": "-15px",
      "left": (($(".ptwo").width() - $(".ptwo > .healthBar").width())/2)
    });
  }
  else 
  {
    $(".ptwo > .healthBar").css(
    {
      "position": "static"
    });
  }
  return !((p1x + p1h) < (p2x) ||(p1x > (p2x + p2h)));
  
}