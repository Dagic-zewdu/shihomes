import React, { Component } from 'react'
import './css/profile.css'
import $ from 'jquery'
export default class Index extends Component {
    plus=(e)=>{
        $(this).find('.ic').toggleClass('fa-plus fa-minus');
    }
    render() {
        return (
            <div>
<div className="row">
 <div className="col-md-12 col-12 user-detail-main border mb-3 pb-2">
     <div className="row">
        <div className="col-md-12 col-12 profile-back">
              <img src="images/profile.jpg" className="rounded-circle" alt=''/>
                   </div>
                        </div>
<div className="row">
          <div className="col-md-12 col-12 user-detail text-center">
                  <h4 className="m-0"><strong>Dagic Zewdu</strong></h4>
                    <p className="m-0">User</p>
                                <p className="mb-1">id:785369</p>
                                <button className="btn btn-info btn-sm mx-3">
                                  credit
                             <i className="fa fa-circle text-warning mx-2"></i>       
                             4500
                                </button>
                                <button className="btn btn-primary btn-sm">Posts 10</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12 mt-4 pl-0 accordion-group-one">
                        <div id="accordionMyStory" className="mb-2">
                          <div className="card rounded-0 story-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingMyStory">
                                <h6 className="mb-0">My Story</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseMyStory" aria-expanded="true" aria-controls="collapseMyStory">
                                    <i className="ic fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseMyStory" className="collapse show" aria-labelledby="headingMyStory" data-parent="#accordionMyStory">
                              <div className="card-body pt-2 pb-2">
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1">
                                        <strong>About</strong></h6>
                                    <p className="section-content m-0">Write something about you.</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Introduction</strong></h6>
                                    <p className="section-content m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt.</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Achievement</strong></h6>
                                    <p className="section-content m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt.</p>
                                </div>
                                <button className="btn btn-info btn-sm">Edit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="accordionMyPlan">
                          <div className="card rounded-0 story-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingMyPlan">
                                <h6 className="mb-0">My Plan</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseMyPlan" aria-expanded="true" onClick={this.plus} aria-controls="collapseMyPlan">
                                    <i className="ic fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseMyPlan" className="collapse show" aria-labelledby="headingMyPlan" data-parent="#accordionMyPlan">
                              <div className="card-body pt-2 pb-2">
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        Current Plan : Basic Plan</strong>
                                        </h6>
                                    <p className="section-content m-0">Your next charge is $1000 due March 8, 2018</p>
                                </div>
                                <div className="body-section mb-3">
                                    <ul>
                                        <li>400 Orders/Month</li>
                                        <li>10 GB storage</li>
                                        <li>5 Users</li>
                                        <li>Mobile App Access</li>
                                    </ul>
                                </div>
                                <button className="btn btn-success btn-sm">Upgrade Account</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4 accordion-group-two">
                        <div id="accordionUserInfo" className="mb-2">
                          <div className="card rounded-0 info-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingUserInfo">
                                <h6 className="mb-0">User Info</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseUserInfo" aria-expanded="true" aria-controls="collapseUserInfo">
                                    <i className="ic fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseUserInfo" className="collapse show" aria-labelledby="headingUserInfo" data-parent="#accordionUserInfo">
                              <div className="card-body pt-2 pb-2">
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Name</strong></h6>
                                    <p className="section-content m-0">Dagic</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        <i class="ic fa fa-address-book text-danger mx-2" aria-hidden="true"></i>
                                        Address
                                        </strong></h6>
                                    <p className="section-content m-0">
                                        A.A Bole woreda 08
                                    </p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        <i className="fa fa-phone mx-2 text-danger"></i>
                                        Contact Number
                                        </strong></h6>
                                    <p className="section-content m-0">+91 9977001100</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        Email
                                        </strong></h6>
                                    <p className="section-content m-0">dagi.zewdu.dz@gmail.com</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Website</strong></h6>
                                    <p className="section-content m-0">abcxyz.com</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        <i class="fab fa-telegram mx-2 text-info" aria-hidden="true"></i>
                                        Telegram
                                        </strong></h6>
                                    <p className="section-content m-0">
                                        http://telegram.me/@dagic
                                        </p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        <i class="fa fa-whatsapp mx-2" aria-hidden="true"></i>
                                  whatsapp
                                        </strong></h6>
                                    <p className="section-content m-0">
                                        http://whatsapp/@dagic
                                        </p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>
                                        <i class="fab fa-facebook mx-2 text-info" aria-hidden="true"></i>
                                        Face Book
                                        </strong></h6>
                                    <p className="section-content m-0">
                                        http://telegram.me/@dagic
                                        </p>
                                </div>                                            
                                <button className="btn btn-danger btn-sm">Edit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="accordionSocialStatistics">
                          <div className="card rounded-0 info-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingSocialStatistics">
                                <h6 className="mb-0">Social Statistics</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseSocialStatistics" aria-expanded="true" aria-controls="collapseSocialStatistics">
                                    <i className=" fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseSocialStatistics" className="collapse show" lass="collapse show" aria-labelledby="headingSocialStatistics" data-parent="#accordionSocialStatistics">
                              <div className="card-body pt-2 pb-2">
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Followers</strong></h6>
                                    <p className="section-content m-0">233</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Following</strong></h6>
                                    <p className="section-content m-0">114</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Posts</strong></h6>
                                    <p className="section-content m-0">100</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4 pr-0 accordion-group-three">
                        <div id="accordionMyTasks" className="mb-2">
                          <div className="card rounded-0 story-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingMyTasks">
                                <h6 className="mb-0">My Tasks</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseMyTasks" aria-expanded="true" aria-controls="collapseMyTasks">
                                    <i className="fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseMyTasks" className="collapse show" aria-labelledby="headingMyTasks" data-parent="#accordionMyTasks">
                                <div className="card-body pt-2 pb-2">
                                    <div className="body-section mb-3">
                                        <p className="m-0">Completed Pre-Orders - 90%</p>
                                        <div className="progress">
<div className="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="body-section mb-3">
                                        <p className="m-0">Completed Orders - 40%</p>
                                        <div className="progress">
<div className="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="body-section mb-3">
                                        <p className="m-0">Design New Ad - 20%</p>
                                        <div className="progress">
                                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="body-section mb-3">
                                        <p className="m-0">Conduct Feasibility Test - 60%</p>
                                        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="body-section mb-3">
                                        <p className="m-0">Conduct Domain Analysis - 80%</p>
                                        <div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

  </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div id="accordionSaleStatistics">
                          <div className="card rounded-0 info-card">
                            <div className="card-header rounded-0 pt-2 pb-2" id="headingSaleStatistics">
                                <h6 className="mb-0">Sale Statistics</h6>
                                <a className="float-right" data-toggle="collapse" data-target="#collapseSaleStatistics" aria-expanded="true" aria-controls="collapseSaleStatistics">
                                    <i className="ic fa fa-minus"></i>
                                </a>
                            </div>
                            <div id="collapseSaleStatistics" className="collapse show" lass="collapse show" aria-labelledby="headingSaleStatistics" data-parent="#accordionSaleStatistics">
                              <div className="card-body pt-2 pb-2">
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Today</strong></h6>
                                    <p className="section-content m-0">$400.00</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Last Week</strong></h6>
                                    <p className="section-content m-0">$1140.00</p>
                                </div>
                                <div className="body-section mb-3">
                                    <h6 className="section-heading mb-1"><strong>Last Month</strong></h6>
                                    <p className="section-content m-0">$8010.00</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
            </div>
            </div>
            </div>
                )
    }
}
