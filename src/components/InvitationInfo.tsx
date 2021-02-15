
import React, { Component, Fragment } from 'react';

class InvitationInfo extends Component {


    render() {
        return (
            <Fragment>
                <section className="invitation-section">
                    <div className="main-title">INVITATION</div>
                    <div className="inv-title">
                        너를 만났을 떄<br />
                        내 콧잔등에 여름이 녹아 있었고,<br />
                        내 발걸음은 바위처럼 무거웠다<br />
                        <br />
                        너에게 기대었을 때<br />
                        한 번 깊게 숨을 들이쉬었을 뿐인데<br />
                        바다보다 깊은 나무 향기가 들어왔고<br />
                        그 향기가 온몸을 감아<br />
                        나는 나무가 되었다<br />
                        <br />
                        여름 가장자리에서<br />
                        가을 느낌을 안겨 준 너는,<br />
                        숲이 나에게 준 선물이였다.<br />
                        <br />
                        정여민 시인,<br />
                        '마음의 온도는 몇 도 일까요?' 중에서<br />
                    </div>
                    <div className="inv-blank">
                        <img src={'http://3.35.3.219/images/flower_icon.png'}></img>
                    </div>
                    <div className="inv-people">
                        <div className="inv-inline">
                            <div className="tb">
                                <div className="row">
                                    <p className="honju">
                                        <span className="inv-span">백명화 • 손명자</span>
                                    </p>
                                    <p className="inv-text-default"> 의 아들</p>
                                    <p className="inv-text-child">현규</p>
                                </div>
                                <div className="row">
                                    <p className="honju">
                                        <span className="inv-span">정용갑 • 최옥선</span>
                                    </p>
                                    <p className="inv-text-default">의 딸  </p>
                                    <p className="inv-text-child">혜인</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="invitation-call">
                    <div className="main-title">INVITATION</div>

                    <div className="inv-call-layer">
                        <div className="inv-call-row">
                            <div className="inv-call-title">신랑에게 연락하기</div>
                            <div className="inv-call-btn">
                                <a href="tel:010-2933-2534" className="inv-phone-icon"> ✆ </a>
                                <a href="sms:010-2933-2534" className="inv-phone-icon"> ✉ </a>
                            </div>
                        </div>
                        <div className="inv-call-row">
                            <div className="inv-call-title">신부에게 연락하기</div>
                            <div className="inv-call-btn">
                                <a href="tel:010-2845-9193" className="inv-phone-icon"> ✆ </a>
                                <a href="sms:010-2845-9193" className="inv-phone-icon"> ✉ </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default InvitationInfo;