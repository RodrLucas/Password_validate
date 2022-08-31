import type { ResultProps } from "../types/results";
type passProps = string;

export class SpecialCharValidation {
  static execute(password: passProps, results: ResultProps) {
    const SPECIAL_CHAR = `!@#$%^&*()_+={};':"|,.<>?~`;
    let passArr: string[] = password.split("");
    let NumberSpecialChar = 0;

    passArr.some((password) => {
      if (SPECIAL_CHAR.includes(password)) NumberSpecialChar++;
    });

    if (NumberSpecialChar < 2) {
      results.result = false;
      results.errors.push("Must contain minimum of 2 special characters");
    }

    return results;
  }
}
