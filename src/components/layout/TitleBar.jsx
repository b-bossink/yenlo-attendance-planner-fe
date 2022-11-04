import classes from "./TitleBar.module.css";
import SearchBar from "./SearchBar";

function TitleBar() {
    function logOutHandler(){
        alert("Log out method functionality.")
    }

    const Data = [{name: "Matthijs", id: 1},{name: "Justin", id: 2},{name: "Wim", id: 3},{name: "Pascal", id: 4},{name: "Boris", id: 5},{name: "Yassir", id: 6}];

  return (
    <header className={classes.header}>
      <img src="/YenloLogo.PNG" width="200" height="80" alt="Yenlo Logo" />
      <SearchBar placeholder="Search Employee..." data={Data} />
      <img src="/Uitloggen.PNG" width="50" height="50" alt="Uitloggen" onClick={logOutHandler}/>
    </header>
  );
}

export default TitleBar;