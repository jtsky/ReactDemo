webpackJsonp([2,0],[function(e,t,a){a(1),e.exports=a(4)},function(e,t){var a=React.createClass({displayName:"Comment",render:function(){return React.createElement("div",{className:"comment"},React.createElement("h2",{className:"commentAuthor"},this.props.author),this.props.children)}}),n=React.createClass({displayName:"CommentList",render:function(){var e=this.props.data.map(function(e){return React.createElement(a,{author:e.author},e.text)});return React.createElement("div",{className:"commentList"},e)}}),r=React.createClass({displayName:"CommentForm",handleSubmit:function(e){e.preventDefault();var t=this.refs.author.value.trim(),a=this.refs.text.value.trim();a&&t&&(this.props.onCommentSubmit({author:t,text:a}),this.refs.author.value="",this.refs.text.value="")},render:function(){return React.createElement("form",{className:"commentForm",onSubmit:this.handleSubmit},React.createElement("input",{type:"text",placeholder:"your name",ref:"author"}),React.createElement("input",{type:"text",placeholder:"say something....",ref:"text"}),React.createElement("input",{type:"submit",value:"Post"}))}}),c=React.createClass({displayName:"CommentBox",getInitialState:function(){return{data:[]}},loadCommentsFromServer:function(){$.get(this.props.url,function(e){this.setState({data:e})}.bind(this),"json")},handleCommentSubmit:function(e){$.post(this.props.url,{data:e},function(e){console.info("handleCommentSubmitsuccess===>",e),this.setState({data:e})}.bind(this),"json")},componentDidMount:function(){this.loadCommentsFromServer()},render:function(){return React.createElement("div",{className:"commentBox"},React.createElement("h1",null,"CommentBox"),React.createElement(n,{data:this.state.data}),React.createElement("h1",null,"------------------我是分界线--------------"),React.createElement(r,{onCommentSubmit:this.handleCommentSubmit}))}});e.exports=c},,,function(e,t,a){var n=a(1),r=React.createClass({displayName:"ProductCategoryRow",render:function(){return React.createElement("tr",null,React.createElement("th",{colSpan:"2"},this.props.category))}}),c=React.createClass({displayName:"ProductRow",render:function(){var e=this.props.product.stocked?this.props.product.name:React.createElement("span",{style:{color:"red"}},this.props.product.name);return React.createElement("tr",null,React.createElement("td",null,e),React.createElement("td",null,this.props.product.price))}}),l=React.createClass({displayName:"ProductTable",render:function(){var e=[],t=null;return this.props.products.forEach(function(a){-1===a.name.indexOf(this.props.filterText)||!a.stocked&&this.props.inStockOnly||(a.category!==t&&e.push(React.createElement(r,{category:a.category,key:a.category})),e.push(React.createElement(c,{product:a,key:a.name})),t=a.category)}.bind(this)),React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name"),React.createElement("th",null,"Price"))),React.createElement("tbody",null,e))}}),s=React.createClass({displayName:"SearchBar",handleChange:function(){this.props.onUserInput(this.refs.filterTextInput.value,this.refs.inStockOnlyInput.checked)},render:function(){return React.createElement("form",null,React.createElement("input",{type:"text",placeholder:"搜索。。。。",value:this.props.filterText,ref:"filterTextInput",onChange:this.handleChange}),React.createElement("p",null,React.createElement("input",{type:"checkbox",checked:this.props.inStockOnly,ref:"inStockOnlyInput",onChange:this.handleChange})," ","Only show products in stock"))}}),o=React.createClass({displayName:"FilterableProductTable",getInitialState:function(){return{data:[],filterText:"",inStockOnly:!1}},loadDate:function(){$.get(this.props.url,function(e){this.setState({data:e})}.bind(this),"json")},handleUserInput:function(e,t){this.setState({filterText:e,inStockOnly:t})},render:function(){var e=this.props.url;return React.createElement("div",null,React.createElement(n,{url:e}),"/*",React.createElement(s,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onUserInput:this.handleUserInput}),React.createElement(l,{products:this.state.data,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly}),"*/")}});e.exports=o,ReactDOM.render(React.createElement(o,{url:"/api"}),$(".container")[0])}]);