import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useEffect, useState } from 'react';
import {
    faEllipsisVertical,
    faPlus,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/config';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import Menu from '~/component/Popper/Menu';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/component/Image';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // const handleMenuChange = (menuItem) => {
    //     console.log(menuItem);
    // };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tranthanh',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* search */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <span className={cx('action-btn')}>
                                <Button text iconLeft={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>
                            </span>
                            <span className={cx('action-btn')}>
                                {' '}
                                <MessageIcon />
                            </span>
                            <span className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>1</span>
                            </span>
                        </>
                    ) : (
                        <>
                            <Button text iconLeft={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        // onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1671786000&x-signature=BEaDNb5E5b2vF1R51HDxZMGORzU%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
