import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  scaner:{
  },
  text:{
    color: Colors.white,
    fontWeight: 700,
    textAlign: 'center',
    width: '100%',
    marginTop: 12,
  },
  btn:{
    width: '100%',
    margin: '12px 0px',
  },
}, {index: 3});