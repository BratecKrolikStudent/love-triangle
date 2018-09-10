/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = new Set();

  for (let spichonee = 0; spichonee < preferences.length; spichonee++) {
    let spichonee1 = preferences[spichonee];
    let spichonee2 = preferences[spichonee1 - 1];
    let spichonee3 = preferences[spichonee2 - 1];

    if (spichonee + 1 === spichonee3 && spichonee3 !== spichonee2) {
      triangles.add([spichonee1, spichonee2, spichonee3].sort().join(''));
    };
  }

  return triangles.size;
};
