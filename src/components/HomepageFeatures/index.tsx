import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
          <div className="row">
              <div className={clsx('col col--4')}>
                  <div className="text--center">
                      <img alt="" className={styles.featureSvg} role="img"
                           src={require('@site/static/img/ladies_dancing.jpg').default}/>
                  </div>
                  <div className="text--center padding-horiz--md">
                      <Heading as="h3">Who is Early Music Forum of Scotland?</Heading>
                      <p>The Early Music Forum of Scotland (EMFS) brings together singers, players,
                          listeners and instrument makers from around Scotland with an interest in the medieval,
                          renaissance and baroque periods.</p>
                  </div>
                  <div className="text--center">
                      <a className="btn btn-dark" href="https://google.co.uk">Read more</a>
                  </div>
              </div>
              <div className={clsx('col col--4')}>
                  <div className="text--center">
                      <img alt="" className={styles.featureSvg} role="img"
                           src={require('@site/static/img/emfs_choir.jpg').default}/>
                  </div>
                  <div className="text--center padding-horiz--md">
                      <Heading as="h3">The EMFS choral programme</Heading>
                      <p>The Early Music Choirs programme, directed by Philip Redfern,
                          was established in 2016 in response to demand from singers for opportunities to
                          sing Early Music on a regular basis.</p>
                  </div>
                  <div className="text--center">
                      <a className="btn btn-dark" href="https://google.co.uk">Read more</a>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
