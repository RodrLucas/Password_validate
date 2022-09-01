import type { passwordProps } from "../types/password";

export class UpperLowerCaseValidation {
  static execute(password: passwordProps) {
    const passArr = password.split("");
    const isCharacterALetter = passArr.filter((value) => value.toLowerCase() != value.toUpperCase());

    function isUpperAndLower() {
      const isUpper = isCharacterALetter.some(
        (value) => value.toUpperCase() === value
      );
      const isLower = isCharacterALetter.some(
        (value) => value.toLowerCase() === value
      );
      
      return isUpper && isLower;
    }

    if (!isUpperAndLower()) {
      return {error: "Password must contain Lower and Upper case letters"}
    }else return {error: ""}
  }
}
