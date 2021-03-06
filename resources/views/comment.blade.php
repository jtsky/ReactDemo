<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>comment</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
</head>
<body>
<div id="content"></div>
<script src="js/CommentBox.js"></script>
{{--<CommentBox url="/api"/>--}}
<script>
    ReactDOM.render(
            React.createElement(CommentBox, {url: "/api"}),
            $('#content')[0]
    );
</script>

</body>
</html>