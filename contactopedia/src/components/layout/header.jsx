import logo from "../../images/logo192.png"
export default function Header (){
    return(
        <div className="pt-2 py-1 pl-1" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} style={{ height: "35px", verticalAlign: "top"}}></img>
            <span className="h2 pt-4 m-2 text-white-50">
                React Course - Contactopedia
            </span>
        </div>
    )
}