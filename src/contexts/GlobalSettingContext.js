import { createContext, useState } from "react"

export const GlobalSettingContext = createContext()

const GlobalSettingContextProvider = ({ children }) => {
  const [lang, setLang] = useState("EN")

  return (
    <GlobalSettingContext.Provider value={[lang, setLang]}>
      {children}
    </GlobalSettingContext.Provider>
  )
}

export default GlobalSettingContextProvider
