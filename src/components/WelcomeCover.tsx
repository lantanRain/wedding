
import React, { Component, Fragment } from 'react';

class WelcomeCover extends Component {


    render() {
        const photo_doman = '';
        return (
            <Fragment>
                <div className="main_people">
                    02/27
                    백현규 그리고 정혜인
                </div>
                <div>
                    <img className="cover_welcome" src={'http://3.35.3.219/images/cover.jpg'} />
                </div>
                <div>
                    2021.02.27 SAT PM 06:00
                    빌라드지디 수서
                </div>




            </Fragment>
        );
    }
}

export default WelcomeCover;