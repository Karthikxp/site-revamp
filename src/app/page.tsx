import Image from "next/image";
import styles from "./page.module.css";

function BrowseLink({ href, direction }: { href: string; direction: "left" | "right" }) {
  const arrow = (
    <Image
      className={direction === "left" ? styles.arrowFlipped : styles.arrow}
      src={direction === "left" ? "/images/arrow-left.svg" : "/images/arrow-right.svg"}
      alt=""
      width={116.1}
      height={12.8418}
      unoptimized
    />
  );

  return (
    <a
      href={href}
      className={`${styles.browse} ${direction === "left" ? styles.browseLeft : styles.browseRight}`}
    >
      {direction === "left" && arrow}
      <span>BROWSE</span>
      {direction === "right" && arrow}
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Karthik Manikandan"
            width={1080}
            height={1920}
            sizes="(max-width: 402px) 70vw, 278px"
            priority
          />
        </div>
        <h1 className={styles.display}>KARTHIK. MANIKANDAN</h1>
        <p className={styles.tagline}>Developer by Day * Designer by Night</p>
        <p className={styles.bio}>
          Im a UI/UX designer, a cybersecurity analyst, DO Engineer and a Front End developer,
          bridging aesthetics, security, and functionality.
        </p>
        <a href="#" className={styles.resume}>
          GET RESUME
        </a>
      </section>

      <section className={styles.works}>
        <div className={styles.worksHeader}>
          <h2 className={styles.worksTitle}>Latest works and Designs</h2>
          <p className={styles.worksSubtitle}>Browse Designs and concept arts</p>
        </div>
        <BrowseLink href="#" direction="right" />
      </section>

      <section className={`${styles.works} ${styles.obsessions}`}>
        <div className={`${styles.worksHeader} ${styles.obsessionsHeader}`}>
          <h2 className={styles.worksTitle}>New Obsessions</h2>
          <p className={styles.worksSubtitle}>Find my latest works and developments</p>
        </div>
        <BrowseLink href="#" direction="left" />
      </section>

      <section className={styles.experience}>
        <div className={styles.experienceImage}>
          <Image
            src="/images/experience.png"
            alt=""
            fill
            sizes="(max-width: 402px) 70vw, 278px"
          />
        </div>
        <h2 className={styles.display}>RELEVANT EXPERIENCE</h2>
        <h3 className={styles.role}>DevOps Engineer</h3>
        <div className={styles.roleMeta}>
          <span>Intern</span>
          <span>(2026 - )</span>
        </div>
        <p className={styles.roleDescription}>
          Synergizing scalable cross-functional solutions to optimize stakeholder alignment.
          Leveraging agile innovation pipelines for enterprise growth initiatives.
        </p>
      </section>
    </main>
  );
}
