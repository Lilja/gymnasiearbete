setInterval('game.update();', 60000);

	$(".pone").css("left", player1.X);
    $(".ptwo").css("left", player2.X);
    player2.Width = $(".ptwo").width();
    player2.Height = $(".ptwo").height();
   	player2.Left = $(".ptwo").offset().left;
   	player2.Right = $(".ptwo").offset().left + player2.Width;

   	player1.Width = $(".pone").width();
    player1.Height = $(".pone").height();
   	player1.Left = $(".pone").offset().left;
   	player1.Right = $(".pone").offset().left + player2.Width;

   	var map = {37: false, 39, false, 68: false, 65: false};
   	var game = new Game();
        var windowObj = new Window();
        var player1 = new Player("a",2);
        var player2 = new Player("player2",1);
        game.initialize();
        console.log(windowObj.Left);
        console.log(windowObj.Right);
        console.log(player2.X);
			$(document).keydown(function(e)
			{
				map[e.which] = true;
				switch(e.which)
				{
            case 39://Högerpil
               if(player2.X < windowObj.Right)
               {
	               player2.moveRight(".ptwo", player2);
               }
               break;
            case 37://vänsterpil
                if(player2.X + player2.Width > windowObj.Left)
                {
	               player2.moveLeft(".ptwo", player2);
                }
               break;
            case 68://D
                player1.moveRight(".pone", player1);
                break;
            case 65://A
                player1.moveLeft(".pone", player1);
                break;
        }//switch
			});//keydown
			$(document).keyup(function(e)
			{
				map[e.which] = false;
			});



      switch(e.which)
    {
        case 39://Högerpil
           if(player2.X + player2.Width < windowObj.Right)
           {
           player2.moveRight(".ptwo", player2);
           }
           break;
        case 37://vänsterpil
            if(player2.X  > windowObj.Left )
            {
           player2.moveLeft(".ptwo", player2);
            }
           break;
        case 68://D
            if(player1.X + player2.Width < windowObj.Right)
            {
                player1.moveRight(".pone", player1);
            }
            break;
        case 65://A
            if(player1.X  > windowObj.Left)
            {
                player1.moveLeft(".pone", player1);
            }
            break;
      }