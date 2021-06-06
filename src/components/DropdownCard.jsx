import { NavLink } from 'react-router-dom';

function DropdownCard({vendor, category}) {
  return(
    <div className="col-sm-2 my-3">
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            This is some text within a card body.
          </p>
        </div>
        <div className="card-footer text-center">
          <NavLink to={"/" + category.slug + "/" + vendor.slug} className="card-link stretched-link">
            {vendor.name}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default DropdownCard;