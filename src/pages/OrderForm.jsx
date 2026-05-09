import React from 'react';

const OrderForm = () => {
  return (
    <div className="form-container">
      <h2 style={{textAlign: 'center'}}>ትዕዛዝ ማቅረቢያ</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="ሙሉ ስም" required />
        <input type="tel" placeholder="ስልክ ቁጥር" required />
        <select style={{padding: '10px'}}>
          <option>የምርት አይነት ይምረጡ</option>
          <option>ዜሮ ጠጠር</option>
          <option>አሸዋ</option>
          <option>ድንጋይ</option>
        </select>
        <input type="number" placeholder="መጠን (በሜትር ኩብ)" required />
        <button type="submit">ትዕዛዝ ላክ</button>
      </form>
    </div>
  );
};

export default OrderForm;