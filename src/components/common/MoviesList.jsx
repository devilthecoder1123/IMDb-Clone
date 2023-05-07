import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
const Banner = styled("img")({
  width: 47,
});
const Container = styled(List)`
  display: flex;
`;
const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <Container>
            <ListItem>
              <Banner
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
              />
            </ListItem>
            <ListItem>
              <Typography>{movie.original_title}</Typography>
            </ListItem>
            <ListItem>
              <StarRateIcon color="warning" />
              <Typography>{movie.vote_average}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{movie.release_date}</Typography>
            </ListItem>
          </Container>
        );
      })}
    </>
  );
};

export default MoviesList;
