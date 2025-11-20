import React, { useEffect, useState } from "react";
import { fetchUser } from "../api/userApi";
import styled from "styled-components";
import { withasync } from "../helpers/with-async";
import { ERROR, IDLE, PENDING, SUCCESS } from "../constants/api-status";

const ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

const useFetchUser = () => {
  const [user, setUser] = useState([]);
  const [fetchUserStatus, setFetchUserstatus] = useState(IDLE);
  const initFetchUser = async () => {
    setFetchUserstatus(PENDING);
    const { response, error } = await withasync(() => fetchUser())
    if(error){
      setFetchUserstatus(ERROR);
    }else if(response) {
      setFetchUserstatus(SUCCESS);
      setUser(response);
    }
  };
  return {
    user,
    fetchUserStatus,
    initFetchUser,
    
  };
};

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

export function User() {
  const { user, fetchUserstatus, initFetchUser } = useFetchUser();

  useEffect(() => {
    initFetchUser();
  }, []);

  return (
    <Container>
      <FetchButton>{fetchUserstatus === "PENDING" ? "Loading...." : "Fetch User"}</FetchButton>
      <FlexContainer>
        <ContentContainer>
          {user
            ? user.map((user, index) => (
                <React.Fragment key={index}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  );
}
