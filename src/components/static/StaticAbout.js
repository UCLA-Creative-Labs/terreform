import React, { useState } from 'react';

import { TextDetail } from "../presentational/Global";
import { Overlay, SubContent, Content } from "../presentational/Wrapper";
import { GreenLink, Close } from "../presentational/Button";

const StaticAbout = (props) => { 
    return ( 
        <Overlay display={props.display}>
            <Close src="close.svg" onClick={props.close} static={true} />
            <TextDetail>
                <h1>About Terreform</h1>
            </TextDetail>
            <Content>
                <SubContent>
                    <TextDetail>
                        <p>This project was created by students at UCLA for the purpose of incentivizing donations that ameliorate the causes and effects of climate change.
                        Terreform is a collection of virtual environments where you can see your contributions to charity projects come to life. 
                        </p>
                    </TextDetail>
                </SubContent>
                <TextDetail>
                    <h1>Meet the Team</h1>
                </TextDetail>
                <SubContent>
                    <TextDetail>
                        <p><strong>Angela Zhang</strong> Project Lead</p>
                        <p><strong>Frank Zheng</strong> Creative Developer</p>
                        <p><strong>Mehul Sonowal</strong> Creative Developer</p>
                        <p><strong>Thilan Tran</strong> Frontend Developer</p>
                        <p><strong>Nikhil Arora</strong> Backend Developer</p>
                    </TextDetail>
                </SubContent>
            </Content> 
        </Overlay> 
    );
}

export default StaticAbout;
