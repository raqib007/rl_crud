import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', products: ''};
    }

    componentDidMount(){
        axios.get(MyGlobleSetting.url + '/api/products')
            .then(response => {
                console.log(response);
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        if(this.state.products instanceof Array){
            return this.state.products.map(function(object, i){
                return <TableRow key={i} obj={object}/>;

            })
        }
    }

    render(){
        return (
            <div className="container card">
                <div className="card-body"><h1>Products</h1>
                    <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            <Link to="/add-item">Create Product</Link>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-hover table-condensed">
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product Title</td>
                            <td>Product Body</td>
                            <td width="200px">Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default DisplayProduct;
