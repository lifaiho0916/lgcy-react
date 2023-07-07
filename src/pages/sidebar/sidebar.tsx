import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col} from "react-bootstrap";
import logo from "../../../src/assets/images/logo.png";
import {Navbar, Nav} from "react-bootstrap";
import "../../../src/fonts/fonts.css";
import {useLocation, useNavigate} from "react-router-dom";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeNavItem, setActiveNavItem] = useState(location.pathname);

    const handleNavbarItemClick = (path: string) => {
        setActiveNavItem(path);
        navigate(path);
    };

    return (
        <Row className="menu-bar-row">
            <Col xs={12} md={3} lg={2} className="sidebar">
                <div className="left-side-bar">
                    <div className="site-logo">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="sidebar-menu">
                        <Navbar expand="lg" className="">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link
                                        href="/dashboard"
                                        onClick={() => handleNavbarItemClick("/dashboard")}
                                        className={activeNavItem === "/dashboard" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="20"
                                            viewBox="0 0 24 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.459 0.6605C12.3259 0.556744 12.162 0.500397 11.9932 0.500397C11.8245 0.500397 11.6606 0.556744 11.5275 0.6605L0.75 9.06425L1.68225 10.2433L3 9.21575V18.5C3.00079 18.8976 3.15908 19.2787 3.44022 19.5598C3.72135 19.8409 4.10242 19.9992 4.5 20H19.5C19.8976 19.9992 20.2787 19.8409 20.5598 19.5598C20.8409 19.2787 20.9992 18.8976 21 18.5V9.2225L22.3177 10.25L23.25 9.071L12.459 0.6605ZM13.5 18.5H10.5V12.5H13.5V18.5ZM15 18.5V12.5C14.9996 12.1023 14.8414 11.721 14.5602 11.4398C14.279 11.1586 13.8977 11.0004 13.5 11H10.5C10.1023 11.0004 9.721 11.1586 9.43978 11.4398C9.15856 11.721 9.0004 12.1023 9 12.5V18.5H4.5V8.0465L12 2.204L19.5 8.054V18.5H15Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Home
                                    </Nav.Link>

                                    <Nav.Link
                                        href="/friends"
                                        onClick={() => handleNavbarItemClick("/friends")}
                                        className={activeNavItem === "/friends" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="14"
                                            viewBox="0 0 24 14"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.75 0.25C4.275 0.25 2.25 2.275 2.25 4.75C2.25 6.238 2.98275 7.5625 4.10175 8.383C2.124 9.364 0.75 11.398 0.75 13.75H2.25C2.25 11.257 4.257 9.25 6.75 9.25C9.243 9.25 11.25 11.257 11.25 13.75H12.75C12.75 11.257 14.757 9.25 17.25 9.25C19.743 9.25 21.75 11.257 21.75 13.75H23.25C23.25 11.3972 21.876 9.364 19.8983 8.383C20.4709 7.96574 20.937 7.41929 21.2588 6.78803C21.5805 6.15678 21.7488 5.45852 21.75 4.75C21.75 2.275 19.725 0.25 17.25 0.25C14.775 0.25 12.75 2.275 12.75 4.75C12.75 6.238 13.4827 7.5625 14.6017 8.383C13.5059 8.92176 12.5989 9.77963 12 10.8438C11.4011 9.77963 10.4941 8.92176 9.39825 8.383C9.97088 7.96574 10.437 7.41929 10.7588 6.78803C11.0805 6.15678 11.2488 5.45852 11.25 4.75C11.25 2.275 9.225 0.25 6.75 0.25ZM6.75 1.75C8.41725 1.75 9.75 3.08275 9.75 4.75C9.75 6.41725 8.41725 7.75 6.75 7.75C5.08275 7.75 3.75 6.41725 3.75 4.75C3.75 3.08275 5.08275 1.75 6.75 1.75ZM17.25 1.75C18.9173 1.75 20.25 3.08275 20.25 4.75C20.25 6.41725 18.9173 7.75 17.25 7.75C15.5827 7.75 14.25 6.41725 14.25 4.75C14.25 3.08275 15.5827 1.75 17.25 1.75Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Friends
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/Explore"
                                        onClick={() => handleNavbarItemClick("/Explore")}
                                        className={activeNavItem === "/Explore" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.0303 5.96975C15.9318 5.87125 15.8079 5.8021 15.6724 5.77005C15.5369 5.73799 15.3951 5.74429 15.263 5.78825L8.513 8.03825C8.40245 8.07511 8.302 8.1372 8.2196 8.2196C8.1372 8.302 8.07511 8.40245 8.03825 8.513L5.78825 15.263C5.74418 15.3951 5.73779 15.537 5.76978 15.6725C5.80178 15.8081 5.8709 15.9321 5.9694 16.0306C6.0679 16.1291 6.19189 16.1982 6.32747 16.2302C6.46304 16.2622 6.60485 16.2558 6.737 16.2117L13.487 13.9617C13.5976 13.9249 13.698 13.8628 13.7804 13.7804C13.8628 13.698 13.9249 13.5975 13.9617 13.487L16.2117 6.737C16.2557 6.60487 16.262 6.46311 16.23 6.3276C16.1979 6.19209 16.1287 6.06818 16.0303 5.96975ZM7.68575 14.315L9.34325 9.344L12.6575 12.6583L7.68575 14.315Z"
                                                fill="#111111"
                                            />
                                            <path
                                                d="M11 21.5C8.9233 21.5 6.89323 20.8842 5.16651 19.7304C3.4398 18.5767 2.09399 16.9368 1.29927 15.0182C0.504546 13.0996 0.296611 10.9884 0.701755 8.95155C1.1069 6.91475 2.10693 5.04383 3.57538 3.57538C5.04383 2.10693 6.91475 1.1069 8.95155 0.701755C10.9884 0.29661 13.0996 0.504545 15.0182 1.29926C16.9368 2.09398 18.5767 3.4398 19.7304 5.16651C20.8842 6.89323 21.5 8.9233 21.5 11C21.4968 13.7838 20.3896 16.4527 18.4211 18.4211C16.4527 20.3896 13.7838 21.4968 11 21.5ZM11 2C9.21997 2 7.47991 2.52784 5.99987 3.51677C4.51983 4.50571 3.36627 5.91131 2.68509 7.55585C2.0039 9.20038 1.82567 11.01 2.17293 12.7558C2.5202 14.5016 3.37737 16.1053 4.63604 17.364C5.89471 18.6226 7.49836 19.4798 9.24419 19.8271C10.99 20.1743 12.7996 19.9961 14.4442 19.3149C16.0887 18.6337 17.4943 17.4802 18.4832 16.0001C19.4722 14.5201 20 12.78 20 11C19.9972 8.6139 19.0481 6.32633 17.3609 4.63911C15.6737 2.95188 13.3861 2.00278 11 2Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Explore
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/Notification"
                                        onClick={() => handleNavbarItemClick("/Notification")}
                                        className={activeNavItem === "/Notification" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="23"
                                            viewBox="0 0 20 23"
                                            fill="none"
                                        >
                                            <path
                                                d="M19.5303 14.4697L17.5 12.4395V9.75C17.4977 7.89138 16.8063 6.09964 15.5595 4.72124C14.3127 3.34284 12.5991 2.4757 10.75 2.2875V0.75H9.25V2.2875C7.40093 2.4757 5.68732 3.34284 4.44053 4.72124C3.19373 6.09964 2.50233 7.89138 2.5 9.75V12.4395L0.46975 14.4697C0.329088 14.6104 0.250042 14.8011 0.25 15V17.25C0.25 17.4489 0.329018 17.6397 0.46967 17.7803C0.610322 17.921 0.801088 18 1 18H6.25V18.5828C6.23369 19.5342 6.56905 20.4583 7.19184 21.1778C7.81462 21.8973 8.68102 22.3617 9.625 22.482C10.1464 22.5337 10.6728 22.4757 11.1704 22.3117C11.6681 22.1478 12.1259 21.8815 12.5144 21.53C12.9029 21.1785 13.2136 20.7495 13.4264 20.2707C13.6392 19.792 13.7494 19.2739 13.75 18.75V18H19C19.1989 18 19.3897 17.921 19.5303 17.7803C19.671 17.6397 19.75 17.4489 19.75 17.25V15C19.75 14.8011 19.6709 14.6104 19.5303 14.4697ZM12.25 18.75C12.25 19.3467 12.0129 19.919 11.591 20.341C11.169 20.7629 10.5967 21 10 21C9.40326 21 8.83097 20.7629 8.40901 20.341C7.98705 19.919 7.75 19.3467 7.75 18.75V18H12.25V18.75ZM18.25 16.5H1.75V15.3105L3.78025 13.2803C3.92091 13.1396 3.99996 12.9489 4 12.75V9.75C4 8.1587 4.63214 6.63258 5.75736 5.50736C6.88258 4.38214 8.4087 3.75 10 3.75C11.5913 3.75 13.1174 4.38214 14.2426 5.50736C15.3679 6.63258 16 8.1587 16 9.75V12.75C16 12.9489 16.0791 13.1396 16.2197 13.2803L18.25 15.3105V16.5Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Notification
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/profile/1"
                                        onClick={() => handleNavbarItemClick("/profile/1")}
                                        className={activeNavItem === "/profile/1" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="22"
                                            viewBox="0 0 18 22"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9 0.25C7.74022 0.25 6.53204 0.750445 5.64125 1.64124C4.75045 2.53204 4.25 3.74022 4.25 5C4.25 6.25978 4.75045 7.46796 5.64125 8.35876C6.53204 9.24955 7.74022 9.75 9 9.75C10.2598 9.75 11.468 9.24955 12.3588 8.35876C13.2496 7.46796 13.75 6.25978 13.75 5C13.75 3.74022 13.2496 2.53204 12.3588 1.64124C11.468 0.750445 10.2598 0.25 9 0.25ZM5.75 5C5.75 4.13805 6.09241 3.3114 6.70191 2.7019C7.3114 2.09241 8.13805 1.75 9 1.75C9.86196 1.75 10.6886 2.09241 11.2981 2.7019C11.9076 3.3114 12.25 4.13805 12.25 5C12.25 5.86195 11.9076 6.6886 11.2981 7.2981C10.6886 7.90759 9.86196 8.25 9 8.25C8.13805 8.25 7.3114 7.90759 6.70191 7.2981C6.09241 6.6886 5.75 5.86195 5.75 5ZM9 11.25C6.687 11.25 4.555 11.776 2.976 12.664C1.42 13.54 0.250002 14.866 0.250002 16.5V16.602C0.249002 17.764 0.248002 19.222 1.527 20.264C2.156 20.776 3.037 21.141 4.227 21.381C5.419 21.623 6.974 21.75 9 21.75C11.026 21.75 12.58 21.623 13.774 21.381C14.964 21.141 15.844 20.776 16.474 20.264C17.753 19.222 17.751 17.764 17.75 16.602V16.5C17.75 14.866 16.58 13.54 15.025 12.664C13.445 11.776 11.314 11.25 9 11.25ZM1.75 16.5C1.75 15.649 2.372 14.725 3.711 13.972C5.027 13.232 6.895 12.75 9.001 12.75C11.105 12.75 12.973 13.232 14.289 13.972C15.629 14.725 16.25 15.649 16.25 16.5C16.25 17.808 16.21 18.544 15.526 19.1C15.156 19.402 14.536 19.697 13.476 19.911C12.419 20.125 10.974 20.25 9 20.25C7.026 20.25 5.58 20.125 4.524 19.911C3.464 19.697 2.844 19.402 2.474 19.101C1.79 18.544 1.75 17.808 1.75 16.5Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/"
                                        onClick={() => handleNavbarItemClick("/SignOut")}
                                        className={activeNavItem === "/SignOut" ? "active" : ""}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="10"
                                            viewBox="0 0 18 10"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.497 0.989L9 8.297L1.503 0.989C1.36905 0.858167 1.18924 0.78492 1.002 0.78492C0.814759 0.78492 0.634946 0.858167 0.501 0.989C0.436143 1.05255 0.384618 1.12839 0.349443 1.2121C0.314268 1.29581 0.29615 1.3857 0.29615 1.4765C0.29615 1.5673 0.314268 1.65719 0.349443 1.74089C0.384618 1.8246 0.436143 1.90045 0.501 1.964L8.4765 9.74C8.61656 9.87652 8.80441 9.95293 9 9.95293C9.19559 9.95293 9.38344 9.87652 9.5235 9.74L17.499 1.9655C17.5643 1.90191 17.6162 1.82587 17.6517 1.74188C17.6871 1.6579 17.7054 1.56766 17.7054 1.4765C17.7054 1.38534 17.6871 1.2951 17.6517 1.21111C17.6162 1.12713 17.5643 1.05109 17.499 0.987499C17.3651 0.856666 17.1852 0.783421 16.998 0.783421C16.8108 0.783421 16.6309 0.856666 16.497 0.987499V0.989Z"
                                                fill="#111111"
                                            />
                                        </svg>{" "}
                                        Sign Out
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Sidebar;
