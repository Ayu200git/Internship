import api from "./api";
export const fetchTopQuote = () => {
    api.get("top_quotes").then((res) => res.data);
}

export const postQuote = (quote) => api.post("", quote);
export const resetQuote = () => api.post("reset", {});

export const fetchQuoteByPage = (page) => api.get("", {params: {page}}).then((res) => res.data );
export const fetchQuoteByCursor = (cursor) => api.get("", {params: {cursor}}).then((res) => res.data);
