import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Font } from "../../models";
import { FONTS } from "../../constants";
import { motion } from "framer-motion";
import { DictionaryContext } from "../../context";

const DropdownWrapper = styled.div`
    position: relative;
`
const DropdownButton = styled.div`
    display: flex;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    align-items: center;
    justify-content: flex-end;
    &:after {
        content: "";
        width: 10px;
        height: 10px;
        margin-left: 15px;
        margin-top: -5px;
        border-left: 2px solid ${({ theme }) => theme.primary};
        border-bottom: 2px solid ${({ theme }) => theme.primary};
        transform: rotate(-45deg);
    }

    @media (max-width: 767px) {
        font-size: 18px;
    }
`

const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%;
    z-index: 4;
    right: -10px;
    width: 160px;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.body};
`
const DropdownMenuItem = styled.li`
    font-size: 18px;
    padding: 12px;
    cursor: pointer;
    text-align: center;
    transition: 0.15s ease;
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    &:hover ,
    &.selected {
        color: #fff;
        background-color: ${({ theme }) => theme.primary};
    }

    &:last-child {
        border-bottom: none;
    }
`

const FontsDropdown = () => {
    const defaultFonts: Font[] = [
        {
            id: 1,
            name: FONTS.SANS_SERIF.TYPE,
            selected: false,
            fontName: FONTS.SANS_SERIF.NAME,
        },
        {
            id: 2,
            name: FONTS.MONOSPACE.TYPE,
            selected: false,
            fontName: FONTS.MONOSPACE.NAME,
        },
        {
            id: 3,
            name: FONTS.SERIF.TYPE,
            selected: true,
            fontName: FONTS.SERIF.NAME,
        },
    ];

    const [isVisible, setIsVisible] = useState(0);
    const [selectedFont, setSelectedFont] = useState<Font>(defaultFonts[2]);
    const dropdown = useRef<HTMLDivElement>(null);

    const { updateFont } = useContext(DictionaryContext);

    const toggleDropdown = () => {
        setIsVisible(isVisible ? 0 : 1);
    }
    const closeOpenMenus = (event: MouseEvent) => {
        if (isVisible && !dropdown.current?.contains(event.target as Node)) {
            setIsVisible(0);
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    const setFont = (font: Font) => {
        setSelectedFont(font);
        updateFont(font.fontName);
        setIsVisible(0);
    }

    return (
        <DropdownWrapper ref={dropdown}>
            <DropdownButton onClick={toggleDropdown}>{selectedFont.name}</DropdownButton>
            {!!isVisible &&
                <DropdownMenu as={motion.ul} animate={{ y: 12 }}>
                    {defaultFonts.map((font) =>
                        <DropdownMenuItem key={font.id} onClick={() => setFont(font)} className={`${selectedFont.id == font.id ? 'selected' : ''}`} style={{ fontFamily: font.fontName }}>{font.name}</DropdownMenuItem>
                    )}
                </DropdownMenu>
            }
        </DropdownWrapper>
    )
}

export default FontsDropdown;