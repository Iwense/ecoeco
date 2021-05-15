import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import { IProps } from "./Input";

export const useStyles =  makeStyles(() => ({
    input:{
        width: "100%",
        borderBottom: `1px solid ${Colors.liteGray}`,
        fontWeight: 700,
        fontSize:16,
    },
    inputLabel:{
      fontSize: 14,
      fontWeight: 700,
    },
    inputBox:{
      // marginTop: 12,
    },
    error: {
      color: Colors.red,
      fontSize: 12,
      fontWeight: 500,
      marginLeft: 8,
    },
    endIcon:{
      fill: Colors.gray,
      width: 20,
      height: 20,
      cursor: 'pointer',
      '&:hover': {
        fill: Colors.gray,
      }
    },
}), {index:1});