class Product extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return (
      <div>
        <ProductSearch value={this.state.input} onChange={this.handleChange.bind(this)}></ProductSearch>
        <ProductList products={this.state.input ? this.props.products.filter(x => x.indexOf(this.state.input) > -1): this.props.products}></ProductList>
      </div>
    )
  }
}

class ProductSearch extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <input type="text" value={this.props.value} onChange={this.props.onChange.bind(this)}/>
    )
  }
}

class ProductList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {
          this.props.products.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
}

const products = ['雪碧', '可乐', '七喜', '美年达', '美年达1', '美年达2']

ReactDOM.render(
  <Product products={products}/>,
  document.getElementById('root')
)