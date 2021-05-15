import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    padding: '0 12px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
  },
  slider:{
    overflow: 'auto',
  },
  content:{
    flex: '1 1 auto'
  },
  subtitle:{
    fontSize:12,
    marginTop:4,
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  nameWrapper:{
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '100%',
  },
  inputWrapper:{
    flex: '0 1 80%'
  },
  itemLine:{
    display: 'grid',
    gridTemplateColumns: '6fr auto 1fr',
    marginTop: 12,
    borderBottom: `1px solid ${Colors.liteGray}`
  },
  input:{
    border:0,
  },
  nameList:{
    fontSize:18,
    fontWeight:700,
  },
  pencil:{
    width: 26,
    height: 26,
    fill: Colors.gray,
  },
  listWrapper:{
    marginTop: 24,
  },
  amountBox:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    padding: '0 12px',
    borderRadius: 4,
    background: Colors.pink,
    margin: '0 8px 4px 0',
  },
  amountBoxText:{
    fontSize: 10,
    fontWeight: 700,
  },
  iconPlus:{
    width: 30,
    height: 30,
    fill: Colors.darkGray,
    marginTop:16,
  },
  btn:{
    width: '100%',
  },

}, {index: 3});