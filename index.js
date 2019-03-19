import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
        constructor(props) {
                super(props);
        }

        render() {
                return (
                        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Tusk Centro</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tusks</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Misc</a>
              </li>
          </ul>
        </div>
      </nav>
                );
        }
}
render(<Navbar />,
        document.getElementById('root'));
