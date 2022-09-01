import { Password } from "../uses/passwordValidation";
import {LenghtValidation, SequencesValidation, SpecialCharValidation, UpperLowerCaseValidation} from '../utils'

describe("Individual Password Validate", () => {
  describe("Length Validation", () => {
    it("Should return true and an empty list of errors", () => {
      const validPassword = "I8d12!upIGOSACGT";

      expect(LenghtValidation.execute(validPassword)).toEqual({ error: "" });
    });

    it("Should return false and an list with the validation error: Password must contain 16-32 characters", () => {
      const menorQueDezeseis = "I8d12!upIG";

      expect(LenghtValidation.execute(menorQueDezeseis)).toEqual({
        error: "Password must contain 16-32 characters",
      });
    });

    it("Should return false and an list with the validation error: Password must contain 16-32 characters", () => {
      const maiorQueTrintaEDois = "I8d12!upIGVFRTEYDHSGBFhrkdurnhgpl";

      expect(LenghtValidation.execute(maiorQueTrintaEDois)).toEqual({
        error: "Password must contain 16-32 characters",
      });
    });
  });

  describe("Sequences Validation", () => {
    it("Should contain password without characters sequences", () => {
      const validPassword = "I8d12!upIG";

      expect(SequencesValidation.execute(validPassword)).toEqual({ error: "" });
    });

    it("Should not be possible to contain sequences of characters - exemple: sequences of letters 'abc' ", () => {
      const invalidPassword = "I8d12!upIGaBc";

      expect(SequencesValidation.execute(invalidPassword)).toEqual({
        error: "Cannot contain more than 3 character sequences",
      });
    });

    it("Should not be possible to contain sequences of characters - exemple: sequences of numbers '123' ", () => {
      const invalidPassword = "I8d12!upIGa456";

      expect(SequencesValidation.execute(invalidPassword)).toEqual({
        error: "Cannot contain more than 3 character sequences",
      });
    });
  });

  describe("Special Characters Validation", () => {
    it("Password must contain minimum of 2 special characters", () => {
      const validPassword = "I8d12!upI@aCVde";

      expect(SpecialCharValidation.execute(validPassword)).toEqual({
        error: "",
      });
    });

    it("Password cannot contain less than 2 special characters", () => {
      const invalidPassword = "I8d12!upIAaCVde";

      expect(SpecialCharValidation.execute(invalidPassword)).toEqual({
        error: "Must contain minimum of 2 special characters",
      });
    });
  });

  describe("Upper and Lower Case Validation", () => {
    it("Password must contain Upper Case and Lower Case letters", () => {
      const validPassword = "I8d12!@upIAaCVde";

      expect(UpperLowerCaseValidation.execute(validPassword)).toEqual({
        error: "",
      });
    });

    it("Password cannot contain only Lower Case letter", () => {
      const invalidPassword = "i8d12!upiaacvde";

      expect(UpperLowerCaseValidation.execute(invalidPassword)).toEqual({
        error: "Password must contain Lower and Upper case letters",
      });
    });

    it("Password cannot contain only Upper Case letter", () => {
      const invalidPassword = "I8D12UPIAACVDE";

      expect(UpperLowerCaseValidation.execute(invalidPassword)).toEqual({
        error: "Password must contain Lower and Upper case letters",
      });
    });
  });
});

describe("Password Validator", () => {
  it("Should recieve an invalid password and return false and a list of errors", () => {
    const invalidPassword = "abc";

    expect(Password.validate(invalidPassword)).toEqual({
      result: false,
      errors: [
        "Password must contain 16-32 characters",
        "Cannot contain more than 3 character sequences",
        "Must contain minimum of 2 special characters",
        "Password must contain Lower and Upper case letters",
      ],
    });
  });
});
