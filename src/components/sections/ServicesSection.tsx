import SectionContainer from './SectionContainer';

const services = [
  {
    title: 'الصيانة الدورية',
    description: 'خدمات الصيانة الدورية لجميع أنواع السيارات وفقاً لجداول الصيانة الخاصة بكل موديل.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'إصلاح الأعطال',
    description: 'تشخيص وإصلاح الأعطال الميكانيكية والكهربائية لضمان أداء سيارتك بكفاءة.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'خدمة المساعدة على الطريق',
    description: 'مساعدة فورية في حالات الطوارئ على الطرق على مدار الساعة.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'فحص ما قبل الشراء',
    description: 'فحص شامل للسيارات المستعملة قبل الشراء لضمان سلامتها وحالتها الفنية.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'تبديل وإصلاح الإطارات',
    description: 'خدمات تبديل وإصلاح وموازنة الإطارات وفحص ضغط الهواء.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'غسيل وتنظيف السيارات',
    description: 'خدمات غسيل وتنظيف وتلميع السيارات من الداخل والخارج.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 feature-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">خدماتنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-dark-gray max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات صيانة وإصلاح السيارات لضمان أداء سيارتك بأفضل حالة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] border-b-4 border-secondary">
              <div className="mb-4">
                <div className="bg-secondary/20 p-3 rounded-full inline-block">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-dark-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-light-gray border border-light-gray rounded-lg p-6 shadow-md">
            <p className="text-primary font-bold text-lg mb-4">كيف تعمل الخدمة؟</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">١</span>
                </div>
                <p className="text-sm font-medium text-dark-gray">حدد الخدمة المطلوبة</p>
              </div>
              
              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">٢</span>
                </div>
                <p className="text-sm font-medium text-dark-gray">اختر الوقت المناسب</p>
              </div>
              
              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold">٣</span>
                </div>
                <p className="text-sm font-medium text-dark-gray">تابع حالة سيارتك</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}