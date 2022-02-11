import { useEffect, useState } from 'react';
import { client } from '../services/prismic';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router';
import LoadingPage from '../components/loadingPage';
import { CaseStyled, LinkStyled, CaseMain, Footer } from '../styles/Case';

import type { NextPage } from 'next';
import type { Content } from '../types/Content';



const Case: NextPage = ({ cases }: any): JSX.Element => {
  const router = useRouter();
  const [caseItem, setCaseItem] = useState(null as any);
  const { slug } = router.query;

  useEffect(() => {
    cases?.results.forEach((item: any, i: number) => {
      if (item.uid === slug) {
        setCaseItem(cases.results[i].data);
      }
    });
  }, [cases?.results, slug, caseItem]);

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
            {content.map((content: Content, i: number) => {
              return content.type === 'paragraph' ? (
                <p key={i}>{content.text}</p>
              ) : (
                <img key={i} src={content.url} alt='imagem do prismic' />
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


// SSR - Server Side Rendering
export async function getServerSideProps() {
  const cases = await client.query(
    Prismic.Predicates.at('document.type', 'cases'),
    { orderings: '[document.first_publication_date desc]' }
    );
    return {
      props: {
        cases
      },
    };
  };

  // SSG - Static Site Generation 
  // export async function getStaticPaths() {
  //   return {
  //     paths: [
  //       { params: { slug: '/projeto-um' } },
  //       { params: { slug: '/projeto-dois' } },
  //       { params: { slug: '/projeto-tres' } }
  //     ],
  //     fallback: true,
  //   };
  // }
  
  // export async function getStaticProps() {
  //   const cases = await client.query(
  //     Prismic.Predicates.at('document.type', 'cases'),
  //     { orderings: '[document.first_publication_date desc]' }
  //   );
  //   return {
  //     props: {
  //       cases,
  //     },
  //   };
  // }