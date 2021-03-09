import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((theme)=>({
    list: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: theme.spacing(2), 
      padding: theme.spacing(2),
      },
  }));

  export default useStyles