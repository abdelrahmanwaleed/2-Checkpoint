let vecA = [1, -3, 6];
let vecB = [2, 5, 7];
let crossP = [];

let n = 3;

function dotProduct(vecA, vecB) {
  let P = 0;
  for (let i = 0; i < n; i++) P = P + vecA[i] * vecB[i];
  return P;
}

function crossProduct(vecA, vecB, crossP) {
  crossP[0] = vecA[1] * vecB[2] - vecA[2] * vecB[1];
  crossP[1] = vecA[2] * vecB[0] - vecA[0] * vecB[2];
  crossP[2] = vecA[0] * vecB[1] - vecA[1] * vecB[0];
}

console.log("Dot Product: ", dotProduct(vecA, vecB));
