import 'styled-components';

import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Theme['colors'];
        fonts: Theme['fonts'];
        fontSizes: Theme['fontSizes'];
        spacing: Theme['spacing'];
        borderRadius: Theme['borderRadius'];
        shadows: Theme['shadows'];
        breakpoints: Theme['breakpoints'];
        zIndex: Theme['zIndex'];
    }
}
