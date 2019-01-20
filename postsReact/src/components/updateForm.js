import React, {Component} from 'react';
import { Jumbotron, Button, Form, Input } from 'reactstrap';

export default class UpdateForm extends Component{
	constructor(props){
		super(props);
		this.state={
			title:'',
			description:'',
			date_posted:'',
		}

		this.handleUpdate=this.handleUpdate.bind(this);
		this.handleTitle=this.handleTitle.bind(this);
		this.handleDescr=this.handleDescr.bind(this);
		this.handleDate=this.handleDate.bind(this);
	}

	handleTitle=(e)=>{
		this.setState({title:e.target.value})
	}

	handleDescr=(e)=>{
		this.setState({description:e.target.value})
	}

	handleDate=(e)=>{
		this.setState({date_posted:e.target.value})
	}

	handleUpdate=(e)=>{
		e.preventDefault();
		this.props.updateItem(this.props.id,this.state.title,this.state.description,this.state.date_posted)
	};

	render(props){
		return(	
			<Jumbotron>
				<h3>Update {this.props.title}</h3>
				<Form>
					Title: <Input type='text' name='' value={this.state.title} placeholder={this.props.title} onChange={this.handleTitle} /><br />
					Description: <Input type='text' name='' value={this.state.description} placeholder={this.props.description} onChange={this.handleDescr} /><br />
					Date Posted: <Input type='date' name='' value={this.state.date_posted} placeholder={this.props.date_posted} onChange={this.handleDate} /><br/>
					<Button color='primary' onClick={this.handleUpdate}>Update</Button>
				</Form>
			</Jumbotron>
		)
	}
};