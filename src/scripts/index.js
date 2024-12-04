
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.querySelectorAll('.list-item a, .title').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
document.getElementById('language-toggle').addEventListener('click', function () {
  const currentLanguage = this.getAttribute('data-language') || 'vi';
  const newLanguage = currentLanguage === 'vi' ? 'en' : 'vi';

  this.setAttribute('data-language', newLanguage);

  const translationMap = {
  vi: {
    "#slide2": "Trang chủ",
    "#slide3": "Về chúng tôi",
    "#slide4": "Dịch vụ",
    "#slide5": "Dự án",
    "#slide6": "Khách hàng",
    "#slide7": "Liên hệ",
    '.about-section .title': 'Về <span class="highlight">chúng tôi</span>',
    '.service-link': 'Dịch vụ',
    '.project-link': 'Dự án',
    '.customer-link': 'Khách hàng',
    '.contact-link': 'Liên hệ',
    '.container-slide3 .yg-team h1': 'ĐỘI NGŨ',
    '.container-slide3 .yg-team h2': 'YG',
    '.container-slide3 .yg-team p': "It's not just participation to customer<br />It needs to be an emotional experience",
    '.description-team .title-text': 'YG – YOUNG GENERATION AGENCY',
    '.description-team p:nth-of-type(1)': 'Là đơn vị chuyên cung cấp các dịch vụ tổ chức sự kiện, activation cho thương hiệu, decoration… Với đội ngũ nhân sự trẻ trung, nhiệt huyết, đầy sáng tạo, cùng những người dẫn dắt nhiều kinh nghiệm trong lĩnh vực này. Bên cạnh đó, YG không ngừng khẳng định bản sắc riêng, phát huy tư duy đổi mới đầy nhiệt huyết của sức trẻ nhằm mang đến những giá trị thật trong từng công việc mà chúng tôi thực hiện cho khách hàng.',
    '.description-team p:nth-of-type(2)': 'Hãy để YG được đồng hành và cùng tạo ra những giá trị khác biệt thông qua việc xây dựng hành trình trải nghiệm đầy cảm hứng sáng tạo từ cảm xúc.',
    '.slide4-container .slide4-description p': 'YG cung cấp dịch vụ và tối ưu những yêu cầu của khách hàng dựa trên mô hình 4C trong marketing:<br /><strong style="color : #fa8500">CUSTOMER SOLUTION - CUSTOMER COST - CONVENIENCE - COMMUNICATION</strong><br />Giải pháp cho khách hàng - Chi phí khách hàng bỏ ra - Sự tiện lợi - Truyền thông',
    '.slide4-container .box-container .box:nth-of-type(1) .box-description': 'Thi công trang trí',
    '.slide4-container .box-container .box:nth-of-type(2) .box-description': 'Tổ chức sự kiện',
    '.slide4-container .box-container .box:nth-of-type(3) .box-description': 'Hoạt động kích hoạt<br />thương mại',
    '.slide4-container .box-container .box:nth-of-type(4) .box-description': 'Tư vấn thiết kế',
    '.slide4-container .commitment p': 'Chúng tôi cam kết mang đến những giải pháp hiệu quả,<br />sáng tạo khác biệt dựa trên tinh thần hợp tác, trách nhiệm và giá trị cảm xúc.',
    '.slide6-title' : 'Khách hàng',
    '.slide6-description': 'Chúng tôi tự hào đồng hành cùng các đối tác hàng đầu trong nhiều lĩnh vực::<br /><strong>FMCG, Food & Beverages, Giáo dục, Dược & Mỹ Phẩm, Bất Động Sản, Điện Tử, Tiêu Dùng, Ô tô, Tài Chính...</strong>',
    '.inf h1': 'Liên hệ',
    '.item-contact:nth-of-type(5) span': 'Địa chỉ<br /><strong>288/10 Nguyễn Văn Đậu, Bình Thạnh, TP. Hồ Chí Minh</strong>',
    '.social-icons strong': 'Theo dõi chúng tôi', 
   '.contact-form h2': 'Thông tin liên hệ',
    '.contain-input label[for="name"]': 'Tên',
    '.contain-input input#name': 'Nhập tên của bạn',
    '.contain-input label[for="phone"]': 'Điện thoại',
    '.contain-input input#phone': 'Nhập số điện thoại',
    '.contain-input label[for="email"]': 'Email',
    '.contain-input input#email': 'Nhập địa chỉ email',
    '.contain-input label[for="message"]': 'Lời nhắn',
    '.contain-input textarea#message': 'Nhập lời nhắn của bạn',
    '.form-button': 'Gửi',
    '.slide-project': 'Dự án',


    
  },
  en: {
    "#slide2": "Home",
    "#slide3": "About Us",
    "#slide4": "Services",
    "#slide5": "Projects",
    "#slide6": "Clients",
    "#slide7": "Contact",
    '.about-section .title': 'About <span class="highlight">Us</span>',
    '.service-link': 'Services',
    '.project-link': 'Projects',
    '.customer-link': 'Clients',
    '.contact-link': 'Contact',
    '.container-slide3 .yg-team h1': 'TEAM',
    '.container-slide3 .yg-team h2': 'YG',
    '.container-slide3 .yg-team p': 'It\'s not just participation to customer<br />It needs to be an emotional experience',
    '.description-team .title-text': 'YG – YOUNG GENERATION AGENCY',
    '.description-team p:nth-of-type(1)': 'We are a unit specializing in event organization, brand activation, decoration... With a young, enthusiastic, and creative team, alongside experienced leaders in this field. Furthermore, YG continuously asserts its unique identity, fostering innovative thinking and youthful energy to bring real value in every project we carry out for our clients.',
    '.description-team p:nth-of-type(2)': 'Let YG accompany you and create unique values through the construction of an inspiring and creative experience journey driven by emotions.',
     '.slide4-container .slide4-description p': 'YG provides services and optimizes customer requirements based on the 4C marketing model:<br /><strong style="color : #fa8500">CUSTOMER SOLUTION - CUSTOMER COST - CONVENIENCE - COMMUNICATION</strong><br />Customer solutions - Customer costs - Convenience - Communication',
    '.slide4-container .box-container .box:nth-of-type(1) .box-description': 'Decoration construction',
    '.slide4-container .box-container .box:nth-of-type(2) .box-description': 'Event organization',
    '.slide4-container .box-container .box:nth-of-type(3) .box-description': 'Commercial activation activities',
    '.slide4-container .box-container .box:nth-of-type(4) .box-description': 'Design consultancy',
    '.slide4-container .commitment p': 'We are committed to providing effective, creative, and unique solutions based on cooperation, responsibility, and emotional value.',
    '.slide6-title' : 'Clients',
    '.slide6-description':'We are proud to collaborate with top partners in various fields:<br /><strong>FMCG, Food & Beverages, Education, Pharmaceuticals & Cosmetics, Real Estate, Consumer Electronics, Automotive, Finance...</strong>',
    '.inf h1': 'Contact',
    '.item-contact:nth-of-type(5) span': 'Address<br /><strong>288/10 Nguyen Van Đau, Binh Thanh, TP. Ho Chi Minh</strong>',
    '.social-icons strong': 'Follow us', 
        '.contact-form h2': 'Contact Information',
    '.contain-input label[for="name"]': 'Name',
    '.contain-input input#name': 'Enter your name',
    '.contain-input label[for="phone"]': 'Phone',
    '.contain-input input#phone': 'Enter your phone number',
    '.contain-input label[for="email"]': 'Email',
    '.contain-input input#email': 'Enter your email address',
    '.contain-input label[for="message"]': 'Message',
    '.contain-input textarea#message': 'Enter your message',
    '.form-button': 'Submit',
    '.slide-project': 'Projects'

  }
};

  document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');
    anchor.textContent = translationMap[newLanguage][href];
  });


document.querySelectorAll('nav a').forEach(anchor => {
  const href = anchor.getAttribute('href');
  anchor.textContent = translationMap[newLanguage][href] || anchor.textContent;
});

document.querySelectorAll('.about-section .title').forEach(element => {
  element.innerHTML = translationMap[newLanguage]['.about-section .title'];
});

document.querySelectorAll('.service-link').forEach(element => {
  element.textContent = translationMap[newLanguage]['.service-link'];
});

document.querySelectorAll('.project-link').forEach(element => {
  element.textContent = translationMap[newLanguage]['.project-link'];
});

document.querySelectorAll('.customer-link').forEach(element => {
  element.textContent = translationMap[newLanguage]['.customer-link'];
});

document.querySelectorAll('.contact-link').forEach(element => {
  element.textContent = translationMap[newLanguage]['.contact-link'];
});

document.querySelector('.container-slide3 .yg-team h1').textContent = translationMap[newLanguage]['.container-slide3 .yg-team h1'];
document.querySelector('.container-slide3 .yg-team h2').textContent = translationMap[newLanguage]['.container-slide3 .yg-team h2'];
document.querySelector('.container-slide3 .yg-team p').innerHTML = translationMap[newLanguage]['.container-slide3 .yg-team p'];

document.querySelector('.description-team .title-text').textContent = translationMap[newLanguage]['.description-team .title-text'];
document.querySelectorAll('.description-team p').forEach((p, index) => {
  p.textContent = translationMap[newLanguage][`.description-team p:nth-of-type(${index + 1})`];
});

document.querySelectorAll('.slide4-container .slide4-description p').forEach(element => {
  element.innerHTML = translationMap[newLanguage]['.slide4-container .slide4-description p'];
});


document.querySelector('.slide4-container .commitment p').innerHTML = translationMap[newLanguage]['.slide4-container .commitment p'];


document.querySelectorAll('.slide4-container .box').forEach((box, index) => {
  const description = box.querySelector('.box-description');
  
  const translationKey = `.slide4-container .box-container .box:nth-of-type(${index + 1}) .box-description`;

  if (translationMap[newLanguage] && translationMap[newLanguage][translationKey]) {
    description.innerHTML = translationMap[newLanguage][translationKey];
  }
});

document.querySelectorAll('.slide6-title').forEach(element=>{
  element.textContent = translationMap[newLanguage]['.slide6-title'];
});
document.querySelectorAll('.slide6-description').forEach(element => {
  element.innerHTML = translationMap[newLanguage]['.slide6-description'];
});
document.querySelectorAll('.inf h1').forEach(element=>{
  element.textContent = translationMap[newLanguage]['.inf h1'];
});

document.querySelectorAll('.item-contact:nth-of-type(5) span').forEach(element => {
  element.innerHTML = translationMap[newLanguage]['.item-contact:nth-of-type(5) span'];
});

document.querySelectorAll('.social-icons strong').forEach(element => {
  element.textContent = translationMap[newLanguage]['.social-icons strong']; 
});

  document.querySelectorAll('.contact-form h2').forEach(element => {
    element.textContent = translationMap[newLanguage]['.contact-form h2'];
  });

   document.querySelectorAll('.contain-input label[for="name"]').forEach(element => {
    element.textContent = translationMap[newLanguage]['.contain-input label[for="name"]'];
  });

  document.querySelectorAll('.contain-input input#name').forEach(element => {
    element.setAttribute('placeholder', translationMap[newLanguage]['.contain-input input#name']);
  });

  document.querySelectorAll('.contain-input label[for="phone"]').forEach(element => {
    element.textContent = translationMap[newLanguage]['.contain-input label[for="phone"]'];
  });

  document.querySelectorAll('.contain-input input#phone').forEach(element => {
    element.setAttribute('placeholder', translationMap[newLanguage]['.contain-input input#phone']);
  });

  document.querySelectorAll('.contain-input label[for="email"]').forEach(element => {
    element.textContent = translationMap[newLanguage]['.contain-input label[for="email"]'];
  });

  document.querySelectorAll('.contain-input input#email').forEach(element => {
    element.setAttribute('placeholder', translationMap[newLanguage]['.contain-input input#email']);
  });

  document.querySelectorAll('.contain-input label[for="message"]').forEach(element => {
    element.textContent = translationMap[newLanguage]['.contain-input label[for="message"]'];
  });

document.querySelectorAll('.slide-project').forEach(element => {
    element.textContent = translationMap[newLanguage]['.slide-project'];
  });

  document.querySelectorAll('.contain-input textarea#message').forEach(element => {
    element.setAttribute('placeholder', translationMap[newLanguage]['.contain-input textarea#message']);
  });

  document.querySelectorAll('.form-button').forEach(element => {
    element.textContent = translationMap[newLanguage]['.form-button'];
  });
});

