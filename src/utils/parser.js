import i18next from "i18next";

// requests
export const userRegistrationInfo = (formData) => {
  const user = {
    email: formData.email,
    username: formData.email,
    name: formData.name,
    password: formData.password,
  };
  return user;
};

export const userLoginInfo = (formData) => {
  const user = {
    identifier: formData.email,
    password: formData.password,
  };
  return user;
};

// responses
export const successfulLoginResponse = (response, result) => {
  return {
    status: response.status,
    data: result, // TODO: get only needed fields
  };
};

export const failedResponse = (response, result) => {
  const errorMessage = getErrorMessage(result);
  const error = {
    status: response.status,
    error: errorMessage,
  };
  return error;
};

export const defaultErrorResponse = (status) => {
  return {
    status: status,
    error: i18next.t("errors:errorDefault"),
  };
};

// handle response error names
function getErrorMessage(result) {
  let error = i18next.t("errors:errorDefault");
  error =
    result.message &&
    result.message.length > 0 &&
    result.message[0].messages &&
    result.message[0].messages.length > 0
      ? result.message[0].messages[0].id
      : error;

  if (error === "Auth.form.error.email.taken") {
    error = i18next.t("errors:errorEmail");
  } else if ("Auth.form.error.email.provide" || "Auth.form.error.invalid") {
    error = i18next.t("errors:errorLogin");
  }
  return error;
}
