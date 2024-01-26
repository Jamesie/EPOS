import { useNavigate } from 'react-router-dom';
import Payments from '@mui/icons-material/Payments';
import CreditCard from '@mui/icons-material/CreditCard';
import '../css/payType.css';

function PayType() {
    const navigate = useNavigate();
    const iconStyle = {
        fontSize: '200px'
    };

    return (
        <div className="center-content">
            <div onClick={() => navigate('/cash')} className="payType-container">
                <Payments style={iconStyle} />
            </div>
            <div onClick={() => navigate('/card')} className="payType-container">
                <CreditCard style={iconStyle} />
            </div>
        </div>
    );
}

export default PayType;
