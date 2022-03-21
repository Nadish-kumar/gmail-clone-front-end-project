import React from "react";
import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useEffect } from "react";
import {
  CModal,
  CModalFooter,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";
import { useFormik } from "formik";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [to, setto] = useState("");
  const [mail, setmail] = useState([]);
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    getmail();
  }, []);

  const classes = useStyles();
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();

  var mailid = Math.floor(Math.random() * 1000000000 + 1);

  var from = localStorage.getItem("from");
  var username = localStorage.getItem("username");

  var data = {
    from: from,
    to: to,
    username: username,
    subject: subject,
    message: message,
    date: date,
    mailid: mailid,
  };

  const sendmail = async () => {
    console.log(data);
    var response = await axios
      .post("http://localhost:8001/sauce", data)
      .then((res) => {
        return alert("data send", res.data);
      });
  };

  const getmail = async () => {
    var id = localStorage.getItem("from");
    var toid = {
      from: id,
    };
    console.log(toid);
    var data = await axios
      .post("http://localhost:8001/mail", toid)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    setmail(data);
  };
  console.log(mail);

  return (
    <>
      <div className="main__body">
        <div className="sidebar">
          <button
            className="sidebar__compose"
            onClick={() => setVisible(!visible)}
          >
            <span className="material__icons">
              <AddIcon />
            </span>
            Compose
          </button>

          <>
            <CModal
              alignment="center"
              scrollable
              visible={visible}
              onClose={() => setVisible(false)}
            >
              <CModalHeader>
                <CModalTitle>New message</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="firstname"
                    label="Recipients"
                    name="firstname"
                    value={to}
                    onChange={(e) => setto(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Subject"
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />

                  <TextField
                    id="standard-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(true)}>
                      Close
                    </CButton>
                    <CButton color="primary" type="submit" onClick={sendmail}>
                      Send
                    </CButton>
                  </CModalFooter>
                </form>
              </CModalBody>
            </CModal>
          </>

          <div className="sidebar__option sidebaroption__active">
            <span className="material__icons">
              <InboxIcon />
            </span>
            <h3>Inbox</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <StarIcon />
            </span>
            <h3>Starred</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <WatchLaterIcon />
            </span>
            <h3>Snoozed</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <SendIcon />
            </span>
            <h3>Sent</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <InsertDriveFileIcon />
            </span>
            <h3>Drafts</h3>
          </div>

          <div className="sidebar__option ">
            <span className="material__icons">
              <ExpandMoreIcon />
            </span>
            <h3>More</h3>
          </div>

          <div className="sidebar__footer">
            <div className="sidebar__footericons">
              <span className="material__icons">
                <PersonIcon />
              </span>
              <span className="material__icons">
                <DuoIcon />
              </span>
              <span className="material__icons">
                <PhoneIcon />
              </span>
            </div>
          </div>
        </div>

        {/* <Link to={`/mailcontent${id}`}> */}

        <div className="email__list">
          <div className="emaillist__setting">
            <div className="emaillist__settingleft">
              <input type="checkbox" />
              <span className="material__icons">
                <ArrowDropDownIcon />
              </span>
              <span className="material__icons">
                <RedoIcon />
              </span>
              <span className="material__icons">
                <MoreVertIcon />
              </span>
            </div>

            <div className="emaillist__settingright">
              <span className="material__icons">
                <ArrowBackIosIcon />
              </span>
              <span className="material__icons">
                <ArrowForwardIosIcon />
              </span>
              <span className="material__icons">
                <KeyboardHideIcon />
              </span>
              <span className="material__icons">
                <SettingsIcon />
              </span>
            </div>
          </div>

          <div className="emaillist__section">
            <div className="section section__selected">
              <span className="material__icons">
                <InboxIcon />
              </span>
              <h4>Inbox</h4>
            </div>

            <div className="section ">
              <span className="material__icons">
                <PeopleIcon />
              </span>
              <h4>Social</h4>
            </div>

            <div className="section ">
              <span className="material__icons">
                <LocalOfferIcon />
              </span>
              <h4>Promotions</h4>
            </div>
          </div>
          {mail.map((item, index) => (
            <Link
              to={`/mailcontent/${item.mailid}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="emaillist__list" key={index}>
                <div className="emailrow">
                  <div className="emailrow__option">
                    <input type="checkbox" />
                    <span className="material__icons">
                      <StarBorderIcon />
                    </span>
                    <span className="material__icons">
                      <ToggleOffIcon />
                    </span>
                  </div>
                  <h3 className="emailrow__title">{item.username}</h3>

                  <div className="emailrow__message">
                    <h4>{item.subject}</h4>
                  </div>

                  <p className="emailrow__time">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
