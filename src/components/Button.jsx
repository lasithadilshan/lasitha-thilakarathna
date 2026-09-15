/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    download
}) => {
    const classNames = `btn btn-primary ${classes}`.trim();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                download={download}
                className={classNames}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={classNames}
        >
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    );
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

/**
 * Outline Button
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    download
}) => {
    const classNames = `btn btn-outline ${classes}`.trim();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                download={download}
                className={classNames}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={classNames}
        >
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    );
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export {
    ButtonPrimary,
    ButtonOutline
};