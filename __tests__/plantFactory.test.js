import { storeState, changeState } from './../src/plantFactory';
import { redFood, blueFood, greenFood, yellowFood } from './../src/plantFactory';

describe("changeState", () => {

  const testPlant = {};
  
  beforeEach(() => {
    testPlant.soil = 0;
  });

  test("changeState changes state of plant as specified", () => {    
    expect(changeState("soil")(1)(testPlant)).toEqual({soil: 1});
  });

  test("redFood() changes state by decreases soil property by 2", () => {
    expect(redFood(testPlant)).toEqual({soil: -2});
  });

  test("blueFood() changes state by increasing soil property by 5", () => {
    expect(blueFood(testPlant)).toEqual({soil: 5});
  });

  test("greenFood() changes state by increasing soil property by 7", () => {
    expect(greenFood(testPlant)).toEqual({soil: 7});
  });

  test("yellowFood() changes state by decreases soil property by 1", () => {
    expect(yellowFood(testPlant)).toEqual({soil: -1});
  });
});

