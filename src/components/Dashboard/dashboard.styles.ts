import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((theme)=>({
    form: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 0)
      },
    button: {
        margin: theme.spacing(0, 1)
      },
    divider: {
        margin: theme.spacing(1, 0)
      },
  }));

  export default useStyles