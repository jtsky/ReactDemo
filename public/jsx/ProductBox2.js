var ProductCategoryRow = React.createClass({
    render: function () {
        return (
            <tr>
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
    render: function () {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText}/>
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly}/>
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
            filterText: '',
            data: [],
            inStockOnly: false
        }
    },

    loadDate: function () {
        $.get(this.props.url, function (data) {
            console.info(data);
            this.setState({data: data});
        }.bind(this), 'json');
    },

    componentDidMount: function () {
        this.loadDate();
    },

    render: function () {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.state.data}
                />
            </div>
        );
    }
});


ReactDOM.render(
    <FilterableProductTable url="/api/product"/>,
    $('.container')[0]
);