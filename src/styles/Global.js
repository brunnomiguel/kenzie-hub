import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-Negative: #59323F;
        --grey-50: #868E96;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --negative: #E83F5B;

        --titles: 16px;
        --headlines: 12px;
    }

    body {
        background-color: var(--grey-4);

        width: 100%;
        min-height: 100vh;
    }
    body, input, label, select, button {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: var(--titles);
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
