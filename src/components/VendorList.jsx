import Vendor from './Vendor';
import { useSelector } from 'react-redux';
import { selectAllVendors } from '../redux/slices/vendorsSlice';

function VendorList() {
  const vendors = useSelector(selectAllVendors);

  return (
    <div className="row">
      {vendors.map((vendor) => (
        <Vendor key={vendor._id} vendor={vendor} />
      ))}
    </div>
  );
}

export default VendorList;
