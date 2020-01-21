import React from "react";

interface Iprops {
  comment: any;
  onDeleteComment: Function;
  index: number;
}
class Comment extends React.Component<Iprops> {
  bandleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }
  render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span>:&nbsp;
          <span>{this.props.comment.content}</span>
          <span
            className="comment-delete"
            onClick={this.bandleDeleteComment.bind(this)}
          >
            删除
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
