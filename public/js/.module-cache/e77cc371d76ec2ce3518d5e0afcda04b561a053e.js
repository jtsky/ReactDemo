/**
 * Created by Administrator on 2015/11/25.
 */

var ProductCategoryRow = React.creatClasee({
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("th", {colspan: "2"}, 
                    this.props.category
                )
            ));
    }
});


var ProductRow = React.creatClasee({
    render: function () {
        var name = this.props.product.stocked ? this.props.product.name : React.createElement("span", {style: {color:'red'}}, 
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