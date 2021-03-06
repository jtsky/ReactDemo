var CommentBox = require('./CommentBox');

var ProductCategoryRow = React.createClass({
    render: function () {
        return (<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
});

var ProductRow = React.createClass({
    render: function () {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        }.bind(this));

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    handleChange: function () {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    },
    render: function () {
        return (
            <form>
                <input
                    type="text"
                    placeholder="搜索。。。。"
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />

                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            filterText: '',
            inStockOnly: false
        };
    },


    //初始化数据
    loadDate: function () {
        $.get(this.props.url, function (data) {
            this.setState({data: data});
        }.bind(this), 'json');
    },
    //
    /*componentDidMount: function () {
        this.loadDate();
    },*/
    //当搜索框关键字改变的时候被回调
    handleUserInput: function (filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function () {
        var url = this.props.url;
        return (
            <div>
                <CommentBox url= {url} />
                /*<SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={this.state.data}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />*/
            </div>
        );
    }
});

module.exports = FilterableProductTable;

ReactDOM.render(<FilterableProductTable url="/api"/>,$('.container')[0]);