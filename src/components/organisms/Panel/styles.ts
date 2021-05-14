import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    
  },
  main:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    background: Colors.white,
    minHeight: 'calc(100vh - 120px)',
    padding: 12,
    paddingBottom: 72,
    boxSizing: 'border-box',
  },
  header:{
    padding: '12px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right:{},
  left:{
    width:30,
    height:30,
    background:'rgba(0,0,0,0.25)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 50,
    height: 50,
  },
  icon:{
    width: 20,
    height: 20,
    fill: Colors.liteGray,
  },
}, {index: 3});