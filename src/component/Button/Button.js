// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    className,
    iconLeft,
    iconRight,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            // console.log(key);
            return;
        });
        // delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;

        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
