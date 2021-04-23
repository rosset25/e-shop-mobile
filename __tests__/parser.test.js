import {
  userRegistrationInfo,
  userLoginInfo,
  successfulLoginResponse,
  failedResponse,
  defaultErrorResponse,
} from "../src/utils/parser";

describe("login registration parser", () => {
  test("pass data to get the needed fields", () => {
    const data = {
      email: "maria42@example.com",
      username: "maria42",
      name: "María Fernández",
      password: "12345678",
      repeatedPassword: "12345678",
      extraField: "extra",
    };
    const result = userRegistrationInfo(data);
    expect(Object.keys(result).length).toEqual(4);
    expect(result.email).toBe(data.email);
  });
  test("pass invalid values", () => {
    const data = { data: "data" };
    const result = userRegistrationInfo(data);
    expect(Object.keys(result).length).toEqual(4);
    expect(result.email).toBe(undefined);
  });
});

describe("login response parser", () => {
  test("parse the successful response properly", () => {
    const response = { status: 200, other: "other" };
    const data = { jwt: "424242424242", field: "example" };
    const result = successfulLoginResponse(response, data);
    expect(Object.keys(result).length).toBe(2);
    expect(result.status).not.toBe(undefined);
    expect(result.data).not.toBe(undefined);
  });
});

//TODO: refactor and test the other functions
