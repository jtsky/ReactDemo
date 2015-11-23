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
    render: function () {
        return (
            <div className="commentForm">
            Hello World! I am a CommentForm.
            </div>);
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
            <div className="commentBox">
                <h1>CommentBox</h1>
                <CommentList data={this.state.data}/>
                <h1>------------------我是分界线--------------</h1>
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api" pollInterval={2000} />,
    document.getElementById("content")
);