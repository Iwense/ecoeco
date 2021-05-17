import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';
import { IProps } from './SliderBlock';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 'fit-content',
    boxSizing:'border-box',
    minWidth: 150,
    height: 150,
    overflow:'hidden',
    boxShadow:`0px 12px 24px rgba(0, 0, 0, 0.06)`,
    borderRadius: 12,
    padding: ({cupon} : IProps) => cupon ? 0 :12,
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
  black:{
    padding: 12,
    minHeight: '65%',
    background: ({color}: IProps) => Colors[color!],
    borderRadius: '12px 12px 0 0',
    boxSizing: 'border-box',
    width: '100%',
  },
  titleCupon:{
    color: Colors.white,
    fontSize:18,
    fontWeight: 900,
  },
  footer:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '0 0 12px 12px',
    boxSizing: 'border-box',
    padding: '4px 8px',
  },
  logo:{
    borderRadius: '50%',
    minWidth: 24,
    minHeight: 24,
    width:24,
    height:24,
    background: ({color}: IProps) => Colors[color!],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize:7,
    color: Colors.white,
  },
  footerText:{
    fontSize:10,
    fontWeight: 700,
  },
  footerTextTini:{
    fontSize:10,
    color: Colors.gray,
  },
  bonusIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    background: Colors.yellow,
    borderRadius: 3,
    marginRight: 4,
},
char:{
  fontSize: 12,
  fontWeight: 800,
},
  
}, {index: 1});