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
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });
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
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState: function () {
        return {data: []}
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
                <SearchBar />
                <ProductTable products={this.state.data}/>
            </div>
        );
    }
});


ReactDOM.render(
    <FilterableProductTable url="/api/product"/>,
    $('.container')[0]
);