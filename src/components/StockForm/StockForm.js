import React from 'react';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

import './StockForm.css';

class StockForm extends React.Component {

    state = {
        stockSymbol: '',
        initialDate: new Date(new Date().setDate(new Date().getDate() - 10)).toJSON().slice(0, 10), // last 10 days
        finalDate: '',
        facebook: false,
        twiter: false,
        instagram: false,
        risk: 'conservative',
        stockSymbolRequired: false,
        initialDateRequired: false,
        finalDateRequired: false,
    };

    render() {
        const formatMaxDate = new Date().toJSON().slice(0, 10);
        return (
            <div className="stockForm">
                <Input id={'stockSymbol'} label={'Stock Symbol'} required={this.state.stockSymbolRequired} inputOptions={{ type: 'text' }} value={this.state.stockSymbol} changed={(event) => this.updateState(event.target.value, 'stockSymbol')} />
                <Input id={'fromDate'} label={'From Date'} required={this.state.initialDateRequired} inputOptions={{ type: 'date', max: formatMaxDate }} value={this.state.initialDate} changed={(event) => this.updateState(event.target.value, 'initialDate')} />
                <Input id={'toDate'} label={'To Date'} required={this.state.finalDateRequired} inputOptions={{ type: 'date', max: formatMaxDate }} value={this.state.finalDate} changed={(event) => this.updateState(event.target.value, 'finalDate')} />
                <Input id={'facebook'} label={'Facebook'} inputOptions={{ type: 'checkbox' }} value={this.state.facebook} changed={(event) => this.updateState(event.target.checked, 'facebook')} />
                <Input id={'twitter'} label={'Twitter'} inputOptions={{ type: 'checkbox' }} value={this.state.twiter} changed={(event) => this.updateState(event.target.checked, 'twitter')} />
                <Input id={'instagram'} label={'Instagram'} inputOptions={{ type: 'checkbox' }} value={this.state.instagram} changed={(event) => this.updateState(event.target.checked, 'instagram')} />
                <Input id={'risk'} label={'Risk'} inputType={'select'} inputOptions={{ options: [{ value: 'conservative', label: 'Convervative' }, { value: 'balanced', label: 'Balanced' }, { value: 'Dynamic', label: 'Dynamic' }] }} value={this.state.risk} changed={(event) => this.updateState(event.target.value, 'risk')} />
                <Button clicked={() => this.clickedCheckStocks()}>Check Stocks</Button>
            </div>
        );
    }

    clickedCheckStocks() {
        if (!this.state.stockSymbol) {
            this.setState({ stockSymbolRequired: true });
            return;
        } else {
            this.setState({ stockSymbolRequired: false });
        }
        if (!this.state.initialDate) {
            this.setState({ initialDateRequired: true });
            return;
        } else {
            this.setState({ initialDateRequired: false });
        }

        if (this.state.finalDate && new Date(this.state.initialDate) > new Date(this.state.finalDate)) {
            this.setState({ finalDateRequired: true });
            return;
        }else{
            this.setState({ finalDateRequired: false });
        }

        this.props.checkStocks(this.state);
    }
    updateState(value, identifier) {
        this.setState({
            [identifier]: value
        })
    }
}

export default StockForm