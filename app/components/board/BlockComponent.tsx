import * as React from 'react';

interface MyProps {}
interface MyState {}

export default class BlockComponent extends React.Component<MyProps, MyState> {
	render() {
		return (
			<div className="block" />
		);
	}
}
