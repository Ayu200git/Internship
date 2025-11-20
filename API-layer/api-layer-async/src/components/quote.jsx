import { useQuery } from "@tanstack/react-query";
import { fetchTopQuote } from "../api/quoteApi";
import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;


const FetchtopQuotes = () => {

    const { data: quotes, isLoading, isSuccess, isError } = useQuery("top-quotes", fetchTopQuote)

    return (
        <Container>
            <div>
                <Title>Top Quotes</Title>
                {isError ? (
                    <ErrorMessage>There is a problem in fetchin quotes.</ErrorMessage>
                ): null}
                {isLoading ? <LoddingMessage>fetching Quotes</LoddingMessage> : null}
                {isSuccess ? (
                    <QuoteContainer>
                        {quotes?.map((quote) => (
                            <QuoteBlock key={quote.id} className="quote">
                                <QuoteText>"{quote.quote}</QuoteText>
                                <AuthorCite>
                                    <AuthorInfo>
                                        <AuthorName>{quote.author}</AuthorName>
                                    </AuthorInfo>
                                </AuthorCite>
                            </QuoteBlock>
                        ))}
                    </QuoteContainer>
                ): null}           
            </div>
        </Container>
        
    )
}

export default FetchtopQuotes;