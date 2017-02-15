import * as React from 'react';
import * as ReactDOM from 'react-dom';

import BoardComponent from './components/board/BoardComponent';

interface MyProps {}
interface MyState {}

class App extends React.Component<MyProps, MyState> {
  render() {
    return (
			<BoardComponent />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
