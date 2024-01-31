import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const GitMain = ({ user }) => {
    const {
        name,
        created_at,
        bio,
        public_repos,
        location,
        followers,
        following,
        avatar_url,
        blog,
        login
    } = user;

    const dateU = new Date(created_at)

    return (
        <main className="git-main">
            <header className="git-main__top">
                <div className="git-main__logo">
                    <img src={avatar_url} alt="logo" className="git-main__img" />
                </div>
                <div className="git-main__data-name">
                    <div className="git-main__named">
                        <h2 className="git-main__name">
                            {name}
                        </h2>
                        <a className="git-main__nick" href='#'>@{login}</a>
                    </div>
                    <span className="git-main__joined">
                        Joined {dateU.getDate() + " " + months[dateU.getMonth()] + " " + dateU.getFullYear()}
                    </span>
                </div>

                <p className="git-main__bio">
                    {
                        bio ?? "This profile is no bio"
                    }
                </p>
            </header>



            <div className="git-main__data">
                <div className="repo">
                    <div className="repo__repos">
                        <h4>Repos</h4>
                        <span className="repo__num">{public_repos}</span>
                    </div>
                    <div className="repo__repos">
                        <h4>Followers</h4>
                        <span className="repo__num">{followers}</span>
                    </div>
                    <div className="repo__repos">
                        <h4>Following</h4>
                        <span className="repo__num">{following}</span>
                    </div>
                </div>
                <div className="extra">
                    <div className="extra__item">
                        <FontAwesomeIcon icon="fas fa-map-marker-alt" />
                        <span className="extra__ubication"> {location}</span>
                    </div>
                    <div className="extra__item">
                        <FontAwesomeIcon icon="fab fa-twitter" />
                        <span className="extra__twit"> Not Available</span>
                    </div>
                    <div className="extra__item">
                        <FontAwesomeIcon icon="fa-solid fa-link" />
                        <span className="extra__twit"> {
                            blog || "no blog"
                        }
                        </span>
                    </div>
                    <div className="extra__item">
                        <FontAwesomeIcon icon="fa-solid fa-city" />
                        <span className="extra__twit"> @github</span>
                    </div>
                </div>
            </div>
        </main>
    )
}


GitMain.propTypes = {
    user: PropTypes.object
}
