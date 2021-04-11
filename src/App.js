// import ReactShare from "react-share-simplified";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";
import "./App.css";

function App() {
  const shareUrl =
    "https://ee.humanitarianresponse.info/i/a5tPFS2q?fbclid=IwAR3IB-VzVevSvdGJOPCflblEhi-PGkOjGZVXNUM5mZNlggH4ZgL901o26Xc";

  return (
    <div className="App">
      <h2>Thank you for taking the time to complete this survey.</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="share-title">
          <FacebookShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <p>Facebook</p>
        </div>
        <div className="share-title">
          <FacebookMessengerShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <FacebookMessengerIcon size={50} round={true} />
          </FacebookMessengerShareButton>
          <p>Messenger</p>
        </div>
        <div className="share-title">
          <TwitterShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <p>Twitter</p>
        </div>
        <div className="share-title">
          <ViberShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <ViberIcon size={50} round={true} />
          </ViberShareButton>
          <p>Viber</p>
        </div>
        <div className="share-title">
          <WhatsappShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
          <p>WhatsApp</p>
        </div>
        <div className="share-title">
          <EmailShareButton
            url={shareUrl}
            quote="Kathmandu"
            className="emailShareClassname"
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default App;
