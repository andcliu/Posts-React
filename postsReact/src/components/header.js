import React, {Component} from 'react';

class Header extends Component{
	render(props){
		const headerStyle={
			// 'backgroundImage':'url('+this.props.headerImg+')',
			'backgroundColor':'#011',
			'height':'55vh',
			'backgroundSize':'100%',
			'backgroundPosition':'bottom',
			'backgroundRepeat':'no-repeat',
			'boxShadow':'1px 1px 1px #000',
			'display':'flex',
			'justifyContent':'center',
			'alignItems':'center',
			'textAlign':'center'
		}
		const h1Style={
			'color':'#FFF',
			'textShadow':'1px 1px 1px #888',
			'fontSize':'4.5rem'
		}
		return(
			<div style={headerStyle}>
				<h1 style={h1Style}>
					React on Rails <br />
					Post API
				</h1>
			</div>
		)
	}
}

export default Header;