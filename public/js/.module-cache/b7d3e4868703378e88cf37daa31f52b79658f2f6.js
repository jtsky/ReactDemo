/**
 * Created by Administrator on 2015/11/20.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        return (
            React.createElement("div", null, 
            "Hello World! I am a CommentList"
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