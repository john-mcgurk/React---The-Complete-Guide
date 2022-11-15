import React from "react";

const DemoOutput = (props) => {
    return <p>{props.show ? 'This paragraph is here!' : ''}</p>
}

export default React.memo(DemoOutput)