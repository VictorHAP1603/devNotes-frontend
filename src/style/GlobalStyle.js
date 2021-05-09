import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }



    html, body, #root, #app {
        height: 100%;
    }

    #app {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        padding: 60px 30px;
    }

    body {
        background-color: #e4e7ef;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

`;
