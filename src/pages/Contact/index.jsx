import React from "react";
import { ContactForm, ContactTitle } from "./components";

const Contact = () => {
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                <ContactTitle />
                <ContactForm />
            </section>
            {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
        </main>
    );
};

export default Contact;
