import React, {Component} from 'react';
import { Table, Button, Form, Input} from 'reactstrap';
// import PropTypes from 'prop-types';

export default class Body extends Component{
	constructor(props){
		super(props);
		this.state={
			id:''
		}
		this.handleDelete=this.handleDelete.bind(this);
		this.handleUpdate=this.handleUpdate.bind(this);
	};

	handleDelete=(id) => {
		this.props.deleteItem(id)
	};

	handleUpdate=(id) =>{
		this.props.showUpdateForm(id)
	};


	render(){

		const tableStyle={
			'width':'55%',
			'padding':'5px',
			'borderRadius':'5px',
			'border':'1px solid #F9F9F9'
		}
		const trTdStyle={
			'border':'1px solid #EEE'
		}
		const tbodyStyle={
			'textAlign':'center'
		}
		const results=this.props.data;
		const tableHeader=['Title','Description','Date Posted','Action'];
		// console.log(results);
		return(
			<Table>
				<thead>
					<tr style={trTdStyle}>
						{tableHeader.map(function(k,i){
							return <th style={trTdStyle} key={i}>{k}</th>
						})}
					</tr>
				</thead>
				<tbody style={tbodyStyle}>
					 {results.map((item,i) => <tr style={trTdStyle} key={i}><td style={trTdStyle}>{item.title}</td><td style={trTdStyle}>{item.description}</td><td style={trTdStyle}>{item.date_posted}</td><td style={trTdStyle}>
					 	<Button color='danger' onClick={()=>this.handleDelete(item.id)}>Delete</Button>
					 	<Button color='primary' onClick={()=>this.handleUpdate(item.id)}>Update</Button></td></tr>)}
				</tbody>
			</Table>
		)
	}
};


