import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
      </Layout>
  );
}
