import React from 'react';
import {GetServerSideProps} from 'next';
import {ME_SELLER_QUERY} from '@pickk/common';

import {initializeApollo} from '@src/lib/apollo';
import {getCookie} from '@src/lib/utils';

export default function HomePage() {
  return <div>You can't see this page</div>;
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  try {
    const token = getCookie('accessToken', req);

    if (!token) {
      throw new Error('no token');
    }

    await initializeApollo().query({
      query: ME_SELLER_QUERY,
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};