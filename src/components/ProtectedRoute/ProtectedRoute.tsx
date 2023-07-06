import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Sidebar from "../../pages/sidebar/Sidebar";
import Topbar from "../../pages/topbar/Topbar";

const ProtectedRoute = ({ children }: any) => {
    const token = true;
    const memoizedChildren = React.useMemo(() => children, [children]);
  
    return (
      <div>
        {token ? (
          <>
            <Container fluid>
              <div className="content-outer">
                <Topbar />
                {memoizedChildren}
                <Sidebar />
              </div>
            </Container>
          </>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    );
  };
  
export default ProtectedRoute;
