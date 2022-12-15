import style from './Header.module.css'
import Logo from "./Logo/Logo";

const Header = (props) => {
    return (
        <header className={style.headerBlock}>
            <Logo/>
        </header>
    )
}
export default Header