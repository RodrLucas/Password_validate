import { ResultProps } from "../types/results";

type passProps = string;

export class SequencesValidation {
  static execute(pass: passProps, results: ResultProps) {
    let passArr = pass.toLowerCase().split("");
    let sequences = 0;

    const validate = {
      sequencesValidation() {
        passArr.some((value, index) => {
          let currentIndex = value.charCodeAt(0);
          if (passArr[index + 1] === undefined) return;

          let nextValueIndex = passArr[index + 1].charCodeAt(0);
          if (currentIndex + 1 === nextValueIndex) sequences += 1;
        });
      },
      quantitySequences() {
        if (sequences >= 2) {
          results.result = false;
          results.errors.push("Cannot contain more than 3 character sequences");
        }

        results.result = true;
      },
    };
    const quantityValidation = validate.quantitySequences;
    const sequencesValidation = validate.sequencesValidation;

    quantityValidation();
    sequencesValidation();

    return results;
  }
}
