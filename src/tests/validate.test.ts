import { ResultProps } from "../types/results";
import { Password } from "../uses/passwordValidation";
import { LenghtValidation } from "../utils/lengthValidation";
import { SequencesValidation } from "../utils/sequencesValidation";
import { SpecialCharValidation } from "../utils/specialCharValidation";

describe("Individual Password Validate", () => {
  const results: ResultProps = { result: true, errors: [] };

  describe("Length Validation", () => {
    it("Should return true and an empty list of errors", () => {
      const validPassword = "I8d12!upIGOSACGT";

      expect(LenghtValidation.execute(validPassword, results)).toBe({
        results: true,
        errors: [],
      });
    });

    it("Should return false and an list with the validation error: Password must contain 16-32 characters", () => {
      const invalidPassword = "I8d12!upIG";

      expect(LenghtValidation.execute(invalidPassword, results)).toEqual({
        results: false,
        errors: ["Password must contain 16-32 characters"],
      });

      it("Should return false and an list with the validation error: Password must contain 16-32 characters", () => {
        const invalidPassword = "I8d12!upIGVFRTEYDHSGBFhrkdurnhgpl";

        expect(LenghtValidation.execute(invalidPassword, results)).toEqual({
          results: false,
          errors: ["Password must contain 16-32 characters"],
        });
      });
    });
  });

  describe("Sequences Validation", () => {
    it("Should contain password without characters sequences", () => {
      const validPassword = "I8d12!upIGaCVde";

      expect(SequencesValidation.execute(validPassword, results)).toBe({
        results: true,
        errors: [],
      });
    });

    it("Should not be possible to contain sequences of characters - exemple: sequences of letters 'abc' ", () => {
      const invalidPassword = "I8d12!upIGaBc";

      expect(SequencesValidation.execute(invalidPassword, results)).toBe({
        results: false,
        errors: ["Cannot contain more than 3 character sequences"],
      });
    });

    it("Should not be possible to contain sequences of characters - exemple: sequences of numbers '123' ", () => {
      const invalidPassword = "I8d12!upIGa456";

      expect(SequencesValidation.execute(invalidPassword, results)).toBe({
        results: false,
        errors: ["Cannot contain more than 3 character sequences"],
      });
    });
  });

  describe("Special Characters Validation", () => {
    it("Password must contain minimum of 2 special characters", () => {
      const validPassword = "I8d12!upI@aCVde";

      expect(SpecialCharValidation.execute(validPassword, results)).toEqual({
        results: true,
        errors: [],
      });
    });

    it("Password cannot contain less than 2 special characters", () => {
      const validPassword = "I8d12!upIAaCVde";

      expect(SpecialCharValidation.execute(validPassword, results)).toEqual({
        results: false,
        errors: ["Must contain minimum of 2 special characters"],
      });
    });
  });

  describe("Upper and Lower Case Validation", () => {
    it("Password must contain Upper Case and Lower Case letters", () => {
      const validPassword = "I8d12!upIAaCVde";

      expect(SpecialCharValidation.execute(validPassword, results)).toEqual({
        results: true,
        errors: [],
      });
    });

    it("Password cannot contain only Lower Case letter", () => {
      const invalidPassword = "i8d12!upiaacvde";

      expect(SpecialCharValidation.execute(invalidPassword, results)).toBe({
        results: false,
        errors: ["Must have uppercase and lowercase letters"],
      });
    });

    it("Password cannot contain only Upper Case letter", () => {
      const invalidPassword = "I8D12!UPIAACVDE";

      expect(SpecialCharValidation.execute(invalidPassword, results)).toBe({
        results: false,
        errors: ["Must have uppercase and lowercase letters"],
      });
    });
  });
});

describe("Password Validator", () => {
  it("Should recieve an invalid password and return false and a list of errors", () => {
    const invalidPassword = "123";

    expect(Password.validate(invalidPassword)).toBe({
      results: false,
      errors: [
        "Password must contain 16-32 characters",
        "Cannot contain more than 3 character sequences",
        "Must contain minimum of 2 special characters",
        "Must have uppercase and lowercase letters",
      ],
    });
  });
});
