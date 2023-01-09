import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountPreview';
import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive placement="bottom" delay={[500, 0]} offset={[-20, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1673402400&x-signature=OBm0K%2BwoZipMhjJT6s%2FfnW5Agrw%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>theanh28entertainment</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Theanh28 Entertainment </p>
                </div>
            </div>
        </Tippy>
    );
}

// AccountItem.propTypes = {
//     label: PropTypes.string.isRequired,
// };
export default AccountItem;
