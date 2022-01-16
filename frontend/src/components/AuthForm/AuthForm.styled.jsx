import styled from '@emotion/styled';

export const Container = styled.div`
    max-height: 535px;
    border-radius: 30px;
    padding: 50px 85px 53px 86px;
    margin: 0 0 0 127px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Note = styled.p`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #52555F;
    margin: 0 0 20px 0;
`;

export const GoogleButton = styled.button`
    height: 40px;
    width: 122px;
    padding: 10px 19px 10px 20px;
    margin: 0 auto 30px;
    border: none;
    border-radius: 26px;
    background-color: #F6F7FB;
    filter: drop-shadow( 1px 3px 3px rgba(170, 178, 197, 0.2));
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #000;
`;

export const GoogleIcon = styled.img`
    margin-right: 9px;
    height: 18px;
    width: 17.58px;
`;

export const FormLabel = styled.label`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    &:first-child{
        margin-bottom: 30px;
    }
`;

export const FormInput = styled.input`
    width: 265px;
    height: 52px;
    padding: 17px 0 17px 20px;
    background-color: #F6F7FB;
    border: none;
    border-radius: 30px;
    margin-top: 10px;
    outline: none;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 40px;
`;

export const FormSubmitBtn = styled.button`
    height: 44px;
    width: 125px;
    padding: 12px 15px 12px 15px;
    border: none;
    border-radius: 16px;
    background-color: #F6F7FB;
    filter: drop-shadow( 1px 3px 3px rgba(170, 178, 197, 0.2));
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #52555F;
    transition: all 250ms ease-out;
    &:not(:last-child) {
        margin-right: 15px;
    }
    &:hover,
    &:focus {
        background-color: #FF751D;
        color: #FFFFFF;
    }
`;