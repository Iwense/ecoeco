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
    paddingBottom: 72,
    boxSizing: 'border-box',
  },
  black:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    background: Colors.black,
    width: '100%',
    minHeight: 100,
    padding: '12px 24px',
    boxSizing: 'border-box',
  },
  title: {
    color: Colors.white,
    fontSize:24,
    fontWeight: 700,
  },
  header:{
    padding: '12px 24px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content:{
    padding: 12,
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
  footer:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '0 0 18px 18px',
    boxSizing: 'border-box',
    padding: '4px 12px',
    background: Colors.white,
    marginTop: 12,
  },
  footerLogo:{
    borderRadius: '50%',
    width: 40,
    height: 40,
    background: Colors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize:12,
    color: Colors.white,
  },
  footerText:{
    fontSize:14,
    fontWeight: 700,
  },
  footerTextTini:{
    fontSize:12,
    color: Colors.gray,
  },
  promoBlock:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    textAlign: 'center',
    border: `1px solid ${Colors.liteGray}`,
    borderRadius: 18,
  },
  promoText:{
    fontSize:14,
  },
  promoCode:{
    fontWeight: 900,
    fontSize: 18,
  },
  condition:{
    marginTop: 12,
  },
  conditionTitle:{
    fontWeight: 700,
  },
  conditionPoint:{
    padding: '0 0 0 12px',
    marginTop: 4,
    fontSize: 14,
    position: 'relative',
    '&::before':{
      content: '""',
      display: 'block',
      position: 'absolute',
      top:7,
      left: 0,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: Colors.red,
    }
  },
  btn:{
    marginTop: 50,
    width:'100%',
  },
}, {index: 3});