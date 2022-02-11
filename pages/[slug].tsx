/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '../services/prismic';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import LoadingPage from '../components/loadingPage';
import { CaseStyled, LinkStyled, CaseMain, Footer } from '../styles/Case';

import type { NextPage } from 'next';
import type { Content } from '../types/Content';
import type { CaseItem } from '../types/CaseItem';

const Case: NextPage = ({ cases }: any): JSX.Element => {
  const router = useRouter();
  const [caseItem, setCaseItem] = useState(undefined as any);
  const { slug } = router.query;

  useEffect(() => {
    cases.results.forEach((item: any, i: number) => {
      if (item.uid === slug) {
        setCaseItem(cases.results[i].data);
        console.log('caseItem: ', caseItem);
      }
    });
  }, [cases.results, slug, caseItem]);

  const title = caseItem?.title[0].text;
  const content = caseItem?.content;

  return (
    <>
      <CaseMain>
        <LinkStyled href={'/'}>Back</LinkStyled>
        {caseItem ? (
          <CaseStyled>
            <div
              className='case-thumbnail'
              style={{
                backgroundImage: `url('${caseItem.thumbnail.url}')`
              }}>
              <h1>{title}</h1>
            </div>
            {content.map((content: Content) => {
              return content.type === 'paragraph' ? (
                <p>{content.text}</p>
              ) : (
                <img src={content.url} alt='imagem do prismic' />
              );
            })}
          </CaseStyled>
        ) : (
          <LoadingPage />
        )}
      </CaseMain>
      <Footer> &#127279; Copyleft - 2022 </Footer>
    </>
  );
};
export default Case;


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: '/cases/projeto-um' } },
      { params: { slug: '/cases/projeto-dois' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  const cases = await client.query(
    Prismic.Predicates.at('document.type', 'cases'),
    { orderings: '[document.first_publication_date desc]' }
  );
  return {
    props: {
      cases,
    },
  };
}
