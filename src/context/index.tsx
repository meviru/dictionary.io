import { createContext, useState } from "react";
import { Dictionary, DictionaryContextType, IChildProp } from "../models";
import { ToastContainer, toast } from "react-toastify";
import fetchWordInfo from "../service/DictionaryService";

export const DictionaryContext = createContext<DictionaryContextType>({
    dictionary: {},
    getWordInfo: () => { }
});

const DictionaryProvider = ({ children }: IChildProp) => {
    const [dictionary, setDictionary] = useState<Dictionary>({});

    const getWordInfo = async (keyword: string) => {
        try {
            const response = await fetchWordInfo(keyword);
            setDictionary(response);
        } catch (error) {
            toast.error("Error fetching the information.", {
                theme: "colored",
                hideProgressBar: true
            });
        }
    }

    return (<DictionaryContext.Provider value={{ dictionary, getWordInfo }}>
        {children}
        <ToastContainer />
    </DictionaryContext.Provider>)
}

export default DictionaryProvider;