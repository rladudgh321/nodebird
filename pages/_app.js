import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({Component}) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component>App</Component>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.node.isRequired,
}

export default App;