const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
  return a - b;

});
console.log(points);
console.log("Max element: " + Math.max.apply(null, points));
console.log("Min element: " + Math.min.apply(null, points));
