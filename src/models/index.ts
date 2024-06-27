import { Dispatch, ReactNode, SetStateAction } from "react"

export interface Children {
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