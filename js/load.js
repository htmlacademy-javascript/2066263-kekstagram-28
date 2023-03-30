const createLoader = (onSuccess, onError) => () => fetch('https://28.javascript.pages.academy/kekstagram/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((Response) => {
    if(Response.ok) {
      return Response.json();
    }

    throw new Error(`${Response.status} ${Response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
    return data;
  })
  .catch((err) => {
    onError(err);
  });

export {createLoader};
