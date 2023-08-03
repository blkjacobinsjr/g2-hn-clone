import React, { Component } from 'react'
import '../components/Navbar'; // Assuming you have a CSS file named Navbar.css in the same folder

class nav extends Component {
  render() {
    return (
      <table id="nav" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef" className="snipcss-4qg1r">
        <tbody>
          <tr>
            <td bgcolor="#ff6600">
              <table border="0" cellPadding="0" cellSpacing="0" width="100%" id="style-BXtQO" className="style-BXtQO">
                <tbody>
                  <tr>
                    <td id="style-dD9vW" className="style-dD9vW">
                      <a href="https://news.ycombinator.com">
                        <img src="https://news.ycombinator.com/y18.svg" width="18" height="18" id="style-N9GUd" className="style-N9GUd" alt="logo" />
                      </a>
                    </td>
                    <td id="style-1G8mE" className="style-1G8mE">
                      <span className="pagetop">
                        <b className="hnname">
                          <a href="news">
                            Hacker News
                          </a>
                        </b>
                        <a href="newest">
                          new
                        </a>
                        |
                        <a href="front">
                          past
                        </a>
                        |
                        <a href="newcomments">
                          comments
                        </a>
                        |
                        <a href="ask">
                          ask
                        </a>
                        |
                        <a href="show">
                          show
                        </a>
                        |
                        <a href="jobs">
                          jobs
                        </a>
                        |
                        <a href="submit">
                          submit
                        </a>
                      </span>
                    </td>
                    <td id="style-CCL7O" className="login-link">
                      <span className="pagetop">
                        <a href="login?goto=news">
                          login
                        </a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default nav;