import { extendTheme} from "@chakra-ui/react";
import "@fontsource/biorhyme";
import "@fontsource/raleway";

const theme = extendTheme({
    fonts: {
        heading: "raleway",
        body: "biorhyme",
    },
    styles: {
        global: () => ({
          body: {
            color: 'default',
            bg: '#fcf5d9',
          },
        }),
      },
});

export default theme;
