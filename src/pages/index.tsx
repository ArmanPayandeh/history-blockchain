import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading'; 

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function IntroSection() {
  return (
    <section className="margin-top--lg padding-bottom--lg">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <Heading as="h2" style={{ fontSize: '1.8rem', fontWeight: '600' }}>
                Why This Project
              </Heading>
            </div>
            <div className="padding-horiz--md">
              <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'left',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p>
                  Hi, I'm Arman. I'm 16 years old. I don't really consider myself a student anymore—I haven't attended school regularly for some time now.
                </p>
                <p>
                  I'm deeply interested in cutting-edge technology, especially blockchain. To be honest, I don't particularly enjoy mathematics or traditional academic work. But I find it genuinely fascinating to examine and analyze academic papers—seeing how ideas evolve from early cryptography to modern innovations like zero-knowledge proofs feels like uncovering the hidden architecture of this field.
                </p>
                <p>
                  That's why I decided to systematically review the papers and articles published over the years—from the earliest networks and cryptographic foundations to today's advanced protocols. We can explore the original sources together, tracing how these ideas developed.
                </p>
                <p>
                  The content is divided into two sections that you can see in the site header:
                </p>
                <p>
                  <strong>1. Archive</strong> — organized chronologically so you can follow the evolution of ideas over time. I've written a brief summary for each paper, though I haven't had time to analyze every one in depth yet. I hope to collaborate with others soon to expand these analyses.
                </p>
                <p>
                  <strong>2. Papers</strong> — a dynamic section where I share newly published research that catches my attention.
                </p>
                <p>
                  <em>Note: All papers and whitepapers shared here are open access. I only distribute content that is freely available or properly licensed.</em>
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}>
                <Link
                  to="/archive"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem',
                    background: 'var(--ifm-background-surface-color)',
                    borderRadius: '12px',
                    border: '2px solid var(--ifm-color-emphasis-200)',
                    textDecoration: 'none',
                    color: 'inherit',
                    minWidth: '200px',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-card"
                >
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📚</div>
                  <Heading as="h3" style={{margin: '0.5rem 0', fontSize: '1.5rem'}}>
                    Archive
                  </Heading>
                  <p style={{margin: 0, textAlign: 'center', fontSize: '0.95rem', opacity: 0.8}}>
                    Browse papers chronologically
                  </p>
                </Link>

                <Link
                  to="/docs/intro"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem',
                    background: 'var(--ifm-background-surface-color)',
                    borderRadius: '12px',
                    border: '2px solid var(--ifm-color-emphasis-200)',
                    textDecoration: 'none',
                    color: 'inherit',
                    minWidth: '200px',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-card"
                >
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📄</div>
                  <Heading as="h3" style={{margin: '0.5rem 0', fontSize: '1.5rem'}}>
                    Papers
                  </Heading>
                  <p style={{margin: 0, textAlign: 'center', fontSize: '0.95rem', opacity: 0.8}}>
                    Explore research papers
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive documentation of blockchain technology evolution through original research papers">
      <HomepageHeader />
      <IntroSection />
      
      <style>{`
        .hover-card:hover {
          border-color: var(--ifm-color-primary) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(91, 33, 182, 0.15);
        }
        
        [data-theme='dark'] .hover-card:hover {
          box-shadow: 0 8px 24px rgba(167, 139, 250, 0.2);
        }
      `}</style>
    </Layout>
  );
}