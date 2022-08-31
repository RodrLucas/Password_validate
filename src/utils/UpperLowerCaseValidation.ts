import { ResultProps } from "../types/results";
type passProps = string;

export class UpperLowerCaseValidation {
  static execute(password: passProps, results: ResultProps) {
    const SPECIAL_CHAR = `!@#$%^&*()_+={};':"|,.<>?~`;
    const passArr = password.split("");
    let upper = false;
    let lower = false;
    
    passArr.some((value) => {
      if (value.toUpperCase() === value && !SPECIAL_CHAR.includes(value))
        upper = true;
      if (value.toLowerCase() === value && !SPECIAL_CHAR.includes(value))
        lower = true;
    });

    if (!(upper && lower)) {
      results.result = false;
      results.errors.push("Must have uppercase and lowercase letters");
    }

    return results;
  }
}
