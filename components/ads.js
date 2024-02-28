// pages/hospital.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AdsPage = () => {
  const router = useRouter();
  const handleHospitalClick = () => {
    router.push('/hospitals');
  };
  
  const handleRequestClick = () => {
    router.push('/request');
  };
  const handleAdsClick = () => {
    router.push('/ads');
  };
    // Define state or any other necessary logic here
    const dummyData = [
        {
          SN: 1,
          name: "Hospital A",
          contact: "John Doe",
          email: "john@example.com",
          type: "Hospital",
          registrationDate: "2023-01-01",
        },
        {
          SN: 2,
          name: "Clinic B",
          contact: "Jane Smith",
          email: "jane@example.com",
          type: "Clinic",
          registrationDate: "2023-02-15",
        },
        {
          SN: 3,
          name: "Hospital C",
          contact: "Alice Johnson",
          email: "alice@example.com",
          type: "Hospital",
          registrationDate: "2023-03-20",
        },
      ];
      
      const recordsPerPage = 8; // Number of records per page
      const [currentPage, setCurrentPage] = useState(1); // Current page number
    
      // Calculate total number of pages
      const totalPages = Math.ceil(dummyData.length / recordsPerPage);
    
      // Get current page data
      const currentPageData = dummyData.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
      );
    
      // Function to handle page change
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
      const handleHomePageClick = () => {
        router.push('/'); // Redirect to the home page
      }; 
    
      return (
        <div>
         <div className="top-bar">
            <h2>HealthKare.AI000000000000</h2>
            <div className="admin-info">
              <p>Hi Admin</p>
              <button>Logout</button>
            </div>
          </div>
          <div className="content">
            <nav className="vertical-navbar">
            <ul>
              <li><a onClick={() => router.push('/home')}>Dashboard</a></li>
            <li><a onClick={() => router.push('/hospitals')}>Hospitals</a></li>
            <li><a onClick={() => router.push('/request')}>Requests</a></li>
            <li><a onClick={() => router.push('/ads')}>Ads Banner</a></li>
              </ul>
            </nav>
            <div className="dashboard-data">
              {/* Your dashboard data content here */}
              {/* For example: */}
              <div className="head-data">
              <h3>Hi XYZ, Welcome to your Dashboard</h3>
              <p>This is where your dashboard data goes.</p>
              </div>
               
               <div className="boxline">
    
              <div className="box">
                <h2>120</h2>
                <img src="icon1.png" alt="Icon 1" />
                <p>Registered Hospitals</p>
              </div>
              <div className="box">
                <h2>29</h2>
                <img src="icon2.png" alt="Icon 2" />
                <p>Pending requests</p>
              </div>
              <div className="box">
                <h2>224</h2>
                <img src="icon3.png" alt="Icon 3" />
                <p>Total Doctors</p>
              </div>
              <div className="box">
                <h2>32k</h2>
                <img src="icon4.png" alt="Icon 4" />
                <p>Daily Revenue</p>
              </div>
               </div>
          <div className="topbartable">
                    <h2>NEWLY ONBOARDED</h2>
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="date">Select date</label>
                      <input type="text" id="date" defaultValue="16/12/2023" />
                    </div>
                    <div className="field">
                      <label htmlFor="sortBy">Sort by</label>
                      <select id="sortBy">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="search"> Search</label>
                      <input type="text" id="search" placeholder="Search..." />
                    </div>
                  </div>
          </div>
          
          
          {/* Your existing table */}
          <div className="table-container">
            <table>
              {/* Table headers */}
              <thead>
                <tr>
                <th>SN</th>
                  <th>Name</th>
                  <th>Point of Contact</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Map through current page data and render table rows */}
                {currentPageData.map((record, index) => (
                  <tr key={index}>
                    <td>{record.SN}</td>
                    <td>{record.name}</td>
                    <td>{record.contact}</td>
                    <td>{record.email}</td>
                    <td>
                    {/* Apply conditional class based on type */}
                    <div className={`type-oval ${record.type === 'Hospital' ? 'type-hospital' : 'type-clinic'}`}>
                      {record.type}
                    </div></td>
                    <td>{record.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
          <div className="pagination">
            Page {currentPage} of {totalPages}
          </div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &laquo; Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next &raquo;
            </button>
          </div>
        </div>
        </div>
        </div>
    
    );
};

export default AdsPage;
