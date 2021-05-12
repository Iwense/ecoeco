import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'space-between',
    flexDirection: 'column',
    marginTop: 16,
    padding: '24px 12px',
    width: '100%',
  },
  text:{
    fontSize: 12,
  },
  item:{
    display: 'grid',
    gridTemplateColumns: 'auto 2fr 1fr',
    alignItems: 'center'
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
  buttons:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
}, {index: 2});