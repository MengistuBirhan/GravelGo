// የገንዘብ መጠንን በብር ፎርማት ለማሳየት (ምሳሌ፡ 2,500.00 ብር)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ETB',
    currencyDisplay: 'code'
  }).format(amount).replace('ETB', '') + ' ብር';
};

// ቀናትን በሚያምር ሁኔታ ለመቅረጽ
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('am-ET', options);
};