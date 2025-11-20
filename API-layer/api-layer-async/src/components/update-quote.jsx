import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postQuote, resetQuote } from "../api/quoteApi";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";

export const UpdateQuotes = () => {
    const queryClient = useQueryClient();

    const createQuotesMutation = useMutation(postQuote);
    const resetQuoteMutation = useMutation(resetQuote);


    const [form, setForm] = useState({
        author:"",
        quote: "",
    });

    const onChange = (e) => {
        setForm((form) => ({
            ...form,
            [e.target.name]: e.target.value, 
        }));

        const onSubmit = async (e) => {
            e.preventDefault();
            const {author, quote} = form;
            if(!author || !quote){
                alert("You have to entter information");
                return;
            }
            await createQuotesMutation.mutate(form, {
                onSuccess: ()=> {
                    setForm({author:"", quote:""})
                    queryClient.invalidateQueries("top-quotes");
                    toast.success("Quote created");
                },
            });
        }
    };
    const onReset = (e) => {
        resetQuoteMutation.mutate(e, {
            onSuccess: () => {
            queryClient.invalidateQueries("top-quotes");
            toast.success("Quote removed");    
            },
        });
    };
     return;
 }