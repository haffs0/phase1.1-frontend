import React from 'react';
import { Wrapper, Header, Main, Footer, Hr, Avatar, Titles } from './styles';
import { FaUserAlt, FaPhoneAlt  } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrDomain } from "react-icons/gr";


export const TransactionCard = ({
    FirstName,
    LastName,
    Email,
    CreditCardType,
    CreditCardNumber,
    PaymentMethod,
    UserName,
    URL,
    DomainName,
    PhoneNumber,
    backgroundColor
}) => (
    <Wrapper>
        <Header>
            <Avatar style={{background: `${backgroundColor}`}}>{FirstName[0].toUpperCase() } {LastName[0].toUpperCase()}</Avatar>
            <Titles>{FirstName} {LastName}</Titles>
        </Header>
        <Hr />
        <Main>
            <h3>Contact Details</h3>
            <p><FaUserAlt className="contact-icon"/><span className="contact-details">{UserName}</span></p>
            <p><AiOutlineMail className="contact-icon"/><span className="contact-details">{Email}</span></p>
            <p><FaPhoneAlt className="contact-icon"/><span className="contact-details">{PhoneNumber}</span></p>
            {/* <p><a href={URL}><GrDomain style={{color: "#fff !important"}} className="contact-icon"/><span className="contact-details">{DomainName}</span></a></p> */}
        </Main>
        <Hr />
        <Footer>
            <div>
                <span className="footer-title">Credit Card Type</span>
                <span className="footer-text">{CreditCardType}</span>
                <span className="footer-title">Credit Card Number</span>
                <span className="footer-text">{`${CreditCardNumber.substring(0,6)}xxxxx`}</span>
            </div>
            <div>
                <span className="footer-title">Payment Method</span>
                <span className="footer-text">{PaymentMethod}</span>
            </div>
        </Footer>
    </Wrapper>
)