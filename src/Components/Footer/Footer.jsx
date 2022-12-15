
import style from './Footer.module.css'
import ListElement from "./ListElement/ListElement";
import ListContainer from "./ListContainer/ListContainer";
import LinkContact from "./LinkContact/LinkContact";


const Footer = (props) => {
    return (
        <footer className={`${style.footerBlock}`}>
            <div className={style.techContainer}>
                <ListContainer hChildren={"Tech Stack"}>
                    <ListElement href="https://learn.javascript.ru/" name="Javascript ES6"/>
                    <ListElement href="https://developer.mozilla.org/en-US/docs/Web/HTML" name="HTML"/>
                    <ListElement href="https://developer.mozilla.org/en-US/docs/Web/CSS" name="CSS"/>
                </ListContainer>
                <ListContainer hChildren={"Frameworks"}>
                    <ListElement href="https://reactjs.org/docs/getting-started.html" name="React"/>
                    <ListElement href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                                 name="Boostrap"/>
                </ListContainer>
                <ListContainer hChildren={"Library's"}>
                    <ListElement href="https://reactrouter.com/en/main" name="React Router"/>
                    <ListElement href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts"
                                 name="Redux"/>
                </ListContainer>
                <ListContainer hChildren={"API"}>
                    <ListElement href="https://docs.coincap.io/#ee30bea9-bb6b-469d-958a-d3e35d442d7a"
                                 name="CoinCap API 2.0"/>
                </ListContainer>
            </div>
            <div className={style.contactsContainer}>
                <LinkContact link={"https://github.com/iknowcando"}
                             path={"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}/>
                <LinkContact link={"https://www.linkedin.com/in/adaikin91/"}
                             path={"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}/>
                <LinkContact link={"https://t.me/dnkcnd"}
                             path={"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}/>
            </div>
        </footer>
    )
}
export default Footer;