
import React, { useEffect, useState } from 'react';

const Counter = ({ targetCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const timer = setInterval(() => {
            if (start < targetCount) {
                start++;
                setCount(start);
            } else {
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [targetCount]);

    return <div className="count alt-font">{count}</div>;
};

export default Counter;

