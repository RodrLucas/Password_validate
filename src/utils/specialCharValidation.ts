import type { ResultProps } from "../types/results";
type passProps = string;

export class SpecialCharValidation {
  static execute(pass: passProps, results: ResultProps) {
    const SPECIAL_CHAR = `!@#$%^&*()_+={};':"|,.<>?~`;
    let passArr: string[] = pass.split("");
    let NumberSpecialChar = 0;

    const validate = {
      includesChar: () => {
        passArr.some((pass) => {
          if (SPECIAL_CHAR.includes(pass)) NumberSpecialChar++;
        });
      },
    };

    const includesChar = validate["includesChar"];
    includesChar();

    if (NumberSpecialChar < 2) {
      results.result = false;
      results.errors.push("Must contain minimum of 2 special characters");
    }

    return results;
  }
}
