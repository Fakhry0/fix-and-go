'use client';

import { useState } from 'react';
import SectionContainer from './SectionContainer';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

// Placeholder user growth data (to be replaced with actual data from the PDF)
const userGrowthData = [
  { year: '2024', users: 5000, serviceProviders: 120 },
  { year: '2025', users: 25000, serviceProviders: 250 },
  { year: '2026', users: 75000, serviceProviders: 450 },
  { year: '2027', users: 150000, serviceProviders: 650 },
  { year: '2028', users: 250000, serviceProviders: 850 },
];

// Placeholder revenue forecast data (to be replaced with actual data from the PDF)
const revenueData = [
  { year: '2024', revenue: 1.2, expenses: 2.5, profit: -1.3 },
  { year: '2025', revenue: 5.8, expenses: 4.7, profit: 1.1 },
  { year: '2026', revenue: 12.5, expenses: 8.2, profit: 4.3 },
  { year: '2027', revenue: 23.7, expenses: 14.5, profit: 9.2 },
  { year: '2028', revenue: 42.3, expenses: 23.8, profit: 18.5 },
];

// Placeholder market share data (to be replaced with actual data from the PDF)
const marketShareData = [
  { year: '2024', share: 0.5 },
  { year: '2025', share: 2.3 },
  { year: '2026', share: 5.8 },
  { year: '2027', share: 11.2 },
  { year: '2028', share: 18.5 },
];

export default function ProjectionsSection() {
  const [activeTab, setActiveTab] = useState('users');

  // Function to render the appropriate chart based on the active tab
  const renderChart = () => {
    switch(activeTab) {
      case 'users':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fill: '#374151' }} />
                <YAxis 
                  yAxisId="left" 
                  tick={{ fill: '#374151' }}
                  label={{ 
                    value: 'المستخدمين', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#374151',
                    style: { fontSize: 12, fontWeight: 'bold' } 
                  }} 
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  tick={{ fill: '#374151' }} 
                  label={{ 
                    value: 'مزودي الخدمة', 
                    angle: 90, 
                    position: 'insideRight', 
                    fill: '#374151',
                    style: { fontSize: 12, fontWeight: 'bold' } 
                  }}
                />
                <Tooltip 
                  formatter={(value, name) => [value.toLocaleString(), name === 'users' ? 'المستخدمون' : 'مزودو الخدمة']} 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontSize: 14,
                    fontWeight: 'bold',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend 
                  payload={[
                    { value: 'المستخدمون', type: 'line', color: '#003366' },
                    { value: 'مزودو الخدمة', type: 'line', color: '#FFD700' }
                  ]}
                  wrapperStyle={{ color: '#374151', fontWeight: 'bold' }}
                />
                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="users" 
                  name="المستخدمون" 
                  stroke="#003366" 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="serviceProviders" 
                  name="مزودو الخدمة" 
                  stroke="#FFD700" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              توقعات نمو المستخدمين ومقدمي الخدمات (2024-2028)
            </p>
          </div>
        );
      case 'revenue':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fill: '#374151' }} />
                <YAxis 
                  label={{ 
                    value: 'مليون جنيه', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#374151',
                    style: { fontSize: 12, fontWeight: 'bold' }
                  }} 
                  tick={{ fill: '#374151' }} 
                />
                <Tooltip 
                  formatter={(value, name) => {
                    const labels = {
                      revenue: 'الإيرادات',
                      expenses: 'المصروفات',
                      profit: 'صافي الربح'
                    };
                    return [`${value} مليون جنيه`, labels[name] || name];
                  }} 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontSize: 14,
                    fontWeight: 'bold',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend 
                  payload={[
                    { value: 'الإيرادات', type: 'square', color: '#003366' },
                    { value: 'المصروفات', type: 'square', color: '#FFD700' },
                    { value: 'صافي الربح', type: 'square', color: '#50C878' }
                  ]}
                  wrapperStyle={{ color: '#374151', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  name="الإيرادات" 
                  stroke="#003366" 
                  fill="#003366" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  name="المصروفات" 
                  stroke="#FFD700" 
                  fill="#FFD700" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="profit" 
                  name="صافي الربح" 
                  stroke="#50C878" 
                  fill="#50C878" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              التوقعات المالية (2024-2028) بالمليون جنيه
            </p>
          </div>
        );
      case 'share':
        return (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={marketShareData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fill: '#374151' }} />
                <YAxis 
                  label={{ 
                    value: 'النسبة %', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#374151',
                    style: { fontSize: 12, fontWeight: 'bold' }
                  }} 
                  tick={{ fill: '#374151' }} 
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'حصة السوق']} 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#003366', 
                    color: '#374151',
                    fontSize: 14,
                    fontWeight: 'bold',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#003366', fontWeight: 'bold' }}
                />
                <Legend 
                  wrapperStyle={{ color: '#374151', fontWeight: 'bold' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="share" 
                  name="حصة السوق" 
                  stroke="#003366" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 font-medium text-primary text-sm">
              توقعات حصة السوق (2024-2028) بالنسبة المئوية
            </p>
          </div>
        );
      default:
        return <div>لا توجد بيانات متاحة</div>;
    }
  };

  return (
    <SectionContainer id="projections" className="bg-white py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">التوقعات المستقبلية</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-dark-gray max-w-3xl mx-auto">
            نظرة مستقبلية لنمو وتطور منصة فيكس أند جو في السنوات الخمس القادمة
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-light-gray">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">الرؤية المستقبلية</h3>
            <p className="text-dark-gray font-medium">
              تتطلع فيكس أند جو إلى أن تصبح المنصة الرائدة في مجال خدمات صيانة وإصلاح السيارات في مصر، مع تحقيق حصة سوقية تصل إلى 18.5% بحلول عام 2028. نستهدف الوصول إلى أكثر من 250 ألف مستخدم نشط و850 مزود خدمة، مع تطوير خدماتنا لتشمل جميع الاحتياجات المتعلقة بالسيارات.
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex flex-wrap border-b">
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'users' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('users')}
              >
                نمو المستخدمين
              </button>
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'revenue' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('revenue')}
              >
                الإيرادات والأرباح
              </button>
              <button
                className={`py-2 px-4 font-medium mr-4 border-b-2 ${activeTab === 'share' ? 'border-secondary text-primary' : 'border-transparent text-primary/70'}`}
                onClick={() => setActiveTab('share')}
              >
                حصة السوق
              </button>
            </div>
          </div>
          
          <div className="mt-4 mb-6">
            {renderChart()}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-primary mb-4">أهداف الخمس سنوات القادمة</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary/10 p-5 rounded-lg border border-secondary/20">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-secondary/30 rounded-full h-12 w-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-center font-bold text-primary mb-2">250,000+</h4>
                <p className="text-center text-dark-gray font-medium">مستخدم نشط</p>
              </div>
              
              <div className="bg-secondary/10 p-5 rounded-lg border border-secondary/20">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-secondary/30 rounded-full h-12 w-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-center font-bold text-primary mb-2">850+</h4>
                <p className="text-center text-dark-gray font-medium">مزود خدمة</p>
              </div>
              
              <div className="bg-secondary/10 p-5 rounded-lg border border-secondary/20">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-secondary/30 rounded-full h-12 w-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-center font-bold text-primary mb-2">42.3 مليون</h4>
                <p className="text-center text-dark-gray font-medium">الإيرادات السنوية المتوقعة بالجنيه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}