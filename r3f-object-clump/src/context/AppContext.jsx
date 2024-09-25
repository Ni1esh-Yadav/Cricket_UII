import { createContext,useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [isOpen,setOpen] = useState(false);

    const value = {
        isOpen,
        setOpen
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}