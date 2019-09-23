import React, { Component } from "react"; //to create a react comp
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {        //this is how we add a new comp to our react app
  constructor(props) {
    super(props);
    this.state = { 
        selectedDish: null }    //state stores in the properties related to the component that can make use of it
    }
  
  
  onDishSelect=(dish)=> 
  {
    this.setState({ selectedDish: dish });
  }

    
  

  render() {               
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    
    return (                                             
      <div className="container">                             

        <div className="row">{menu}</div>      
        <div>
        <Dishdetail dish={this.state.selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;
