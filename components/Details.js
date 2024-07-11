//Class Component
import React, { Component } from 'react';

export class Details extends Component {
    render() {
        return (
            <div className="student">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>{this.props.age}</td>
                        </tr>
                        <tr>
                            <th>isMarried</th>
                            <td>{this.props.isMarried ? "Yes" : "No"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

