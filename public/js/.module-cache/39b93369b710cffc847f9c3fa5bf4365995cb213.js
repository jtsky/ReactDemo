/**
 * Created by Administrator on 2015/11/20.
 */



var Comment = React.createClass({displayName: "Comment",
    render: function () {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                this.props.children
            ));
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "this is one comment "), 
                React.createElement(Comment, {author: "Jordan Walke"}, "this is *another* comment ")
            ));
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function () {
        return (
            React.createElement("div", {className: "commentForm"}, 
                "Hello World! I am a CommentForm."
            ));
    }
});

var CommentBox = React.createClass({displayName: "CommentBox",
    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, null), 
                React.createElement("br", null), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById("content")
);