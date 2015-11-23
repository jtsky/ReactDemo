/**
 * Created by Administrator on 2015/11/20.
 */
/*var data = [
 {author: "Pete Hunt", text: "this is one comments"},
 {author: "Jordan Walke", text: "this is *another* comment"}
 ];*/

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
        var commentNodes = this.props.data.map(
            function (comment) {
                return (
                    React.createElement(Comment, {author: comment.author}, 
                        comment.text
                    )
                );
            }
        );

        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
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
    getInitialState: function () {
        return {data: []}
    },

    loadCommentsFromServer: function () {
        $.ajax({
                url: this.props.url,
                dataType: "json",
                cache: false,
                success: function (data) {
                    this.setState({data: data});
                    console.info(data);
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error("error===>" + this.props.url, status, err.toString());
                }.bind(this)
            }
        );
    },

    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "CommentBox"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement("h1", null, "------------------我是分界线--------------"), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, {url: "/api", pollInterval: 2000}),
    document.getElementById("content")
);