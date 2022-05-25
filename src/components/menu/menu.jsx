import './menu.scss';
import logo from '../../assets/icons/ClipartKey_45349.png';
import searchIcon from '../../assets/icons/magnifying-glass-solid.svg';
import userAvatar from '../../assets/icons/avatar.png';

export function Menu() {
    return (
        <header className='menu'>

            <div className='menu__logo'>
                <img src={logo} alt={"logo"} />
                <h1>AniWatch</h1>
            </div>

            <nav>
                <ul className='menu__nav'>
                    <li>Main</li>
                    <li>Lists</li>
                </ul>
            </nav>

            <div className='menu__search'>
                <div className="menu__search__input">
                    <input type='text' placeholder='search' />

                    <div className="menu__search__input__icon">
                        <img src={searchIcon} alt={'search icon'} />
                    </div>
                </div>
            </div>

            <div className="menu__user">
                <img src={userAvatar} alt={'avatar'} />
            </div>
        </header>
    );
}