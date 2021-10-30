import { FiTwitter, FiLinkedin} from 'react-icons/fi'
import { BsFacebook, BsGithub } from 'react-icons/bs'

const footerDivStyle = {
    backgroundColor: "white",
    width: "1280px",
    height: "500px",
    margin: "0 auto",
    paddingTop: "80px",
    display: "flex"
  }

const footerDiv1 = {
    width: "500px",
    marginTop: "-30px",
    marginLeft: "20px"
}

const footerDiv2 = {
    width: "100px",
    paddingTop: "400px",
    marginLeft: "-520px"
}

const footerDiv3 = {
    width: "1100px",
    paddingTop: "470px",
    marginLeft: "-100px",
}

const footerDiv4 = {
   width: "100px",
   paddingTop: "470px",
   marginLeft: "-100px",
}

const spanStyle = {
    color: "#081459",
    fontSize: "20px"
}

const headingStyle = {
    color: "#535353",
    paddingBottom: "10px",
    fontSize: "20px",
    marginLeft: "90px",
    marginBottom: "-60px"
}

const paragraphStyle = {
    paddingTop: "0px",
    margin: "90px 90px 120px",
    color: "#535353",
    fontWeight: "medium"
}

const linkStyle = {
    color: "#081459",
    bottom: "440px",
    position: "relative",
    right: "-480px",
    fontSize: "20px",
    fontWeight: "medium",
}

const hrefStyle = {
    color: "#535353",
    bottom: "440px",
    position: "relative",
    right: "-480px",
    fontSize: "15px",
    bottom: "400px",
}

const contactUsStyle = {
    color: "#081459",
    bottom: "515px",
    position: "relative",
    right: "-660px",
    fontSize: "20px",
    paddingBottom: "40px",
}

const formStyle = {
    bottom: "515px",
    position: "relative",
    right: "-660px",
}

const inputStyle = {
  width: "30%",
  padding: "5px 10px",
  boxSizing: "border-box",
  border: "2px solid #535353",
  fontWeight: "bold",
  borderRadius: "4px",
  display:"block",
  marginBottom: "25px"
}

const textAreaStyle = {
  width: "30%",
  height: "90px",
  padding: "12px 20px",
  boxSizing: "border-box",
  border: "2px solid #535353",
  fontWeight: "bold",
  borderRadius: "4px",
  backgroundColor: "#f8f8f8",
  fontSize: "16px",
  resize: "none",
  marginBottom: "20px"
}

const buttonStyle = {
    width: "30%",
    padding: "15px 20px",
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: "4px",
    backgroundColor: "#5C82F2",
    display:"block",
    color: "#FFFFFF"
}

const subscribeStyle = {
    color: "#081459",
    fontSize: "20px",
    marginTop: "-520px",
    marginLeft: "100px"
}

const twitterIconStyle = {
    marginLeft: "130px",
    marginTop: "40px",
    fontSize: "25px",
    color: "#535353"
}

const facebookIconStyle = {
    marginLeft: "130px",
    marginTop: "40px",
    fontSize: "25px",
    color: "#535353"
}

const linkedInIconStyle = {
    marginLeft: "130px",
    marginTop: "40px",
    fontSize: "25px",
    color: "#535353"
}

const githubIconStyle = {
    marginLeft: "130px",
    marginTop: "40px",
    fontSize: "25px",
    color: "#535353"
}

const copyrightStyle = {
    marginLeft: "-1000px",
    marginTop: "370px",
    fontSize: "15px",
    color: "#535353",
    fontWeight: "bold"
}

const copyrightStyle1 = {
    marginLeft: "-100px",
    marginTop: "-10px",
    fontSize: "15px",
    color: "#535353",
    fontWeight: "bold"
}

const footerDiv5 = {
    width: "100px"
}

export default function Footer () {
    return (
        <div className="footer-div" style = { footerDivStyle }>
            <div style = { footerDiv1 }>
              <h1 style={ headingStyle } >From <span style = { spanStyle }>Fix&Fork</span></h1>

              <p style = { paragraphStyle }>
              Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
              </p>
              <p style = { paragraphStyle  }>
              Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div style = { footerDiv2 }>            
              <h1 style={linkStyle}>Links</h1>
              <a href="#" style={ hrefStyle }>Home</a>
              <br/>
              <a href="#" style={ hrefStyle }>About Us</a>
              </div>

              <div style = { footerDiv3 }>
              <h1 style={ contactUsStyle }>Contact Us</h1>
              <form style={ formStyle }>
                   <input style = { inputStyle } type="email" name="email" value="Email*"/>
                   <textarea style = { textAreaStyle } type="text" name="message" value="Message">
                   </textarea>
                   <button type="button" name="button" style = { buttonStyle }>SEND</button>
              </form>
              </div>

              <div style = { footerDiv4 }>
                    <h1 style={ subscribeStyle }>Subscribe</h1>
                    <FiTwitter style = { twitterIconStyle } />
                    <BsFacebook style = { facebookIconStyle }/>
                    <FiLinkedin style = { linkedInIconStyle }/>
                    <BsGithub style = { githubIconStyle }/>
              </div>
              

              <div style = { footerDiv5 }>
                  <p style = { copyrightStyle }>&copy;2021fixandfork</p>
                  <p style={ copyrightStyle1 }>Powered by Yombi Labs Ltd</p>
              </div>
        </div>
    )
}