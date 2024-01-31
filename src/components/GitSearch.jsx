import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const GitSearch = ({ userGit, setUserGit }) => {

    function handleSubmit(e) {
        e.preventDefault();
        const dataForm = new window.FormData(e.target);
        setUserGit(dataForm.get('search'));
    }

    return (
        <section className="git-search">
            <span className="git-search__icon">
                <FontAwesomeIcon icon="fas fa-search" />
            </span>
            <form className="git-search__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="git-search__inp"
                    placeholder="Search GitHub usarname..."
                    value={userGit}
                />
                <button className="git-search__btn">
                    Search
                </button>
            </form>
        </section>
    )
}
