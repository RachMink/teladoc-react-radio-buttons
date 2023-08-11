import {useRef} from 'react';
// import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {v4 as uuidv4} from 'uuid';
import {isSafari} from 'react-device-detect';
// import EnvironmentUtils from '@livongo/utilities/system/environment';

const Label = ({
    id,
    htmlFor,
    children,
    title,
    description,
    required,
    testAttr,
    className,
    useLabelElement,
    i18nRequiredA11yLabel,
    i18nRequiredVisualLabel,
    ...rest
}) => {
    const {t} = useTranslation();
    const {current: El} = useRef(useLabelElement ? 'label' : 'span');
    const {current: uuid} = useRef(uuidv4());
    const a11yId = id ?? uuid;

    // const isAndroidDevice = EnvironmentUtils.isAndroid();
    // const isSafariBrowser = isSafari;
    // const shouldUseHiddenLabelText =
    //     !isSafariBrowser;

    return (
        <El
            id={id}
            className={className} // + css.root
            htmlFor={htmlFor}
            // {...(shouldUseHiddenLabelText && {
            //     'aria-labelledby': `${a11yId}-hidden-children`,
            // })}
            // {...rest}
        >
            {children}
            {title}
            {description}
            {/* { (
                <>
                    <span aria-hidden data-pulse="indicator">
                        {i18nRequiredVisualLabel}
                    </span>
                    <span
                        data-pulse="required"
                        className={'visually-hidden'}
                    >
                        {i18nRequiredA11yLabel || t('ui:label.required')}
                    </span>
                </>
            )} */}
        </El>
    );
};


export default Label;
