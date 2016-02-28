$(document).keydown(function(e)
{
if(!game.disabler)
{
  var code = e.which;
  if (mapAttack[code] === false)
    {
      //console.log("mapAttack called");
      mapAttack[code] = true;
      switch(code)
      {
        case 81://q
          if(mapAttack[87] === false && mapAttack[69] === false)
          {
            player1.isAttacking = true;
            if(typeof timeSinceLastAttackP1 === "undefined" || (timeSinceLastAttackP1 + 1500 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player1.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                  if(!player2.isDodging)
                  {
                    player1.Kick(player1, player2, ".ptwo", game.p2Disabler);
                    player2.Health = player2.Health - 9 - player1.Amplifier;
                    player1.Amplifier = 1;
                    timeSinceLastAttackP1 = Date.now();
                  }//is dodging
                }//if player collide
              }//player isattacking
            }//if typeoff
            else 
            {
              attackAllowed[code] = false;
            }
          }//map attack W E
        break;
        case 87://w
          if(mapAttack[81] === false && mapAttack[69] === false)
          {
            player1.isAttacking = true;
            if(typeof timeSinceLastAttackP1 === "undefined" || (timeSinceLastAttackP1 + 1000 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player1.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                  if(!player2.isDodging)
                  {
                    timeSinceLastAttackP1 = Date.now();
                    player2.Health = player2.Health - 7 - player1.Amplifier;
                    player1.Amplifier = 1;
                  }//is dodging
                }//if player collide
              }//player isattacking
            }//if typeoff
            else
            {
              attackAllowed[code] = false;
            }
          }//map attack Q E
        break;
        case 69://e
          if(mapAttack[81] === false && mapAttack[87] === false)
          {
            player1.isAttacking = true;
            if(typeof timeSinceLastAttackP1 === "undefined" || (timeSinceLastAttackP1 + 5000 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player1.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                 if(!player2.isDodging)
                  {
                    player1.Amplifier = 5;
                    timeSinceLastAttackP1 = Date.now();
                  }//is dodging
                }//if player collide
              }//player isattacking
            }//if typeoff
            else
            {
              attackAllowed[code] = false;
            }
          }//map attack Q W
        break;
        case 103://num7
          if(mapAttack[104] === false && mapAttack[105] === false)
          {
            player2.isAttacking = true;
            if(typeof timeSinceLastAttackP2 === "undefined" || (timeSinceLastAttackP2 + 500 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player2.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                  if (!player2.isDodging)
                  {
                    player1.Health = player1.Health - 6 - player2.Amplifier;
                    timeSinceLastAttackP2 = Date.now();
                  }
                }//if player collide
              }//player isattacking
            }//if typeoff
            else 
            {
              attackAllowed[code] = true;
            }
          }//map attack Q W
        break;
        case 104://num8
          if(mapAttack[103] === false && mapAttack[105] === false)
          {
            player2.isAttacking = true;
            if(typeof timeSinceLastAttackP2 === "undefined" || (timeSinceLastAttackP2 + 500 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player2.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                  if (!player2.isDodging)
                  {
                    player1.Health = player1.Health - 5 - player2.Amplifier;
                    timeSinceLastAttackP2 = Date.now();
                    
                  }
                }//if player collide
              }//player isattacking
            }//if typeoff
            else 
            {
              attackAllowed[code] = true;
            }
          }//map attack Q Ws
        break;
        case 105://num9
          if(mapAttack[103] === false && mapAttack[104] === false)
          {
            player2.isAttacking = true;
            if(typeof timeSinceLastAttackP2 === "undefined" || (timeSinceLastAttackP2 + 500 < Date.now()))
            {
              attackAllowed[code] = true;
              if(player2.isAttacking === true)
              {
                if(game.playerCollision(player1.X, player2.X, player1.Width, player2.Width))
                {//collision!
                  if (!player2.isDodging)
                  {
                    player1.Health = player1.Health - 8 - player2.Amplifier;
                    timeSinceLastAttackP2 = Date.now();
                    
                  }
                }//if player collide
              }//player isattacking
            }//if typeoff
            else 
            {
              attackAllowed[code] = true;
            }
          }//map attack Q Ws
        break;

      }//switch code
    }//if mapattack code
}//disabler
});//keydown
$(document).keyup(function(e)
{
  e.preventDefault();
  e.stopPropagation();
if (!game.disabler)
{
  var code = e.which;
  if(mapAttack[code] === true)
  {
    switch(code)
    {
      case 81://q
      if(!mapAttack[87] && !mapAttack[69])
      {
        player1.isAttacking = false;
      }
        mapAttack[code] = false;
      break;

      case 87://w
      if(!mapAttack[81] && !mapAttack[69])
      {
        player1.isAttacking = false;
      }
        mapAttack[code] = false;
      break;

      case 69://e
      if(!mapAttack[81] && !mapAttack[87])
      {
        player1.isAttacking = false;
      }
        mapAttack[code] = false;      
      break;

      case 103://num7
        player2.isAttacking = false;
        mapAttack[code] = false;
      break;

      case 104://num8
        player2.isAttacking = false;
        mapAttack[code] = false;
      break;

      case 105://num9
        player2.isAttacking = false;
        mapAttack[code] = false;
      break;
    }//switch code
  }
}
});//keydown