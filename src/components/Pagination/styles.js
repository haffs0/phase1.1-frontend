import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 4px;
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    &:first-child .page-link {
        margin-left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    };
    & .active a.page-link{
        color: #445565 !important;
        background-color: #e3e7eb !important;
        border-color: #ced4da !important;
    }
    & a.page-link {
        padding: 15px 20px;
        min-width: 64px;
        text-align: center;
        box-shadow: none !important;
        border-color: #ced4da !important;
        color: #6b88a4;
        font-weight: 900;
        font-size: 16px;
        &:hover {
            background-color: lighten(desaturate(#ced4da, 50%), 12.5%);
        }
    }
    & .page-link {
        position: relative;
        display: block;
        color: #007bff;
        background-color: #fff;
        border: 1px solid #dee2e6;
    }
`;

export const ListItem = styled.li`
    
`
