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

  useEffect( async() => {
   
      var id = sessionStorage.getItem("from");
      var toid = {
        to: id,
      };
    
      var data = await axios
        .post("https://gmail-clone-guvi.herokuapp.com/mail", toid)
        .then((res) => {
          return res.data;
        })
      setmail(data);
    
  }, []);

  const classes = useStyles();




  const gotomail = async () => {
    var currentdate = new Date();
    var date =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear();
  
    var mailid = Math.floor(Math.random() * 1000000000 + 1);
  
    var from = sessionStorage.getItem("from");
    var username = sessionStorage.getItem("username");

    var to = document.getElementById("to").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    var data = {
     
      to: to,
      subject: subject,
      message: message,
      date: date,
      mailid: mailid,
      from: from,
      username: username,
    };


    var response = await axios
      .post("https://gmail-clone-guvi.herokuapp.com/sauce", data).then((res) => {return res.data});
      setVisible(false)
      alert("Your mail is send ...")
  };




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
                    id="to"
                    label="Recipients"
                    name="firstname"
    
                  />
                  <TextField
                    id="subject"
                    label="Subject"
                
                  />

                  <TextField
                    id="message"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
              
                  />
                  <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                      Close
                    </CButton>
                    <CButton color="primary" onClick={gotomail}>
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
