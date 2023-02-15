import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hello! My name is Hanna. I am 30 y/o and a mother to three beautiful souls. Used to be a physical therapist but right now I am open to new challenges.
          </p>
          <p>
            I'm currently studying in Viljandi Kutseõppekeskus. I am a first year student in junior software development. I am interested in web development. Recently I also started learning Unity game development.
          </p>
          <p>
            I am also teamed up with three other students from our course to create a gardening app. We just got enrolled to a Tallinn Tehnopol Startup Incubator program.
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>{title}</Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>

      </Layout>
  );
}
