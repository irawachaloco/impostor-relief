// Implementar posiblemente con el patrón Try | Either
// type TrySuccess<T> = {
//   value: T;
//   tryType: "Success"
// };

// type TryError = {
//   msg: string;
//   tryType: "Error"
// };

// type Try<T> = TrySuccess<T> | TryError;

const stringToNumbersArray = (
  input: string
): { numbers: number[] | null; error: string | null } => {
  const values = input.split(",").map((value) => value.trim());
  const numbers = values.map((val) => Number(val));

  const isValidNumber = (num: number) => !isNaN(num);

  if (!numbers.every(isValidNumber)) {
    // return { msg: "It si not a valid array" };
    return { numbers: null, error: "It si not a valid array" };
  }
  //   return { value: numbers };
  return { numbers, error: null };
};

export default stringToNumbersArray;
