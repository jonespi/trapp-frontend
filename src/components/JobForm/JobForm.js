import React, { useState, useContext } from 'react';
import { JobContext } from '../../contexts/JobContext';
import { techStackArray, SegmentControl } from '../../utils/Helpers';
import CompanySearch from '../CompanySearch/CompanySearch';
import './JobForm.css';

const JobForm = props => {
  const [error, setError] = useState(null);
  const { addJob, getNow } = useContext(JobContext);
  const [logo, setLogo] = useState('');

  const redirect = () => {
    props.history.replace('/dashboard');
  };

  const handleSubmitJob = e => {
    e.preventDefault();
    const {
      company_name,
      position,
      category,
      tech_stack,
      date_applied,
      job_posting
    } = e.target;
    if (!company_name.value || !position.value) {
      setError('missing company or position');
      return;
    }

    const stack = techStackArray(tech_stack.value);
    return setError(
      addJob(
        {
          companyName: company_name.value,
          jobPosting: job_posting.value,
          position: position.value,
          category: category.value,
          techStack: stack,
          date_applied: date_applied.value,
          logo
        },
        redirect
      )
    );
  };

  const getLogo = logo => {
    setLogo(logo);
  };

  return (
    <section>
      <h1>Add Job</h1>
      <div>{error && <p className="error">{error}</p>}</div>
      <form className="post-job-form" onSubmit={handleSubmitJob}>
        <SegmentControl />
        <CompanySearch getLogo={getLogo} />
        <div className="input-field">
          <label htmlFor="job_posting">Job Posting</label>
          <input
            type="text"
            name="job_posting"
            id="job_posting"
            placeholder="http://linkedin.com"
          />
        </div>
        <div className="input-field">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Software Engineer"
          />
        </div>
        <div className="input-field">
          <label htmlFor="date_applied">Date Applied</label>
          <input
            type="date"
            max={getNow()}
            defaultValue={getNow()}
            name="date_applied"
            id="date_applied"
          />
        </div>
        <div className="input-field">
          <label htmlFor="tech_stack">Technologies</label>
          <input
            type="text"
            name="tech_stack"
            id="tech_stack"
            placeholder="React, Node, Angular, etc."
          />
        </div>
        <button className="addFormButton" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default JobForm;
