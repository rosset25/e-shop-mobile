// TODO: Add needed pluggins to set ENV variables
/*process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;*/

export const API_URL = " http://192.168.1.37:1337";

export const paramsPOST = (data) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return params;
};
