import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
            light:'white'
        },
        secondary: {
            main: '#6B7CFF',
            light:'#E0E4FC',
        },
    },
    typography:{
        h3:{
            fontWeight:'bold'
        },
        h4:{
            fontWeight:'bold',
        },
        h5:{
            fontWeight:'bold'
        },
        h6:{
            fontWeight:'bold'
        }
    }
})
export default theme;
