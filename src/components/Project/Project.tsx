import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://kingdommissionshn.org/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Kingdom Missions HN Newsletter Blog Site</h3>
              <p> Designed and developed a blog app using WordPress, PHP, and Hostinger, allowing users to create, manage, and maintain their own websites. WordPress provides a user-friendly interface for content management and scalability, while PHP enhances customization and functionality. Hostinger offers reliable hosting with cost-efficiency, ensuring the blog is accessible and well-supported. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Wordpress</li> <li>PHP</li> <li>HTML & CSS</li> <li>reCapcha</li> <li>Hostinger</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AM98-20/shrinkit" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://shrinkit-8009.onrender.com/app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Shrink It URL Shrinker Project</h3>
              <p> Designed and developed a URL shrinker using React for the frontend, Flask for the backend, and Firebase for the database. The React interface allows users to input long URLs and receive shortened versions, while Flask handles the URL shortening logic and routing. Firebase stores the URL mappings and provides real-time updates. The system integrates client-side validation and API requests to ensure smooth interactions between the frontend and backend, offering a streamlined user experience and scalable data management. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Flask</li> <li>Firebase</li> <li>ExpressJS</li> <li>Render</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AM98-20/muniSiguaWebApp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                 </div>
            </header>
            <div className="body">
              <h3>Town Hall of SIguatepeque Website Project</h3>
              <p> Developed a dynamic web application utilizing React for a responsive user interface, Node.js for server-side functionality, and Firebase for real-time data management and authentication. The project was designed with Material-UI to ensure a sleek and modern look while maintaining ease of use. This combination of technologies provided a seamless and efficient platform for both administrators and residents to interact with municipal services. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>MaterialUI</li> <li>Firebase</li> <li>NodeJS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AM98-20/OpenBooksClient" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Mobile Online Library Project</h3>
              <p> Created a versatile and user-friendly mobile application using React Native and Expo. React Native facilitated the development of a native-like experience for both iOS and Android platforms, while Expo streamlined the development process with its rich set of tools and libraries. The app offers an intuitive interface for browsing, borrowing, and managing digital books, making it easy for users to access and enjoy a wide range of reading materials on the go. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactNative</li> <li>Expo</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/walter-amador/iteacher-web-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Online Teacher Rating App Project</h3>
              <p> Developed a robust platform for evaluating educators using Formik for efficient form handling, React for building a dynamic user interface, and Axios for seamless communication with the backend API. To ensure high code quality and reliability, I integrated Jest for comprehensive unit and integration testing. This combination of tools and technologies facilitated a smooth user experience for rating and reviewing teachers while maintaining a strong focus on performance and accuracy. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactNative</li> <li>Expo</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#9DAF83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/walter-amador/proyecto-nw-g3" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>MVCO App Project</h3>
              <p> Utilized PHP for server-side scripting and JavaScript for client-side interactions to build a versatile and efficient web application. PHP managed data processing and backend operations, while JavaScript enhanced the user interface with dynamic features and improved user experience. This combination of technologies enabled the development of a robust application with smooth functionality and responsive design, tailored to meet the specific needs of the project. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactNative</li> <li>Expo</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}