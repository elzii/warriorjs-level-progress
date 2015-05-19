var _health = undefined;

class Player {

  playTurn(warrior) {    

    // If we're next to an enemy
    if ( warrior.feel().isEnemy() ) {
      console.log('ATTACK' )
      _health = warrior.health()
      warrior.attack()
    } else {
      // If we're taking damage, there's a ranged attacker, walk
      if ( _health > warrior.health() ) {
        console.log( 'TAKING DAMAGE, WALK' )
        warrior.walk()
      } 
      // If we're at a stable health, walk
      else if ( warrior.health() > 12 ) {
        console.log( 'WALK' )
        warrior.walk()
      } 
      // Otherwise rest up
      else {
        console.log( 'REST' )
        warrior.rest()
      }
    }
  }
}


global.Player = Player;
