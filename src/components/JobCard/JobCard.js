import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JobCard.css';

const JobCard = props => {
  const { deleteJob } = useContext(JobContext);

  const redirectToStudy = () => {
    props.history.replace(`/study/${props.id}`);
  };

  const redirectToEdit = () => {
    props.history.replace(`/edit/${props.id}`);
  };

  return (
    <li className="job-card" tabIndex="0">
      <img
        src={props.logo}
        alt={props.companyName}
        onError={e => {
          e.target.setAttribute(
            'src',
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/office-building_1f3e2.png'
          );
        }}
      />
      <div className="job-content">
        <h2>
          <a href={props.jobPosting}>{props.companyName}</a>
        </h2>
        <p className="company-title"> {props.position} </p>
        <div>
          <button
            onClick={() => redirectToStudy()}
            className="dashboard-button"
          >
            <FontAwesomeIcon icon="book" size="2x" />
          </button>
          <button onClick={() => redirectToEdit()} className="dashboard-button">
            <FontAwesomeIcon icon="edit" size="2x" />
          </button>
          <button
            onClick={() => deleteJob(props.id)}
            className="dashboard-button"
          >
            <FontAwesomeIcon icon="trash-alt" size="2x" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
