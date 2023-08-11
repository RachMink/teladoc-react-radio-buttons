import {Children, cloneElement, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// import useValidation from '../Form/use-validation';

export const ERROR_MESSAGE = `You cannot set both disabled and readOnly properties on the RadioGroup. Use readOnly when you want to restrict a user from changing the radio checked state, but don't want to disable the keyboard focus, screen-reader access, and form serialization.`;

const RadioGroup = ({
    classNameRoot,
    classNameItems,
    testAttrRoot,
    testAttrItems,
    testAttrError,
    id,
    name,
    label,
    error,
    children,
    disabled,
    readOnly,
    required,
    helpNode,
    onChange,
    onInvalid,
    customValidationError,
}) => {
    useEffect(() => {
        if (disabled && readOnly) {
            throw new Error(ERROR_MESSAGE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* used to set aria-invalid after the form is invalidated. https://www.w3.org/TR/wai-aria/#aria-invalid */
    const [hasInvalidated, setHasInvalidated] = useState(false);
    // const {
    //     errorId,
    //     isValid,
    //     showInvalid,
    //     errorElement,
    //     validationState,
    //     setValidationState,
    // } = useValidation({id, error, customValidationError, disabled, onInvalid});
    const onChangeCallback = evt => {
       //setValidationState(null);

        if (onChange) {
            onChange(evt);
        }
    };
    const onInvalidCallback = state => {
        //setValidationState(state);
        //setHasInvalidated(true);

        // if (onInvalid) {
        //     onInvalid(state);
        // }
    };
    const describedBy = [];

    if (helpNode) {
        describedBy.push(`${id}-help`);
    }

    // if (showInvalid) {
    //     describedBy.push(errorId);
    // }

    // useEffect(() => {
    //     setValidationState(null);
    // }, [disabled, setValidationState]);

    return (

        <fieldset
        className={classNameRoot} //css.root
        aria-label={"hello"}
        role="radiogroup"
    >
        {/* legend={cloneElement(label, {
                className: cnb(css.label, label.props.className),
                useLabelElement: false,
                required,
            })} */}
        {<legend>"this is a new radio group"</legend>}
        
       
    

        {/* <FormGroup
            role="radiogroup"
            legend={cloneElement(label, {
                className: cnb(css.label, label.props.className),
                useLabelElement: false,
                required,
            })}
           
        > */}
            {helpNode && (
                <div
                    className="helpNode"
                    id={`${id}-help`}
                    data-pulse="helpNode"
                >
                    {"helpNode"}
                </div>
            )}

            <div
                
                className={classNameItems} //css.items
            >
                {Children.map(children, child =>
                    cloneElement(child, {
                        //classNameRoot: child.props.classNameRoot, //css.items
                        //classNameSelector: child.props.classNameSelector,
                        name,
                        
                        //readOnly: readOnly || child.props.readOnly,
                        //disabled: disabled || child.props.disabled,
                        ...(describedBy.length && {
                            'aria-describedby': describedBy.join(' '),
                        }),
                        //parentValidationState: validationState,
                        //isParentValid: isValid,
                        onChange: onChangeCallback,
                        //onInvalid: onInvalidCallback,
                    })
                )}
            </div>
            </fieldset>
        // </FormGroup>
    );
};

export default RadioGroup;
