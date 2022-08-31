import type { ResultProps } from "../types/results";
type passProps = string;

export class LenghtValidation {
  static execute(password: passProps, results: ResultProps) {
    const PASS_MIN_LENGTH = 16;
    const PASS_MAX_LENGTH = 32;

    if (password.length < PASS_MIN_LENGTH || password.length > PASS_MAX_LENGTH) {
      results.result = false;
      results.errors.push("Password must contain 16-32 characters");
    }

    return results;
  }
}
