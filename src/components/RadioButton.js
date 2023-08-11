import {cloneElement, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {cnb} from 'cnbuilder';

export const ERROR_MESSAGE = `You cannot set both disabled and readOnly properties on the Radio. Use readOnly when you want to restrict a user from changing the radio checked state, but don't want to disable the keyboard focus, screen-reader access, and form serialization.`;

const Radio = ({
    classNameRoot,
    classNameItem,
    classNameSelector,
    classNameControl,
    classNameLabel,
    testAttrRoot,
    testAttrItem,
    id,
    name,
    label,
    value,
    disabled,
    readOnly,
    required,
    defaultChecked,
    parentValidationState,
    isParentValid,
    onChange,
    onInvalid,
    ...rest
}) => {
    // useEffect(() => {
    //     if (disabled && readOnly) {
    //         throw new Error(ERROR_MESSAGE);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const {ref, setValidationState} = useValidation({id, disabled, onInvalid});
    const onChangeCallback = evt => {
        if (readOnly) {
            // don't allow to change the radio state
            evt.preventDefault();

            return;
        }

        if (onChange) {
            onChange(evt);
        }
    };

    const onInvalidCallback = evt => {
        evt.preventDefault();
    };

    const {current: uuid} = useRef(uuidv4());
    const labelId = `radio-label-${uuid}`;

    // useEffect(() => {
    //     // if the parent RadioGroup validation state changes, make sure to update
    //     // this item's validation state so that it is not out of sync with the parent
    //     setValidationState(parentValidationState);
    // }, [setValidationState, parentValidationState]);

    return (
        <div
            className={classNameRoot} //css.root
        >
            <div
                data-pulse="control"
                className={classNameControl} //+css.control
            >
                <input
                    data-test={testAttrItem}
                    //ref={ref}
                    className={classNameItem} //css.item 
                    id={id}
                    type="radio"
                    name={name}
                    value={value}
                    defaultChecked={defaultChecked}
                    onClick={onChangeCallback}
                    disabled={disabled}
                    required={required}
                    onInvalid={onInvalidCallback}
                    aria-labelledby={labelId}
                    // Attribute below fixes screenreader bug on iOS (must be added conditionally to work properly)
                    {...(isParentValid && {
                        'aria-invalid': false,
                    })}
                    {...rest}
                />
                <span
                    aria-hidden="true"
                    data-pulse="selector"
                    className={classNameSelector} //css.selector
                />
                {cloneElement(label, {
                    htmlFor: id,
                    className: {classNameLabel},//css.label
                    id: labelId,
                    'aria-hidden': true,
                })}
            </div>
        </div>
    );
};

export default Radio;
