import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = (props) => {
    const [openDashboard,setOpenDashboard] = useState(true);

    const dataList = {
        openDashboard,
        setOpenDashboard
    }

    return (
        <Context.Provider value={dataList}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider