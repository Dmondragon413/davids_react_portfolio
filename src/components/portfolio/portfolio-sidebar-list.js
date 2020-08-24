import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-item-img">
                    <img src={portfolioItem.thumb_image_url}/>
                </div>


                <div className="text-content">
                    <div className='title'>{portfolioItem.name}</div>

                    <div className="actions">
                        <a onClick={() => props.handleEditClick(portfolioItem)} className="action-icon">
                            <FontAwesomeIcon icon="edit"/>
                        </a>

                        <a onClick={() => props.handleDeleteClick(portfolioItem)} className="action-icon">
                            <FontAwesomeIcon icon="trash"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="portfolio-sidebar-wrapper">{portfolioList}</div>
    )
}


export default PortfolioSidebarList