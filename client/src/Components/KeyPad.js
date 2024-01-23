import React, {useState} from 'react';
import '../css/keyPad.css';
import { useNavigate } from 'react-router-dom';


function PinLock() {

    const [pin, setPin] = useState('');
    const correctPin = '000000';
    const navigate = useNavigate();

    const handleButtonClick = (n) => {
        if (pin.length < 6) {
          setPin(pin + n);
        }
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    const handleUnlock = () => {
        if (pin === correctPin) {
            navigate('/Sales');
        }
        else {
          alert('Incorrect pin. Please try again.');
          setPin('');
        }
    };

    return(
        <div className='full'>
            <div className='centerDiv'>
                <h1>Enter PIN</h1>
                <div className="numpad">
                    <h1>#{pin}</h1>
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

export default PinLock