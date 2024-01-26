import React, { useState, useEffect } from 'react';
import '../css/keyPad.css';
import '../css/payType.css'
import { useNavigate } from 'react-router-dom';


function CashPage() {

    const [pin, setPin] = useState('');
    const [change, setChange] = useState('');
    const [receiptData, setReceiptData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSubmittedItems();
    }, []);
    
    const fetchSubmittedItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/submitted-items');
            const data = await response.json();
            setReceiptData(data);
    
            // Extracting Total from the nested structure and setting it to the change variable
            const totalValue = data[0][0]?.Total || ''; // Using optional chaining (?.) to handle potential undefined values
            setChange(totalValue);
        } catch (error) {
            console.error('Error fetching submitted items:', error);
        }
    };

    const handleButtonClick = (n) => {
        if (pin.length < 5) {
          setPin(pin + n);
        }
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    const handleUnlock = () => {
        if (pin.length > 0) {
            setChange((parseFloat(pin) - parseFloat(change)).toFixed(2));
        }
    };

    return(
        <div className='full'>
            <div>
                <h1>£{change}</h1>
            </div>
            <div className='centerDiv'>
                <h1>Enter Cash Amount</h1>
                <div className="numpad">
                        <h1>£{pin}</h1>
                    <div className="row">
                        <button className='keypad-button' onClick={() => handleButtonClick('7')}>7</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('8')}>8</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('9')}>9</button>
                    </div>
                    <div className="row">
                        <button className='keypad-button' onClick={() => handleButtonClick('4')}>4</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('5')}>5</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('6')}>6</button>
                    </div>
                    <div className="row">
                        <button className='keypad-button' onClick={() => handleButtonClick('1')}>1</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('2')}>2</button>
                        <button className='keypad-button' onClick={() => handleButtonClick('3')}>3</button>
                    </div>
                    <div className="row">                    
                        <button className='keypad-button red-colour' onClick={handleDelete}>Del</button>                   
                        <button className='keypad-button' onClick={() => handleButtonClick('0')}>0</button>
                        <button className='keypad-button green-colour' onClick={handleUnlock}>✓</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CashPage