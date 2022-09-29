import React from 'react';
import mag8 from './p8.PNG'
import mag10 from './10.PNG'
import mag11 from './11.PNG'
const Aside3 = () => {
    return(
<div className='side3'>
    <div className='container'>
        <div className='row' id='lon'>
        <div className="col-lg-12 col-md-12">
        <p id="good6">لدينا افضل الاصناف</p>
        <p id='gode'>learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn
             learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn </p>
             </div>
        </div>
        <div className='row' id=''>
        <div className="col-lg-4 col-md-12">
            <img id='pa' src={mag8}/>
            <p id='te'>وجبة عالمية في متناول اليد</p>
            <p id='cas'>$9.8  <button className="man"><a className="man1"> اطلب الان</a></button> </p>
            </div>
            <div className="col-lg-4 col-md-12">
            <img id='pa' src={mag10}/>
            <p id='te'>وجبة عالمية في متناول اليد</p>
            <p id='cas'>$12.8 <button className="man"><a className="man1"> اطلب الان</a></button></p>
            </div>
            <div className="col-lg-4 col-md-12">
            <img id='pa' src={mag11}/>
            <p id='te'>وجبة عالمية في متناول اليد</p>
            <p id='cas'>$15.8 <button className="man"><a className="man1"> اطلب الان</a></button></p>
            </div>
            </div>
    </div>
</div>
    )
};
export default Aside3
