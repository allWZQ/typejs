import React from "react";
import { inject, observer } from "mobx-react"; //注入，观察

interface IState {}
interface IProps {
  store: any;
}
@inject("store")
@observer
class Home extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props);
    this.state = {};
  }
  //方法复用
  handleTodoClick(type: string) {
    let { store } = this.props;
    switch (type) {
      case "add":
        store.addTodo("1111");
        break;
      case "delete":
        store.deleteTodo();
        break;
      case "reset":
        store.resetTodo();
        break;
      default:
    }
  }
  render() {
    let { store } = this.props;
    return (
      <div className="home">
        <div>todoList</div>
        <div>{store.desc}</div>
        <button onClick={this.handleTodoClick.bind(this, "add")}>
          添加一条任务
        </button>
        <button onClick={this.handleTodoClick.bind(this, "delete")}>
          删除一条任务
        </button>
        <button onClick={this.handleTodoClick.bind(this, "reset")}>
          重置一条任务
        </button>
        {store.todos.map((value: any, index: number) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    );
  }
}
export default Home;
