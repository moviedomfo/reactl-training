import ReactDOM from 'react-dom';

import  './Modal.css'

const ModalPortal = ({children,isOpen,closeModal}) => {

    // para que cuando haga click en el modal-container no cierre el modal
const handleModalContainerClick=(e)=>e.stopPropagation();

    return (
        <article className={`modal ${isOpen && 'is-open'}`} onClick= {closeModal}>
        <div className="modal-container" onClick= {handleModalContainerClick}>
            <button className="moadal-close" onClick= {closeModal}>
                X
            </button>
            {children}
        </div>
        
    </article>
    );
};

export default ModalPortal
