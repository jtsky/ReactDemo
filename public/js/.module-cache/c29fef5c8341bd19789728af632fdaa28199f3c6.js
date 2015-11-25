var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", {colSpan: "2"}, this.props.category)
            ));
    }
});

var ProductRow = React.createClass({displayName: "ProductRow",
    render: function () {
        var name = this.props.product.stocked ?
            this.props.product.name :
            React.createElement("span", {style: {color: 'red'}}, 
                this.props.product.name
            );
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, name), 
                React.createElement("td", null, this.props.product.price)
            )
        );
    }
});

var ProductTable = React.createClass({displayName: "ProductTable",
    render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}));
            }
            rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
            lastCategory = product.category;
        }.bind(this));
        return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "Name"), 
                    React.createElement("th", null, "Price")
                )
                ), 
                React.createElement("tbody", null, rows)
            )
        );
    }
});

var SearchBar = React.createClass({displayName: "SearchBar",
    render: function () {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search...", value: this.props.filterText}), 
                React.createElement("p", null, 
                    React.createElement("input", {type: "checkbox", checked: this.props.inStockOnly}), 
                    ' ', 
                    "Only show products in stock"
                )
            )
        );
    }
});

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
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
            React.createElement("div", null, 
                React.createElement(SearchBar, null), 
                React.createElement(ProductTable, {products: this.state.data})
            )
        );
    }
});


ReactDOM.render(
    React.createElement(FilterableProductTable, {url: "/api/product"}),
    $('.container')[0]
);