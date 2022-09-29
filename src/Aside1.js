import React from 'react';
import p3 from './p3.png'
const Aside1 = () => {
    return(
<div className='side1'>
    <div className='container'>
        <div className='row' id='row2'>
        <div className="col-lg-6 col-md-6" >
            <img src={p3} id="p3"/>
            </div>
        <div className="col-lg-6 col-md-6">
        <p id="good1">نحن نفتخر بانفسنا في صنع طعام حقيقي من افضل المكونات</p>
        <p>learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn
             learn learn learn learn learn learn learn learn</p>
             <button className="ord5"><a className="ordd"> اطلب الان</a></button>
             </div>
        </div>
    </div>
</div>
    )
};
export default Aside1
