import { Outlet } from "react-router-dom"
import Header from "./Components/Header"

const Protected = () => {
    return (
        <div className="flex">
            <Header />
            <Outlet/>
        </div>
    )
}

export default Protected
