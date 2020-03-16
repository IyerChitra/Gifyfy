import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class NavBar extends Component {
	render() {
    return(
        <div className="fixed-top">
		<Container maxWidth="lg">
        <AppBar position="static">
            
               
				<h1>Chitra's Gifs</h1>
				
        </AppBar>
		<br></br>
		<Grid container spacing={3}>
        <Grid item xs>
		
         <StyledButton onClick={() => this.props.onClick('trending')}>Trending</StyledButton>
		 
        </Grid>
        <Grid item xs>
          <StyledButton>Dogs</StyledButton>
        </Grid>
        <Grid item xs>
          <StyledButton>Anime</StyledButton>
        </Grid>
		</Grid>
    
		</Container>
		<br></br>
		
        </div>
		
    )
}
}

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
	fontWeight: 'bold',
	fontSize: 18,
	marginLeft: '0em',
    height: 48,
    padding: '0 162px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
export default NavBar;