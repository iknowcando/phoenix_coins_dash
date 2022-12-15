import style from './ListContainer.module.css'

const ListContainer = (props) => {
    return (
        <div className={style.wrapContainer}>
            <h7 className={style.hContainer}>{props.hChildren}</h7>
            <ul className={style.listContainer}>
                {props.children}
            </ul>
        </div>
    )
}
export default ListContainer;