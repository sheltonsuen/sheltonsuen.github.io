import React, { Component } from 'react';
import styled from 'styled-components'

import { LoaderProps } from '../interfaces/LoaderInterface';

const Shadow = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E0E0E0;
`;

const ContentWrapper = styled.div`
`;

const Content = styled.span`
`;

class Loader extends Component<LoaderProps> {

    render() {
        return (<Shadow>
            <ContentWrapper>
                <Content>
                    {this.props.content}
                </Content>
            </ContentWrapper>
        </Shadow>)
    }
}

export default Loader;