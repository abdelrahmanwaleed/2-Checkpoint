let vecA = [1, -3, 6];
let vecB = [2, 5, 7];
let crossP = [];

let n = 3;

function dotProduct(vecA, vecB) {
  let P = 0;
  for (let i = 0; i < n; i++) P = P + vecA[i] * vecB[i];
  return P;
}

console.log("Dot Product: ", dotProduct(vecA, vecB));
