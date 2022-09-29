import React from 'react';
import p4 from './p4.png'
import p14 from './14.PNG'
import p15 from './15.PNG'
import p16 from './16.PNG'
import p17 from './17.PNG'
import p18 from './as2.png'

const Aside2 = () => {
    return(
<div className='side2'>
    <div className='container' id='co5'>
        <div className='row' >
        <div className="col-lg-6 col-md-6">
        <p id="good1">نحن نصنع كل شي يدويا بافضل المكونات الممكنه</p>
        <p>learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn
             learn learn learn learn learn learn learn learn</p>
             <p id='pe'><img id='med' src={p4} />الوجبات السريعة </p>
             <p id='pe'><img id='med' src={p4} />الوجبات الشعبية</p>
             <p id='pe'><img id='med' src={p4} />الوجبات العالميه</p>
             <button className="ord6"><a className="ordd"> اطلب الان</a></button>
             </div>
        <div className="col-lg-6 col-md-6" id='ll' >
        <img className='fliud1' src={p14} /> <img className='fliud2' src={p15} />
        <img className='fliud3' src={p16} /> <img className='fliud4' src={p17} />
            </div>
        </div>
    </div>
    <div className='row' id='oma'>
        <div className="col-lg-12 col-md-12">
        <img className='as2' src={p18} />
            </div>
            </div>
</div>
    )
};
export default Aside2
