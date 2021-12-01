import { createGlobalStyle } from "styled-components";
import InterBlack from "../fonts/Inter-Black.otf";
import InterBold from "../fonts/Inter-Bold.otf";
import InterExtraBold from "../fonts/Inter-ExtraBold.otf";
import InterExtraLight from "../fonts/Inter-ExtraLight.otf";
import InterLight from "../fonts/Inter-Light.otf";
import InterMedium from "../fonts/Inter-Medium.otf";
import InterRegular from "../fonts/Inter-Regular.otf";
import InterSemiBold from "../fonts/Inter-SemiBold.otf";
import InterThin from "../fonts/Inter-Thin.otf";
import InterTabularBlack from "../fonts/InterTabular-Black.otf";
import InterTabularBold from "../fonts/InterTabular-Bold.otf";
import InterTabularExtraBold from "../fonts/InterTabular-ExtraBold.otf";
import InterTabularExtraLight from "../fonts/InterTabular-ExtraLight.otf";
import InterTabularLight from "../fonts/InterTabular-Light.otf";
import InterTabularMedium from "../fonts/InterTabular-Medium.otf";
import InterTabularRegular from "../fonts/InterTabular-Regular.otf";
import InterTabularSemiBold from "../fonts/InterTabular-SemiBold.otf";
import InterTabularThin from "../fonts/InterTabular-Thin.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'InterTabular-Thin';
        src: url(${InterTabularThin});
    }
    @font-face {
        font-family: 'InterTabular-SemiBold';
        src: url(${InterTabularSemiBold});
    }
    @font-face {
        font-family: 'InterTabular-Regular';
        src: url(${InterTabularRegular});
    }
    @font-face {
        font-family: 'InterTabular-Medium';
        src: url(${InterTabularMedium});
    }
     @font-face {
        font-family: 'InterTabular-Light';
        src: url(${InterTabularLight});
    }
    @font-face {
        font-family: 'InterTabular-ExtraLight';
        src: url(${InterTabularExtraLight});
    }
    @font-face {
        font-family: 'InterTabular-ExtraBold';
        src: url(${InterTabularExtraBold});
    }
    @font-face {
        font-family: 'InterTabular-Bold';
        src: url(${InterTabularBold});
    }
    @font-face {
        font-family: 'InterTabular-Black';
        src: url(${InterTabularBlack});
    }
    @font-face {
        font-family: 'Inter-Black';
        src: url(${InterBlack});
    }
    @font-face {
        font-family: 'Inter-Bold';
        src: url(${InterBold});
    }
    @font-face {
        font-family: 'Inter-ExtraBold';
        src: url(${InterExtraBold});
    }
    @font-face {
        font-family: 'Inter-Light';
        src: url(${InterLight});
    }
    @font-face {
        font-family: 'Inter-ExtraLight';
        src: url(${InterExtraLight});
    }
    @font-face {
        font-family: 'Inter-Medium';
        src: url(${InterMedium});
    }
    @font-face {
        font-family: 'Inter-Regular';
        src: url(${InterRegular});
    }
    @font-face {
        font-family: 'Inter-SemiBold';
        src: url(${InterSemiBold});
    }
    @font-face {
        font-family: 'Inter-Thin';
        src: url(${InterThin});
    }

    * {
        box-sizing: border-box;
    }
    /* Inter-Regular
    InterTabular-Light
    Inter-Medium
    InterTabular-Light
    Inter-Light */
    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: 'Inter-Regular', sans-serif;
        color: ${({ theme }) => theme.color};
        background: ${({ theme }) => theme.background};
    }
`;

export default GlobalStyle;
