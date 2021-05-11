import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 'max-content',
    minWidth: 150,
    height: 150,
    boxShadow:`0px 12px 24px rgba(0, 0, 0, 0.06)`,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
  },
  title:{
    color: Colors.black,
    fontSize: 15,
    fontWeight: 700,
  },
  amount:{
    color: Colors.darkGray,
    fontSize: 20,
    fontWeight: 700,
  },
  text:{
    fontWeight: 300,

  },
  
}, {index: 1});