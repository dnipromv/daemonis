var finishState = (function () {
  
  function goToMainScene(){
    this.game.state.start("Menu");
  }

  return {
    init: function (score) {
      this.score = score
    },
    
    create: function () {
      // init label for displaying final score
      var label_style = { font: "72px endorregular", 
                        fill: "#86322e", 
                        boundsAlignV: "middle",
                        align: "center" };
      var label = this.game.add.text( this.game.width * 0.5, this.game.height * 0.5, 
                                      "Final score: " + this.score, label_style);
      label.anchor.set(0.5);
      
      // start single timer to fire state change
      this.game.time.events.add(Phaser.Timer.SECOND * 3, goToMainScene, this);
    }
  };
}());
