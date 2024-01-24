import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/sales.css';

function Sales() {
  const navigate = useNavigate();
  const [checkoutType, setCheckoutType] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);


  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/menu');
      const data = await response.json();
      setMenuCategories(data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/submit-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedItems }),
      });

      if (response.ok) {
        console.log('Items submitted successfully');
        navigate('/')
      } else {
        console.error('Failed to submit items');
      }
    } catch (error) {
      console.error('Error submitting items:', error);
    }
  };

  const handleCheckoutChange = () => {
    setCheckoutType(!checkoutType);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleClearClick = () => {
    setSelectedItems([]);
  };

  const handleRemoveItem = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1); 
    setSelectedItems(newSelectedItems); 
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const menuItems = menuCategories[selectedCategory]?.items || [];

  return (
    <div className='sales-page-wrapper'>
      <div className='menu-wrapper'>
        <div className='please-look-good'>
          <div className='menu-category-container'>
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className={`menu-category ${selectedCategory === index && 'active'}`}
                onClick={() => handleCategoryClick(index)}
              >
                {category.category}
              </div>
            ))}
          </div>
        </div>
        <div className='menu-items-container'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='menu-item'
              onClick={() => handleMenuItemClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='checkout-sidebar'>
        <div className='checkout-header-container' onClick={handleCheckoutChange}>
          <h1>{checkoutType ? 'Eat In' : 'Take Out'}</h1>
        </div>
        <div className='checkout-extra-options'>
          <button onClick={handleClearClick} className='checkout-options-button'>
            Clear
          </button>
          <button className='checkout-options-button'>More Options</button>
        </div>
        <div className='selected-items-container'>
          {selectedItems.map((item, index) => (
            <div key={index} className='selected-item'>
                <h2>{item.name} - £{item.price.toFixed(2)}</h2>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className='checkout-container'>
          <h2 className='checkout-total'>Total: £{calculateTotal()}</h2>
          <div className='checkout-button-container'>
            <button onClick={selectedItems.length > 0 ? handleCheckout : null} className='checkout-button'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
