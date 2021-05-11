import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  button: {
    background: Colors.red,
    borderRadius: 8,
    padding: '8px 16px',
    width: 'fit-content',
    '&:hover': {
      background:Colors.hoverRed,
    }
  },
  text:{
    color: Colors.white,
    fontSize: 15,
    fontWeight: 700,
  },
  
}, {index: 1});