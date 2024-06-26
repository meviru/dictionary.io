import { useRef, useState } from "react";
import styled from "styled-components";
import { Font } from "../../models";

const DropdownWrapper = styled.div`
    position: relative;
    min-width: 160px;
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
        border-left: 2px solid #A543EE;
        border-bottom: 2px solid #A543EE;
        transform: rotate(-45deg);
    }
`

const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%;
    right: -10px;
    width: 160px;
    margin-top: 12px;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #d8d8d8;
    background-color: #ffffff;
`
const DropdownMenuItem = styled.li`
    font-size: 18px;
    padding: 12px;
    cursor: pointer;
    text-align: center;
    transition: 0.15s ease;
    border-bottom: 1px solid #d8d8d8;
    &:hover ,
    &.selected {
        color: #fff;
        background-color: #A543EE;
    }

    &:last-child {
        border-bottom: none;
    }
`

const FontsDropdown = () => {
    let defaultFonts: Font[] = [
        {
            id: 1,
            name: "Sans Serif",
            selected: false,
        },
        {
            id: 2,
            name: "Monospace",
            selected: false,
        },
        {
            id: 3,
            name: "Serif",
            selected: true,
        },
    ];
    const [isVisible, setIsVisible] = useState(0);
    const [selectedFont, setSelectedFont] = useState<Font>(defaultFonts[2]);
    const dropdown: any = useRef(null);

    const toggleDropdown = () => {
        setIsVisible(isVisible ? 0 : 1);
    }
    const closeOpenMenus = (event: any) => {
        if (isVisible && !dropdown.current?.contains(event.target)) {
            setIsVisible(0);
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    const setFont = (font: Font) => {
        setSelectedFont(font);
    }

    return (
        <DropdownWrapper ref={dropdown}>
            <DropdownButton onClick={toggleDropdown}>{selectedFont.name}</DropdownButton>
            {!!isVisible &&
                <DropdownMenu>
                    {defaultFonts.map((font) =>
                        <DropdownMenuItem key={font.id} onClick={() => setFont(font)} className={`${selectedFont.id == font.id ? 'selected' : ''}`}>{font.name}</DropdownMenuItem>
                    )}
                </DropdownMenu>
            }
        </DropdownWrapper>
    )
}

export default FontsDropdown;