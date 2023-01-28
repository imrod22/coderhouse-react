import { extendTheme} from "@chakra-ui/react";
import "@fontsource/biorhyme";
import "@fontsource/raleway";

const theme = extendTheme({
    fonts: {
        heading: "raleway",
        body: "biorhyme",
    }
});

export default theme;
