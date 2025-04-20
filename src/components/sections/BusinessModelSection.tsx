import Image from 'next/image';
import SectionContainer from './SectionContainer';

export default function BusinessModelSection() {
  return (
    <SectionContainer id="business-model">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">نموذج العمل</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-text-normal max-w-3xl mx-auto">
            كيف تعمل منصة فيكس أند جو وتحقق الإيرادات
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-primary">مصادر الإيرادات</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary">عمولة على الخدمات</h4>
                </div>
                <p className="text-text-normal">
                  نحصل على نسبة 15% من قيمة كل خدمة يتم حجزها عبر المنصة، مع توفير نظام دفع آمن وضمان جودة الخدمة للعملاء.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary">اشتراكات مميزة</h4>
                </div>
                <p className="text-text-normal">
                  نقدم اشتراكات شهرية وسنوية للعملاء المتكررين، توفر خصومات على الخدمات وميزات إضافية مثل الفحص المجاني والأولوية في الحجز.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary">بيع قطع الغيار</h4>
                </div>
                <p className="text-text-normal">
                  نقدم منصة لبيع قطع غيار السيارات الأصلية والبديلة بأسعار تنافسية، مع تحقيق هامش ربح على كل قطعة يتم بيعها.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-80 md:h-auto">
            <Image 
              src="/business-model-diagram.png"
              alt="نموذج عمل فيكس أند جو"
              width={600}
              height={450}
              className="w-full h-full object-contain rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
        
        <div className="bg-light-gray p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">كيف تعمل المنصة</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full h-14 w-14 flex items-center justify-center text-white font-bold text-xl">1</div>
              </div>
              <h4 className="font-bold text-primary mb-2">حجز الخدمة</h4>
              <p className="text-text-muted text-sm">
                يقوم العميل بتحديد نوع السيارة والخدمة المطلوبة عبر التطبيق أو الموقع
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full h-14 w-14 flex items-center justify-center text-white font-bold text-xl">2</div>
              </div>
              <h4 className="font-bold text-primary mb-2">اختيار مزود الخدمة</h4>
              <p className="text-text-muted text-sm">
                يختار العميل من بين قائمة مزودي الخدمة المعتمدين بناءً على التقييمات والسعر
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full h-14 w-14 flex items-center justify-center text-white font-bold text-xl">3</div>
              </div>
              <h4 className="font-bold text-primary mb-2">تقديم الخدمة</h4>
              <p className="text-text-muted text-sm">
                يقوم مزود الخدمة بتنفيذ الخدمة المطلوبة مع الالتزام بمعايير الجودة
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary rounded-full h-14 w-14 flex items-center justify-center text-white font-bold text-xl">4</div>
              </div>
              <h4 className="font-bold text-primary mb-2">الدفع والتقييم</h4>
              <p className="text-text-muted text-sm">
                يقوم العميل بالدفع وتقييم الخدمة، وتحصل المنصة على عمولتها
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}