import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import CalendarActive from "../../assets/CalendarActive.PNG";
import CalendarInactive from "../../assets/CalendarInactive.PNG";
import PlaneActive from "../../assets/PlaneActive.PNG";
import PlaneInactive from "../../assets/PlaneInactive.PNG";
import PeopleActive from "../../assets/PeopleActive.PNG";
import PeopleInactive from "../../assets/PeopleInactive.PNG";
import HeartActive from "../../assets/HeartActive.PNG";
import HeartInactive from "../../assets/HeartInactive.PNG";
import TeamManage from "../../assets/TeamManage.PNG";
import SingleManage from "../../assets/SingleManage.PNG";

import classes from "./MainNavigation.module.css";
import UserContext from "../../store/logged-in-context";

function MainNavigation() {
  const userCtx = useContext(UserContext);
  const admin = userCtx.user.isManager;
  const location = useLocation();
  let Navbar;

  if (
    (location.pathname === "/user-planner" ||
      location.pathname === "/user-planner/edit") &&
    admin === true
  ) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarActive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (
    location.pathname === "/user-planner" ||
    location.pathname === "/user-planner/edit"
  ) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarActive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/team-planner" && admin === true) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleActive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/team-planner") {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleActive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/call-in-sick" && admin === true) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartActive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/call-in-sick") {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartActive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/ask-for-leave" && admin === true) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneActive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/ask-for-leave") {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneActive} width="70" alt="Leave" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/team-manage" && admin === true) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/single-manage" && admin === true) {
    Navbar = (
      <div className={classes.navbackground}>
        <Link
          className={classes.calender}
          to="/user-planner"
          state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
        >
          <img src={CalendarInactive} width="76" height="76" alt="Calender" />
        </Link>
        <Link className={classes.team} to="/team-planner">
          <img src={PeopleInactive} width="70" alt="Team" />
        </Link>
        <Link className={classes.sick} to="/call-in-sick">
          <img src={HeartInactive} width="70" alt="Sick" />
        </Link>
        <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
          <img src={PlaneInactive} width="70" alt="Leave" />
        </Link>

        <div className={classes.adminLine}></div>

        <Link className={classes.teamManage} to="/team-manage">
          <img src={TeamManage} width="70" alt="Manage SVG" />
        </Link>

        <Link className={classes.singleManage} to="/single-manage">
          <img src={SingleManage} width="70" alt="Manage SVG" />
        </Link>
      </div>
    );
  } else if (location.pathname === "/create-user" && admin === true) {
    Navbar = (
      <div className="MainNavigation">
        <div className={classes.navbackground}>
          <Link
            className={classes.calender}
            to="/user-planner"
            state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
          >
            <img src={CalendarInactive} width="76" height="76" alt="Calender" />
          </Link>
          <Link className={classes.team} to="/team-planner">
            <img src={PeopleInactive} width="70" height="70" alt="Team" />
          </Link>
          <Link className={classes.sick} to="/call-in-sick">
            <img src={HeartInactive} width="70" height="70" alt="Sick" />
          </Link>
          <Link className={classes.leave} to="/ask-for-leave" state={{user: {id: userCtx.user.id, name: userCtx.user.name}}}>
            <img src={PlaneInactive} width="70" height="70" alt="Leave" />
          </Link>

          <div className={classes.adminLine}></div>

          <Link className={classes.teamManage} to="/team-manage">
            <img src={TeamManage} width="70" height="70" alt="Manage SVG" />
          </Link>

          <Link className={classes.singleManage} to="/single-manage">
            <img src={SingleManage} width="70" height="70" alt="Manage SVG" />
          </Link>
        </div>
      </div>
    );
  }
  return <div className="grid">{Navbar}</div>;
}

export default MainNavigation;
