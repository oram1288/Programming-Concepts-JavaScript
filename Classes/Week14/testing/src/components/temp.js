const addPeriod = (s) => {
  return s + ".";
};

const actual = addPeriod("Keyin");
const expected = "Keyin"; // add a "." fro it to be a pass

try {
  if (actual !== expected) {
    throw new Error("Test failed");
  }
} catch (s) {
  console.log(s);
}
