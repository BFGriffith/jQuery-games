/* StarWars-RPG 1.0 */
(function(window) {
  'use strict';

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



})(window);//END-IIFE
