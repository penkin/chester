import * as React from 'react';

import BlockComponent from './BlockComponent';

interface MyProps {}
interface MyState {}

export default class RowComponent extends React.Component<MyProps, MyState> {
	render() {
		return (
			<div className="row clearfix">
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
				<BlockComponent />
			</div>
		);
	}
}
