import React, { useState } from 'react';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

import './StockForm.css';

function StockForm(props) {
  const [stockSymbol, setStockSymbol] = useState('');
  // last 10 days
  const [initialDate, setInitialDate] = useState(new Date(new Date().setDate(new Date().getDate() - 10)).toJSON().slice(0, 10));
  const [finalDate, setFinalDate] = useState('');
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [risk, setRisk] = useState('conservative');
  const [stockSymbolRequired, setStockSymbolRequired] = useState(false);
  const [initialDateRequired, setInitialDateRequired] = useState(false);
  const [finalDateRequired, setFinalDateRequired] = useState(false);

  const clickedCheckStocks = () => {
    if (!stockSymbol) {
      setStockSymbolRequired(true);
      return;
    } else {
      setStockSymbolRequired(false);
    }
    if (!initialDate) {
      setInitialDateRequired(true);
      return;
    } else {
      setInitialDateRequired(false);
    }

    if (finalDate && new Date(initialDate) > new Date(finalDate)) {
      setFinalDateRequired(true);
      return;
    } else {
      setFinalDateRequired(false);
    }

    props.checkStocks({
      stockSymbol,
      initialDate,
      finalDate,
      facebook,
      twitter,
      instagram,
      risk
    });
  }

  const formatMaxDate = new Date().toJSON().slice(0, 10);
  return (
    <div className="stockForm">
      <Input id={'stockSymbol'} label={'Stock Symbol'} required={stockSymbolRequired} inputOptions={{ type: 'text' }} value={stockSymbol} changed={(event) => setStockSymbol(event.target.value)} />
      <Input id={'fromDate'} label={'From Date'} required={initialDateRequired} inputOptions={{ type: 'date', max: formatMaxDate }} value={initialDate} changed={(event) => setInitialDate(event.target.value)} />
      <Input id={'toDate'} label={'To Date'} required={finalDateRequired} inputOptions={{ type: 'date', max: formatMaxDate }} value={finalDate} changed={(event) => setFinalDate(event.target.value)} />
      <Input id={'facebook'} label={'Facebook'} inputOptions={{ type: 'checkbox' }} value={facebook} changed={(event) => setFacebook(event.target.checked)} />
      <Input id={'twitter'} label={'Twitter'} inputOptions={{ type: 'checkbox' }} value={twitter} changed={(event) => setTwitter(event.target.checked)} />
      <Input id={'instagram'} label={'Instagram'} inputOptions={{ type: 'checkbox' }} value={instagram} changed={(event) => setInstagram(event.target.checked)} />
      <Input id={'risk'} label={'Risk'} inputType={'select'} inputOptions={{ options: [{ value: 'conservative', label: 'Convervative' }, { value: 'balanced', label: 'Balanced' }, { value: 'Dynamic', label: 'Dynamic' }] }} value={risk} changed={(event) => setRisk(event.target.value)} />
      <Button clicked={() => clickedCheckStocks()}>Check Stocks</Button>
    </div>
  );



}

export default StockForm