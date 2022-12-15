import style from './Logo.module.css'

const Logo = (props) => {
    return (
        <div className={style.logoBlock}>
            <a  href="/table">
                <img className={style.imgLogo} alt="phoenix" src="https://i.ibb.co/bbm5CPB/ph.png"></img>
            </a>
        </div>
    )
}
export default Logo