
import React, { Component, Fragment } from 'react';

class Location extends Component {


    render() {
        return (
            <Fragment>
                <br />
                <section className="location-section">
                    <div className="main-title">오 시 는 길</div>
                    <div className="location-address">
                        <div className="input_hall">빌라드지디 수서</div>
                        <div className="input_address">서울 강남구 밤고개로21길 79</div>
                        <div className="input_etel">02-543-2555</div>
                        <div className="input_call">
                            <a href="tel:02-543-2555" className="hall-phone-icon"> 📞 </a>
                        </div>
                    </div>
                    <div className="map_wrap" >
                        <div id="daumRoughmapContainer1613323348322" className="root_daum_roughmap root_daum_roughmap_landing"></div>
                    </div>
                    <hr />
                    <div className="main-title">감사합니다</div>
                </section>
            </Fragment>
        );
    }
}

export default Location;