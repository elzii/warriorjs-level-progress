class Player {
  playTurn(warrior) {
    
    if ( warrior.feel().isEnemy() ) {
      warrior.attack()
    } else {
      if ( warrior.health() > 10 ) {
        warrior.walk()
      } else {
        warrior.rest()
      }
    }
  

  }
}

global.Player = Player;
