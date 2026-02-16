$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "pink"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,600,150,50, "pink");
    createPlatform(1250,600,300,50,"pink");
    createPlatform(550,550,300,50,"pink");
    createPlatform(400,675,600,50,"pink");
    createPlatform(250,550,100,50,"pink");
    createPlatform(300,700,100,50,"pink");
    createPlatform(1000,700,100,50,"pink");
    createPlatform(1050,550,100,50,"pink");
    createPlatform(0,450,100,50,"pink");
    createPlatform(200,325,100,25,"pink");
    createPlatform(1300,450,100,50,"pink");
    createPlatform(1100,325,100,25,"pink");
    createPlatform(400,225,100,25,"pink");
    createPlatform(900,225,100,25,"pink");
    createPlatform(650,250,100,50,"pink");
    createPlatform(1100,100,100,25,"pink");
    createPlatform(200,100,100,25,"pink");
    //createPlatform(0,150,100,25,"pink");
    createPlatform(625,400,150,25,"pink");

    // TODO 3 - Create Collectables
    createCollectable("hellokc",10,550);


    
    // TODO 4 - Create Cannons
    createCannon("top",200,100);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
