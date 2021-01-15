import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const TransactionContext = createContext()

export const TransactionContextProvider = ({children}) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [data, setData] = useState({
        transaction: [],
        currentTransaction: [],
        filteredTransaction: [],
        currentPage: null,
        totalPages: null,
        appliedFilters: []
    })
    useEffect(() => {
        axios.get("http://api.enye.tech/v1/challenge/records")
        .then(res => {
            const {records} = res.data
            console.log(records.profiles)
            // localStorage.setItem("transaction", JSON.stringify(records.profiles));
            setData({...data, transaction: data.transaction.concat(records.profiles)})
            // setData({...data, filteredTransaction:localStorage.getItem("transaction")
            // ? JSON.parse(localStorage.getItem("transaction"))
            // : []})
        })
        .catch(err => console.log(err))
    }, [])

    const onPageChanged = results => {
        console.log(results)
        const { filteredTransaction } = data
        const { currentPage, totalPages, pageLimit } = results
        const offset = (currentPage - 1) * pageLimit;
        const currentResults = filteredTransaction.length <= 20 ? filteredTransaction : filteredTransaction.slice(offset, offset + pageLimit);
        console.log(currentResults)
        setData({...data, currentTransaction:currentResults, totalPages})
    }

    const filterByValue =  value => {
        console.log(value)
        const result = value.toLowerCase()
        const filteredContent = data.transaction.filter(tran => {
            return tran.FirstName.toLowerCase().startsWith(result) || tran.LastName.toLowerCase().startsWith(result)
        })
        let appliedFilters = data.appliedFilters;
        console.log(filteredContent)
        if (value) {
            appliedFilters = addFilterIfNotExists(value, appliedFilters);
            console.log(appliedFilters)
            setData({...data, filteredTransaction: filteredContent, appliedFilters})
        } else {
            appliedFilters = removeFilter(value, appliedFilters);

            if (appliedFilters.length === 0) {
                setData({...data, filteredTransaction: [...data.transaction], appliedFilters})
            }
        }
    }

    const sortByValue = (value) => {
        console.log(value)
        const filteredContent = data.transaction.filter(tran => {
            return tran.Gender.toLowerCase() === value || 
                   tran.PaymentMethod.toLowerCase() === value ||
                   tran.CreditCardType.toLowerCase() === value 
        })
        console.log(filteredContent)
        setData({...data, filteredTransaction: filteredContent}, () => onPageChanged(pageNumber))
    }

    function addFilterIfNotExists(filter, appliedFilters) {
        let index = appliedFilters.indexOf(filter);
        if (index===-1) appliedFilters.push(filter);
    
        return appliedFilters;
    }
    
    function removeFilter(filter, appliedFilters) {
        let index = appliedFilters.indexOf(filter);
        appliedFilters.splice(index, 1);
        return appliedFilters;
    }

    return (
        <TransactionContext.Provider
            value={
                {
                 data,
                 onPageChanged,
                 filterByValue,
                 sortByValue,
                 pageNumber,
                 setData,
                }
            }
        >
            {children}
        </TransactionContext.Provider>
    )
};