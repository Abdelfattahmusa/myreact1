import React from "react";
import heimg from './heimg.png'
const Header = () => {
return(
<div className="container">
    <div className="row" id="hed">
        <div className="col-lg-6 col-md-12">
        <p id="good">اختر وجباتك المفضلة والوجبات اللذيذة</p>
        <p>learn learn learn learn learn learn learn learn learn learn learn learn learn learn learn
             learn learn learn learn learn learn learn learn</p>
             <button className="ord"><a className="ordd"> اطلب الان</a></button>
             <button className="ord1"><a className="orddd" href="#row2">قراءة المذيد </a></button>
        </div>
        <div className="col-lg-6 col-md-12" >
            <img src={heimg} id="mag"/>

            </div>
    </div>
</div>
)
};
export default Header;