const form = document.querySelector('form');

const fullNameInput = form.querySelector('#full-name');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');
const resumeInput = form.querySelector('#resume');
const coverLetterInput = form.querySelector('#cover-letter');
const yearsOfExperienceInput = form.querySelector('#years-of-experience');
const availableStartDateInput = form.querySelector('#available-start-date');


form.addEventListener('submit', (event) => {
 
  event.preventDefault();

 
  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const resume = resumeInput.files[0];
  const coverLetter = coverLetterInput.value;
  const yearsOfExperience = yearsOfExperienceInput.value;
  const availableStartDate = availableStartDateInput.value;

  if (fullName === '') {
    alert('Please enter your full name');
    fullNameInput.focus();
    return;
  }

  if (email === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }

  if (phone === '') {
    alert('Please enter your phone number');
    phoneInput.focus();
    return;
  }

  if (resume === undefined) {
    alert('Please upload your resume');
    resumeInput.focus();
    return;
  }

  if (coverLetter === '') {
    alert('Please enter your cover letter');
    coverLetterInput.focus();
    return;
  }

  if (yearsOfExperience === '') {
    alert('Please enter your years of experience');
    yearsOfExperienceInput.focus();
    return;
  }

  if (availableStartDate === '') {
    alert('Please enter your available start date');
    availableStartDateInput.focus();
    return;
  }

 
  const formData = new FormData();

  formData.append('full-name', fullName);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('resume', resume);
  formData.append('cover-letter', coverLetter);
  formData.append('years-of-experience', yearsOfExperience);
  formData.append('available-start-date', availableStartDate);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit-job-application.php');
  xhr.send(formData);

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      alert('Thank you for submitting your job application!');
      form.reset();
    }
  };
});