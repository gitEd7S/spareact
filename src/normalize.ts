import { createGlobalStyle } from 'styled-components'

export const Normalize = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    html,
    body,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    address,
    small,
    strong,
    ol,
    ul,
    form,
    button,
    label,
    legend,
    caption,
    article,
    aside,
    canvas,
    details,
    figure,
    figcaption,
    nav,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
    }
    blockquote, q {
        quotes: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button {
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: white;
    }
    input, textarea {
        outline: none;
        border-radius: 0;
        border: none;
        box-shadow: none;
        padding: 0;
        &::placeholder {
            opacity: 1;
        }
    }
    ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        &:focus {
            text-decoration: none;
            outline: none;
        }
    }
`
