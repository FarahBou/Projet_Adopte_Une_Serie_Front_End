// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CardStyled from './CardStyled';

// Composant
const SerieCard = ({ serie }) => (
  <Link to={`/serie/${serie.tmdb_id}`}>
    <CardStyled>
      <Card
        color="blue"
        style={{
          maxWidth: '90%',
          margin: '0 5% 5% 5%',
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          wrapped
          ui={false}
        />
      </Card>
    </CardStyled>
  </Link>
);

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired,
  // click:  PropTypes.func.isRequired,
};
// Export
export default SerieCard;
