import type { passwordProps } from "../types/password";

export class SpecialCharValidation {
  static execute(password: passwordProps) {
    const SPECIAL_CHAR = `!@#$%^&*()_+={};':"|,.<>?~`;
    const passArr: string[] = password.split("");

    const numberOfSpecialChar = passArr.reduce((acc, value) => {
      if(SPECIAL_CHAR.includes(value)) acc++
      return acc;
    }, 0);

    if (!(numberOfSpecialChar < 2)) return {error: ""}
    else return {error: "Must contain minimum of 2 special characters"}
  }
}
