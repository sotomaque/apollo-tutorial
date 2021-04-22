import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, data, error } = useQuery(TRACKS);
  if (loading) console.log('loading');
  if (error) console.log('error', error);
  if (data) console.log('data', data);
  return <Layout grid> </Layout>;
};

export default Tracks;
