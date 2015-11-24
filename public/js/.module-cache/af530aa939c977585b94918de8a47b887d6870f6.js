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
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.value = '';
        this.refs.text.value = '';

        return;
    },


    render: function () {
        return (
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "say something....", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
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

    handleCommentSubmit: function (comment) {
        console.info('comment==========>' + comment.toSource());
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),

            error: function (xhr, status, err) {
                console.error(this.props.url, status, err);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        {/*this.loadCommentsFromServer();*/}
        {/*setInterval(this.loadCommentsFromServer, this.props.pollInterval);*/}
    },

    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "CommentBox"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement("h1", null, "------------------我是分界线--------------"), 
                React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, {url: "/api"}),
    document.getElementById("content")
);