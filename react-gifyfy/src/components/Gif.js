import React from 'react'
import Container from '@material-ui/core/Container';
import { Grid } from '@giphy/react-components'

import { GiphyFetch } from '@giphy/js-fetch-api'


const Gif = (props) => {
	const test = props.value
let i=3
	const gf = new GiphyFetch('8O0wNvwJ3xevkZJUhlh08czIBowzn6NU')
	let fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
    if(test==='trending'){
		i=4
		alert('trend')
	fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
	alert(fetchGifs)
	}
	else
	{
		
	fetchGifs = (offset: number) => gf.search('dogs',{ offset, limit: 30 })
	alert(fetchGifs)
	}
	
    return(
	<div id="gifs" class="gifs">
		<Container maxWidth="lg">
	<Grid width={1230} columns={i} gutter={6} fetchGifs={fetchGifs} />
	</Container>
        </div>
	)
}

export default Gif;