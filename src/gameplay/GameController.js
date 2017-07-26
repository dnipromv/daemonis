function GameController(game, current_preview, next_preview, score_indicator, speed_indicator, game_area){

  // public methods
  this.startGame = function(){};
  
  // private variables
  let tetroqueue = []; // queue of tetrominoes. Element at 0 is current tetrominoe, 1 - next, ...
  
  // private methods
  function getRandomTetrodata(game){
    var tetrobase = game.cache.getJSON('tetrominoes'); // list of tetrominoes from 'data/tetrominoes.json'
    const random_index = Math.floor(Math.random() * tetrobase.length);
    return tetrobase[random_index];
  } 
  
  this.startGame = function(){
    tetroqueue = [ getRandomTetrodata(game), getRandomTetrodata(game) ];
    current_preview.setPreview(game, tetroqueue[0]);
    next_preview.setPreview(game, tetroqueue[1]);
  }
}