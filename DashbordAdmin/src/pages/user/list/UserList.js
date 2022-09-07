import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Header from '../../../components/Header';
import Pagination from '../../../components/Pagination';
import PageTitle from '../../../components/PageTitle';
import UserTable from './UserTable';


//client
class UserList extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="nav_bg_color" id="wrapper">
                    <Nav />
                    <div id="page-wrapper" className="gray-bg">
                        <div className="row border-bottom">
                            <Header />
                        </div>
                        <div className="wrapper wrapper-content animated fadeInRight">
                            {/* Page title start */}
                            <PageTitle page_headline="Liste de clients" />
                            {/* Page title end */}

                            <div className="row form_bg">
                                <div className="col-lg-12">
                                    <UserTable />
                                    <Pagination />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default UserList;
