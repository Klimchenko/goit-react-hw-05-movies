import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Image,
  Text,
  MainTitle,
  Description,
  Title,
  Genres,
  ListGenres,
  ButtonArrow,
  ListLink,
  TitleLink,
  LinkStyled,
} from './MovieDetails.styled';

export default function MovieDetails({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const DEFAULT_IMG = 'https://cinemaone.net/images/movie_placeholder.png';

  const userScore = ((movie.vote_average * 100) / 10).toFixed(0);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <ButtonArrow type="button" onClick={onGoBack}>
        Go back
      </ButtonArrow>
      <Wrapper>
        <Image
          src={
            movie.poster_path ?? movie.backdrop_path
              ? `${IMAGE_URL}${movie.poster_path ?? movie.backdrop_path}`
              : DEFAULT_IMG
          }
          alt={movie.title}
        />

        <Description>
          <MainTitle>
            {movie.title} ({''}
            {movie.release_date
              ? movie?.release_date?.toString().substring(0, 4)
              : ''}
            {''})
          </MainTitle>
          <Text>User score: {userScore}%</Text>
          <Title>Overview</Title>
          <Text>{movie.overview}</Text>
          <Title>Genres</Title>
          {movie.genres && (
            <ListGenres>
              {movie.genres.map(genre => (
                <Genres key={genre.id}>{genre.name}</Genres>
              ))}
            </ListGenres>
          )}
        </Description>
      </Wrapper>
      <hr />
      <TitleLink>Additional information</TitleLink>
      <ListLink>
        <li>
          <LinkStyled to="cast" state={{ from: location.state?.from }}>
            Cast
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </LinkStyled>
        </li>
      </ListLink>
      <hr />
    </>
  );
}
