const stringToNumbersArray = (
  input: string
): { numbers: number[] | null; error: string | null } => {
  const values = input.split(",").map((value) => value.trim());
  const numbers = values.map((val) => Number(val));

  const isValidNumber = (num: number) => !isNaN(num);

  if (!numbers.every(isValidNumber)) {
    return { numbers: null, error: "It si not a valid array" };
  }
  return { numbers, error: null };
};

export default stringToNumbersArray;
