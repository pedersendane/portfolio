import {
    useEffect,
    useState
} from "react";

const host = window.location.hostname;
const FetchSpotifyUrl = () => {
    const [appState, setAppState] = useState({
        loading: null,
        error: null,
        url: null,
        response_type: null,
        client_id: null,
        scope: null,
        redirect_uri: null,
        state: null
    });
    useEffect(() => {
        setAppState({
            loading: true,
            error: false,
            url: null,
            response_type: null,
            client_id: null,
            scope: null,
            redirect_uri: null,
            state: null
        });
        //const apiUrl = `http://localhost:8000/login/spotify?host=${host}`;
        const apiUrl = `https://nesapi.herokuapp.com/login/spotify?host=${host}`;
        fetch(apiUrl)
        .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setAppState({
                    loading: false,
                    error: data.error,
                    url: data.url,
                    response_type: data.response_type,
                    client_id: data.client_id,
                    scope: data.scope,
                    redirect_uri: data.redirect_uri,
                    state: data.state
                });
                }
                else {
                    setAppState({
                        loading: false,
                        error: true
                    });
                }
            
        });
    }, [setAppState]);
    if (appState.loading || appState.loading == null) {
        return ('#')
    }
    else {
        const x = appState;
        if (!x || x.length === 0) { return '#' }
        if (x.error) { return '#' };
        const formattedUrl = `${x.url}response_type=${x.response_type}&client_id=${x.client_id}&scope=${encodeURIComponent(x.scope)}&redirect_uri=${encodeURIComponent(x.redirect_uri)}&state=${x.state}`;
        return (
            `${formattedUrl}`
            );
    }
}

export default FetchSpotifyUrl
