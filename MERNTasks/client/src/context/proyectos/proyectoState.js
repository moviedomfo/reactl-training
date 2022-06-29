import React, {
    useReducer
} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
// import {v4 as uuid} from "uuid"; 
import {    v4 as uuidv4} from 'uuid';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    ADD_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';



//Estado general del poryecto
//Ventaja: Evita andar pasando props por todos los componentes
const ProyectoState = props => {


    const projectList = [{
            id: 1,
            projectName: "Tienda virtual"
        },
        {
            id: 2,
            projectName: "celam virtual"
        },
        {
            id: 3,
            projectName: "sport club"
        }
    ]


    const initialState = {
        projectList: [],
        formulario: false,
        errorformulario: false,
        project: null // proyecto que esté seleccionado. 
    }

    //dispatch p/ejecutar las acciones Es igual a cuando usamos un useState array destructuring
    const [state, dispatch] = useReducer(proyectoReducer, initialState)



    //Funcion que va a nmostrar el formulario
    const mostrarFormulario = () => {
        //aqui entra en juego el dispatch que evalua el swith
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    // obtener los proyectos y este si tomara un parametro 'proyectos'
    //Siempre lo que tome la funcion como parametro es lo qu eva aser el payload
    const obtenerProyectos = () => {
        //aqui entra en juego el dispatch que evalua el swith
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: projectList
        })
    }

    const addProyecto = proyecto => {

        //al prj que viene como param le establezco el id y lo paso al payload del dispath
        proyecto.id = uuidv4()

        dispatch({
            type: ADD_PROYECTO,
            payload: proyecto
        })
    }

    const proyectoActual = id => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: id
        })
    }

    const eliminarProyecto = id => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: id
        })
    }

    ///Este es el provider
    return (
        //State Inicial
        <proyectoContext.Provider value = {
            {
                projectList: state.projectList,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                project: state.project,
                obtenerProyectos,
                mostrarFormulario,
                addProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }
        } >
        {
            props.children
        } </proyectoContext.Provider>
    )
}


export default ProyectoState;