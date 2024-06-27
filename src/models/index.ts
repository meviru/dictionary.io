import { Dispatch, ReactNode, SetStateAction } from "react"

export interface IChildProp {
    children: ReactNode
}

export interface IProps {
    theme: string,
    setTheme?: Dispatch<SetStateAction<string>>;
}

export interface Font {
    id: number,
    name: string,
    selected: boolean
}


export interface Dictionary {
    word?: string
    phonetic?: string
    phonetics?: Phonetic[]
    meanings?: Meaning[]
    license?: License
    sourceUrls?: string[]
}

export interface Phonetic {
    text: string
    audio: string
    sourceUrl?: string
    license?: License
}

export interface License {
    name: string
    url: string
}

export interface Meaning {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: string[]
    antonyms: any[]
}

export interface Definition {
    definition: string
    synonyms: any[]
    antonyms: any[]
    example?: string
}

export interface DictionaryContextType {
    dictionary: Dictionary,
    getWordInfo: (keyword: string) => void

}