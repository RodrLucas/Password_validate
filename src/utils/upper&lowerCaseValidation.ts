import { ResultProps } from "../types/results";
type passProps = string;

export class UpperLowerCaseValidation {
  static execute(pass: passProps, results: ResultProps) {
    const SPECIAL_CHAR = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    const passArr = pass.split("");
    let upper = false;
    let lower = false;

    const validate = {
      LowerCase() {
        passArr.some((value) => {
          if (value.toLowerCase() === value && !SPECIAL_CHAR.includes(value))
            lower = true;
        });
      },
      UpperCase() {
        passArr.some((value) => {
          if (value.toUpperCase() === value && !SPECIAL_CHAR.includes(value))
            upper = true;
        });
      },
      containUpperAndLower() {
        if (!(upper && lower)) {
          results.result = false;
          results.errors.push("Must have uppercase and lowercase letters");
        }
      },
    };

    const validateLowerCase = validate["LowerCase"];
    const validateUpperCase = validate["UpperCase"];
    const containUpperAndLower = validate["containUpperAndLower"];

    validateLowerCase();
    validateUpperCase();
    containUpperAndLower();

    return results;
  }
}
