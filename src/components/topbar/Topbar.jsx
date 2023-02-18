import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";
//  

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarCenter">
        <span className="logo">G-CHAT</span>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <nav>
          <span ><Link to='/' className="topbarLink" >Homepage</Link></span>
          <span ><Link to='/profile' className="topbarLink" >Timeline</Link></span>
          <span><Link to='/' className="topbarLink" >G-Chatgpt</Link></span>
          <span><Link to='/login' className="topbarLink" >Logout</Link></span>
          {/* <span><Link to='/signup' className="topbarLink" >Sign up</Link></span> */}
          </nav>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">8</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
