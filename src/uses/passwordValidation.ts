import type { ResultProps } from "../types/results";
import { LenghtValidation } from "../utils/lengthValidation";
import { SequencesValidation } from "../utils/sequencesValidation";
import { SpecialCharValidation } from "../utils/specialCharValidation";
import { UpperLowerCaseValidation } from "../utils/UpperLowerCaseValidation";

export class Password {
  static validate(password: string) {
    let results: ResultProps = {
      result: true,
      errors: [],
    };

    LenghtValidation.execute(password, results);
    SequencesValidation.execute(password, results);
    SpecialCharValidation.execute(password, results);
    UpperLowerCaseValidation.execute(password, results);

    return console.log(results);
  }
}
