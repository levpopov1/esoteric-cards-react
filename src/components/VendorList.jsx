import Vendor from './Vendor';

function VendorList({vendors}) {
  return (
    <div className="row">
      {vendors.map(vendor => <Vendor key={vendor._id} vendor={vendor}/>)}
    </div>
  );
}

export default VendorList;
