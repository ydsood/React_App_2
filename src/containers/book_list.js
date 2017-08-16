import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


//Container is a react component that has a direct connection to the Redux state
//Also called smart components
class BookList extends Component{

	renderList(){
		return this.props.books.map((book) => {
			return (
					<li key={book.title} 
						onClick = {() => this.props.selectBook(book)}
						className="list-group-item"> {book.title} </li>
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

//The following functions allow state and actions to be accessed inside props for the component.


//Glue between react and redux
function mapStateToProps(state){
	//Whatever is returned from here will show up as props inside BookList
	return {
		books: state.books
	};
}

//Anything returned back from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called the result should be passed to all reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote bookList from a component to a container - it needs to know about this new dispatch method, selectBook.
//Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);