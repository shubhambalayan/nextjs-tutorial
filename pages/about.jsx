import Head from 'next/head'
import HeadComponent from '../components/Head';

const About = () => {
    return ( 
        <div>
      <HeadComponent title={"About Us"} />
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime repellendus perspiciatis quae aspernatur suscipit unde veritatis molestias molestiae, perferendis pariatur dolorum esse culpa et, voluptas excepturi error aliquid. Cum?</p>
      </div>
     );
}
 
export default About;