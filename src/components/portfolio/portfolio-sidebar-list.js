import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <div className="text-content">
          <div className="title">{portfolioItem.name}</div>
          <div className="actions">
            <a
              className="edit-icon"
              onClick={() => props.handleEditClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
            </a>
            <a
              className="delete-icon"
              onClick={() => props.handleDeleteClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="fa-regular fa-trash-can" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
