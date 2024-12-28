import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { TranscriptionPage } from './pages/TranscriptionPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <TranscriptionPage />
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;