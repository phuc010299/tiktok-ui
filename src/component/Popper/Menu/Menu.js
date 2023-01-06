import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ items = [], children, onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={'Language'} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            // animation
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            interactive
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Header.propTypes = {
    items: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.func,
};

export default Menu;
