import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;

    .poppins-thin {
      font-weight: 100;
    }

    .poppins-extralight {
      font-weight: 200;
    }

    .poppins-light {
      font-weight: 300;
    }

    .poppins-regular {
      font-weight: 400;
    }

    .poppins-medium {
      font-weight: 500;
    }

    .poppins-semibold {
      font-weight: 600;
    }

    .poppins-bold {
      font-weight: 700;
    }

    .poppins-extrabold {
      font-weight: 800;
    }

    .poppins-black {
      font-weight: 900;
    }

    .poppins-thin-italic {
      font-weight: 100;
      font-style: italic;
    }

    .poppins-extralight-italic {
      font-weight: 200;
      font-style: italic;
    }

    .poppins-light-italic {
      font-weight: 300;
      font-style: italic;
    }

    .poppins-regular-italic {
      font-weight: 400;
      font-style: italic;
    }

    .poppins-medium-italic {
      font-weight: 500;
      font-style: italic;
    }

    .poppins-semibold-italic {
      font-weight: 600;
      font-style: italic;
    }

    .poppins-bold-italic {
      font-weight: 700;
      font-style: italic;
    }

    .poppins-extrabold-italic {
      font-weight: 800;
      font-style: italic;
    }

    .poppins-black-italic {
      font-weight: 900;
      font-style: italic;
    }
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyle;
