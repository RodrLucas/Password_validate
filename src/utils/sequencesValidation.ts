import type { passwordProps } from "../types/password";

export class SequencesValidation {
  static execute(password: passwordProps) {
    const passwordArr = password.toLowerCase().split("");

    const result = passwordArr.reduce((acc, value, index) => {
      const currentIndex = value.charCodeAt(0);
      if (passwordArr[index + 1] === undefined) return acc;

      const nextValueIndex = passwordArr[index + 1].charCodeAt(0);
      if (currentIndex + 1 === nextValueIndex && currentIndex + 2 === nextValueIndex + 1) acc += 1;

      return acc;
    }, 0);

    if (result < 2) return { error: "" }; //Analisar para não precisar retornar um erro desestruturado
    else return { error: "Cannot contain more than 3 character sequences" };
  }
}
