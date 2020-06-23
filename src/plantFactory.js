export { storeState };
export { changeState };

//how to store specific changes
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//state modifier function
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
}
//Functions in Function Factory
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);


// //Julia's elaborate Function Factory
// const feed = changeState("fertilizer");
// //feed(3)(plant);
// //feed(5)(tree);
// const addWater = changeState("water");
// //addWater(2)(plant);
// //addWater(200)(pool);
// const foliate = changeState("leaves");
// const growFruit = changeState("berries");
// const branchOut = changeState("branches")(1);
// //branchOut(plant);
// //branchOut(tree);
// const prune = changeState("branches")(-1);
// //prune(tree);
// const compost = changeState("fertilizer")(2);
// //compost(plant);
// const miracleGro = changeState("fertilizer")(5);

//storing state

// let plant = { branches: 1, berries: 0, leaves: 1, flowers: 0}






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


