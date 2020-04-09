import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './footer.css';

export default function Footer() {
  return (
    <div className="icons-footer">
    <ul>
      <li>
        <a href="https://www.facebook.com/MyGovIndia/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://twitter.com/MoHFW_INDIA" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://www.google.com/search?q=corona+news&rlz=1C1CHBD_enIN780IN780&sxsrf=ALeKk02R1jd7db85J0iuRjFrIHDuSydi5w:1586416482115&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjOh4f35droAhXPIbcAHbAJDUgQ_AUoAXoECA0QAw&biw=1242&bih=597" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/government-of-india" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://www.instagram.com/india/?hl=en" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://github.com/datasets/covid-19" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
      </li>
    </ul>
    </div>
  );
}
