import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles';



class NavBar extends Component {
	render() {
    return(
        <div className="fixed-top">
		<Container maxWidth="lg">
        <AppBar position="static">
            <h1>React~(to)~Gifyfy</h1>
		</AppBar>
		<br></br>
		<Grid container spacing={3}>
        <Grid item xs>
		  <StyledButton onClick={() => this.props.onClick('trending')}>Trending</StyledButton>
		</Grid>
        <Grid item xs>
           <StyledButton onClick={() => this.props.onClick('dogs')}>Doggo</StyledButton>
        </Grid>
        <Grid item xs>
           <StyledButton onClick={() => this.props.onClick('anime')}>Anime</StyledButton>
        </Grid>
		</Grid>
        </Container>
		<br></br>
		</div>
	)
    }
}

class Gify extends Component{

    render() {
        const moves = this.props.value.map((values) => {
        return(
	       <Grid item xs>
		      <img className="images" src={values}/>
		   </Grid>
        )
       });
    
    return(
        <div className="gifs">
	    <Container maxWidth="lg">
            <Grid container spacing={4}>{moves}</Grid>
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


class App extends Component {

    constructor(props){
	   super(props);
       this.state={value: 'laugh', urlArray: Array(9).fill('test'),}; 
       this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        let urlArray = Array(9).fill('test');
        var baseUrl = 'http://localhost:5000?param='+this.state.value;
        var that = this;
        fetch(baseUrl).then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            that.stateCall(data);
        });
    }
    
    stateCall(urlArray){
    
    	this.setState({value:"Response Received", urlArray: urlArray});
    }

    handleClick(i)
    {
	
        let urlArray = Array(9).fill('test');
        var baseUrl = 'http://localhost:5000?param='+i;
        var that = this;
        fetch(baseUrl).then((response) => {
            return response.json();
        })
        .then((data) => {
            that.stateCall(data);
        });


    }

    render() {
    return (
      <div>
      <NavBar value={this.state.value} onClick={(i) => this.handleClick(i)}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Gify value={this.state.urlArray}/>	
      </div>
    )
    }

}
export default App