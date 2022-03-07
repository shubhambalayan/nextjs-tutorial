import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeadComponent from '../components/Head'

export default function Home() {
  return (
    <div>
      <HeadComponent title={"Homepage"} />
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime repellendus perspiciatis quae aspernatur suscipit unde veritatis molestias molestiae, perferendis pariatur dolorum esse culpa et, voluptas excepturi error aliquid. Cum?</p>
      <Link href="/ninja">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
