/*
function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  */

  function receivesAFunction(callback) {
        callback()
  }

  function returnsANamedFunction() {
      return function newFunc() {}
  }

  function returnsAnAnonymousFunction() {
      return function (){}
  }