/**
 * Created by Administrator on 2015/11/20.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        return (
            React.createElement("div", {className: "commentList"}, 
            "Hello World! I am a CommentList."
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
                "Hello ,World! I am a CommentBox."
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById("content")
);