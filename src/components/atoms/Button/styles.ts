import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  button: {
    background: Colors.red,
    borderRadius: 8,
    padding: 12,
    width: '100%',
    '&:hover': {
      background:Colors.hoverRed,
    }
  },
  text:{
    color: Colors.white,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: 1,
  },
  
}, {index: 1});