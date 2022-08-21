import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='row pt-5 pb-3'>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fas fa-bars"></i>
              </div>
              <h2 className='font-weight-bold h4'>Fresh new layout</h2>
              <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fas fa-cloud-download"></i>
              </div>
              <h2 className='font-weight-bold h4'>Free to download</h2>
              <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fas fa-poll-h"></i>
              </div>
              <h2 className='font-weight-bold h4'>Jumbotron hero header</h2>
              <p>The heroic part of this template is the jumbotron hero header!</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fab fa-bootstrap"></i>
              </div>
              <h2 className='font-weight-bold h4'>Feature boxes</h2>
              <p>We've created some custom feature boxes using Bootstrap icons!</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fas fa-code"></i>
              </div>
              <h2 className='font-weight-bold h4'>Simple clean code</h2>
              <p>We keep our dependencies up to date and squash bugs as they come!</p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-5'>
          <div className='card bg-light rounded-lg text-center border border-0'>
            <div className='card-body p-4 pt-lg-0'>
              <div className='feature bg-primary bg-gradient rounded-lg text-white mb-4 mt-n4'>
              <i class="fas fa-check-circle"></i>
              </div>
              <h2 className='font-weight-bold h4'>A name you trust</h2>
              <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
