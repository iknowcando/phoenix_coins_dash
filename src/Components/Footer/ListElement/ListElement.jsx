import style from './ListElement.module.css'

const ListElement = (props) => {
    return (
        <li className={style.listElementStyle}>
            <a className={style.linkElement} rel="noopener noreferrer" target="_blank"
               href={props.href}>{props.name}</a>
        </li>
    )
}
export default ListElement;