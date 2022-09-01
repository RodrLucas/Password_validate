import type { passwordProps } from "../types/password";

export class LenghtValidation {
  static execute(password: passwordProps) {
    const PASS_MIN_LENGTH = 16;
    const PASS_MAX_LENGTH = 32;

    function length() {
      if (
        password.length < PASS_MIN_LENGTH ||
        password.length > PASS_MAX_LENGTH
      )
        return {
          error: "Password must contain 16-32 characters",
        };
      else return {error: ''};
    }

    return length();
  }
}
