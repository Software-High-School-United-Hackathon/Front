import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
		height: 100%;
	}
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: unset;
        list-style: none;
      font-family: "Roboto", sans-serif;
        text-decoration: none;
	    font-weight:400
    }
    *[hidden] {
        display: none;
    }
    button,label {
        cursor: pointer;
        background-color: transparent;
    }
    body {
      background-color: #F9F9F9;
    }
    blockquote, q {
        quotes: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
`;
