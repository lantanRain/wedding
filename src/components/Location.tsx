
import React, { Component, Fragment } from 'react';

class Location extends Component {


    render() {
        return (
            <Fragment>
                <section className="visual-section">
                    <div className="main-title">오 시 는 길</div>

                    <div className="map_wrap">
                        <div id="daumRoughmapContainer1613323348322" className="root_daum_roughmap root_daum_roughmap_landing"></div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Location;