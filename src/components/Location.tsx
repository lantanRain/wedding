
import React, { Component, Fragment } from 'react';

class Location extends Component {


    render() {
        return (
            <Fragment>
                <section className="location-section">
                    <div className="main-title">오 시 는 길</div>

                    <div className="map_wrap">
                        <div id="daumRoughmapContainer1613323348322" className="root_daum_roughmap root_daum_roughmap_landing"></div>
                    </div>

                    <div className="location-address">
                        <dl className="address">
                            <dt><span className="input_hall">빌라드지디 수서   <a href="tel:02-543-2555" className="hall-phone-icon"> ✆ </a></span> </dt>
                            <dd className="input_address">서울 강남구 밤고개로21길 79</dd>
                            <dd className="input_etel">02-543-2555</dd>

                        </dl>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Location;