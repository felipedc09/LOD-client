import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: '15px', 
      padding: '15px',
      backgroundColor: 'rgb(100,200,200)',
      },
  });

  export default useStyles