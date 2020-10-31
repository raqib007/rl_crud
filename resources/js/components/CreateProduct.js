import React, {Component} from 'react';
import MyGlobleSetting from './MyGlobleSetting';
import axios from "axios";

class CreateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {productTitle: '', productBody: ''};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e){
        this.setState({
            productTitle: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            productBody: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const products = {
            title: this.state.productTitle,
            body: this.state.productBody
        };
        let uri = MyGlobleSetting.url + '/api/products';
        axios.post(uri, products).then((response) => {
            this.props.history.push('/display-item');
        });
    }

    render() {
        return (
            <div className="container card">
                <div className="card-body"><h1>Create Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Product Title:</label>
                                    <input type="text" className="form-control" onChange={this.handleChange1}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Product Body:</label>
                                    <textarea className="form-control" onChange={this.handleChange2} rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateProduct;
