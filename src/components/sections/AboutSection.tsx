import Image from 'next/image';
import SectionContainer from './SectionContainer';

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">من نحن</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-dark-gray max-w-3xl mx-auto">
            فيكس أند جو هي منصة متكاملة تربط أصحاب السيارات بمقدمي خدمات الصيانة والإصلاح بطريقة سهلة وشفافة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">رؤيتنا</h3>
            <p className="mb-6 text-dark-gray">
              أن نصبح المنصة الرائدة في مصر لحلول صيانة وإصلاح السيارات، من خلال توفير تجربة رقمية سلسة تجمع بين الشفافية والجودة والراحة.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">مهمتنا</h3>
            <p className="mb-6 text-dark-gray">
              تبسيط وتحسين تجربة صيانة وإصلاح السيارات من خلال منصة متكاملة تربط أصحاب السيارات بمقدمي الخدمات المؤهلين، مع ضمان الشفافية والجودة في كل خطوة.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-secondary">
                <div className="text-secondary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-1">الموثوقية</h4>
                <p className="text-dark-gray text-sm">التعامل فقط مع مقدمي خدمات مؤهلين وحاصلين على تقييمات عالية</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-secondary">
                <div className="text-secondary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-1">الشفافية</h4>
                <p className="text-dark-gray text-sm">أسعار واضحة وثابتة لجميع الخدمات دون رسوم خفية</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-secondary">
                <div className="text-secondary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-1">السرعة</h4>
                <p className="text-dark-gray text-sm">حجز سريع للخدمات وتنفيذها في الوقت المحدد</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-secondary">
                <div className="text-secondary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-1">الراحة</h4>
                <p className="text-dark-gray text-sm">خدمة توصيل واستلام السيارات من وإلى المنزل أو العمل</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg h-96 md:h-auto border border-light-gray">
            <Image 
              src="/about-us-new.jpg" 
              alt="فيكس أند جو - فريق العمل"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}