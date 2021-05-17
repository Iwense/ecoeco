import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  slider:{
    overflow: 'auto',
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  title:{
    fontSize:18,
    fontWeight: 700,
  },
  loader:{
    color: Colors.red,
  },
  btn:{
    height: '50px',
  },
}, {index: 3});