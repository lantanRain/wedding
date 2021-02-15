
import React, { Component, Fragment } from 'react';

class WelcomeCover extends Component {


    render() {
        const photo_doman = '';
        return (
            <Fragment>
                <section className="welcome-section">
                    <div className="welcome-top">
                        <div className="welcome-title">
                            <p className="p1">
                                결혼합니다
						    </p>
                            <p className="p2">
                                <span className="vs-span">백현규</span>
                                <span className="vs-span"> & </span>
                                <span className="vs-span">정혜인</span>
                            </p>
                        </div>
                        <div className="welcome-photo">
                            <img src={'http://3.35.3.219/images/cover.jpg'} />
                        </div>
                        <div className="welcome-info">
                            <p className="date">2021. 02. 27. SAT PM 6:00</p>
                            <p className="txt">빌라드지디 수서</p>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default WelcomeCover;