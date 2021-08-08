import {
    useEffect,
    useState
} from 'react';
import BootstrapImageCard from '../../Cards/BootstrapImageCard';


function FetchUser() {
    const [appState, setAppState] = useState({
        loading: null,
        user: null,
    });
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://api.github.com/users/pedersendane`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((user) => {
                setAppState({ loading: false, user: user })
            });    
    }, [setAppState]);
    if (appState.loading || appState.loading == null) {
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Hold on, fetching data may take some time :)
            </p>
        );
    } else {
        const user = appState.user;
        if (!user) {
            return <p>No items, sorry</p>;
        }
        console.log(user);
        const date = new Date(user.created_at) // formated_Date - SDK returned date
        const creationDateString = `Created on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
        return (
            <>
                <BootstrapImageCard
                    cardWidth={`95%`}
                    cardMargin={`2em 0 2em 0`}
                    cardDisplay={`inline`}
                    cardPadding={`0 0 2em 0`}
                    header={"Github Projects"}
                    imageSrc={user.avatar_url}
                    imageAlt={"Dane's Github profile picture"}
                    imageWidth={`260px`}
                    imageHeight={`260px`}
                    imageBorderRadius={`50%`}
                    title={user.login}
                    text={creationDateString}
                    link={user.html_url}
                    linkText={"View my Github"}
                    />
            </>
        )
    }
}

export default FetchUser