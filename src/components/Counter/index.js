import React, { useState } from 'react';
import ButtonApp from '../ButtonApp';
import ButtonCounter from '../ButtonCounter';

const Counter = ({ text, onClick }) => {
    const [counterList, setCounterList] = useState([{ id: Math.random(), value: 0 }]);
    const [refresh, setRefresh] = useState(false);

    const handleAll = (add) => {
        let temp = counterList;
        temp.map((val, key) => {
            if (add) {
                val.value = val.value + 1;
            } else {
                val.value = val.value - 1;
            }
        })
        setCounterList(temp);
        setRefresh(!refresh);
    }

    const handleSingle = (id, add) => {
        let temp = counterList;
        temp.map((val, key) => {
            if (val.id == id) {
                if (add) {
                    val.value = val.value + 1;
                } else {
                    val.value = val.value - 1;
                }
            }
        })
        setCounterList(temp);
        setRefresh(!refresh);
    }

    const handleAddCounter = () => {
        setCounterList([...counterList, { id: Math.random(), value: 0 }])
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <div className="d-flex justify-content-center mb-4 my-2">
                    <div className="mx-2">
                        <ButtonCounter text="-" filled onClick={() => handleAll(false)} />
                    </div>
                    <div className="mx-2">
                        <ButtonCounter text="+" filled onClick={() => handleAll(true)} />
                    </div>
                </div>
                {counterList.map((val, ket) => (
                    <div className="align-items-center d-flex justify-content-center my-2">
                        <div className="mx-3">
                            <ButtonCounter text="-" onClick={() => handleSingle(val.id, false)} />
                        </div>
                        <div className="mx-3">
                            {val.value}
                        </div>
                        <div className="mx-3">
                            <ButtonCounter text="+" onClick={() => handleSingle(val.id, true)} />
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-center my-2 mt-4">
                    <div className="">
                        <ButtonApp text="+ Add Counter" onClick={handleAddCounter} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;