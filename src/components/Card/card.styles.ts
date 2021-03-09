import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((theme)=>({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        boxShadow: theme.shadows[1]
      },
  }));

  export default useStyles