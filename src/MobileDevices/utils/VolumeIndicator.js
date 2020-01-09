function VolumeIndicator (volumes) {
  // find max number in the volumes array
  const max = Math.max.apply(null, volumes);
  // divide all numbers to max volume x 100
  const VolPercentageArray = volumes.map((vol, idx) => {
    return Math.round(((vol / max) * 100 * 1e2) / 1e2);
  });
  // return the new volume array
  return VolPercentageArray;
}

console.log(
  VolumeIndicator([
    25.85,
    118.01,
    53.77,
    122.06,
    114.49,
    17.14,
    10.4,
    15.0,
    138.78,
  ]),
);
