import type { ResultProps } from "../types/results";
type passProps = string;

export class LenghtValidation {
  static execute(pass: passProps, results: ResultProps) {
    const PASS_MIN_LENGTH = 16;
    const PASS_MAX_LENGTH = 32;

    const validate = {
      passLength() {
        if (pass.length < PASS_MIN_LENGTH || pass.length > PASS_MAX_LENGTH) {
          results.result = false;
          results.errors.push("Password must contain 16-32 characters");
        }
      },
    };

    const lenghtValidation = validate.passLength;
    lenghtValidation();

    return results;
  }
}
