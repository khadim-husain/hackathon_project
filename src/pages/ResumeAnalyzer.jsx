import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Download,
  RefreshCw,
  TrendingUp,
  Award,
  Zap,
  Target,
  Eye
} from 'lucide-react';

const ResumeAnalyzer = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      handleAnalyze();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const resumeScore = 87;
  
  const insights = {
    strengths: [
      'Strong technical skills section with quantifiable achievements',
      'Clear and concise professional summary',
      'Well-structured work experience with action verbs',
      'Relevant certifications and education listed'
    ],
    improvements: [
      'Add more quantifiable metrics to achievements (e.g., "increased sales by 30%")',
      'Include keywords from job descriptions (e.g., "Agile", "CI/CD")',
      'Expand on leadership experience',
      'Add a projects section showcasing portfolio work',
      'Update contact section with LinkedIn profile'
    ],
    missingKeywords: [
      'Cloud Computing', 'DevOps', 'Microservices', 
      'REST API', 'Agile/Scrum', 'Unit Testing',
      'Problem Solving', 'Team Leadership'
    ]
  };

  const categories = [
    { name: 'Content Quality', score: 92, color: 'neon-green' },
    { name: 'Format & Structure', score: 85, color: 'neon-blue' },
    { name: 'Keywords Match', score: 78, color: 'neon-purple' },
    { name: 'Experience Impact', score: 90, color: 'neon-pink' },
    { name: 'Skills Relevance', score: 88, color: 'neon-green' }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink opacity-10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/dashboard')}
              className="w-12 h-12 glass-morph rounded-xl flex items-center justify-center hover:border-neon-purple/50 border border-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-4xl font-bold gradient-text">AI Resume Analyzer</h1>
              <p className="text-gray-400 mt-1">Get instant AI-powered feedback on your resume</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 glass-morph rounded-full">
            <Sparkles className="w-4 h-4 text-neon-purple animate-pulse" />
            <span className="text-sm">AI Scanner Active</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Panel - Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="glass-morph-strong rounded-3xl p-8 border border-white/10 sticky top-8">
              {/* Upload Area */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="w-6 h-6 text-neon-purple" />
                  <h2 className="text-2xl font-bold">Upload Resume</h2>
                </div>

                <motion.div
                  {...getRootProps()}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    relative overflow-hidden rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer
                    transition-all duration-300
                    ${isDragActive 
                      ? 'border-neon-purple bg-neon-purple/10' 
                      : 'border-white/20 hover:border-neon-purple/50 hover:bg-white/5'
                    }
                  `}
                >
                  <input {...getInputProps()} />
                  
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                      className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center"
                    >
                      <Upload className="w-10 h-10" />
                    </motion.div>
                    
                    {uploadedFile ? (
                      <div>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-neon-green" />
                          <p className="font-semibold">{uploadedFile.name}</p>
                        </div>
                        <p className="text-sm text-gray-400">
                          {(uploadedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-lg font-semibold mb-2">
                          {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                        </p>
                        <p className="text-sm text-gray-400 mb-4">or click to browse</p>
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                          <span>Supports:</span>
                          <span className="px-2 py-1 glass-morph rounded">PDF</span>
                          <span className="px-2 py-1 glass-morph rounded">DOC</span>
                          <span className="px-2 py-1 glass-morph rounded">DOCX</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Analysis Status */}
              <AnimatePresence mode="wait">
                {analyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="glass-morph rounded-2xl p-6 border border-neon-purple/30"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 border-4 border-neon-purple/30 border-t-neon-purple rounded-full animate-spin"></div>
                        <Sparkles className="absolute inset-0 m-auto w-5 h-5 text-neon-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold">AI Analysis in Progress</h3>
                        <p className="text-sm text-gray-400">This may take a few seconds...</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <AnalysisStep step="Scanning document structure" active />
                      <AnalysisStep step="Analyzing content quality" active />
                      <AnalysisStep step="Checking keyword optimization" active />
                      <AnalysisStep step="Generating recommendations" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Stats */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-2 gap-4 mt-6"
                >
                  <div className="glass-morph rounded-xl p-4 text-center border border-neon-purple/30">
                    <div className="text-3xl font-bold neon-text-purple">{resumeScore}</div>
                    <div className="text-xs text-gray-500">Overall Score</div>
                  </div>
                  <div className="glass-morph rounded-xl p-4 text-center border border-neon-green/30">
                    <div className="text-3xl font-bold neon-text-green">A+</div>
                    <div className="text-xs text-gray-500">Grade</div>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              {uploadedFile && !analyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3 mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAnalyze}
                    className="w-full py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-semibold shadow-neon-purple flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Re-analyze</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 glass-morph rounded-xl font-semibold border border-white/20 flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Upload New</span>
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Panel - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-morph-strong rounded-3xl p-12 border border-white/10 flex flex-col items-center justify-center min-h-[700px]"
                >
                  <div className="w-32 h-32 bg-neon-purple opacity-20 rounded-full blur-2xl mb-8"></div>
                  <FileText className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">No Resume Uploaded</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    Upload your resume to get instant AI-powered insights and recommendations
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Resume Score Meter */}
                  <div className="glass-morph-strong rounded-3xl p-8 border-2 border-neon-purple/30 shadow-neon-purple">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold">Resume Score</h2>
                      <Award className="w-8 h-8 text-neon-purple" />
                    </div>
                    
                    {/* Radial Gauge */}
                    <div className="relative w-64 h-64 mx-auto mb-8">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="128"
                          cy="128"
                          r="100"
                          fill="none"
                          stroke="#1C1C26"
                          strokeWidth="20"
                        />
                        <motion.circle
                          cx="128"
                          cy="128"
                          r="100"
                          fill="none"
                          stroke="url(#scoreGradient)"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeDasharray={628}
                          initial={{ strokeDashoffset: 628 }}
                          animate={{ strokeDashoffset: 628 - (628 * resumeScore) / 100 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#B026FF" />
                            <stop offset="100%" stopColor="#FF006B" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="text-6xl font-bold gradient-text"
                        >
                          {resumeScore}
                        </motion.div>
                        <div className="text-gray-400">out of 100</div>
                      </div>
                    </div>

                    {/* Category Scores */}
                    <div className="space-y-3">
                      {categories.map((cat, index) => (
                        <CategoryScore key={cat.name} category={cat} delay={index * 0.1} />
                      ))}
                    </div>
                  </div>

                  {/* AI Insights Panel */}
                  <div className="glass-morph-strong rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                        <Eye className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold">AI Insights</h2>
                    </div>

                    {/* Strengths */}
                    <div className="mb-6">
                      <h3 className="flex items-center space-x-2 text-lg font-semibold mb-4">
                        <CheckCircle2 className="w-5 h-5 text-neon-green" />
                        <span>Strengths</span>
                      </h3>
                      <div className="space-y-2">
                        {insights.strengths.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3 p-3 glass-morph rounded-xl"
                          >
                            <CheckCircle2 className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Improvements */}
                    <div className="mb-6">
                      <h3 className="flex items-center space-x-2 text-lg font-semibold mb-4">
                        <TrendingUp className="w-5 h-5 text-neon-blue" />
                        <span>Recommended Improvements</span>
                      </h3>
                      <div className="space-y-2">
                        {insights.improvements.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="flex items-start space-x-3 p-3 glass-morph rounded-xl"
                          >
                            <AlertTriangle className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Missing Keywords */}
                    <div>
                      <h3 className="flex items-center space-x-2 text-lg font-semibold mb-4">
                        <Zap className="w-5 h-5 text-neon-purple" />
                        <span>Missing Keywords</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {insights.missingKeywords.map((keyword, index) => (
                          <motion.span
                            key={keyword}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 + 0.8 }}
                            className="px-3 py-2 glass-morph rounded-lg text-sm border border-neon-purple/30 hover:border-neon-purple/60 transition-colors cursor-pointer"
                          >
                            {keyword}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Generate Better Resume CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="glass-morph-strong rounded-3xl p-8 border-2 border-neon-green/30 shadow-glow text-center"
                  >
                    <Sparkles className="w-12 h-12 text-neon-green mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Ready to Improve?</h3>
                    <p className="text-gray-400 mb-6">
                      Let our AI generate an optimized version of your resume
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 185, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue rounded-xl font-bold text-lg shadow-glow flex items-center space-x-2 mx-auto"
                    >
                      <Download className="w-5 h-5" />
                      <span>Generate Better Resume</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Analysis Step Component
const AnalysisStep = ({ step, active }) => (
  <div className="flex items-center space-x-3 text-sm">
    <div className={`w-2 h-2 rounded-full ${active ? 'bg-neon-purple animate-pulse' : 'bg-gray-600'}`}></div>
    <span className={active ? 'text-white' : 'text-gray-500'}>{step}</span>
  </div>
);

// Category Score Component
const CategoryScore = ({ category, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm text-gray-400">{category.name}</span>
      <span className="text-sm font-bold">{category.score}%</span>
    </div>
    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${category.score}%` }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        className={`h-full bg-${category.color} rounded-full`}
      />
    </div>
  </motion.div>
);

export default ResumeAnalyzer;
