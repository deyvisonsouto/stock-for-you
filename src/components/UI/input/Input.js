import React from 'react';

import './Input.css';

class Input extends React.Component {

    render() {
        let label = null;
        if (this.props.label) {
            label = <label htmlFor={this.props.id}>{this.props.label}</label>;
        }

        return (
            <div className="input">
                {label}
                {this.getInputType(this.props.inputType, this.props.inputOptions, this.props.value, this.props.changed, this.props.required, this.props.id)}
            </div>
        );
    }


    getInputType(inputType, inputOptions, value, changed, required, id) {
        const inputClasses = [];
        if (required) {
            inputClasses.push('required');
        }
        switch (inputType) {
            case ('select'):
                return (
                    <select
                        id={id}
                        className={inputClasses.join(' ')}
                        value={value}
                        onChange={changed}>
                        {inputOptions.options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            case ('textarea'):
                return (
                    <textarea
                        id={id}
                        className={inputClasses.join(' ')}

                        {...inputOptions}
                        onChange={changed}>
                        {value}
                    </textarea>
                );
            default:
                return (
                    <input
                        id={id}
                        className={inputClasses.join(' ')}

                        {...inputOptions}
                        onChange={changed}
                        value={value} />
                );
        }
    }

}

export default Input;