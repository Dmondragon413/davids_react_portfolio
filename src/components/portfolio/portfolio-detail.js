import React, { Component } from "react";
import axios from "axios";

// banner_image_url: null
// category: "Computer programming"
// column_names_merged_with_images: (9) ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]
// description: "A tech school that teaches the languages of the computing world."
// id: 19268
// logo_url: "https://devcamp-space.s3.amazonaws.com/pcvnHx5PJP2vXgnnWBzure1B?response-content-disposition=inline%3B%20filename%3D%22SidneysLogo.png%22%3B%20filename%2A%3DUTF-8%27%27SidneysLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200820T164442Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=62b779c7325c9c3467ba150213164ba42b586cda92db5b454f90816a3197822a"
// name: "Bottega Tech"
// position: 0
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/p6nVcmHuKHswbsNky6pB2eBi?response-content-disposition=inline%3B%20filename%3D%22styleshot.jpg%22%3B%20filename%2A%3DUTF-8%27%27styleshot.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200820T164442Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=241910feaac80f9ffcb420f3f0ed1b3a2f97621a62cfac5e5615303b772ec814"
// url: "www.bottega.com"


export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }

    }

    UNSAFE_componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        axios.get(`https://davidmondragon.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { 
            withCredentials: true
        }).then(response => {
            console.log("response", response)
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log('getportfolioItem error', error)
        })
    }
    
    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyles = {
            background: "url(" + thumb_image_url + ") no-repeat",
        }

        const logoStyles = {
            height: "275px",
        }

        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} style={logoStyles}/>
                </div>

                <div className="portfolio-detail-description-wrapper">
                    <div className="description">
                        {description}
                    </div>
                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">Visit {name}</a>
                </div>

            </div>
        )
    }
}