/**
 * Created by Administrator on 2015/11/20.
 */
/*var data = [
 {author: "Pete Hunt", text: "this is one comments"},
 {author: "Jordan Walke", text: "this is *another* comment"}
 ];*/

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>);
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(
            function (comment) {
                return (
                    <Comment author={comment.author}>
                        {comment.text}
                    </Comment>
                );
            }
        );

        return (
            <div className="commentList">
                {commentNodes}
            </div>);
    }
});

var CommentForm = React.createClass({
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
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder = "your name" ref ='author'/>
                <input type="text" placeholder = "say something...." ref='text'/>
                <input type="submit" value = "Post"/>
            </form>
        );
    }
});

var CommentBox = React.createClass({
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
                console.info('loadCommentsFromServersucess===>', data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("loadCommentsFromServererror===>" + this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleCommentSubmit: function (comment) {
        console.info('comment====>', comment);
        /*var comments = this.state.data;
         var newComments = comments.concat([comment]);
         this.setState({data: newComments});*/
        $.ajax({
            type: 'POST',
            url: this.props.url,
            dataType: "json",
            data: {data: comment},
            success: function (data) {
                console.info('handleCommentSubmitsuccess===>', data);
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("handleCommentSubmiterror===>", this.props.url, status, err);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadCommentsFromServer();
        {/*setInterval(this.loadCommentsFromServer, this.props.pollInterval);*/
        }
    },

    render: function () {
        return (
            <div className="commentBox">
                <h1>CommentBox</h1>
                <CommentList data={this.state.data}/>
                <h1>------------------我是分界线--------------</h1>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api"/>,
    document.getElementById("content")
);