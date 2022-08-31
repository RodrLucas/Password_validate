import { ResultProps } from "../types/results";

type passProps = string;

export class SequencesValidation {
  static execute(password: passProps, results: ResultProps) {
    let passArr = password.toLowerCase().split("");
    let sequences = 0;

    passArr.some((value, index) => {
      let currentIndex = value.charCodeAt(0);
      if (passArr[index + 1] === undefined) return;

      let nextValueIndex = passArr[index + 1].charCodeAt(0);
      if (currentIndex + 1 === nextValueIndex) sequences += 1;
    });
    
    if (sequences >= 2) {
      results.result = false;
      results.errors.push("Cannot contain more than 3 character sequences");
    }

    results.result = true;

    return results;
  }
}
