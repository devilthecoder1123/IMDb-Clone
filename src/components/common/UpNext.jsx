import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;
const Poster = styled("img")({
  width: 88,
});

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movies.splice(0, 3).map((movie, index) => (
        <Wrapper key={index}>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="posters"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default UpNext;
