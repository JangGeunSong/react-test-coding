import React from 'react'

export default class Checkbox extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            isChecked: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }
}