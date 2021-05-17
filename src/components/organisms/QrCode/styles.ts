import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    minHeight: '100vh',
  },
  scaner:{
  },
  content:{
    boxSizing: 'border-box',
    padding: 12,
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