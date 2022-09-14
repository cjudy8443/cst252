
let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "orange";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25;
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 25;

//ADD ADDITIONAL CODE HERE!
solarSystem.newPlanet(1);
let mars = solarSystem.planets[1];
mars.color = "red";
mars.planetRadius = 30;
mars.orbitRadius = 10;
mars.direction = "counterclockwise"

mars.newPlanet(1);
let marsMoon = mars.planets[0];
marsMoon.color = "green";
marsMoon.planetRadius = 7;
marsMoon.orbitRadius = 57;

solarSystem.newPlanet(1);
let pluto = solarSystem.planets[2];
pluto.color = "purple"
pluto.planetRadius = 90
pluto.orbitRadius = 0

pluto.newPlanet(1);
let plutoMoon = pluto.planets[0];
plutoMoon.color = "yellow";
plutoMoon.planetRadius = 7;
plutoMoon.orbitRadius = 100;
plutoMoon.direction = "counterclockwise"

//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
