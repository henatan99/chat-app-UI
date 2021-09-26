const baseApi = 'http://localhost:3001/'

export const Sign = async (request, username, password) => {
    const response = await 
    fetch({
        method: 'POST',
        url: `${baseApi}api/v1/users/${request}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          user: {
              username,
              password
          }
        },
    });
    const data = await response.json();
    return data;
};
