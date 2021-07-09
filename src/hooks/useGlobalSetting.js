import { useContext } from "react"
import { GlobalSettingContext } from "../contexts/GlobalSettingContext"

export const useGlobalSetting = () => {
  const [lang, setLang] = useContext(GlobalSettingContext)

  if (lang === undefined) {
    throw new Error(
      `It seems that you are trying to use ContractContext outside of its provider`
    )
  }

  return { lang, setLang }
}
