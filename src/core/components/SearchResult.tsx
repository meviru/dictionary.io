import styled from "styled-components";
import { Dictionary, Phonetic } from "../../models";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SearchResultWrapper = styled.section`
    display: flex;
    margin: 45px 0;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
        margin: 30px 0;
    }
`

const ResultItem = styled.div`
`

const ResultItemName = styled.h2`
    font-size: 60px;
    font-weight: bold;
    @media (max-width: 767px) {
        font-size: 38px;
    }
`

const ResultItemDescription = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 767px) {
        font-size: 22px;
    }
`

const PlayButton = styled.button`
    position: relative;
    cursor: pointer;
    width: 75px;
    height: 75px;
    flex: 0 0 75px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryLight};
    &:after {
        position: absolute;
        content: "";
        inset: 0 0 0 8px;
        width: 20px;
        height: 20px;
        margin: auto;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 16px solid ${({ theme }) => theme.primary};
        transition: 0.25s ease;
    }
    &.playing {
        &:after {
            inset: 2px 0 0 0;
            width: 16px;
            height: 16px;
            border: 8px solid ${({ theme }) => theme.primary};
        }
    }

    @media (max-width: 767px) {
        width: 48px;
        height: 48px;
        flex: 0 0 48px;
        &:after {
            width: 17px;
            height: 17px;
            border-top-width: 8px;
            border-bottom-width: 8px;
            border-left-width: 11px;   
        }
        &.playing {
            &:after {
                inset: 0;
                width: 6px;
                height: 6px;
                border-width: 6px;
            }
        }
    }
`

const SearchResult = ({ dictionary }: { dictionary: Dictionary }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const playAudio = (phonetics: Phonetic[] | undefined) => {
        var audio = new Audio();
        const phonetic: any = (phonetics && phonetics?.length > 0) && phonetics.find((phonetic: Phonetic) => {
            if (phonetic.audio && phonetic.audio?.length > 0) {
                return phonetic;
            }
        });
        if (phonetic) {
            setIsPlaying(true);
            audio.src = phonetic.audio;
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                // do stuff with the duration
                const duration = (audio.duration * 1000) + 200;
                setTimeout(() => {
                    setIsPlaying(false);
                }, duration);
            });
        }
    }

    useEffect(() => {
        const isDisabled = (dictionary.phonetics && dictionary.phonetics.length > 0) && dictionary.phonetics.find((item: any) => item.audio);
        !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
    }, [dictionary]);

    return <>
        <SearchResultWrapper as={motion.section} initial={{ y: 20 }} animate={{ y: 0 }}>
            <ResultItem>
                <ResultItemName>{dictionary.word}</ResultItemName>
                <ResultItemDescription>{dictionary.phonetic}</ResultItemDescription>
            </ResultItem>
            {dictionary.phonetics &&
                <PlayButton disabled={isDisabled} className={`${isPlaying ? 'playing' : ''}`} onClick={() => playAudio(dictionary.phonetics)}></PlayButton>
            }
        </SearchResultWrapper>
    </>
}

export default SearchResult;