import './style/footer.css';
import Twitter from "../icons/1.svg"
import GitHub from "../icons/2.svg"
import Telegramm from "../icons/3.svg"

function Footer() {
  return (
    <footer>
      <div className='grid'>
        <div className='flex'>
          <div className='terms'>
            <div>
              <img src='assets/icon/nav-logo.svg' alt='' />
            </div>
            <a href='#'>Terms · Privacy Policy</a>
          </div>
        </div>
        <div className='flex'>
          <h3>Products</h3>
          <ul>
            <a href='#'>Web Studio</a>
            <a href='#'>DynamicBox Flex</a>
            <a href='#'>Programming Forms</a>
            <a href='#'>Integrations</a>
            <a href='#'>Command-Line</a>
          </ul>
        </div>
        <div className='flex'>
          <h3>Resources</h3>
          <ul>
            <a href='#'>Documentation</a>
            <a href='#'>Tutorials & Guides</a>
            <a href='#'>Blog</a>
            <a href='#'>Support Center</a>
            <a href='#'>Partners</a>
          </ul>
        </div>
        <div className='flex'>
          <h3>Company</h3>
          <ul>
            <a href='#'>Home</a>
            <a href='#'>About us</a>
            <a href='#'>Company values</a>
            <a href='#'>Pricing</a>
            <a href='#'>Privacy Policy</a>
          </ul>
        </div>
        <div className='flex'>
          <h3>Subscribe</h3>
          <ul>
            <a href='#'>Get the latest news and articles to your inbox every month.</a>
          </ul>
          <form>
            <input type="text" placeholder='Your email' />
            <span>&#10142;</span>
          </form>
        </div>
      </div>
      <hr />

      <div className='tarmoqlar'>
        <div>
          <p>Made by <span>Cruip.</span> All rights reserved.</p>
        </div>
        <div className='logotips'>
          <a href="" >
            <img src={Twitter} alt='' />
          </a>
          <a href="#">
            <img src={GitHub} alt='' />
          </a>
          <a href="#">
            <img src={Telegramm} alt='' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;