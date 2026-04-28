import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Briefcase, Calendar, BarChart3, Layers } from 'lucide-react';

const LandingPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Smart redirect: if already logged in, go to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Top Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Layers className="text-blue-600 w-8 h-8" />
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Job<span className="text-blue-600">Flow</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-slate-600 hover:text-blue-600 font-semibold transition-colors px-2 py-1"
          >
            Log in
          </Link>
          <Link 
            to="/register" 
            className="hidden sm:inline-flex px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center flex flex-col items-center min-h-[65vh] justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">JobFlow</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto mb-10 leading-relaxed font-medium">
          The all-in-one SaaS platform built to help you organize applications, manage interviews, and land your dream job faster.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <Link 
            to="/register" 
            className="flex-1 flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Tracking Now
          </Link>
        </div>
        <p className="mt-5 text-sm font-medium text-slate-500">No credit card required • Free forever plan available</p>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-slate-600">Powerful tools designed specifically for job seekers and recruiters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100/50">
              <Briefcase size={26} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Track Applications</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Keep all your job applications organized in one place. Monitor statuses, follow-ups, and offers with visual boards.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100/50">
              <Calendar size={26} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Manage Interviews</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Never miss a crucial meeting. Schedule, log, and prepare for your upcoming interviews with seamless tracking tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 shadow-sm border border-sky-100/50">
              <BarChart3 size={26} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics Dashboard</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Gain actionable insights into your pipeline. Visualize success rates, response times, and application volume over time.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
