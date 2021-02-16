
import React, { Component, Fragment } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Gallery extends Component {
    render() {
        return (
            <Fragment>
                <section className="invite-notification">
                    <div className="noti-title">* 코로나19로 인하여 가족들만 모시고 *<br />식을 진행하게 됨을 양해 부탁드립니다.</div>
                </section>
                <hr />
                <section>
                    <div className="main-title">GALLERY</div>
                    <div className="gallery-layout">
                        <Carousel
                            plugins={[
                                'infinite',
                                {
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 2000,
                                    }
                                }
                            ]}
                            animationSpeed={1000}
                        >
                            <img className="gallery-image" src={'http://hambb.site/images/ELY65491.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY65520.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70623.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY65745.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70195.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70397.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70745.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70766.jpg'} />
                            <img className="gallery-image" src={'http://hambb.site/images/ELY70791.jpg'} />
                        </Carousel>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Gallery;