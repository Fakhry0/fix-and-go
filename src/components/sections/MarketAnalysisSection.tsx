'use client';

import { useState } from 'react';
import SectionContainer from './SectionContainer';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Placeholder market size data (to be replaced with actual data from the PDF)
const marketSizeData = [
  { year: '2020', value: 15.2 },
  { year: '2021', value: 16.8 },
  { year: '2022', value: 18.5 },
  { year: '2023', value: 20.7 },
  { year: '2024', value: 23.1 },
  { year: '2025', value: 26.2 },
];

// Placeholder demographics data (to be replaced with actual data from the PDF)
const demographicsData = [
  { name: '18-24', value: 15 },
  { name: '25-34', value: 35 },
  { name: '35-44', value: 25 },
  { name: '45-54', value: 18 },
  { name: '55+', value: 7 },
];

// Placeholder service demand data (to be replaced with actual data from the PDF)
const serviceDemandData = [
  { name: 'الصيانة الدورية', value: 40 },
  { name: 'إصلاح الأعطال', value: 25 },
  { name: 'خدمة الطوارئ', value: 15 },
  { name: 'فحص ما قبل الشراء', value: 12 },
  { name: 'خدمات أخرى', value: 8 },
];

// تحسين الألوان للرسوم البيانية لتكون أكثر تباينًا ووضوحًا
const COLORS = ['#003366', '#FFD700', '#60a3bc', '#E74C3C', '#2ECC71', '#9B59B6'];

export default function MarketAnalysisSection() {
  const [activeTab, setActiveTab] = useState('size');

  // Function to render the appropriate chart based on the active tab
  const renderChart = () => {
    switch(activeTab) {
      case 'size':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={marketSizeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fill: '#374151' }} />
                <YAxis 
                  label={{ 
                    value: 'مليار جنيه', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#374151',
                    style: { 
                      textAnchor: 'middle',
                      fontWeight: 'bold',
                      fontSize: 14
                    }
                  }} 
                  tick={{ fill: '#374151' }} 
                />
                <Tooltip 
                  formatter={(value) => [`${value} مليار جنيه`, 'حجم السوق']} 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontWeight: 'bold',
                    fontSize: 14,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ color: '#374151' }} />
                <Bar dataKey="value" name="حجم سوق خدمات السيارات" fill="#003366" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              حجم سوق خدمات السيارات في مصر (بالمليار جنيه) من 2020 إلى 2025
            </p>
          </div>
        );
      case 'demographics':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicsData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelStyle={{ fill: '#374151', fontSize: 14, fontWeight: 'bold' }}
                >
                  {demographicsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'النسبة']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontWeight: 'bold',
                    fontSize: 14,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend 
                  wrapperStyle={{ color: '#374151' }}
                  formatter={(value) => <span style={{ color: '#374151', fontWeight: 'bold' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              التوزيع العمري لمستخدمي خدمات صيانة السيارات في مصر
            </p>
          </div>
        );
      case 'demand':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceDemandData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {serviceDemandData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'النسبة']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontWeight: 'bold',
                    fontSize: 14,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend 
                  wrapperStyle={{ color: '#374151' }} 
                  formatter={(value) => <span style={{ color: '#374151', fontWeight: 'bold' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              توزيع الطلب على خدمات صيانة السيارات في مصر حسب نوع الخدمة
            </p>
          </div>
        );
      default:
        return <div>لا توجد بيانات متاحة</div>;
    }
  };

  return (
    <SectionContainer id="market" className="bg-white py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">تحليل السوق</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-dark-gray max-w-3xl mx-auto">
            تحليل شامل لسوق خدمات صيانة وإصلاح السيارات في مصر
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">نظرة عامة</h3>
            <p className="text-dark-gray font-medium">
              يشهد سوق خدمات صيانة وإصلاح السيارات في مصر نموًا مستمرًا مدفوعًا بزيادة عدد السيارات والتغيرات في سلوك المستهلكين وتفضيلاتهم. تم تقدير حجم السوق بحوالي 18.5 مليار جنيه في عام 2022، مع توقعات بالنمو بمعدل سنوي مركب قدره 12.2% حتى عام 2027.
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex flex-wrap border-b">
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'size' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('size')}
              >
                حجم السوق
              </button>
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'demographics' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('demographics')}
              >
                الديموغرافيا
              </button>
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'demand' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('demand')}
              >
                الطلب على الخدمات
              </button>
            </div>
          </div>
          
          <div className="mt-4 mb-6">
            {renderChart()}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-primary mb-4">التحديات الرئيسية</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <h4 className="font-bold text-primary mb-2">عدم الشفافية والثقة</h4>
                <p className="text-dark-gray">يعاني السوق من نقص الشفافية في التسعير والخدمات، مما يؤدي إلى فجوة ثقة بين العملاء ومقدمي الخدمات.</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <h4 className="font-bold text-primary mb-2">تشتت الخدمات</h4>
                <p className="text-dark-gray">التشتت الكبير في الخدمات وعدم وجود معايير موحدة يجعل من الصعب على المستهلكين اتخاذ قرارات مستنيرة.</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <h4 className="font-bold text-primary mb-2">نقص الرقمنة</h4>
                <p className="text-dark-gray">تأخر القطاع في تبني الحلول الرقمية والتكنولوجية مقارنة بقطاعات أخرى من الاقتصاد.</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <h4 className="font-bold text-primary mb-2">نقص المهارات</h4>
                <p className="text-dark-gray">نقص في الفنيين المؤهلين ذوي الخبرة، خاصة مع تزايد تعقيد تكنولوجيا السيارات الحديثة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}