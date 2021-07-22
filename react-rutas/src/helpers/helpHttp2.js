export const helpHttp2 = () => {

  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      'rejectUnauthorized': false,
      accept: "application/json",
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "all",
       " Access-Control-Allow-Headers": "*",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    
    if (!options.body) delete options.body;

    //console.log(options);
    setTimeout(() => controller.abort(), 4000);

 

      //let promise = 
     return fetch(endpoint, defaultHeader)
          .then(res =>            
            //Operador Ternario
             res.ok ? 
              res.json()  
              : 
               Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
             }) 

          ).catch(error => {
            
            return Promise.reject({
                         err: true,
                         status: error.status || "00",
                         statusText: error.statusText || "Ocurrió un error",
                       })
          });
  
    // return fetch(endpoint, options)
    //   .then((res) =>
      
    //     res.ok
    //       ? res.json()
    //       : Promise.reject({
    //           err: true,
    //           status: res.status || "00",
    //           statusText: res.statusText || "Ocurrió un error",
    //         })
    //   )
    //   .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
