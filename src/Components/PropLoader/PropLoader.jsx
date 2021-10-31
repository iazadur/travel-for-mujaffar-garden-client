import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const PropLoader = () => {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
    return (
        <>

            <PropagateLoader color="#14b9d5" css={override} size={25} />


        </>
    );
};

export default PropLoader;