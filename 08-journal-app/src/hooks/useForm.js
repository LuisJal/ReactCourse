import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidaciones ={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState(initialForm)

    }, [initialForm])//Cuando el initalForm cambia, quiero que se actualicen las notas
    

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidaciones )) {
            const [ fn, errorMessage ] = formValidaciones[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}

