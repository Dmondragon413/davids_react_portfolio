import React, { Component } from "react"; // importing what we need from React
//  in this case, because we are creating what is called a CLASS COMPONENT,
//  .. we have to open Component as well, which goes in curly braces.
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component { // defining the class, that extends Component; which gives us access to React.
    constructor(props) { //  a constructor does is it gives you the ability to set up some processes automatically.
        super(props); //     super() is saying, "I want you to go up to the parent class,(Right now, that is this component class here) and I want you to bring in all of it, because it's considered a super class," and this is a child class.

        this.state = {  //  Whenever you add this.state = ... that is called an "initial State"
            pageTitle: 'Welcome to my portfolio',  //    ..it is the state our component is going to automatically get once its called.
            isLoading: false,
            data: []
        };  //  added to our render method below  (line 29)

        this.handleFilter = this.handleFilter.bind(this)


    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems()
        } else {
            this.getPortfolioItems(filter)
        }
    }

    getPortfolioItems(filter = null) {
        axios
          .get('https://davidmondragon.devcamp.space/portfolio/portfolio_items')
          .then(response => {
        // handle success
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category  === filter
                    })
                })
            } else {
                this.setState({
                    data: response.data.portfolio_items
                })
            }
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
    }

    portfoliosItems() {
//  looping over data, & simutaeusnosly build a list of portfolios items, & the one recommmended way to do so in REACT is by using...
//  ..the MAP FUNCTION.
        return this.state.data.map(item => { //   MAP function
            return ( // map ALWAYS needs a return statement. here we're returning our component that we created.

            <PortfolioItem 
                key={item.id} 
                item={item} 
            />
            )
        }) //   When working with PROPS ^^^^  you need to define the list of props & pass data to them...
        //    ... whenever calling the component. Then pass in the props to the function arguments (in portfolio-items.js file) so that...
        //    ... child compenents knows that it's gonna receive data.
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    
    render() { //   RENDER statement
        if (this.state.isLoading) {  //  Conditional inside the RENDER method
            return <div>Loading...</div>
        }


        return ( //     then RETURN some JSX
            <div className="homepage-wrapper">
                <div className="filter-links">
                    {/* anytime we want to slide JS code into render function, we need Curly brackets*/}
                    <button className="btn" onClick={() => this.handleFilter('Computer programming')}>Programming</button>
                    <button className="btn" onClick={() => this.handleFilter('Supercar')}>SuperCar</button>
                    <button className="btn" onClick={() => this.handleFilter('Festivities')}>Festival fun</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>

                </div>

                <div className= "portfolio-items-wrapper">

                    {this.portfoliosItems()}

                </div>
            </div>
        )
    }
}

//  WE can view our application as small chunks, by using the Component-based architecture, we can create a component...
//  .. & we can reUSE them where ever we need them instead of creating seperate files and styles like the old HTML & CSS way.\
//  for example: creating a BUTTON component to use, or a form field, an image component, etc...