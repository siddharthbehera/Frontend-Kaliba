import React, {useState} from 'react';
import { ArrowLeft,PeopleFill,CaretRightFill,Boxes,Stars,FileEarmarkTextFill,Substack,GearFill,CurrencyRupee } from 'react-bootstrap-icons';

const Sidebar = () => {

  
     const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
     const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  
    const toggleSubMenu1 = () => {
      setIsSubMenuOpen1(!isSubMenuOpen1);
    };
  
    const toggleSubMenu2 = () => {
      setIsSubMenuOpen2(!isSubMenuOpen2);
    };
   
  return (
    <div className="sidebar">
      {/* <div class="d-flex flex-row-reverse">
      <button class="btn btn-primary"><ArrowLeft /></button>
      </div> */}
      <ul className="nav flex-column w-100">
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link active"  href="#"><Boxes/> Dashboard</a>
        </li>
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link"onClick={toggleSubMenu1}><PeopleFill/> User List <CaretRightFill/></a>
        </li>
        <ul class="list-unstyled">
        {isSubMenuOpen1 && (
        <div className="position-relative" class="d-flex justify-content-center">
          <div className="nav-link">
            <li class="SideBarButton ps-3"><PeopleFill/> To verify</li>
            <li class="SideBarButton ps-3"><PeopleFill/> New</li>
            <li class="SideBarButton ps-3"><PeopleFill/> Resubmitted</li>
            <li class="SideBarButton ps-3"><PeopleFill/> Pending</li>
            <li class="SideBarButton ps-3"><PeopleFill/> Approved</li>
          </div>
        </div>
      )}
        </ul>
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link"onClick={toggleSubMenu2}><Stars/>Projects <CaretRightFill/></a>
        </li>
        <ul class="list-unstyled">
        {isSubMenuOpen2 && (
        <div className="position-relative" class="d-flex justify-content-center">
          <div className="nav-link">
            <li class="SideBarButton ps-5"><FileEarmarkTextFill/>Projects Verification</li>
          </div>
        </div>
      )}
        </ul>

        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link active" href="#"><Substack/> Blogs</a>
        </li>
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link active" href="#"><PeopleFill/> Employee</a>
        </li>
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link active" href="#"><CurrencyRupee/>Financial</a>
        </li>
        <li className="nav-item" class="d-flex justify-content-center SideBarButton">
          <a className="nav-link active" href="#"><GearFill/>Settings</a>
        </li>

      
      </ul>
    </div>
  );
};

export default Sidebar;