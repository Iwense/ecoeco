import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${Colors.liteGray}`,
    padding: '8px 0px',
    width: '100%',
    marginTop: 12,
  },
  title:{
    color: Colors.black,
    fontSize: 14,
    fontWeight: 700,
  },
  value:{
    color: Colors.black,
    fontSize: 14,
    fontWeight: 500,
  },
  
}, {index: 1});