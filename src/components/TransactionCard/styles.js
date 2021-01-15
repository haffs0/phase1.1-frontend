import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 280px;
    border: 1px solid #dddccf;
    border-radius: 5px;

`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:#14236d;
    color: #fff;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom:5px;
`

export const Main = styled.div`
    padding-top: 0;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 0;
    background:#5896a7;
    color: #fff;
    & h3 {
        font-size: 22px;
        margin-bottom: 10px;
    }
    & p {
        margin-bottom: 10px;
    }
    & p .contact-icon {
        font-size: 18px;
        color: #14236d;
    }
    & p span.contact-details {
        font-size: 16px;
        padding-left: 10px;
        font-weight: 400;
    }
    & p a {
        text-decoration: none;
    }
    & p:lastchild {
        margin-bottom: 0;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px;
    background:#5896a7;
    color: #fff;
    & div:nth-child(2) {
        margin-left: 1px;
    }
    & div span {
        display: block;
    }
    & span.footer-title {
        font-size: 13px;
        margin-bottom: 7px;
        font-weight: 600;
    }
    & span.footer-text {
        font-size: 14px;
        font-weight: 400;
        color: #14236d;
    }
    & span.footer-text:nth-child(2) {
        margin-bottom: 7px;
    }
`

export const Avatar = styled.div`
    display: block;
    background-color: #fff;
    border-radius: 100%;
    padding: 25px 20px;
    font-size: 36px;
    margin-bottom: 5px;
`
export const Hr = styled.hr`
    border-top: 1px solid #dddccf;
    margin: 0 !important;
`
export const Titles = styled.h1`
    font-size: 25px;
    font-weight: 700;
`
