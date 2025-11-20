import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react"
import { fetchQuoteByPage } from "../api/quoteApi";

const PaginatedQuotes = () => {
    const[page, setPage] = useState(1);
    const {
        data: quotes, isLoading, isFetching, isSuccess, isError, isPreviousDate, } = useQuery(["quotes", page], () => fetchQuoteByPage(page), {
            keepPreviousData: true,
        });
        return <></>;
    }
