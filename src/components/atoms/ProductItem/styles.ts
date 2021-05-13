import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'grid',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
  },
  line:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  center:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title:{
    color: Colors.black,
    fontSize: 14,
    fontWeight: 700,
  },
  circle:{
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: Colors.black,
    marginRight: 4,
  },
  amountBox:{
    width: 'fit-content',
    padding: '0 4px',
    borderRadius: 4,
    background: Colors.pink,
    marginRight: 8,
  },
  amountBoxText:{
    fontSize: 10,
    fontWeight: 700,
  },
  amount:{
    color: Colors.black,
    fontSize: 14,
    fontWeight: 500,
  },
  
}, {index: 1});