import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

interface IState {
  comments: any;
}
interface Iprops {}

class CommentApp extends React.Component<Iprops, IState> {
  constructor(props: Iprops, state: IState) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    this._localcomments();
  }
  _localcomments() {
    let comments = localStorage.getItem("comments");
    console.log(comments);
    if (comments) {
      comments = JSON.parse(comments);
      console.log(comments);
      this.setState({
        comments
      });
    }
  }
  _saveComments(comments: any) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  handleSubmitComment(comment: object) {
    this.state.comments.push(comment);
    const comments = this.state.comments;
    this.setState({
      comments
    });
    this._saveComments(comments);
  }
  handleDeleteComment(index: any) {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({
      comments
    });
    this._saveComments(comments);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}

export default CommentApp;
