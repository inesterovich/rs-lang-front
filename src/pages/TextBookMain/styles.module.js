import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  moduleContainer: {
    height: '100%',
  },
  moduleList: {
    padding: '20px 50px',
    height: '100%',
    flexGrow: '1',
  },
  moduleCardLink: {
    height: '100%',
    width: '100%',
    textDecoration: 'none',
  },
  CardContainer: {
    height: '100%',
  },
  moduleCardHeaderWrapper: {
    maxWidth: '100%',
    height: '100%',
  },
  moduleCardHeader: {
    maxWidth: '100%',
    height: '100%',
    opacity: '0.8',
    transition: '0.1s',
  },
  moduleCardWrapper: {
    borderRadius: '10px',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    "&:hover > moduleCardHeader:hover": {
      opacity: '1',
    }
  },
  moduleCardBottom: {
    background: '#fafafa',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  moduleNumber: {
    fontSize: '74px',
  },
}))