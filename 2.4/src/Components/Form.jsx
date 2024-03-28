import { useState } from 'react';

export default function Form() {
    let list = []
    const [tableData, setTableData] = useState([]);
    const [Data, setData] = useState(false);
    const [limits, setLimits] = useState({ acap: '100', cap: '50' });
    const ac = { acap: '10', cap: '100' }
    let count = 1


    function AddNew() {
        setTableData([
            ...tableData,
            {
                id: count++,
                price: '',
                symbol: '',
                mcap: ''
            }
        ])

        console.log(tableData)
    }

    function Calc(e) {
        e.preventDefault()
        tableData.forEach((x) => { console.log(x) })
        setData(true)
        setLimits(limits,{acap: limits.acap, cap: limits.cap})
        console.log(limits.acap)

    }

    function GetIndex() {
        let sum = tableData.map(x => +x.mcap).reduce((accumulator, a) => accumulator + a, 0)
        return tableData.map((i) => {
            console.log(limits.acap )
            return (

                <tr>
                    <td>{i.symbol}</td>
                    <td>{+i.price * (+limits.cap*(+i.mcap / sum))}</td>
                    <td>{+limits.cap*(+i.mcap / sum) }</td>
                    <td>{(+i.mcap / sum) * 100}</td>
                </tr>
            );

        })
    }

    return (
        <>
            <form>
                <label>Enter Assest cap</label>
                <input  onChange={(e) => { limits.acap = e.target.value }}></input>
                <label>Enter capital</label>
                <input  onChange={(e) => { limits.cap = e.target.value }}></input>
                <button onClick={(e) => Calc(e)}>Calculate</button>
            </form>
            <button onClick={AddNew}>Add new</button>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Market cap</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((x) => {
                            return (
                                <>
                                    <tr>
                                        <td><input key={x.id} id={"price_" + list.length + 1} onChange={(e) => { x.symbol = e.target.value }}></input></td>
                                        <td><input key={x.id} id={"price_" + list.length + 1} onChange={(e) => { x.mcap = e.target.value }}></input></td>
                                        <td><input key={"price_" + count++} id={"price_" + list.length + 1} onChange={(e) => { x.price = e.target.value }}></input></td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
            {Data  &&
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Amount</th>
                                <th>Value</th>
                                <th>%</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                GetIndex()
                            }
                        </tbody>
                    </table>
                </>
            }
        </>
    );

    // add function to rebalance
}


