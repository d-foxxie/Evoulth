import React, { useEffect } from 'react';
import Layout from './components/Layout';
import EvoulthPortfolio from './components/New folder/EvoulthPortfolio';
import KMKSchoolCaseStudy from './components/KMKSchoolCaseStudy';
import Quote from './components/Quote';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import Marketing from './components/Marketing';
import Privacy from './components/Privacy';
import Strategy from './components/Strategy';
import Software from './components/Software';
import AIIntegration from './components/AIIntegration';
import ERPSoftware from './components/ERPSoftware';
import SchoolManagement from './components/SchoolManagement';
import RestaurantManagement from './components/RestaurantManagement';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LeRoyalRestaurantCaseStudy from './components/LeRoyalRestaurantCaseStudy';

// Define the view types to avoid typo errors and improve type safety
type View = 'portfolio' | 'kmk' | 'leroyal' | 'quote' | 'career' | 'about' | 'contact' | 'marketing' | 'privacy' | 'strategy' | 'software' | 'ai' | 'home' | 'services' | 'erp' | 'school-management' | 'restaurant-management';

function App() {
  const [currentView, setCurrentView] = React.useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: View) => () => setCurrentView(view);

  // Common navigation props to pass to components
  const navigationProps = {
    onNavigateToHome: navigateTo('home'),
    onNavigateToQuote: navigateTo('quote'),
    onNavigateToServices: navigateTo('services'),
    onNavigateToPortfolio: navigateTo('portfolio'), // Navigates to Portfolio listing
    onNavigateToCaseStudies: navigateTo('portfolio'), // Alias for coherence
    onNavigateToCareer: navigateTo('career'),
    onNavigateToAbout: navigateTo('about'),
    onNavigateToPrivacy: navigateTo('privacy'),
    onNavigateToMarketing: navigateTo('marketing'),
    onNavigateToSoftware: navigateTo('software'),
    onNavigateToAI: navigateTo('ai'),
    onNavigateToStrategy: navigateTo('strategy'),
    onNavigateToContact: navigateTo('contact'),
    onNavigateToKMK: navigateTo('kmk'), // Add this for Portfolio and others
    onNavigateToLeRoyal: navigateTo('leroyal'),
    onNavigateToERP: navigateTo('erp'),
    onNavigateToSchoolManagement: navigateTo('school-management'),
    onNavigateToRestaurantManagement: navigateTo('restaurant-management'),
    onNavigateToMahin: navigateTo('portfolio'), // Placeholder
  };

  switch (currentView) {
    case 'home':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Home {...navigationProps} />
        </Layout>
      );
    case 'portfolio':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Portfolio {...navigationProps} />
        </Layout>
      );
    case 'services':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Services {...navigationProps} />
        </Layout>
      );
    case 'kmk':
      return (
        <Layout view={currentView} {...navigationProps}>
          <KMKSchoolCaseStudy {...navigationProps} />
        </Layout>
      );
    case 'leroyal':
      return (
        <Layout view={currentView} {...navigationProps}>
          <LeRoyalRestaurantCaseStudy {...navigationProps} />
        </Layout>
      );
    case 'quote':
      return (
        <Layout view={currentView} {...navigationProps} showCTA={false}>
          <Quote onBack={navigateTo('home')} />
        </Layout>
      );
    case 'career':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Career {...navigationProps} />
        </Layout>
      );
    case 'about':
      return (
        <Layout view={currentView} {...navigationProps}>
          <About {...navigationProps} />
        </Layout>
      );
    case 'contact':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Contact {...navigationProps} />
        </Layout>
      );
    case 'marketing':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Marketing {...navigationProps} />
        </Layout>
      );
    case 'privacy':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Privacy {...navigationProps} />
        </Layout>
      );
    case 'strategy':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Strategy {...navigationProps} />
        </Layout>
      );
    case 'software':
      return (
        <Layout view={currentView} {...navigationProps}>
          <Software {...navigationProps} />
        </Layout>
      );
    case 'ai':
      return (
        <Layout view={currentView} {...navigationProps}>
          <AIIntegration {...navigationProps} />
        </Layout>
      );
    case 'erp':
      return (
        <Layout view={currentView} {...navigationProps}>
          <ERPSoftware {...navigationProps} />
        </Layout>
      );
    case 'school-management':
      return (
        <Layout view={currentView} {...navigationProps}>
          <SchoolManagement {...navigationProps} />
        </Layout>
      );
    case 'restaurant-management':
      return (
        <Layout view={currentView} {...navigationProps}>
          <RestaurantManagement {...navigationProps} />
        </Layout>
      );
    default:
      return (
        <Layout view={currentView} {...navigationProps}>
          <Home {...navigationProps} />
        </Layout>
      );
  }
}

export default App;
