import React from "react";
import './filter.css'

export const Filter = (props) => (
    <div className="filter-container">
        <h2>All Posts</h2>
        <button className="create-button" type="button">
            Create New
        </button>
        <div className="filter-bar">
            <ul>
                <li><button>Most Pouplar</button></li>
                <li><button>Not Answered</button></li>
                <li><button>Answered</button></li>
                <li><button>Most Viewed</button></li>
            </ul>
        </div>
    </div>
)