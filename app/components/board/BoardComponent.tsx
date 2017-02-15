import * as React from 'react';
import RowComponent from './RowComponent';

interface MyProps {}
interface MyState {}

export default class BoardComponent extends React.Component<MyProps, MyState> {
	render() {
		return (
			<div className="chess-board">
				<RowComponent />
				<RowComponent />
				<RowComponent />
				<RowComponent />
				<RowComponent />
				<RowComponent />
				<RowComponent />
				<RowComponent />
			</div>
		);
	}
}
