import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faSearch, faLink, faCity } from '@fortawesome/free-solid-svg-icons'
import "./App.scss";
import { GitSearch } from './components/GitSearch';
import { GitMain } from './components/GitMain';
import { useEffect, useRef, useState } from 'react';
library.add(fab, faMapMarkerAlt, faSearch, faLink, faCity)

function useUser(userGit) {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${userGit}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [userGit])

    return { user }
}

function App() {

    const [userGit, setUserGit] = useState("octocat");
    const [mode, setMode] = useState(false)
    const { user } = useUser(userGit);
    const bodyRef = useRef(document.body);

    const handleChange = () => {
        const body = bodyRef.current;
        if (mode) {
            body.removeAttribute('data-theme');
        } else {
            body.setAttribute('data-theme', "light");
        }
        setMode(!mode)
    }


    return (
        <section className="git-container">
            <header className="git-top">
                <h2 className='title'>devfinder</h2>
                <input
                    type="checkbox"
                    name="mode"
                    id="mode"
                    className='mode-check'
                    onChange={handleChange}
                />
            </header>
            <GitSearch setUserGit={setUserGit} />
            <GitMain user={user} />
        </section>
    );
}


export default App;
