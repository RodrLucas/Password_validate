import type { ResultProps } from "../types/results";
import { LenghtValidation } from "../utils/lengthValidation";
import { SequencesValidation } from "../utils/sequencesValidation";
import { SpecialCharValidation } from "../utils/specialCharValidation";
import { UpperLowerCaseValidation } from "../utils/upper&lowerCaseValidation";

export class Password {
  static validate(pass: string) {
    let results: ResultProps = {
      result: true,
      errors: [],
    };
    const validations = {
      length: LenghtValidation.execute(pass, results),
      sequences: SequencesValidation.execute(pass, results),
      specialChar: SpecialCharValidation.execute(pass, results),
      upperLower: UpperLowerCaseValidation.execute(pass, results),
    };

    validations.length;
    validations.sequences;
    validations.specialChar;
    validations.upperLower;

    return results
  }
}
