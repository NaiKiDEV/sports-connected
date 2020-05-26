import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import logUser from '../actions/loginAction';
import setData from '../actions/userDataAction';
import { useHistory } from 'react-router-dom';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="#"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

function ProfileIcon() {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <Dropdown className="">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <img src="https://flaticons.net/icon.php?slug_category=application&slug_icon=user-profile" alt="logo" className="profile-logo" />
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu} className="mb-0 pb-0" alignRight>
                    <Dropdown.Item eventKey="0" className="dropdown-button" onClick={() => history.push('/dashboard')}>Pagrindinis</Dropdown.Item>
                    <Dropdown.Item eventKey="1" className="dropdown-button" onClick={() => history.push('/profile')}>Profilis</Dropdown.Item>
                    <Dropdown.Item disabled eventKey="2" className="dropdown-button">Narystes</Dropdown.Item>
                    <Dropdown.Item disabled eventKey="3" className="dropdown-button">Nustatymai</Dropdown.Item>
                    <Dropdown.Item active eventKey="4" className="dropdown-button"
                        onClick={() => dispatch(logUser(false), dispatch(setData({})), history.push('/'))}>
                        Atsijungti
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div >
    )
}

export default ProfileIcon;