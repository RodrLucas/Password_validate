import type { ResultProps } from "../types/results";
import {
  LenghtValidation,
  SequencesValidation,
  SpecialCharValidation,
  UpperLowerCaseValidation,
} from "../utils";

export class Password {
  static validate(password: string) {
    const validations = [
      LenghtValidation.execute(password),
      SequencesValidation.execute(password),
      SpecialCharValidation.execute(password),
      UpperLowerCaseValidation.execute(password),
    ];

    const results = validations.reduce(
      (acc: ResultProps, { error }) => {
        if (error){
          acc.errors.push(error)
          acc.result = false
        } return acc;
      },
      { result: true, errors: [] }
    );

    return results;
  }
}
