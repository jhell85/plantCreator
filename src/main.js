import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { storeState, changeState, blueFood, redFood, greenFood, yellowFood } from './plantFactory.js';


// We create two functions using our function factory. We could easily create many more.



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