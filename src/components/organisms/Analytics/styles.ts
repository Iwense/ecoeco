import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  category:{
    borderBottom: `1px solid ${Colors.liteGray}`,
    padding: '8px 0 16px 0'
  },
  title:{
    fontSize: 14,
    fontWeight: 700,
  },
  textLink:{
    color:Colors.red,
  },
  line:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    '&:last-child': {
      marginBottom: 0,
    }
  },
  lineGrid:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 16,
    marginBottom: 12,
    width: '100%',
  },
  price:{
    color: Colors.black,
    fontSize:16,
    fontWeight: 700,
  },
  ruble:{
    color: Colors.black,
    fontSize: 16,
    fontWeight: 700,
  },
  button:{
    width: '100%',
  },
}, {index: 3});