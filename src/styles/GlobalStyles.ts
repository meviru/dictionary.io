import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    border: none;
    max-width: 100%;
}

html,
body {
    font-family: "${({ theme }) => theme.font}", sans-serif;
    height: 100%;
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    line-height: 1.2;
    font-weight: normal;
    background-color: ${({ theme }) => theme.body};
    @media (max-width: 767px) {
        font-size: 18px;
    }
}

ul, ol {
    list-style: none;
}
 
a {
    color: ${({ theme }) => theme.text};
}

input,
textarea,
button,
select {
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
    &[disabled] {
        pointer-events: none;
        opacity: 0.5;
    }
}


::placeholder {
    color: ${({ theme }) => theme.placeholder};
}

::-webkit-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
}

::-moz-placeholder {
    color: ${({ theme }) => theme.placeholder};
}

:-ms-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #282B30;
  border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
  background: #6C727F; 
  border-radius: 5px;
}

.Toastify__toast-container {
    width: 375px;
    max-width: 100%;
}

.Toastify__toast {
    font-family: "Newsreader", sans-serif;
    font-size: 14px;
    font-weight: 500;
}`