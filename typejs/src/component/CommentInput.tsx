import React from "react";

interface IProps {
  onSubmit: Function;
}
interface IState {
  username?: string;
  content?: string;
}
class CommentInput extends React.Component<IProps, IState> {
  //初始化组件的全局变量
  textarea: any;
  constructor(props: IProps, state: IState) {
    super(props);
    this.state = {
      username: "",
      content: ""
    };
  }
  componentDidMount() {
    console.log(this.textarea);
    this.textarea.focus();
    this._localUsername();
  }
  _saveLocalStorage(username: string) {
    localStorage.setItem("username", username);
  }
  _localUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({
        username
      });
    }
  }
  //event的参数也需要声明数据类型
  handleUsernameChange(event: { target: { value: string } }) {
    this.setState({
      username: event.target.value
    });
  }
  handleTextareaChange(event: { target: { value: string } }) {
    this.setState({
      content: event.target.value
    });
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    this.setState({
      content: ""
    });
  }
  handleUsernameBlur(event: { target: { value: string } }) {
    this._saveLocalStorage(event.target.value);
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
              value={this.state.username}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleTextareaChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
