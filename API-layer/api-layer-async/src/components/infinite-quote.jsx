import { fetchQuoteByCursor } from "../api/quoteApi";

const InfiniteQuote = () => {
    const {ref: loadMoreRef, inView} = useInView();
    const {
        data: quotes, isLoading, isFetchingNextPage, isSuccess, isError, fetchNextPage, hasNextPage, } = useInfiniteQuery("quotes", ({pageParam = 0}) => fetchQuoteByCursor(pageParam), {
            getNextPageParam: (lastPage, Pages) => {
                return lastPage.nextCursor;
            },
    });
}
