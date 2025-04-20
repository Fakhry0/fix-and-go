import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <div className="h-8 w-8 relative mr-2">
                  <Image src="/images/new-logo.png" alt="FIX & GO Logo" fill className="object-contain" />
                </div>
                <span className="logo-text text-xl">
                  <span className="fix text-secondary">FIX</span>
                  <span className="text-white">&</span>
                  <span className="go text-secondary">GO</span>
                </span>
              </div>
            </div>
            <p className="text-white opacity-80 text-sm mb-4">
              منصة متكاملة تربط أصحاب السيارات بمقدمي خدمات الصيانة والإصلاح بطريقة سهلة وشفافة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://facebook.com" className="text-white hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-secondary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white opacity-80 hover:text-secondary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white opacity-80 hover:text-secondary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white opacity-80 hover:text-secondary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#business-model" className="text-white opacity-80 hover:text-secondary transition-colors">
                  نموذج العمل
                </Link>
              </li>
              <li>
                <Link href="#market" className="text-white opacity-80 hover:text-secondary transition-colors">
                  تحليل السوق
                </Link>
              </li>
              <li>
                <Link href="#projections" className="text-white opacity-80 hover:text-secondary transition-colors">
                  التوقعات المستقبلية
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-secondary">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-white opacity-80">الصيانة الدورية</li>
              <li className="text-white opacity-80">إصلاح الأعطال</li>
              <li className="text-white opacity-80">الفحص الشامل</li>
              <li className="text-white opacity-80">قطع الغيار</li>
              <li className="text-white opacity-80">خدمة المساعدة على الطريق</li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-secondary">تواصل معنا</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <svg className="h-5 w-5 mt-1 ml-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white opacity-90">القاهرة، مصر</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 mt-1 ml-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white opacity-90">info@fixandgo.eg</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 mt-1 ml-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white opacity-90">+20123456789</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-secondary/30">
          <p className="text-center text-white opacity-80 text-sm">
            © {new Date().getFullYear()} فيكس أند جو جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}