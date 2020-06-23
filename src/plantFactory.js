//state modifier function
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}
//Function Factory
const feed = changeState("fertilizer");
//feed(3)(plant);
//feed(5)(tree);
const addWater = changeState("water");
//addWater(2)(plant);
//addWater(200)(pool);
const foliate = changeState("leaves");
const growFruit = changeState("berries");
const branchOut = changeState("branches")(1);
//branchOut(plant);
//branchOut(tree);
const prune = changeState("branches")(-1);
//prune(tree);
const compost = changeState("fertilizer")(2);
//compost(plant);
const miracleGro = changeState("fertilizer")(5);

//storing state





// let plant = { soilQuality: 0, water: 0, fertilizer: 0, flowers: 0 };
// let plant2 = { soilQuality: 0, water: 0, berries: 0, aphids: 0 };
// changePlantState(plant2, fertilizer)






// const canHydrate = (plant) => {
//   const obj = {
//     water: function(waterVolume) {
//       return `The ${plant} needs ${waterVolume}.`
//     }
//   }
//   return obj;
// }


