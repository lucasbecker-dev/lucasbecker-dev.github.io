import { useCallback, useEffect } from 'react';

/**
 * A hook that enables smooth scrolling for internal links (hash links)
 * 
 * @param options - ScrollBehavior options
 * @returns A function to handle click events on internal links
 */
export function useSmoothScroll(options: ScrollIntoViewOptions = { behavior: 'smooth' }) {
  // Handle click events on internal links
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get the href attribute
    const href = e.currentTarget.getAttribute('href');
    
    // Only process internal hash links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      // Get the target element
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      // Scroll to the target element if it exists
      if (targetElement) {
        targetElement.scrollIntoView(options);
        
        // Update the URL without causing a page reload
        window.history.pushState(null, '', href);
      }
    }
  }, [options]);

  // Handle initial hash in URL on page load
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      
      // Scroll to the element after a short delay to ensure the page is fully loaded
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView(options);
        }, 100);
      }
    }
  }, [options]);

  return handleLinkClick;
} 