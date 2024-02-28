import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HospitalComponent from './HospitalComponent'; 
import ClinicComponent from './ClinicComponent';
import styles from '../styles/HospitalPage.module.css';

const HospitalPage = () => {
  const router = useRouter();
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "John Doe",
      email: "john@example.com",
      type: "Hospital",
      registrationDate: "2023-01-01",
    },
    {
      SN: 2,
      ID: "0A123",
      name: "Clinic B",
      contact: "Jane Smith",
      email: "jane@example.com",
      type: "Clinic",
      registrationDate: "2023-02-15",
    },
    {
      SN: 3,
      ID: "0A123",
      name: "Hospital C",
      contact: "Alice Johnson",
      email: "alice@example.com",
      type: "Hospital",
      registrationDate: "2023-03-20",
    },
    {
      SN: 4,
      ID: "0A123",
      name: "Clinic D",
      contact: "Bob Brown",
      email: "bob@example.com",
      type: "Clinic",
      registrationDate: "2023-04-10",
    },
    {
      SN: 5,
      ID: "0A123",
      name: "Hospital E",
      contact: "Charlie Wilson",
      email: "charlie@example.com",
      type: "Hospital",
      registrationDate: "2023-05-05",
    },
    {
      SN: 6,
      ID: "0A123",
      name: "Clinic F",
      contact: "David Lee",
      email: "david@example.com",
      type: "Clinic",
      registrationDate: "2023-06-15",
    },
    {
      SN: 7,
      ID: "0A123",
      name: "Hospital G",
      contact: "Eva Martinez",
      email: "eva@example.com",
      type: "Hospital",
      registrationDate: "2023-07-20",
    },
    {
      SN: 8,
      ID: "0A123",
      name: "Clinic H",
      contact: "Frank Harris",
      email: "frank@example.com",
      type: "Clinic",
      registrationDate: "2023-08-10",
    },
    {
      SN: 9,
      ID: "0A123",
      name: "Hospital I",
      contact: "Grace Taylor",
      email: "grace@example.com",
      type: "Hospital",
      registrationDate: "2023-09-05",
    },
  ];  const recordsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1); 
  const [isHospitalView, setIsHospitalView] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(''); // State to hold selected date
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const totalPages = Math.ceil(dummyData.length / recordsPerPage);
  const hospitals = dummyData.filter(record => record.type === 'Hospital');
  const clinics = dummyData.filter(record => record.type === 'Clinic');
  const totalHospitalPages = Math.ceil(hospitals.length / recordsPerPage);
  const totalClinicPages = Math.ceil(clinics.length / recordsPerPage);
  const currentPageData = isHospitalView ? hospitals.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  ) : clinics.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = currentPageData.filter(record =>
        record.SN.toString().includes(searchQuery) ||
        record.name.toLowerCase().includes(searchQuery) ||
        record.contact.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
      setCurrentPage(1); 
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToggleView = (isHospital) => {
    setIsHospitalView(isHospital);
    setCurrentPage(1);
    if (isHospital) {
      setFilteredData(hospitals);
    } else {
      setFilteredData(clinics);
    }
  };



  const handleHomePageClick = () => {
    router.push('/home'); // Redirect to the home page
  }; 
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterData(searchQuery, date); // Filter data based on search query and selected date
  };
  const filterData = (query, date) => {
    let filtered = currentPageData;
    if (date) {
      filtered = filtered.filter(record => record.registrationDate === date);
    }
    filtered = filtered.filter(record =>
      record.SN.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currentPageData.filter(record =>
      record.SN.toString().includes(query) || record.ID.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  return (
    <div>
      <div className="top-bar">
        <h2>HealthKare.AI</h2>
        <div className="admin-info">
          <p>Hi Admin</p>
          <button onClick={() => router.push('/login')}>Logout</button>
        </div>
      </div>
      <div className="content">
      <nav className="vertical-navbar">
      <ul>
        <li>
          <img src="/images/dashboard.png" alt="" />
          <a onClick={() => router.push('/home')}>Dashboard</a>
        </li>
        <li>
          <img src="/images/hospital.png" alt="" />
          <a onClick={() => router.push('/hospitals')}>Hospitals</a>
        </li>
        <li>
          <img src="/images/request.png" alt="" />
          <a onClick={() => router.push('/request')}>Requests</a>
        </li>
        <li>
          <img src="/images/ads.png" alt="" />
          <a onClick={() => router.push('/ads')}>Ads Banner</a>
        </li>          
      </ul>
    </nav>
        <div className="dashboard-data">
          <div className="head-data">
            <h1>Hospital & Clinic</h1>
            <p>This is where your dashboard data goes.</p>
          </div>
          
          <nav className={styles.horizontalnavbar}>
  <ul className={styles.horizontalnavbar}>
  <li><a onClick={() => handleToggleView(true)}>Hospitals</a></li>
  <li><a onClick={() => handleToggleView(false)}>Clinics</a></li>
  </ul>
</nav>
<div className="topbartable">
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="date">Select date</label>
                      <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
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
                      <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
                    </div>
                  </div>
          </div>

          {filteredData.length > 0 ? (
            <table>
             
              <thead>
                <tr>
                  <th>SN</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Point of Contact</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
               <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.SN}</td>
                <td>{record.ID}</td>
                <td>{record.name}</td>
                <td>{record.contact}</td>
                <td>{record.email}</td>
                <td>
                  <div className={`type-oval ${record.type === 'Hospital' ? 'type-hospital' : 'type-clinic'}`}>
                    {record.type}
                  </div>
                </td>
                <td>{record.registrationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found.</p>
      )}
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

export default HospitalPage;
