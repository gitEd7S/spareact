import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (min-width: 576px) {
        max-width: 570px;
        margin: 0 auto;
    }
    @media screen and (min-width: 768px) {
        max-width: 750px;
    }
    @media screen and (min-width: 992px) {
        max-width: 990px;
    }
    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
    @media screen and (min-width: 1560px) {
        max-width: 1560px;
    }
`
