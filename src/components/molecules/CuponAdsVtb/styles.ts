import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';
import {IProps} from './CuponAdsVtb'
import VTB from '../../../assets/jpg/vtb.jpg'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 18,
    boxShadow: `0px 12px 24px rgba(0, 0, 0, 0.06)`,
    width: '100%',
    boxSizing: 'border-box',
    margin: '12px 0',
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
  black:{
    padding: '12px 40px 12px 24px',
    background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(${VTB}) `,
    backgroundSize: 'cover',
    borderRadius: '18px 18px 0 0',
    boxSizing: 'border-box',
  },
  title:{
    color: Colors.white,
    fontSize:24,
    fontWeight: 900,
  },
  subtitle:{
    color: Colors.white,
    fontSize:14,
    fontWeight: 500,
  },
  promo:{
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  promoText:{
    color: Colors.white,
    fontSize:12,
    marginBottom: 8,
  },
  promoCode:{
    color: Colors.white,
    fontSize:24,
    fontWeight: 700,
  },
  footer:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '0 0 18px 18px',
    boxSizing: 'border-box',
    padding: '4px 12px',
    background: Colors.white,
  },
  logo:{
    borderRadius: '50%',
    width: 30,
    height: 30,
    background: Colors.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize:10,
    color: Colors.white,
  },
  footerText:{
    fontSize:12,
    fontWeight: 700,
  },
  footerTextTini:{
    fontSize:10,
    color: Colors.gray,
  },
}, {index: 2});