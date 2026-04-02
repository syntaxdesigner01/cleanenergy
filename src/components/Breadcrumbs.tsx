import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { portfolioData } from '../data/projects';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-[var(--color-text-secondary)] mb-8">
      <Link to="/" className="hover:text-white transition-colors flex items-center">
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        let formattedName = name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        // If it's the last item and the previous path was 'portfolio', try to find the project name
        if (index > 0 && pathnames[index - 1] === 'portfolio') {
          const project = portfolioData.find(p => p.id === name);
          if (project) {
            formattedName = project.name;
          }
        }

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)]" />
            {isLast ? (
              <span className="text-white font-medium">{formattedName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-white transition-colors">
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
