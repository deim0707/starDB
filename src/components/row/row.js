import React from 'react';
import PropTypes from 'prop-types'

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

//проверяем, что то, что в Лест и Райт будет то, что можно отрендерить в jsx
//ещё есть PropTypes.element - проверяет, что это реакт элемент
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;
