import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    html, body {
        min-height: 100vh;
    }
    body {
        display: flex;
        flex-direction: column;
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        line-height: 1;
        font-weight: 400;
    }
    button {
        font-family: 'Ubuntu', sans-serif;
        background-color: transparent;
    }
    picture {
        display: block;
    }
    .header {
        flex: 0 0 auto;
    }
    main {
        width: 100%;
        flex: 1 0 auto;
    }
    .footer {
        flex: 0 0 auto;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    svg {
        width: 100%;
        height: 100%;
    }
    textarea {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
    }
`
