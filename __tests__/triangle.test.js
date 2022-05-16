import Triangle from "../src/triangle";

//test 1
describe('Triangle', () => {
  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});
// test 2
test('should correctly determine whether three lengths are not a triangle', () => {
  const notTriangle = new Triangle(3,9,22);
  expect(notTriangle.checkType()).toEqual("not a triangle");
});
// test 3
test('should correctly determine whether three lengths make a scalene triangle', () => {
  const scalTriangle = new Triangle(4,5,7)
  expect(scalTriangle.checkType()).toEqual("scalene triangle");
});
// test 4
test('should correctly determine whether three lengths make an isosceles triangle', () => {
  const isocTriangle = new Triangle(5,5,7)
  expect(isocTriangle.checkType()).toEqual("isosceles triangle");
});