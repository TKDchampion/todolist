import React from 'react';
import Todolist from './Todolist';

export default class App extends React.Component {
  render() {
    return <Todolist initText="開始輸入文字吧！" />;
  }
}
