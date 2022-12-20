import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';

const cx = classNames.bind(styles);
function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            // animation
            delay={[0, 500]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
