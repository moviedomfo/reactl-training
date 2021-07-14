export const helpHttp = () => {
  const TIMEOUT = 4000;
  // a este lo vana llamar los demas
  const customFetch = (url, options) => {
    // sleep(TIMEOUT);

    // no agrego content type por q no todas las APIS lo requieren
    // hay que tener en cta. la doc de c/api
    const defaultHeaders = {
      accept: "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "all",
      // " Access-Control-Allow-Headers": "*",
    };

    // abort controller : sirve para abortar en cualquier momento la peticion
    const controller = new AbortController(); // esto es vanilla js
    options.signal = controller.signal;

    // condicion a la antigua
    // if(!options.method){
    //     options.method = 'GET';
    // }
    // con operador cortocircuito
    options.method = options.method || "GET";

    // aqui lo resolvemos como operador ternario
    // cuando no las espesifique ponemos por defecto las defaultHeaders
    // cuando las espesifique debemos combinarles nuestros datos
    options.headers = options.headers
      ? {
          ...defaultHeaders,
          ...options.headers,
        }
      : defaultHeaders;

    // Si viene BODY lo convierto a json. sino por cortocircuito envio false
    options.body = JSON.stringify(options.body) || false;

    // para eso se lo pone false arriba: para removerlo
    if (!options.body) {
      delete options.body;
    }

    // console.log(options);

    // Si en cierto tiempo la API no responde Abortamos la peticion
    setTimeout(() => {
      controller.abort();
    }, TIMEOUT);

    

    return fetch(url, options)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrió un error",
          })
    )
    .catch((err) => err);
      
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

  // objeto con los metodos de los vervos
  return {
    get,
    post,
    put,
    del,
  };

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
};

// export default helpHttp;
