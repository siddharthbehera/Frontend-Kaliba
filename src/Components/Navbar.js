import React from 'react';
import { Search, BellFill, EnvelopeFill,PersonCircle} from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          <img src="logo.png" alt="Logo" />
        </a> */}


        {/* <form className="d-flex">

         <div><Search/></div>
         <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          </div>
          
        </form> */}

<InputGroup className="w-25 ps-3" >
        <InputGroup.Text id="basic-addon1"><Search/></InputGroup.Text>
        <Form.Control
          placeholder="Search..."
          type="search"
          aria-label="Search"
        />
      </InputGroup>


        {/* <div className="d-flex align-items-center">
          <div>
            <BellFill/>
            <EnvelopeFill/>
            <PersonCircle/>
          </div>
          <span>Super Admin</span>
        </div> */}

          <div>
            <div class="row">
              <div class="btn-group col-sm">
                <button  type="button" class="btn btn-light"><h4 ><BellFill style={{ color: '#696969'}}/></h4></button>
                <button type="button" class="btn btn-light" ><h4><EnvelopeFill style={{ color: '#696969'}}/></h4></button>
                <button type="button" class="btn btn-light" ><h4><PersonCircle style={{ color: '#696969'}}/></h4></button>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="light">
                  <PersonCircle style={{ color: '#696969'}}/>
                    <button type="button" class="btn btn-light" ><h4><PersonCircle style={{ color: '#696969'}}/></h4></button>
                   </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">User Detail</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
              <div class="col-sm">
                <div>Super Admin</div>
                <div>CEO</div>
              </div>
            </div>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;