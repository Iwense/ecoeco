import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection: 'column',
    marginBottom: 8,
    width: '100%',
  },
  text:{
    fontSize: 12,
  },
  item:{
    display: 'grid',
    gridTemplateColumns: 'auto 2fr 1fr',
    alignItems: 'center'
    // gridGap: 4,
  },
  circle:{
    width:16,
    height: 16,
    borderRadius: '50%',
    background: Colors.red,
    marginRight: 4,
  },
  price:{
    color: Colors.black,
    fontSize: 12,
    fontWeight: 700,
  },
  line:{
    marginTop: 16,
  },
  
}, {index: 2});