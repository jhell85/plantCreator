import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, changeState } from './plantFactory.js';


// // This function stores our state.

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }



// // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// We create two functions using our function factory. We could easily create many more.

const redFood = changeState("soil")(-2);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(7);
const yellowFood = changeState("soil")(-1);
const stateChanger = storeState();

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feedBlue').click(function() {
    const myFedPlant = stateChanger(blueFood);
    $('#soil-value').text(myFedPlant.soil);
  });
  $('#feedGreen').click(function() {
    const myFedPlant = stateChanger(greenFood);
    $('#soil-value').text(myFedPlant.soil);
  });
  $('#feedYellow').click(function() {
    const myFedPlant = stateChanger(yellowFood);
    $('#soil-value').text(myFedPlant.soil);
  });
  $('#feedRed').click(function() {
    const myFedPlant = stateChanger(redFood);
    $('#soil-value').text(myFedPlant.soil);
  });
});