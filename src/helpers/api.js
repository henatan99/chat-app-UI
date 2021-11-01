const baseApi = 'http://localhost:3001/';

export const signFetch = async (username, password, request) => {
  const url = `${baseApi}api/v1/users/${request}`;
  const settings = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      user: {
        username,
        password,
      },
    },
  };
  const response = await fetch(url, settings);
  const data = await response.json();
  // eslint-disable-next-line
  console.log(data);
  return data;
};

export const usersFetch = async (request) => {
  const url = `${baseApi}api/v1/users/${request}`;
  const settings = {
    method: 'GET',
    mode: 'no-cors',
  };
  const response = await fetch(url, settings);
  // eslint-disable-next-line
  console.log(response);
  const data = await response.json();
  // eslint-disable-next-line
  console.log(data);
  return data;
};
