import styled from 'styled-components';


export const Wrapper = styled.div`
    display: grid;
    margin: 30px auto;
    background: #fff;
    width: 900px;
`

export const InnerWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
`
export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`

export const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
`;

export const HeadersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const InputWrapper = styled.div`
    display: flex;
    & div.select {
        margin-right: 10px;
    };
    & div.select select, div.control input {
        font-size: 18px;
        padding: 15px 20px;
        color: #007bff;
        background-color: #fff;
        border: 1px solid #dee2e6;
    }
`;