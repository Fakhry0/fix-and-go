import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero relative bg-primary text-white min-h-[80vh] flex items-center py-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#003366]/10 -skew-y-6 transform origin-top-right -z-10" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-secondary">فيكس أند جو</span>
              <span className="block mt-2 text-white">منصة صيانة السيارات الذكية</span>
            </h1>
            
            <p className="text-white text-xl mb-8 leading-relaxed opacity-90">
              الحل المتكامل الذي يربط أصحاب السيارات بمقدمي خدمات الصيانة والإصلاح بطريقة سهلة وموثوقة
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services" 
                className="btn-primary inline-block bg-secondary hover:bg-secondary/90 text-primary py-3 px-8 rounded-md font-bold transition-all duration-300 hover:transform hover:scale-105"
              >
                خدماتنا
              </Link>
              <Link 
                href="#about" 
                className="btn-secondary inline-block bg-white border-2 border-white hover:bg-white/90 text-primary py-3 px-8 rounded-md font-bold transition-all duration-300"
              >
                تعرف علينا
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image 
                src="/hero-car-service.jpg" 
                alt="خدمة صيانة السيارات" 
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
            
            {/* Stats Badges */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-4 w-40 border-2 border-secondary">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">100+</span>
                <p className="text-medium-gray font-medium mt-1">ورشة معتمدة</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-lg p-4 w-40 border-2 border-secondary">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">1000+</span>
                <p className="text-medium-gray font-medium mt-1">عميل سعيد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* تخصيص ارتفاع أكبر للقسم الرئيسي للتأكد من وجود مساحة كافية بينه وبين قسم الشركاء */}
      <div className="py-40 md:py-50"></div>
      
      {/* Trusted By Section - زيادة المسافة من أعلى بشكل أكبر وإضافة padding أعلى أكثر */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 py-6">
        <div className="container mx-auto px-4 pt-8">
          <p className="text-dark-gray text-center mb-4 font-medium text-lg">يثق بنا</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/partner1.png" alt="Partner 1" width={120} height={40} />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/partner2.png" alt="Partner 2" width={120} height={40} />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/partner3.png" alt="Partner 3" width={120} height={40} />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/partner4.png" alt="Partner 4" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}