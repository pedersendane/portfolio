import {
  useEffect,
  useState
} from "react";
import BootstrapDetailedCard from '../../Cards/BootstrapDetailedCard';
import {
  updateDarkMode
} from "../../Toggle/DarkToggle";

function FetchRepo() {
  const [appState, setAppState] = useState({
    loading: null,
    repos: [],
  });

  useEffect(() => {
    setAppState({
      loading: true
    });
    const apiUrl = `https://api.github.com/users/pedersendane/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({
          loading: false,
          repos: repos
        });
      });
  }, [setAppState]);


  if (appState.loading || appState.loading == null) {
    return (
      <p style={
          {
            textAlign: 'center',
            fontSize: '30px'
          }
        } >
      Hold on, fetching data may take some time: )
    </p>
  )
} else {
  const items = appState.repos;
    if (!items || items.length === 0) { return <p> No items, sorry </p>; }
    console.log(items);
  return (
    items.map((item) => {
      const languageString = item.language ? `Tech Used: ${item.language}` : 'Text Files';
      const date = new Date(item.created_at) // formated_Date - SDK returned date
      const creationDateString = `Created on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
      return (
        <BootstrapDetailedCard width={
          45
        }
        header={
          // item.name
          item.full_name
        }
        description={
          item.description
        }
        mutedText = {
          languageString
        }
        link = {
          item.html_url
        }
        linkText = {
          "View on Github"
        }
        footer = {
          creationDateString
        }
        />
      );
    })
  )
}
}
export default FetchRepo;