/**
 * Created by Administrator on 2015/11/20.
 */
var CommentBox = React.createClass({displayName: "CommentBox",
    render : function(){
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