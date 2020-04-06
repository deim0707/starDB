import React from 'react';

import './row.css';
import ErrorBoundry from "../error-boundry";

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6 mb-2">
                <ErrorBoundry>
                    {left}
                </ErrorBoundry>
            </div>
            <div className="col-md-6">
                <ErrorBoundry>
                    {right}
                </ErrorBoundry>
            </div>
        </div>
    )
};

export default Row;
