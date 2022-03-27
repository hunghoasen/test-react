import { memo } from 'react';

function Content() {

    console.log('render');


    return (
        <div style={{ padding: "20px" }}>
            <h1>Hello everyboby watching</h1>
        </div>
    );
};

export default memo(Content);