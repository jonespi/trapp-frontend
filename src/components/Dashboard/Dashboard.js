import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../contexts/JobContext';
import JobCard from '../JobCard/JobCard';
import './Dashboard.css';

const Dashboard = props => {
  const { jobs } = useContext(JobContext);

  let columns = ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'];

  let jobList = columns.map(column => {
    return (
      <ul key={column}>
        <h1>{column}</h1>
        {jobs
          .filter(job => job.category.toLowerCase() === column.toLowerCase())
          .map(job => {
            return (
              <JobCard
                companyName={job.companyName}
                position={job.position}
                category={job.category}
                dateApplied={job.dateApplied}
                id={job._id}
                key={job._id}
                {...props}
              />
            );
          })}
      </ul>
    );
  });

  return (
    <div className="dashboard">
      <div className="categories">
        <ul className="category-list">{jobList}</ul>
      </div>
    </div>
  );
};

export default Dashboard;
