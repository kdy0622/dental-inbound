import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Phone, 
  CheckSquare, 
  MessageSquare, 
  LayoutDashboard,
  Menu,
  X,
  Stethoscope,
  Gamepad2,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Calendar,
  Thermometer
} from 'lucide-react';
import { ViewState } from '../types';

interface LayoutProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [weather, setWeather] = useState<{temp: number, code: number} | null>(null);

  useEffect(() => {
    // Fetch Gangnam Station weather (Lat: 37.4979, Lon: 127.0276)
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.4979&longitude=127.0276&current_weather=true&timezone=Asia%2FSeoul');
        const data = await res.json();
        if (data.current_weather) {
          setWeather({
            temp: data.current_weather.temperature,
            code: data.current_weather.weathercode
          });
        }
      } catch (e) {
        console.error("Failed to fetch weather", e);
      }
    };
    fetchWeather();
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code <= 1) return <Sun className="w-3.5 h-3.5 text-orange-500" />; // Clear
    if (code <= 3) return <Cloud className="w-3.5 h-3.5 text-slate-500" />; // Cloudy
    if (code <= 48) return <Cloud className="w-3.5 h-3.5 text-slate-400" />; // Fog
    if (code <= 67) return <CloudRain className="w-3.5 h-3.5 text-blue-500" />; // Rain
    if (code <= 77) return <CloudSnow className="w-3.5 h-3.5 text-sky-300" />; // Snow
    if (code <= 82) return <CloudRain className="w-3.5 h-3.5 text-blue-600" />; // Showers
    if (code <= 99) return <CloudLightning className="w-3.5 h-3.5 text-purple-500" />; // Thunderstorm
    return <Sun className="w-3.5 h-3.5 text-orange-500" />;
  };

  const today = new Date().toLocaleDateString('ko-KR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
  });

  const menuItems = [
    { id: 'dashboard' as ViewState, label: '대시보드', icon: LayoutDashboard },
    { id: 'quiz' as ViewState, label: '실전 퀴즈 & 학습', icon: Gamepad2 },
    { id: 'glossary' as ViewState, label: '치과 용어 사전', icon: BookOpen },
    { id: 'scripts' as ViewState, label: '상담 스크립트', icon: Phone },
    { id: 'checklist' as ViewState, label: '신환 체크리스트', icon: CheckSquare },
    { id: 'templates' as ViewState, label: '문자/예약 템플릿', icon: MessageSquare },
  ];

  const handleNavClick = (view: ViewState) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2 font-bold text-teal-600 text-lg">
          <Stethoscope className="w-6 h-6" />
          <span>젊어지는치과</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:flex items-center gap-2">
          <div className="bg-teal-600 p-1.5 rounded-lg">
             <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">젊어지는치과</h1>
            <p className="text-xs text-slate-500 font-medium">업무 매뉴얼 v1.0</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${currentView === item.id 
                  ? 'bg-teal-50 text-teal-700 font-semibold shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              CS
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">신입 상담원</p>
              <p className="text-xs text-slate-500">교육생 모드</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)] md:h-screen scroll-smooth">
        <div className="max-w-5xl mx-auto pb-20 md:pb-0">
          
          {/* Top Info Bar (Date & Weather) */}
          <div className="flex justify-end items-center gap-4 mb-6 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{today}</span>
            </div>
            {weather && (
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1">
                   <MapPin className="w-3 h-3 text-slate-400" /> 
                   <span>강남구</span>
                </div>
                <div className="w-px h-3 bg-slate-200"></div>
                <div className="flex items-center gap-1">
                  {getWeatherIcon(weather.code)}
                  <span>{weather.temp}°C</span>
                </div>
              </div>
            )}
          </div>

          {children}
        </div>
      </main>
    </div>
  );
};

// Helper for MapPin inside the component
const MapPin = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Layout;