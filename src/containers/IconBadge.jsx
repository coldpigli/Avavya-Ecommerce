import React from 'react'
import { Link } from 'react-router-dom';

const IconBadge = ({nextPath, iconName, count }) => {
  return (
    <div className="badge">
      <Link to={nextPath}>
        <span className="material-icons md-24">{iconName}</span>
      </Link>
      <div className="badge-value top-right">{count}</div>
    </div>
  );
}

export default IconBadge;