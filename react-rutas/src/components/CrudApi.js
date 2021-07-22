import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
//import { helpHttp } from "../helpers/helpHttp2";
import { helpHttp2 } from "../helpers/helpHttp2";
import Error404 from "../Pages/Error404";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp2();
  let url = "http://localhost:5300/santos";
 useEffect(() => {
    setLoading(true);

  //   try {
  //     //let promise = 
  //     fetch(url, {
  //             'rejectUnauthorized': false

  //         })
  //         .then(res => {           
  //             return res.json()
  //         })
  //         .then(json => { 
  //           setDb(json);
  //           setError(null);
  //         }).catch(error => {
  //           setDb({});
  //           setError(error);
  //         });
  // } catch (e) {
  //     alert(e);
  // }

  helpHttp2()
      .get(url)
      .then((res) => {
       
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);


  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      {/* basename : para que todas las rutas antelleven /santos */}
      <HashRouter basename="/santos">
        <header>
          <h2>CRUD API</h2>
        </header>
        <nav>
          <NavLink to="/" activeClassName="active">Home </NavLink>
          <NavLink to="/agregar" activeClassName="active">
            Agregar
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            {loading && <Loader />}
            {error && (
              <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </Route>
          <Route exact path="/agregar">
            <CrudForm
              key="CrudFormCreate"
              createData={createData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <CrudForm
              key="CrudFormUpdate"
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <article className="grid-1-2">
        {/* {JSON.stringify(db)} */}
      </article>
    </div>
  );
};

export default CrudApi;
