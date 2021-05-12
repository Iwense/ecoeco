import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 8,
    // border: `1px solid ${Colors.liteGray}`,
    padding: '30px 12px 12px 12px',
    position: 'relative',
    boxShadow:`0px 12px 24px rgba(0, 0, 0, 0.06)`,
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
    justifyContent: 'space-between',
    flex: '1 1 80%',
    height: '100%',
  },
  title:{
    fontSize: 14,
    fontWeight: 700,
  },
  subtitle:{
    fontSize: 14,
    fontWeight: 500,
  },
  btn:{
    background: Colors.liteYellow,
    borderRadius: '8px 0 6px', 
    width: 'fit-content',
    textTransform: 'none',
    fontWeight: 700,
    padding: '4px 8px',
    marginTop: 12,
    fontSize: 12,
    minWidth: 150,
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
  priceInfo:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '0 1 10%'
  },
  priceInfoBox:{
    background: Colors.green,
    width: 'fit-content',
    padding: '2px 4px',
    marginRight: 8,
    borderRadius: '8px 0 6px',
    fontWeight: 700,
  },
  priceInfoBoxText:{
    color: Colors.white,
  },
  price:{
    color: Colors.red,
    fontSize:20,
  },
  oldPrice:{
    textDecoration: 'line-through',
    textDecorationColor: Colors.red,
  },
  sale:{
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '8px 0 6px',
    background: Colors.red,
    color: Colors.white,
    padding: '2px 8px',
    fontWeight: 700,
  },
  close:{
    position: 'absolute',
    top: 2,
    right: 2,
    width: 24,
    height: 24,
    fill: Colors.gray
  }
}, {index: 2});