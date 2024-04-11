import React from 'react';
import { Search, BellFill, EnvelopeFill,PersonCircle} from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

<InputGroup className="w-25" >
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
                <button  type="button" class="btn btn-light" ><h4 ><BellFill/></h4></button>
                <button type="button" class="btn btn-light" ><h4><EnvelopeFill/></h4></button>
                <button type="button" class="btn btn-light" ><h4><PersonCircle/></h4></button>
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