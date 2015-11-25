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