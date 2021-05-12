import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
    mainWrapper:{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    content: {
        minHeight: 'calc(100vh - 60px)',
        background: Colors.red,
        paddingTop: 60,
    },
    footer: {
        position: 'fixed',
        width:'100%',
        height:60, 
        background: Colors.white,
        borderTop: `1px solid ${Colors.liteGray}`,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 6,
        boxSizing: 'border-box',
        zIndex: 999,
    },
}))
