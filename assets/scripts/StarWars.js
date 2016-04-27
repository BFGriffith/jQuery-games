/* StarWars-RPG 1.0 */
/* "MVP" progress so far as of homework deadline */
var StarWarsRPG = {
  gameStage: "initial",
  characterSelected: "",
  characterObject: "",
  opponentSelected: "",
  opponentObject: "",
  opponentsRemain: 3
};

var LukeSkywalker = {
  health: 100,
  attack: 7,
  counterattack: 25,
  healthUpdate: function(attackDamage) {
    this.health -= attackDamage;
    $("#LukeSkywalkerHP").text(this.health);
  },
  attackUpdate: function() {
    this.attack *= 2;
  }
};

var QuiGonJinn = {
  health: 150,
  attack: 10,
  counterattack: 30,
  healthUpdate: function(attackDamage) {
    this.health -= attackDamage;
    $("#QuiGonJinnHP").text(this.health);
  },
  attackUpdate: function() {
    this.attack *= 2;
  }
};

var KyloRen = {
  health: 125,
  attack: 12,
  counterattack: 15,
  healthUpdate: function(attackDamage) {
    this.health -= attackDamage;
    $("#KyloRenHP").text(this.health);
  },
  attackUpdate: function() {
    this.attack *= 2;
  }
};

var DarthVader = {
  health: 180,
  attack: 6,
  counterattack: 30,
  healthUpdate: function(attackDamage) {
    this.health -= attackDamage;
    $("#DarthVaderHP").text(this.health);
  },
  attackUpdate: function() {
    this.attack *= 2;
  }
};

var LukeSkywalkerDiv = $("#LukeSkywalker");
var QuiGonJinnDiv = $("#QuiGonJinn");
var KyloRenDiv = $("#KyloRen");
var DarthVaderDiv = $("#DarthVader");

//on click (character-selection)
$(".character").on("click", function() {
  if (StarWarsRPG.gameStage == "initial") {

    StarWarsRPG.characterSelected = $(this).attr("id");
    $("#" + StarWarsRPG.characterSelected).remove();
    $("#prompts").text("Choose an opponent!");

    console.log(StarWarsRPG.characterSelected);

    if (StarWarsRPG.characterSelected == "LukeSkywalker") {
      StarWarsRPG.characterObject = LukeSkywalker;
      $(".playerAvatar").append(LukeSkywalkerDiv);
      $("#LukeSkywalker").css("position", "relative");
      $("#LukeSkywalker").html('<p>Attacking Character<b>&#11022;</b></p> <p id="LukeSkywalkerHP">150</p> <img src="assets/images/JediMasterLukeSkywalker.png">');
    }

    if (StarWarsRPG.characterSelected == "QuiGonJinn") {
      StarWarsRPG.characterObject = QuiGonJinn;
      $(".playerAvatar").append(QuiGonJinnDiv);
      $("#QuiGonJinn").css("position", "relative");
      $("#QuiGonJinn").html('<p>Attacking Character<b>&#11022;</b></p> <p id="QuiGonJinnHP">150</p> <img src="assets/images/Qui-Gon-Jinn_hasso.png">');
    }

    if (StarWarsRPG.characterSelected == "KyloRen") {
      StarWarsRPG.characterObject = KyloRen;
      $(".playerAvatar").append(KyloRenDiv);
      $("#KyloRen").css("position", "relative");
      $("#KyloRen").html('<p>Attacking Character<b>&#11022;</b></p> <p id="KyloRenHP">175</p> <img src="assets/images/KyloRen.png">');
    }

    if (StarWarsRPG.characterSelected == "DarthVader") {
      StarWarsRPG.characterObject = DarthVader;
      $(".playerAvatar").append(DarthVaderDiv);
      $("#DarthVader").css("position", "relative");
      $("#DarthVader").html('<p>Attacking Character<b>&#11022;</b></p> <p id="DarthVaderHP">125</p> <img src="assets/images/DarthVader_attack.png">');
    }
    //progresses game to opponent-selection gameStage
    StarWarsRPG.gameStage = "opponents";
  } else if (StarWarsRPG.gameStage == "opponents") {
    StarWarsRPG.opponentSelected = $(this).attr("id");
    $("#" + StarWarsRPG.opponentSelected).remove();
    $("#prompts").text("It is your destiny to confront your opponent: attack!");
    console.log(StarWarsRPG.opponentSelected);

    if (StarWarsRPG.opponentSelected == "LukeSkywalker") {
      StarWarsRPG.opponentObject = LukeSkywalker;
      $(".defendingOpponents").append(LukeSkywalkerDiv);
      $("#LukeSkywalker").css("position", "relative");
      $("#LukeSkywalker").html('<p id="LukeSkywalkerHP">100</p> <img src="assets/images/JediMasterLukeSkywalker.png">');
    }

    if (StarWarsRPG.opponentSelected == "QuiGonJinn") {
      StarWarsRPG.opponentObject = QuiGonJinn;
      $(".defendingOpponents").append(QuiGonJinnDiv);
      $("#QuiGonJinn").css("position", "relative");
      $("#QuiGonJinn").html('<p id="QuiGonJinnHP">150</p> <img src="assets/images/Qui-Gon-Jinn_hasso.png">');
    }

    if (StarWarsRPG.opponentSelected == "KyloRen") {
      StarWarsRPG.opponentObject = KyloRen;
      $(".defendingOpponents").append(KyloRenDiv);
      $("#KyloRen").css("position", "relative");
      $("#KyloRen").html('<p id="KyloRenHP">125</p> <img src="assets/images/KyloRen.png">');
    }

    if (StarWarsRPG.opponentSelected == "DarthVader") {
      StarWarsRPG.opponentObject = DarthVader;
      $(".defendingOpponents").append(DarthVaderDiv);
      $("#DarthVader").css("position", "relative");
      $("#DarthVader").html('<p id="DarthVaderHP">175</p> <img src="assets/images/DarthVader_attack.png">');
    }
    //move on to "fight" gameStage
    StarWarsRPG.gameStage = "fight";
  }
  console.log(StarWarsRPG.gameStage);
}); //END opponent-selection

$(".attackButton").on("click", function() {
  if (StarWarsRPG.gameStage == "fight") {
    StarWarsRPG.opponentObject.healthUpdate(StarWarsRPG.characterObject.attack);
    StarWarsRPG.characterObject.attackUpdate();

    if ((StarWarsRPG.opponentObject.health <= 0) && (StarWarsRPG.opponentsRemain == 0)) {
      $("#prompts").text("The force is strong with you; you Win!");
      $("#" + StarWarsRPG.opponentSelected).remove();
      StarWarsRPG.gameStage = "gameOver";
    } else if ((StarWarsRPG.opponentObject.health <= 0) && (StarWarsRPG.opponentsRemain >= 1)) {
      $("#prompts").text("Choose an opponent!");
      $("#" + StarWarsRPG.opponentSelected).remove();
      StarWarsRPG.gameStage = "opponents";
      StarWarsRPG.opponentsRemain--;
    }

    if (StarWarsRPG.gameStage == "fight") {
      StarWarsRPG.characterObject.healthUpdate(StarWarsRPG.opponentObject.counterattack);

      if (StarWarsRPG.characterObject.health <= 0) {
        $("#prompts").text("Forever will this defeat dominate your destiny!");
        StarWarsRPG.gameStage = "gameOver";
      }
    }
  }

}); //END .attackButton
