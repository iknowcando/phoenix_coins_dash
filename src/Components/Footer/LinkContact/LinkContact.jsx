import style from './LinkContact.module.css'

const LinkContact = (props) => {
    return (
        <div className={style.ElementStyle}>
            <a className={style.linkContact} rel="noopener noreferrer" target="_blank" href={props.link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     viewBox="0 0 16 16">
                    <path
                        d={props.path}/>
                </svg>
            </a>
        </div>
    );
}
export default LinkContact