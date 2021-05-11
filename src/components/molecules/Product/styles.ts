import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 8,
    border: `1px solid ${Colors.liteGray}`,
    padding: '16px 12px',
    marginBottom: 20,
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
  textWrapper:{
    display: 'flex',
    flexDirection: 'column',
  },
  title:{
    fontSize: 14,
    fontWeight: 700,
  },
  subtitle:{
    fontSize: 14,
    fontWeight: 500,
  },
  imageBox:{
    flex: '0 1 150px',
    maxWidth:'100%',
  },
  image:{
    width: '100%',
  },
  info:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
  },
  infoTd:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight:12,
  },
  infoBox:{
    background: Colors.pink,
    width: 'fit-content',
    borderRadius: 3,
    padding: '2px 4px',
    marginRight: 8,
  },
  infoText:{
    fontWeight: 300,
    fontSize: 12,
  },
  star:{
    width: 20,
    height: 20,
    fill: Colors.gray
  },
  priceInfo:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceInfoBox:{
    background: Colors.green,
    width: 'fit-content',
    borderRadius: 3,
    padding: '2px 4px',
    marginRight: 8,
  },
  priceInfoBoxText:{
    color: Colors.white,
  },
  price:{
    color: Colors.red,
    fontSize:20,
  },
  ruble:{
    color: Colors.black,
    fontSize: 14,
  },
}, {index: 2});