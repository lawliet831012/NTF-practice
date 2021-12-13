import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  headerBar: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
  },
  headerBack: {
    position: 'absolute',
    left: 0,
    width: 0,
    height: 0,
    borderTop: '12px solid transparent',
    borderRight: '24px solid black',
    borderBottom: '12px solid transparent',
  }
}));
