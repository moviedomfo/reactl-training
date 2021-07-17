import { useState } from 'react';
// comportamiento del Modal


const useModal = (iniVal = false) => {

    const [isOpen,setIsOpen]= useState(iniVal);

    const openModal = ()=>{
      
        setIsOpen(true);
    }

    const closeModal = ()=>{

        setIsOpen(false);
    }

    //return  {isOpen,openModal,closeModal};
    return [isOpen, openModal, closeModal];
}

export default useModal
