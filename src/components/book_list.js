import React, {Component} from 'react';


//Container is a react component that has a direct connection to the Redux state
//Also called smart components
export default class BookList extends from Component{

	renderList(){
		return this.props.books.map((book) => {
			return (
					<li key={book.title} className="list-group-item" {book.title} />
				);
		});
	}

	render() {
		return(
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}