import React from "react";
import Comment from "./Comment";

interface Iprops {
  comments: any;
  onDeleteComment: Function;
}
class CommentList extends React.Component<Iprops> {
  handleDeleteComment(index: number) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((value: any, index: number) => (
          <Comment
            comment={value}
            key={index}
            index={index}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
