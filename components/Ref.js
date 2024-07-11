import { useRef } from 'react';

const Ref = () => {
    const prevValue = useRef('');

    // Update prevValue.current on every change
    const handleChange = (event) => {
        prevValue.current = event.target.value;
        console.log(handleChange)
    };


    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>Previous value: {prevValue.current}</p>
        </div>
    );
};
export default Ref;
