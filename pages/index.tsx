import Link from 'next/link';
import { client } from '../services/prismic';
import Prismic from 'prismic-javascript';
import { Main } from '../styles/Main';
import type { NextPage } from 'next';



const Home: NextPage = ({cases}: any): JSX.Element => {

  return (

    <>
      {
        <Main>
          {
            cases.results.map((item: any) => {
              return ( 
                <Link 
                href={`/${item.slugs[0]}`} passHref
                key={item.data.title[0].text}
                >
                  <div
                    key={item.data.title[0].text}
                    style={{
                      backgroundImage: `url("${item.data.thumbnail.url}")`,
                    }}
                    className='thumbnail'
                  >
                    
                    <h1>
                      {item.data.title[0].text}
                    </h1>
                  </div> 
                </Link>
              )
            })
          }
        </Main>
      }
    </>
  )
};
export default Home;


// SSG - Static Site Generation 
export async function getStaticProps() {
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

// SSR - Server Side Rendering
// export async function getServerSideProps() {
//   const cases = await client.query(
//       Prismic.Predicates.at('document.type', 'cases'),
//       { orderings: '[document.first_publication_date desc]' }
//   );
//   return {
//       props: {
//       cases
//       },
//   };
// };