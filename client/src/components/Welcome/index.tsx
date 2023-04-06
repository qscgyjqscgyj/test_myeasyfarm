import { useNavigate } from 'react-router-dom';

import './styles.css';

export function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="welcomeWrapper">
            <button
                className="greenButton"
                onClick={() => {
                    navigate('/partfields');
                }}
            >
                Welcome
            </button>
        </div>
    );
}
