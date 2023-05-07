import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/common/Header";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { categoryMovies } from "../services/api";
import Banner from "../components/common/Banner";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import UpNext from "../components/common/UpNext";
import Slide from "../components/common/Slide";
const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;
const Component = styled(Box)`
  padding: 0 115px;
`;
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //componentdidmount ki condition hoti hai empty array matlb ek baar chalega jab aapka component mount hoga dom me
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
      </Component>
    </>
  );
};

export default Home;
