import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {setAlert} from '../../actions/alert'
import './UserDashboard.css';
const UserDashboard = ({ isAuthenticated,setAlert }) => {
  return (
    <div>
      {!isAuthenticated ? (
        setAlert('You need to be logged in to do that','danger'),
         <Redirect to='/login' />
      ) : (
        <div className='main-grid'>
          {/*Left Section*/}
          <section id='s1-left'>
            <div className='l-one-flex'>
              <a href>
                <img
                  src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/xShare_y0xymj.png'
                  alt=''
                />
              </a>
              <a href>
                <img
                  src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/chart_jw6dyb.png'
                  alt=''
                />
              </a>
            </div>
            <div className='l-two-grid'>
              <div className='l-two'>
                <Link to='/'>
                  <img
                    src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/home_m43xbx.png'
                    alt=''
                  />
                  <span>Home</span>
                </Link>
              </div>
              <div className='l-two'>
                <Link to='/payment'>
                  <img
                    src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/payment_uhwtwy.png'
                    alt=''
                  />
                  <span>Payment</span>
                </Link>
              </div>
              {/* <div className='l-two'>
              <a href>
                <img
                  src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/settings_rhfaq7.png'
                  alt=''
                />
              </a>
              <span>Settings</span>
            </div> */}
            </div>
          </section>
          {/*Right Section*/}
          <section id='s2-right'>
            <section id='s3-top'>
              {/*Right Nav*/}
              <nav>
                <div className='search'>
                  <input
                    type='search'
                    placeholder=' Search'
                    style={{ fontFamily: 'Arial, FontAwesome' }}
                  />
                </div>
                <div className='nav-right'>
                  <a href>
                    <img
                      src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/bell_sktplb.png'
                      alt=''
                    />
                  </a>
                  <a href>
                    <img
                      className='img-circle'
                      src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/avatar_zshtk1.png'
                      alt=''
                    />
                  </a>
                  <span className='color-white'>Arya Stark</span>
                </div>
              </nav>
              <article id='home'>
                <img
                  src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/home-t_burkhe.png'
                  alt=''
                />
                <img
                  src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/home-2_uc6lmt.png'
                  alt=''
                />
              </article>
              {/*Cards section/ First Section*/}
              <article id='nav-cards'>
                <div className='card-one'>
                  <div className='card-sub-flex'>
                    <p>DOWNLOADS</p>
                    <h2>TOTAL</h2>
                    <h2>DOWNLOADS</h2>
                  </div>
                  <div className='img-circle green circle-div'>100</div>
                </div>
                <div className='card-one'>
                  <div className='card-sub-flex'>
                    <p>ANALYTICS</p>
                    <h2>GOOGLE</h2>
                    <h2>ANALYTICS</h2>
                  </div>
                  <div className='img-circle red circle-div'>
                    <img
                      src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/trending-down_ocq9le.png'
                      alt=''
                    />
                  </div>
                </div>
                <div className='card-one'>
                  <div className='card-sub-flex'>
                    <p>STORAGE</p>
                    <h2>STORAGE</h2>
                    {/* <h2>6GB LEFT</h2> */}
                  </div>
                  <div className='img-circle green circle-div'>10GB</div>
                </div>
                <div className='card-one'>
                  <div className='card-sub-flex'>
                    <p>PLAN-FREE</p>
                    {/* <h2></h2> */}
                    <h2>UPGRADE NOW</h2>
                  </div>
                  <div className='img-circle blue circle-div'>PRO</div>
                </div>
              </article>
            </section>
            {/*Right / Bottom Section */}
            <section id='s4-bottom'>
              <div className='right-section-content offset-grid'>
                <article className='right-section-content' id='dl-cards'>
                  <div className='card-two'>
                    <div className='two-sub-flex'>
                      {/* <h4>All uploads</h4> */}
                      <br />
                      <br />
                      <br />
                      <h3>swcgcjjbvcrdxxkgggggvgvgjn.mp4</h3>
                      <a href>http://xshare.gq/gcfkgfcfghjkjhgfd</a>
                      <p>10 Downloads</p>
                      <p>22/10/2019</p>
                    </div>
                    <div className='card-icons'>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/copy_yhensf.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/share_ntm46n.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/trash_iycq23.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/chart-2_bkyz9m.png'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                  <div className=' card-two'>
                    <div className='two-sub-flex'>
                      {/* <h4>All uploads</h4> */}
                      <br />
                      <br />
                      <br />
                      <h3>swcgcjjbvcrdxxkgggggvgvgjn.mp4</h3>
                      <a href>http://xshare.gq/gcfkgfcfghjkjhgfd</a>
                      <p>10 Downloads</p>
                      <p>22/10/2019</p>
                    </div>
                    <div className='card-icons'>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/copy_yhensf.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/share_ntm46n.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/trash_iycq23.png'
                          alt=''
                        />
                      </a>
                      <a href>
                        <img
                          src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/chart-2_bkyz9m.png'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </article>
                {/* <article id='right-img'>
                <img
                  className='img-square'
                  src='assets/color-cover.png'
                  alt=''
                />
              </article> */}
              </div>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  {setAlert}
)(UserDashboard);
