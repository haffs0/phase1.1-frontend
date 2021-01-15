import React, { useContext, useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import { TransactionContext } from "../../context/GlobalContext";
import { TransactionCard } from "../TransactionCard";
import { Pagination } from "../Pagination";
import { Wrapper, InnerWrapper, LoaderWrapper, PaginationWrapper, HeadersWrapper, InputWrapper } from "./styles";


export const TransactionDetails = (props) => {
    const { data, onPageChanged, filterByValue, sortByValue, setData } = useContext(TransactionContext);
    const {currentTransaction, filteredTransaction, transaction } = data;
    const totalPages = filteredTransaction.length
    const [search, setSearch] = useState("")
    useEffect(() => {
        setData({...data, filteredTransaction: filteredTransaction.concat(transaction)})
    }, [transaction])
    console.log(data)
    console.log(filteredTransaction)
    console.log(currentTransaction)
    const colors = ["#1ecbe1", "#3ac5ab", "#3bc44d", "#3c3cc3", "#a39c5c", "#d72d28", "#4ddc23", "#4ddc23"]
    const generateColor = () => Math.floor(Math.random() * colors.length)
    
    const filterByInput = (e) => {
        e.preventDefault()
        filterByValue(search)
    }

    const sortByInput = (e) => {
        let value = e.target.value;
        sortByValue(value)
    }

    return (
        <Wrapper>
             {
                filteredTransaction.length !== 0 && (
                 <HeadersWrapper>
                  <InputWrapper>
                    <div className="select">
                        <select onChange={e => {
                            sortByInput(e)
                        }}>
                            <option value="" disabled selected>Sort by</option>
                            <option value='male'>Gender-Male</option>
                            <option value='female'>Gender-Female</option>
                            <option value='cc'>Payment-cc</option>
                            <option value='check'>Payment-Check</option>
                            <option value='paypal'>Payment-Paypal</option>
                            <option value='money order'>Payment-Money order</option>
                            <option value='jcb'>Credit Card Type-JCB</option>
                        </select>
                    </div>
                    <div className='control' style={{minWidth: "300px"}}>
                        <form onSubmit={filterByInput}>
                            <input onChange={e => {
                                setSearch(e.target.value)
                            }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                        </form>
                    </div>
                  </InputWrapper>
                  <PaginationWrapper>
                    <Pagination 
                        totalRecords={totalPages} 
                        pageLimit={20} 
                        pageNeighbours={1} 
                        onPageChanged={onPageChanged} 
                        />
                  </PaginationWrapper>
                 </HeadersWrapper>
                 )
             }
            {
                currentTransaction.length === 0 ? (
                <LoaderWrapper>
                    <Loader 
                       type="Puff"
                       color="#00BFFF"
                       height={100}
                       width={100}
                       timeout={30000} 
                    />
                </LoaderWrapper>
                ):
                (
                <InnerWrapper>
                    {
                        currentTransaction.map((transactionDetail, index) => (
                            <TransactionCard key={index} {...transactionDetail } backgroundColor={colors[generateColor()]}/>
                        ))
                    }
                </InnerWrapper>
                )
            }
        </Wrapper>
    )
}