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
  productListText:{
    marginTop: 12,
    width: '100%',
    textAlign: 'center',
    color: Colors.gray,
    fontSize: 12,
    opacity: 0.5,
  },
  btn:{
    height:50,
  },
}, {index: 3});