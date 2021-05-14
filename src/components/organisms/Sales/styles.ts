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
  productList:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '12px 0'
  },
}, {index: 3});