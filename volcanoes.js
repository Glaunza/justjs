let volcanoes = require('./volcanoes.json');
// eruptedIn70s();
// mostDeaths();
volcanicExplosivityIndex();
// deathToll();


// function eruptedIn70s(){
//   for (const vol of volcanoes) {
//     if (vol.Year == 1970)
//       console.table(vol);
//   }
// }
// function mostDeaths(){
//   for (const vol of volcanoes) {
//     if (vol.DEATHS > 1 )
//       console.table(vol);
//   }
// }
function volcanicExplosivityIndex(){
  for (const vol of volcanoes)
  if (vol.VEI >= 2)
    console.log(vol);
}

function eruptedOver1000Ft(){
  let count=0;
  for (const vol of volcanoes) {
    if (vol.Elevation >= 1000 )
      count++;
  }
  return count;
}