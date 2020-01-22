import { observable, action, computed } from "mobx";
//时间插件
import moment from "moment";

class AppStore {
  //你需要定义数据的类型
  @observable time: string = "2020";
  @observable todos: any = [];
  //监听time和todos发生变化的时候自动执行
  @computed get desc() {
    return `${this.time}还有${this.todos.length}条任务待完成`;
  }
  @action addTodo = (todo: any) => {
    this.todos.push(todo);
  };
  @action deleteTodo = (todo: any) => {
    this.todos.pop(todo);
  };
  @action resetTodo = () => {
    this.todos = [];
  };
  @action resetTime = () => {
    //时间插件
    this.time = moment().format("YYYY-MM-DD HH:mm:ss");
  };
}
//定义实例抛出给外部组件使用
const store = new AppStore();
setInterval(() => {
  store.resetTime();
}, 1000);

//导出一个实例
export default store;
